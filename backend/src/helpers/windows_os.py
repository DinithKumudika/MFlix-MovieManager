import ctypes
from psutil import users
from ctypes import wintypes

def get_windows_users():
    user_list = users()
    for user in user_list:
        print(user)
        username = user.name
        print(f"username {username}")

def validate_windows_password(username, password):
    advapi32 = ctypes.windll.advapi32
    # Convert username and password to wide character strings
    username_wide = ctypes.c_wchar_p(username)
    password_wide = ctypes.c_wchar_p(password)
    
     # Call the LogonUserW function from advapi32.dll
    token = wintypes.HANDLE()
    result = advapi32.LogonUserW(
        username_wide,          # username
        None,                   # domain (use None for local accounts)
        password_wide,          # password
        wintypes.DWORD(2),      # LOGON32_LOGON_NETWORK_CLEARTEXT
        wintypes.DWORD(0),      # LOGON32_PROVIDER_DEFAULT
        ctypes.byref(token)     # receive the token
    )
    
    # Check if LogonUserW was successful
    if result == 1:
        # Authentication successful
        advapi32.CloseHandle(token)
        return True
    else:
        # Authentication failed
        return False
    
# if validate_windows_password("dinit", "19991218"):
#     print("Authentication successfull")
# else:
#     print("Authentication failed")
    