import os
from flask import Flask, request, make_response
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
    image = request.files.get('file')
    if image:
        storage = LocalStorage('local', None, app.config.upload)
        response = make_response(storage.save(image, secure_filename(image.filename)))
        response.headers['X-Footie-Version'] = '0.10'
        response.headers['X-Footie-Filename'] = os.path.join(app.config.upload.get('STORAGE_LOCAL_ROOT'), secure_filename(image.filename))
        return response


if __name__ == '__main__':
    app.run(debug=True)
