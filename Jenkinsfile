pipeline {
    agent any

    environment {
        IMAGE_NAME = "node-docker-app"
        APP_VERSION = "1.0"
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
                    if (fileExists('VERSION')) {
                        env.APP_VERSION = readFile('VERSION').trim()
                    } else {
                        error "VERSION file not found. Please add VERSION file."
                    }
                }
                echo "📦 Docker Image Version: ${APP_VERSION}"
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
            echo "✅ Docker image built: %IMAGE_NAME%:%APP_VERSION%"
        }
        failure {
            echo "❌ Jenkins build failed"
        }
    }
}
