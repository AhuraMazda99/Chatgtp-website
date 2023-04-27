from flask import Flask, render_template, jsonify, request
import openai
import os
import requests

app = Flask(__name__)

# Load your OpenAI API key from an environment variable or secret management service
openai.api_key = ""

@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/chat')
def chat():
    return render_template('chat.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    data = request.json
    message = data['message']

    response = openai.Completion.create(
    engine="text-davinci-002",
    prompt=message,
    max_tokens=150,
    n=1,
    stop=None,
    temperature=1
)

    
    return jsonify(response=response['choices'][0]['text'].strip())

if __name__ == '__main__':
    app.run(debug=True)
