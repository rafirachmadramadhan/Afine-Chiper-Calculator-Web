from flask import Flask, render_template

app = Flask(__name__)

@app.route("/" , methods=['GET'])
def home():
    return render_template("index.html")
    
# @app.route("/salvador")
# def salvador():
#     return "Hello, Salvador"
    
if __name__ == "__main__":
    app.run(debug=True)
