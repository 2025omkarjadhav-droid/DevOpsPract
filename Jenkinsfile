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
                dir('server') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Backend') {
            steps {
                dir('server') {
                    sh 'node server.js &'
                    sleep 3
                }
            }
        }

        stage('Done') {
            steps {
                echo 'Build Success!'
            }
        }
    }
}
