from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Servir arquivos estáticos manualmente se necessário
@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory(os.path.join(app.root_path, 'static'), filename)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
