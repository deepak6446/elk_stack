# add Elastic’s signing key
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -

sudo apt-get update
sudo apt-get install apt-transport-https

# add repository definition
echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list

echo "deb https://artifacts.elastic.co/packages/oss-7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list

# install Elasticsearch
sudo apt-get update
sudo apt-get install elasticsearch

# verify config and restart server 
# sudo vim /etc/elasticsearch/elasticsearch.yml

# network.host: "localhost"
# http.port:9200
# cluster.initial_master_nodes: ["<PrivateIP"]
# sudo service elasticsearch start
# verify installtion
# curl http://localhost:9200

# Installing Logstash
sudo apt-get install default-jre
java -version
sudo apt-get install logstash

# Installing Kibana
sudo apt-get install kibana

# Kibana configuration file at: /etc/kibana/kibana.yml, 
# server.port: 5601
# elasticsearch.url: "http://localhost:9200"

# sudo service kibana start