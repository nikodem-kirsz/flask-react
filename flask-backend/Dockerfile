FROM python:3.9

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

EXPOSE ${BACKEND_PORT}

CMD [ "python", "server.py" ]