pipeline {
    agent any

    environment {
        IMAGE_NAME = "node-docker-app"
        IMAGE_TAG  = "latest"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Verify Tools') {
            steps {
                bat 'docker -v'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME%:%IMAGE_TAG% ."
            }
        }
    }

    post {
        success {
            echo "✅ Docker image built successfully"
        }
        failure {
            echo "❌ Jenkins build failed"
        }
    }
}
