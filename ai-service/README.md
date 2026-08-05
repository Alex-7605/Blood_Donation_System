# Blood Donation AI Service

## Install

```bash
pip install -r requirements.txt
```

## Train Every Model

```bash
python train_all_models.py
```

## Run AI Service

```bash
uvicorn app:app --reload
```

## Health Check

```
GET http://localhost:8000/health
```

## API Documentation

```
http://localhost:8000/docs
```

This service powers:

- Donor Recommendation
- Blood Demand Prediction
- Fraud Detection