from flask import Flask, jsonify, request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # This allows your frontend to make requests to your backend

@app.route('/api/choice', methods=['GET'])
def get_choice():
    choice = 'left' if random.random() < 0.5 else 'right'
    return jsonify({'choice': choice})

@app.route('/api/guess', methods=['POST'])
def make_guess():
    data = request.json
    user_guess = data.get('guess')
    correct_choice = 'left' if random.random() < 0.5 else 'right'
    is_correct = user_guess == correct_choice
    return jsonify({
        'correct_choice': correct_choice,
        'is_correct': is_correct
    })

if __name__ == '__main__':
    app.run(debug=True)