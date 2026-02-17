pipeline {
    agent any

    environment {
        IMAGE_NAME = "node-docker-app"
        IMAGE_TAG  = "${BUILD_NUMBER}"
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
                bat """
                    docker build -t %IMAGE_NAME%:%IMAGE_TAG% .
                    #docker tag %IMAGE_NAME%:%IMAGE_TAG% %IMAGE_NAME%:latest
                """
            }
        }
    }

    post {
        success {
            echo "✅ Docker image built successfully"
            echo "📦 Image versions:"
            echo "   - %IMAGE_NAME%:%IMAGE_TAG%"
            echo "   - %IMAGE_NAME%:latest"
        }
        failure {
            echo "❌ Jenkins build failed"
        }
    }
}
