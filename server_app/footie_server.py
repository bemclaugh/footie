import os
from flask import Flask, request, make_response, jsonify
from flask_cors import cross_origin
from werkzeug.utils import secure_filename
from flask_storage.local import LocalStorage


app = Flask(__name__)
app.config.from_object(__name__)
app.config.upload = {
    'STORAGE_LOCAL_ROOT': '/tmp',
    'STORAGE_LOCAL_URL': '/working/'
}


@app.route('/upload/', methods=['POST'])
@cross_origin(headers=['Content-Type']) # Send Access-Control-Allow-Headers
def upload():
    for image in request.files.getlist('file'):
        storage = LocalStorage('local', None, app.config.upload)
        image_path = storage.save(image, secure_filename(image.filename))
        if image_path:
            return jsonify(filename=image_path)


if __name__ == '__main__':
    app.run(debug=True)
