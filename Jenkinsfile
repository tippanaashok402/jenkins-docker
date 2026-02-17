pipeline {
    agent any

    parameters {
        string(
            name: 'APP_VERSION',
            defaultValue: '1.0.0',
            description: 'Docker image version (Semantic Versioning: MAJOR.MINOR.PATCH)'
        )
    }

    environment {
        IMAGE_NAME = "node-docker-app"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Validate Version') {
            steps {
                script {
                    if (!(params.APP_VERSION ==~ /\d+\.\d+\.\d+/)) {
                        error "Invalid version format. Use MAJOR.MINOR.PATCH (e.g. 1.2.3)"
                    }
                }
                echo "📦 Using Docker Image Version: ${params.APP_VERSION}"
            }
        }

        stage('Verify Tools') {
            steps {
                bat 'docker -v'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME%:${params.APP_VERSION} ."
            }
        }
    }

    post {
        success {
            echo "✅ Docker image built: %IMAGE_NAME%:${params.APP_VERSION}"
        }
        failure {
            echo "❌ Jenkins build failed"
        }
    }
}
