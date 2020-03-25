Why ELK stack is so popular?

The ELK Stack is popular because it fulfills a need in the log management and analytics space. Monitoring modern applications and the IT infrastructure they are deployed on requires a log management and analytics solution that enables engineers to overcome the challenge of monitoring what are highly distributed, dynamic and noisy environments.

Logs send from multiple distributed servers can be stored at a centralized data store that can scale as data grows, and that provides a set of tools to analyze the data.

Kibana: It is a visualization tool for our Elasticsearch data. It lets you query on the data, build graphs and a lots of other fancy stuffs.

Elasticsearch: This is a database which will store our logs from Logstash.

Logstash: This will accept logs from Filebeat, processes/transforms it and feeds the output to Elasticsearch for indexing.

# How To Get started with ELK on MAC OS

Requirnments
1. Java 8
2. Homebrew 2.X.X

ELK Installtion
1. Elasticsearch
brew install elasticsearch 
2. Logstash
brew install logstash
3. Kibana
brew install kibana

Starting the required services with Homebrew
1. Elasticsearch 
brew services start elasticsearch
2. Logstash
brew services start logstash
3. Kibana
brew services start kibana

Configure Kibana to start visulizing logs.
open Kibana configuration file and uncomment server.port and elasticsearch.url for kibana to start listening on 5601
sudo vi /usr/local/etc/kibana/kibana.yml

Sending data to view in Kibana
follow file[link] to configure logs files to send log to elasticsearch for visualization.
copy file[link] to /etc/logstash/conf.d/syslog.conf 
Restart service: brew services restart logstash

we can now view syslogs in Kibana with the index provided in file[link]
# TODO 
Dockerised container for ELK stack.
Using Kafka for log collection on load.
