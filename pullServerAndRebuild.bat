@echo off

:: Load sensitive information from .env.local
for /f "delims=" %%a in ('type .env.local') do set %%a


:: Construct the SSH command with multiple commands
set ssh_cmd=ssh -p %REMOTE_PORT% %REMOTE_USER%@%REMOTE_HOST% "cd %REMOTE_FOLDER% ; git pull ; pnpm run build ; pm2 restart MNEPODPISKU"

:: Execute the SSH command
%ssh_cmd%