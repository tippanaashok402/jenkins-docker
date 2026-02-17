pipeline {
    agent any

    environment {
        IMAGE_NAME = "node-docker-app"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Read Version') {
            steps {
                script {
                    env.APP_VERSION = readFile('VERSION').trim()
                }
                echo "📦 Building Docker Image Version: ${APP_VERSION}"
            }
        }

        stage('Verify Tools') {
            steps {
                bat 'docker -v'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME%:%APP_VERSION% ."
            }
        }
    }

    post {
        success {
            echo "✅ Docker image built successfully"
            echo "📦 Image: %IMAGE_NAME%:%APP_VERSION%"
        }
        failure {
            echo "❌ Jenkins build failed"
        }
    }
}
