from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config.config import settings

app = FastAPI(
    title=settings.APP_NAME, 
    version=settings.API_VERSION
)

origins = [
     'http://localhost:3000'
]

app.add_middleware(
     CORSMiddleware,
     allow_origins = origins, 
     allow_credentials = True, 
     allow_methods = ["*"],
     allow_headers = ["*"]
)

@app.get('/', tags=["Root"])
async def home():
    return {"message": "MFlix API v1.0"}

