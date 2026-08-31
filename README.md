# Flask Node Docker Assignment

## Project Description

This project is a simple full-stack web application consisting of:

* A Node.js and Express frontend
* A Flask backend
* Docker containers for both applications
* Docker Compose for managing the containers
* AWS EC2 for deployment

The application contains a Student Registration Form where a user enters their name and email address.

The request flow is:

```text
User
  ↓
Node.js / Express Frontend
  ↓
Flask Backend
  ↓
Data Processing
  ↓
Success Response
```

---

## Technologies Used

### Frontend

* Node.js
* Express.js
* HTML
* Axios

### Backend

* Python
* Flask

### DevOps / Deployment

* Docker
* Docker Compose
* AWS EC2
* Git

---

## Project Architecture

```text
                    User Browser
                         |
                         | Port 3000
                         ↓
                  AWS EC2 Instance
                         |
                         ↓
              Node.js / Express Container
                         |
                         | POST /submit
                         | Docker Network
                         ↓
                  Flask Container
                         |
                         ↓
                  JSON Response
```

### Application Flow

1. The user opens the Student Registration Form.
2. The user enters their name and email.
3. The form sends a POST request to the Node.js/Express application.
4. The Express server forwards the request to the Flask backend.
5. Flask processes the received data.
6. Flask returns a successful JSON response.
7. The frontend displays the success page.

---

## Project Structure

```text
Flask-Node-Docker-Assignment/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── success.html
│   │
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
│
└── README.md
```

---

# How to Run Locally

## Prerequisites

Make sure the following software is installed:

* Git
* Docker
* Docker Compose

---

## Clone the Repository

```bash
git clone <YOUR-GITHUB-REPOSITORY-URL>
```

Move into the project directory:

```bash
cd Flask-Node-Docker-Assignment
```

---

# Run Using Docker Compose

Build and start the containers:

```bash
docker-compose up --build
```

To run the containers in detached mode:

```bash
docker-compose up --build -d
```

---

## Check Running Containers

```bash
docker ps
```

You should see two containers:

```text
flask_backend
node_frontend
```

---

## Stop the Application

```bash
docker-compose down
```

---

# Application URLs

### Frontend

```text
http://localhost:3000
```

### Backend

The Flask backend runs on:

```text
http://localhost:5000
```

The backend endpoint is:

```text
POST /submit
```

---

# Docker Commands

## Check Docker Version

```bash
docker --version
```

## Check Docker Compose Version

```bash
docker-compose --version
```

## Build and Start Containers

```bash
sudo docker-compose up --build -d
```

## Check Running Containers

```bash
sudo docker ps
```

## Check All Containers

```bash
sudo docker ps -a
```

## Check Frontend Logs

```bash
sudo docker logs node_frontend
```

## Check Backend Logs

```bash
sudo docker logs flask_backend
```

## Stop Containers

```bash
sudo docker-compose down
```

---

# AWS EC2 Deployment

The application was deployed on an AWS EC2 instance running Amazon Linux.

## Steps Followed

### 1. Launch EC2 Instance

An Amazon Linux EC2 instance was created.

### 2. Connect to EC2

SSH was used to connect to the EC2 instance.

```bash
ssh -i "flask-express-key.pem" ec2-user@<EC2-PUBLIC-IP>
```

### 3. Install Git

```bash
sudo dnf install git -y
```

### 4. Clone the Project

```bash
git clone <YOUR-GITHUB-REPOSITORY-URL>
```

Move into the project:

```bash
cd Flask-Node-Docker-Assignment
```

### 5. Install and Start Docker

Docker was installed and started on the EC2 instance.

Check Docker:

```bash
docker --version
```

Check Docker status:

```bash
sudo systemctl status docker
```

---

### 6. Run the Application

Build and start the containers:

```bash
sudo docker-compose up --build -d
```

Verify the containers:

```bash
sudo docker ps
```

---

# EC2 Security Group Configuration

The following inbound ports were configured:

| Service  | Port | Purpose             |
| -------- | ---: | ------------------- |
| SSH      |   22 | Connect to EC2      |
| HTTP     |   80 | Web traffic         |
| Frontend | 3000 | Node.js application |
| Backend  | 5000 | Flask application   |

---

# Access the Deployed Application

The application can be accessed using:

```text
http://<EC2-PUBLIC-IP>:3000
```

---

# Successful Deployment Verification

The deployment was verified using Docker logs.

Frontend:

```bash
sudo docker logs node_frontend
```

Backend:

```bash
sudo docker logs flask_backend
```

The backend successfully received the POST request and returned:

```text
HTTP 200
```

---

# Author

Sahithi
