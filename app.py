from flask import Flask, render_template, url_for, send_file

app = Flask(__name__)

js = 'project1.js'

@app.route("/")  
def home():
	return render_template("Modular_Strategy_3.html")



if __name__ == "__main__":
    app.run(debug=False)
