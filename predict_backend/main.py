from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
import pandas as pd
from datetime import datetime
import traceback
import os

## Initialize FastAPI app
app = FastAPI(title="Car Price Predictor API")


## Allow CORS for React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

## Load models and encoders
with open("./models/one_hot_encoder.pkl", "rb") as f:
    one_hot_encoded_data = pickle.load(f)
with open("./models/label_encoders.pkl", "rb") as f:
    label_encoders = pickle.load(f)
with open("./models/scaler.pkl", "rb") as f:
    scaler = pickle.load(f)
with open("./models/LRModel.pkl", "rb") as f:
    LRModel = pickle.load(f)
with open("./models/RFModel.pkl", "rb") as f:
    RFModel = pickle.load(f)


class car_schema(BaseModel):
    Levy: int
    Manufacturer: str
    Model: str
    Prod_year: int
    Category: str
    Leather_interior: str
    Fuel_type: str
    Engine_volume: float
    Mileage: int
    Gear_box_type: str
    Drive_wheels: str
    Wheel: str
    Color: str
    Airbags: int


@app.get("/")
def read_root():
    return {
        "status": "online",
        "message": "Car Price Prediction API is running!",
        "supervisor": "Hossam Ibrahim (Agentic AI | Computer Vision | ML | DL)",
    }

@app.post("/predict")
def predict(car_input: car_schema):
    try:
        ## Convert input to DataFrame
        data = pd.DataFrame([car_input.dict()])

        ## Add Age
        data["Age"] = datetime.now().year - data["Prod_year"]
        data = data.drop(columns=["Prod_year"])
        ## Rename columns from car_schema to match the preprocessing pipeline
        column_rename_map = {
            "Leather_interior": "Leather interior",
            "Gear_box_type": "Gear box type",
            "Drive_wheels": "Drive wheels",
            "Engine_volume": "Engine volume",
            "Fuel_type": "Fuel type",
        }
        data.rename(columns=column_rename_map, inplace=True)

        ## One-hot Encoding Categorical Columns
        one_hot_encoding_cols = [
            "Leather interior",
            "Gear box type",
            "Drive wheels",
            "Wheel",
        ]
        ## One-hot encoding for the new data
        encoded_data = one_hot_encoded_data.transform(data[one_hot_encoding_cols])
        encoded_columns = one_hot_encoded_data.get_feature_names_out(
            one_hot_encoding_cols
        )
        encoded_data_df = pd.DataFrame(
            encoded_data, columns=encoded_columns, index=data.index
        )
        ## Concatenate the one-hot encoded data and drop original columns
        data = pd.concat([data, encoded_data_df], axis=1)
        data.drop(columns=one_hot_encoding_cols, inplace=True)

        ## Label Encode Categorical Columns
        label_encoding_cols = [
            "Manufacturer",
            "Model",
            "Category",
            "Color",
            "Fuel type",
        ]
        ## Apply label encoding
        for column in label_encoding_cols:
            le = label_encoders[column]
            #! For Unseen Categorical
            data[column] = data[column].apply(
                lambda x: x if x in le.classes_ else le.classes_[0]
            )
            data[column] = le.transform(data[column])

        ## Scale column)
        data = scaler.transform(data)

        ## Make Prediction
        prediction = RFModel.predict(data)
        return {
            "status": "success",
            "predicted_price": round(float(prediction[0]), 2),
            "currency": "USD",
        }

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=400, detail=str(e))
