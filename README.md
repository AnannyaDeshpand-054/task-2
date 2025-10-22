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

**3. Create a Dockerfile:**
 - This file will crete a image of our application

   ```
   
   ```
 


**3. Create a job in jenkins:**
 - Create a job
 - provide it a name (jenkins pipeline)
 - check git project and provide the url
 - check GitHub hook trigger for GITScm polling (automatically triggers chage in git repo)
 - code the pipeline
