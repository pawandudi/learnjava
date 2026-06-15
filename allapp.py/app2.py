from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def login():
    return render_template("login.html")

@app.route("/submit", methods=["POST"])
def submit():
    username = request.form.get("username")
    password = request.form.get("password")

    # if username == "admin" and password == "password":
    #     return render_template("welcome.html", username=username)

    valid_users = {
        "admin": "password",
        "user1": "pass123",
        "user2": "abc456"
    }
    if username in valid_users and password == valid_users[username]:
        return render_template("welcome.html", name=username)

    else:
        return "invalid credentials"