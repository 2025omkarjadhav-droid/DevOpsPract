pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                echo 'Installing backend dependencies...'
                dir('server') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Backend') {
            steps {
                echo 'Starting backend server...'
                dir('server') {
                    sh 'node server.js &'
                }
            }
        }

        stage('Build Success') {
            steps {
                echo 'Build Success!'
            }
        }
    }
}
