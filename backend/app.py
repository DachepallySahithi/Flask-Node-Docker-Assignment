from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    # name = request.form.get('name')
    # email = request.form.get('email')

    print("Received Data")
    print("Name:", data.get("name"))
    print("Email:", data.get("email"))

    return jsonify({
        "message": "Data received successfully",
        # "name": name,
        # "email": email
        "name": data.get("name"),
        "email": data.get("email")
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)