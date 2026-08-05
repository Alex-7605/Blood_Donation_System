# Blood Donation Management System

A full-stack platform that brings together donor-facing workflows, blood-bank operations, and data-informed decision support. The application pairs a React client and Node.js server with a dedicated FastAPI service for donor recommendations, blood-demand prediction, and fraud detection.

## Architecture

| Component | Technology | Responsibility |
| --- | --- | --- |
| Client | React, Vite | User interface and application flows |
| API server | Node.js | Core application endpoints and service integration |
| AI service | FastAPI, scikit-learn | Recommendations, predictions, and fraud analysis |

## Key capabilities

- Donor and blood-donation management workflows
- ML-assisted donor recommendations
- Blood-demand forecasting from training data
- Fraud-detection checks exposed through the AI service
- Interactive frontend visualisations and responsive UI components

## Run locally

Install dependencies and start each service in a separate terminal.

```bash
# Client
cd client
npm install
npm run dev
```

```bash
# Core API
cd server
npm install
npm run dev
```

```bash
# AI service
cd ai-service
python -m pip install -r requirements.txt
uvicorn app:app --reload
```

The AI API exposes interactive documentation at `http://localhost:8000/docs`. See [ai-service/README.md](ai-service/README.md) for training and health-check commands.

## Repository layout

```text
client/       React/Vite web application
server/       Node.js application server
ai-service/   FastAPI models, training data, and prediction endpoints
```

## Notes

The included datasets and trained-model workflow are intended for project demonstration and development. Validate data quality, model performance, privacy requirements, and clinical/business rules before using the system in a production setting.
