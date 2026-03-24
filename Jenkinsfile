pipeline {
    agent any

    stages {
      stage('install') {
        step { 
             sh 'npm install'
        }
      }
     stage('test') {
       step {
            sh 'npm test'
           }
         }
       }
     }
