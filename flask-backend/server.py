from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/api/endpoint1')
def endpoint1():
    return jsonify(message="Hello from Flask!")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.getenv('FLASK_BACKEND_PORT'), debug=os.getenv('DEBUG'))