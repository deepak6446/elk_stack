# https://computingforgeeks.com/how-to-install-elk-stack-on-centos-fedora/

sudo yum -y install java-openjdk-devel java-openjdk

cat <<EOF | sudo tee /etc/yum.repos.d/elasticsearch.repo
[elasticsearch-7.x]
name=Elasticsearch repository for 7.x packages
baseurl=https://artifacts.elastic.co/packages/7.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md
EOF

sudo rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch

sudo yum clean all
sudo yum makecache

sudo yum -y install elasticsearch
rpm -qi elasticsearch 

sudo systemctl enable --now elasticsearch.service 
curl http://127.0.0.1:9200 

sudo yum -y install kibana
# chnage server ip to 0.0.0.0
sudo systemctl enable --now kibana

sudo yum -y install logstash

systemctl list-unit-files | grep enabled

curl -L -O https://artifacts.elastic.co/downloads/apm-server/apm-server-7.7.0-x86_64.rpm
sudo rpm -vi apm-server-7.7.0-x86_64.rpm

sudo lsof -i -P -n | grep LISTEN

curl -L -O https://artifacts.elastic.co/downloads/apm-server/apm-server-7.7.0-x86_64.rpm
sudo rpm -vi apm-server-7.7.0-x86_64.rpm
sudo service apm-server start

