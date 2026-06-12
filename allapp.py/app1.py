from flask import Flask, request, redirect, url_for, session, Response

app = Flask(__name__)
app.secret_key = "super secret key"
#  homepage loginpage
@app.route("/" , methods = ["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        if username == "admin" and password == "123456":
            session["username"] = username
            return redirect(url_for("welcome"))
        else:
            return Response("Invalid username or password", mimetype="text/plain")

    return '''
        <h2>Login Page</h2>
        <form method="post">
        username: <input type="text" name="username"><br>
        password: <input type="password" name="password"><br>
        <input type="submit" value="Login">
        </form>
    '''
@app.route("/welcome")
def welcome():
    if "username" in session:
        return f'''
            <h2>Welcome, {session["username"]}!</h2>
            <a href="{url_for("logout")}">Logout</a>
        '''
        return redirect(url_for("login"))

@app.route("/logout")
def logout():
    session.pop("username", None)
    return redirect(url_for("login"))