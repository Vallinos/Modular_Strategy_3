from flask import Flask, render_template, url_for, send_file
from waitress import serve

app = Flask(__name__)

js = 'project1.js'

@app.route("/")  
def home():
	return render_template("Modular_Strategy_3.html")



if __name__ == "__main__":
    serve(app, host='0.0.0.0', port=50100, debug=True)