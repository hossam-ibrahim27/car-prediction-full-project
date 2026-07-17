# 🚗 Car Price Prediction — End-to-End Machine Learning System

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-19.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)

An end-to-end Machine Learning web application designed to predict used car prices based on vehicle features. This repository contains the full pipeline, from data analysis and model training to containerized backend deployment and interactive frontend UI.

---

## 🔗 Live Services & Links

* 🌐 **Frontend Application:** [https://car-prediction-reactjs.vercel.app](https://car-prediction-reactjs.vercel.app/)
* ⚙️ **Backend API & Docs:** [Swagger Documentation](https://car-prediction-backend-production.up.railway.app/docs)
* 🤖 **Hugging Face Model Hub:** [https://huggingface.co/hossam-ibrahim27](https://huggingface.co/Hossam-27/car-prediction-ml-model/tree/main)
* 🎥 **Project Showcase Video:** [https://youtu.be/6d9KLD29iec](https://youtu.be/6d9KLD29iec) 

---

## 📁 Repository Structure

```text
CAR_PREDICTION/
├── 📁 data/                  # Raw and preprocessed car datasets (.csv)
├── 📁 notebooks/             # Exploratory Data Analysis (EDA) and Training Notebooks
├── 📁 predict_backend/       # FastAPI Backend service & Docker setup
│   ├── 📁 models/            # Saved machine learning artifacts & pipelines
│   ├── Dockerfile            # Containerization configuration
│   ├── main.py               # API endpoints & prediction logic
│   ├── requirements.txt      # Python dependencies
│   └── upload_huggingface.py # Automated script to push trained models to Hugging Face
├── 📁 predict-frontend/      # React + TypeScript + Vite UI Application
└── 📁 scripts/              # Helper utility scripts for data pipeline
 ```

## 🛠️ Tech Stack & Architecture
 
```text
  ┌──────────────────────┐        ┌──────────────────────┐        ┌──────────────────────┐
  │  Machine Learning    │ ────>  │   FastAPI Backend    │ ────>  │  React + TS Frontend │
  │  (EDA & Model Train) │        │(Docker / HuggingFace)│        │   (Vite + Tailwind)  │
  └──────────────────────┘        └──────────────────────┘        └──────────────────────┘
 ```

 ### 1. Machine Learning & Data Pipeline (`/notebooks`, `/data`)
 * **Data Exploration:** Conducted using `Pandas`, `NumPy`, `Matplotlib`, and `Seaborn` for deep feature distribution and correlation analysis.
 * **Feature Engineering:** Applied Target Encoding, One-Hot Encoding, feature scaling, and robust missing value imputation.
 * **Model Training:** Evaluated regression algorithms for accurate price estimation with complete pipeline serialization.
 
 ### 2. Backend Service (`/predict_backend`)
 * **Framework:** **FastAPI** for high-performance, asynchronous REST API endpoints.
 * **Model Hosting:** Integrated with **Hugging Face Hub** for cloud model artifact retrieval.
 * **Containerization:** Fully **Dockerized** container setup ensuring reproducible server deployment.

 ### 3. Frontend Interface (`/predict-frontend`)
* **Framework & Build:** **React 18** with **TypeScript** powered by **Vite** for fast performance and strong type safety.
* **Styling:** **Tailwind CSS** for a responsive, modern visual UI.
* **API Integration:** **Axios** client handling real-time asynchronous requests to prediction services.
  
---

## 🔒 License & Intellectual Property

Copyright (c) 2026 Hossam Ibrahim. All Rights Reserved.

This repository and its source code are published for showcase, code review, and portfolio evaluation purposes only. No part of this software may be copied, modified, distributed, or used for commercial purposes without prior written permission from the owner.

 
