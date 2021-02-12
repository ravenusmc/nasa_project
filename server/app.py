from flask import Flask, jsonify, request
from flask_cors import CORS

# importing code that I wrote
from data import *

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app)

# This route will get the data for the EVA Count Chart
@app.route('/getEvaCountData', methods=['GET', 'POST'])
def route_EVA_count_data():
    if request.method == 'POST':
        data_obj = Data()
        eva_count_data = data_obj.eva_count_by_year()
        return jsonify(eva_count_data)

# This route will get the data for the EVA Vehicle Information
@app.route('/getEvaVehicleInformation', methods=['GET', 'POST'])
def route_EVA_vehicle_data():
    if request.method == 'POST':
        data_obj = Data()
        post_data = request.get_json()
        eva_data_information = data_obj.eva_vehicle_information(post_data)
        return jsonify(eva_data_information)

if __name__ == '__main__':
    app.run()