from flask import Flask, render_template

app = Flask(__name__)

@app.route('/', methods=["GET"])
def index():
  return render_template('index.html', music="Primeiro Áudio Apresentação.mp3")


if __name__ == '__main__':
    app.run(debug=True, port=8080)

