# task-2
this is my second project for implementing CI/CD pipeline using AWS service and Jenkins

⚙️ How It Works 

**1. Create a ubuntu EC2 instance:**
- provide name to your instance (jenkins demo)
- select AMI ubuntu (operating system)
- select key pair
- slect VPC
- configure security group (keep ports 80,22,8000,8080,443 open)
- configure storage capacity (15GiB - 20 GiB)
- launch instance

![WhatsApp Image 2025-10-22 at 10 08 43_34cb9d20](https://github.com/user-attachments/assets/7b32e62f-59bc-49d5-b3d6-5112ef1d830a)


 **2. Install jenkind and Docker in EC2:**
 - SSH into your instance
 - Install java
 - Install jenkins

```
sudo apt install -y fontconfig openjdk-17-jdk
java --version
curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee \
    /usr/share/keyrings/jenkins-keyring.asc > /dev/null

echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
    https://pkg.jenkins.io/debian binary/ | \
    sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt update -y
sudo apt install -y jenkins
sudo systemctl enable jenkins
sudo systemctl start jenkins
sudo systemctl status jenkins
```
 - install Docker
   ```
    sudo apt-get install docker.io
    sudo usermod -aG $USER && jenkins
    newgrp decker
    docker ps
   ```
![WhatsApp Image 2025-10-22 at 10 08 27_16fdc672](https://github.com/user-attachments/assets/38cfbc51-d2bc-4125-abfd-e8b54081c9f9)

![WhatsApp Image 2025-10-22 at 10 10 59_79484766](https://github.com/user-attachments/assets/08943f45-0acc-4822-99ed-339a2d80e9b1)

![WhatsApp Image 2025-10-22 at 10 37 29_20d40a32](https://github.com/user-attachments/assets/090ceb8c-3ee9-4d2f-8b4f-ebfd6c63ec6f)

![WhatsApp Image 2025-10-22 at 10 12 44_10e9065d](https://github.com/user-attachments/assets/fbc4e07f-b8f3-48b4-8a30-6d55e6cf26b6)

![WhatsApp Image 2025-10-22 at 10 15 47_fc1d759d](https://github.com/user-attachments/assets/684d1acd-11c4-4715-b908-1a613a26c68e)


**3. Create a Dockerfile:**
 - This file will crete a image of our application

   ```
   # Use official Nginx image as the base
   FROM nginx:alpine

   # Set working directory inside container
   WORKDIR /usr/share/nginx/html
 
   # Remove the default Nginx website files
   RUN rm -rf ./*

   # Copy your static website files into the container
   COPY . .

   # Expose port 80 (Nginx default)
   EXPOSE 80

   # Start Nginx server
   CMD ["nginx", "-g", "daemon off;"]
   ```
 

**4. Create a job in jenkins:**
 - Create a job
 - provide it a name (jenkins pipeline)
 - check git project and provide the url
 - check GitHub hook trigger for GITScm polling (automatically triggers chage in git repo)
 - code the pipeline

![WhatsApp Image 2025-10-22 at 10 45 00_2866127d](https://github.com/user-attachments/assets/19d5d056-a28a-4950-a406-c8f44a46e8a3)

**5. code a pipeline:**
- create stages
    1.code
    2.build
    3.deploy
```
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
```
- save and build the pipeline

**step code**
This step will clone the code from give url and branch into the EC2 instance.

![WhatsApp Image 2025-10-22 at 10 48 24_717f84f2](https://github.com/user-attachments/assets/13d19a48-1053-4887-902c-89bea6fa2a29)

![WhatsApp Image 2025-10-22 at 11 02 19_6105a1f4](https://github.com/user-attachments/assets/d219b939-a710-4789-9860-0adb426aa2e8)

  
**step build**
This step will build a image using Dockerfile 

![WhatsApp Image 2025-10-22 at 11 04 24_2dec32cc](https://github.com/user-attachments/assets/8102511e-6964-46e3-b341-67642b6ca66f)

![WhatsApp Image 2025-10-22 at 11 05 20_c68b8c46](https://github.com/user-attachments/assets/e3c55fb8-8a96-4ab9-97f8-18d57088a6e0)

**step Deploy**
  - This step will create containers using image that has been created (using build command)
      {docker command "docker run -d -p 80:80 bakery-app:latest"  }
  - This step will finally deploy application in EC2 and will be visible at its public IP address.

![WhatsApp Image 2025-10-22 at 11 08 03_ce65475f](https://github.com/user-attachments/assets/481420dd-863e-4b86-9907-3e6aba754176)

![WhatsApp Image 2025-10-22 at 11 07 44_63456e39](https://github.com/user-attachments/assets/4e40962d-1d93-4cb6-85c3-a4ac31edfcaa)


OUR PIPELINE WORKS PERFECTLY!

👩‍💻 Author

Anannya Deshpande
Cloud & DevOps Enthusiast | AWS Certified Cloud Practitioner
📧 Email: anannyamd1809@gmail.com




  
