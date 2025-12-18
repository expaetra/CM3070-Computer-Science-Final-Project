# CM3070 Computer Science Final Project

## Project Overview 
This project is a prototype web application that applies natural language processing (NLP)
techniques to academic research papers in PDF format.

The system allows users to upload PDF documents, automatically extract the abstract section,
and predict the computer science discipline of the paper.

This project is intended as a prototype and proof of concept, rather than a production ready system.


## Technologies Used

### Backend
- Python
- FastAPI 
- PyPDF (for PDF text extraction) 
- Scikit-learn (TF-IDF vectorization and logistic regression) 

### Frontend
- React (Vite) 
- JavaScript
- HTML / CSS 

### Tools
- Git and GitHub for version control 


## How the System Works

1. The user uploads one or more PDF files through the web interface
2. The backend extracts raw text from each PDF file
3. A rule-based method is used to locate and extract the abstract section
4. The extracted text is converted into numerical features using TF-IDF
5. A logistic regression model predicts the discipline
6. The results are returned to the frontend and displayed to the user



## How to Run the Project

This project has a backend (FastAPI) and a frontend (React). Both must be running.

### Backend:
Open a terminal and go to the backend folder: cd backend

Install the required Python packages: pip install fastapi uvicorn pypdf scikit-learn

Start the backend server: uvicorn app:app --reload

The backend runs at http://127.0.0.1:8000

### Frontend:

Open a second terminal and go to the frontend folder: cd frontend

Install dependencies: npm install

Start the frontend: npm run dev

Open the frontend in your browser at http://localhost:5173
