from pydantic import BaseModel

class TokenResponse(BaseModel):
    access_toke: str
    token_type: str
    toke_header: str