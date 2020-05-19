
sudo yum  update
sudo yum install git -y
git clone https://github.com/deepak6446/elk_stack.git
cd elk_stack/
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install nodejs
node --version
npm --version
cd nodejs_server/
npm i
# sh elk-installtion.sh 
sudo wget  -qO /home/ec2-user/em "https://artifacts.elastic.co/GPG-KEY-elasticsearch" sudo  rpm --import /home/ec2-user/em
sudo yum update
sudo yum install apt-transport-https
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
sudo yum check-update
curl -fsSL https://get.docker.com/ | sh
sudo yum update -y
sudo yum install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user