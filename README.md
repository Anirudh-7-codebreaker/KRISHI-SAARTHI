# Krishi Saarthi

Krishi Saarthi is an AI-powered AgriTech platform aimed at making agricultural information more accessible through an intelligent and user-friendly interface. The project is being built with a modern full-stack architecture and is designed to support AI-powered features such as Retrieval-Augmented Generation (RAG) in the future.

## Tech Stack

**Frontend**
- React
- TypeScript
- Tailwind CSS
- Vite

**Backend**
- FastAPI
- Python
- SQLAlchemy
- Pydantic

**Database**
- PostgreSQL

**Planned AI Features**
- RAG (Retrieval-Augmented Generation)
- Vector Database (FAISS / pgvector)
- LLM Integration

## Running the Backend Locally

1. Navigate to the backend directory.

```bash
cd backend
```

2. Create and activate a virtual environment.

```bash
python -m venv venv
venv\Scripts\activate
```

3. Install the required dependencies.

```bash
pip install -r requirements.txt
```

4. Create a `.env` file and configure your PostgreSQL database connection.

```env
DATABASE_URL=postgresql://username:password@localhost:5432/krishi_saarthi
```

5. Start the FastAPI development server.

```bash
uvicorn main:app --reload
```

If `main.py` is inside an `app` folder:

```bash
uvicorn app.main:app --reload
```

The backend will be available at `http://127.0.0.1:8000`.

The interactive API documentation can be accessed at:
- `http://127.0.0.1:8000/docs`
- `http://127.0.0.1:8000/redoc`

