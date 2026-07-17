import pandas as pd
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score
import Data_Preprocessing as dp
import pickle

def saving_encoders(data_encoders , path):
    with open(path, 'wb') as f:
        pickle.dump(data_encoders, f)
        
def feature_engineer_categoric(data):
    one_hot_encoding_cols = ["Leather interior","Gear box type","Drive wheels","Wheel"]
    ## One-hot encoder
    # data = pd.get_dummies(data=data, columns=one_hot_encoding_cols)
    oh_encoder = OneHotEncoder(sparse_output=False, handle_unknown='ignore')
    oh_encoded_train = oh_encoder.fit_transform(data[one_hot_encoding_cols])
    oh_encoded_columns = oh_encoder.get_feature_names_out(one_hot_encoding_cols)
    oh_encoded_train_df = pd.DataFrame(oh_encoded_train, columns=oh_encoded_columns, index=data.index)
    data = pd.concat([data, oh_encoded_train_df], axis=1)
    data.drop(columns=one_hot_encoding_cols, inplace=True)
    ## Save the encoder for future use
    saving_encoders(data_encoders = oh_encoder , path='models/one_hot_encoder.pkl')
    
    ## Label encoder
    label_encoding_cols = ["Manufacturer", "Model", "Category", "Color", "Fuel type"]
    label_encoders = {}
    for column in label_encoding_cols:
        label_encoder = LabelEncoder()
        data[column] = label_encoder.fit_transform(data[column])
        label_encoders[column] = label_encoder    
    ## Save the encoder for future use
    saving_encoders(data_encoders = label_encoders , path='models/label_encoders.pkl')
    
    return data

def splitting_scaling_variables(data:pd.DataFrame):
    y = data["Price"]
    X = data.drop(["Price"], inplace=False, axis=1)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.15, random_state=42 ,shuffle=True)
    
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    
    ## Save to model
    saving_encoders(path='models/scaler.pkl',data_encoders= scaler)
    
    return X_train,X_test ,y_train,y_test

def LRModel(X_train,X_test ,y_train,y_test):
    LRModel = LinearRegression()
    LRModel.fit(X=X_train, y=y_train)
    y_predict = LRModel.predict(X_test)
    rmse = mean_squared_error(y_test, y_predict)
    r2 = r2_score(y_test,y_predict)
    print(f"Root Mean Squared Value Of Linear Regression Model: {rmse}")
    print(f"R^2 Of Linear Regression Model: {r2}")
    saving_encoders(data_encoders=LRModel , path="models/LRModel.pkl")
    
def RFModel(X_train,X_test ,y_train,y_test):  
    RFModel = RandomForestRegressor()
    RFModel.fit(X_train , y_train)
    y_predict = RFModel.predict(X_test)
    rmse = mean_squared_error(y_test, y_predict)
    r2 = r2_score(y_test,y_predict)
    print(f"Root Mean Squared Value of Random Forest Model: {rmse}")
    print(f"R^2 of Random Forest Model: {r2}")
    saving_encoders(data_encoders=RFModel , path="models/RFModel.pkl")
#@ **********************************************************************
def training_model():
    ## import data and Data_Preprocessing 
    data = pd.read_csv("data/car_price_prediction.csv")
    print("Successfully importing Data")
    data = dp.preprocessing_pipeline(data)
    print("Successfully importing Data_Preprocessing")
    
    ## Feature Engineering within Categorical Values  
    data = feature_engineer_categoric(data)
    print("Successfully Feature Engineering")
    
    ## Splitting and scaling Variables
    X_train,X_test ,y_train,y_test = splitting_scaling_variables(data)
    print("Successfully Splitting and scaling Variables")
    
    ## Linear Regression Model
    print("\n--- Training Linear Regression ---")
    LRModel(X_train,X_test ,y_train,y_test)
    ## Linear Regression Model
    print("\n--- Training Random Forest ---")
    RFModel(X_train,X_test ,y_train,y_test)


if __name__ == "__main__":
    training_model()