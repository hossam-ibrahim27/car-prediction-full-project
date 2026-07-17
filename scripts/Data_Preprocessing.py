import pandas as pd

def replace_categorical_to_numerical(data):
    data["Mileage"] = pd.to_numeric(
        data["Mileage"].str.replace("km","",))
    data["Engine volume"] = pd.to_numeric(
        data["Engine volume"].str.replace("Turbo","",))
    data["Levy"] = pd.to_numeric(
        data["Levy"].str.replace("-","0",))
    return data

def outlier_deletion(data, col):
    q1 = data[col].quantile(0.25)
    q3 = data[col].quantile(0.75)
    IQR = q3 - q1
    max_band = q3 + 1.5 * IQR
    min_band = q1 - 1.5 * IQR
    return data[(data[col] >= min_band) & (data[col] <= max_band)]


def feature_engineer_numerical(data):
    data["Age"] = pd.Timestamp.now().year - data["Prod. year"]
    return data


# @ *************************************************************
def preprocessing_pipeline(data: pd.DataFrame):
    print("Starting Processing..............")
    print(f"Shape Before processing = {data.shape}")
    print("Drop Duplicating..............")
    data.drop_duplicates(inplace=True)
    ## Categorical Features
    # @ 1. Convert Categorical to Numerical
    print("Replacing Categorical Values.............")
    data = replace_categorical_to_numerical(data)

    ## Numerical Features
    # @ 1. Outlier remove
    print(f"Before deleting outliers Shape = {data.shape}")
    numeric_feat = [
        var for var in data.columns if data[var].dtypes in ["int64", "float64"]
    ]
    for col in numeric_feat:
        data = outlier_deletion(data, col)
    print(f"After deleting outliers Shape = {data.shape}")
    # @ 2. Feature Engineering within Numerical Values
    print("Feature Engineering within Numerical Values...........")
    data = feature_engineer_numerical(data)
    # @ 3. Dropped
    print("Dropping Columns.......")
    data = data.drop(["ID", "Doors", "Prod. year", "Cylinders"], axis=1)
    print(f"Shape After processing = {data.shape}")

    return data
