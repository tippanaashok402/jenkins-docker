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
                sh 'node -v'
                sh 'docker -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Run Container (Optional)') {
            steps {
                sh '''
                docker rm -f node-docker-app || true
                docker run -d -p 3000:3000 --name node-docker-app node-docker-app:latest
                '''
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
        cleanup {
            sh 'docker ps -a'
        }
    }
}
