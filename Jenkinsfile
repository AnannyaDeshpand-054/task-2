pipeline{
    agent any
    stages{
        stage("code"){
            steps{
                git url:"https://github.com/AnannyaDeshpand-054/task-2.git",branch:"main"
                echo "code cloned successfully!"
            }
        }
        stage("build"){
            steps{
                sh "docker build -t bakery-app:latest ."
                 echo "Image build successfully!"
            }
        }
        stage("deploy"){
            steps{
                sh "docker run -d -p 80:80 bakery-app:latest"
                 echo "code deployed successfully!"
            }
        }
        
    }
}
