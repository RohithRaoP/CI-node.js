pipeline {
    agent any

    stages {
      stage('install') {
        step { 
             sh 'npm install'
        }
      }
   stages {
     stage('test') {
       step {
            sh 'npm test'
           }
         }
       }
     }
