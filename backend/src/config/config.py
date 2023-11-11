from pydantic import BaseSettings
from dotenv import dotenv_values

env = dotenv_values('../.env')

class CommonSettings(BaseSettings):
    API_VERSION_STR: str = "api/v1"
    API_VERSION: str = "1.0.0"
    APP_NAME: str = env.get('PROJECT_NAME')
    DEBUG_MODE: bool = True

    class Config:
        case_sensitive=True

class ServerSettings(BaseSettings):
     HOST: str = env.get('HOST')
     PORT: int = env.get('PORT')
     
     class Config:
          case_sensitive = True


class Settings(CommonSettings, ServerSettings):
     pass


settings = Settings()