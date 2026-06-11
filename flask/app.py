from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, Flask!'

@app.route('/submit', methods=['POST', 'GET'])
def submit():
    if request.method == 'POST':
        return 'Form submitted successfully!'
    else:        
        return 'Please submit the form using POST method.'