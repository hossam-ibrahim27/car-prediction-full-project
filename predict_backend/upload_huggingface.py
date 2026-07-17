from huggingface_hub import login, upload_folder


login()


upload_folder(folder_path=".", repo_id="Hossam-27/car-prediction-ml-model", repo_type="model")