import os
from flask import Flask, render_template, url_for

app = Flask(__name__)

# Caminho correto dos áudios
path_music = "audio/"

@app.route('/', methods=["GET"])
def index():
    # Usando url_for para garantir que os arquivos sejam carregados corretamente
    music_url = url_for('static', filename=path_music + "primeiro_audio_apresentacao.mp3")
    return render_template('index.html', music=music_url)

if __name__ == '__main__':
    app.run(debug=True, port=8080)
