## python version
FROM python:3.10-slim

## main directory
WORKDIR /code

## Copy Libraries and installed it 
COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

## copy models folder and main.py file | requirements.txt | Dockerfile
COPY . /code

## give hugging face Authorization 
RUN chmod -R 777 /code

## Running in port 7860 (default port for hugging face)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]