from flask import Flask, jsonify
from flask_cors import CORS
from flask import request
import random

app = Flask(__name__)
CORS(app)

data = [
    {'id' : '3452', 'title' : 'Hello World', 'text' : 'hello world'},
    {'id' : '1234', 'title' : 'Code Snippet', 'text' : 'Console.log("hello world")'},
    {'id' : '3234', 'title' : 'Code Snippet 2', 'text' : 'public class Person{\n\tvoid display(){\n\t\System.out.println("hello");\t\n} \n}'},
    {'id' : '7085', 'title' : 'Hello World', 'text' : 'hello world'},
]

@app.route('/api/data')
def get_all():
    return jsonify(results=data)

@app.route('/api/data/<id>')
def get_one(id):
    record = None
    for d in data:
        if d['id'] == id:
            record = d

    return jsonify(record)

@app.route('/api/data/create',methods=['POST'])
def post_data():
    print('data:', request.json)
    new_data = request.json
    new_data['id'] = random.randint(1000,10000)
    data.append(new_data)
    return jsonify(ok=True)


if __name__ == "__main__":
    app.run(debug=True)