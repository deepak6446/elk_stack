Medium: https://medium.com/make-it-heady/what-and-why-ekl-stack-378e6c4765b9
# Why ELK stack is so popular?

The ELK Stack is popular because it fulfills a need in the log management and analytics space. Monitoring modern applications and the IT infrastructure they are deployed on, requires a log management and analytics solution that enables engineers to overcome the challenge of monitoring what are highly distributed, dynamic and noisy environments.

Logs send from multiple distributed servers can be stored at a centralized data store that can scale as data grows, and that provides a set of tools to analyze the data.

<b>Kibana</b>: It is a visualization tool for our Elasticsearch data. It lets you query on the data, build graphs and a lots of other fancy stuffs.

<b>Elasticsearch</b>: This is a database which will store our logs from Logstash.

<b>Logstash</b>: This will accept logs from Filebeat, processes/transforms it and feeds the output to Elasticsearch for indexing.

# How To Get started with ELK on MAC OS

## Contents

1. [Requirements](#requirements)
    * [JAVA 8](#Java-8)
    * [Homebrew 2.X.X](#Homebrew-2.X.X)

2. [ELK Installation](#ELK_Installtion)
    * Elasticsearch </br>
    brew install elasticsearch 
    * Logstash </br>
    brew install logstash
    * Kibana </br>
    brew install kibana
3. Start Services 
  * Elasticsearch </br> 
  brew services start elasticsearch
  * Logstash </br>
  brew services start logstash
  * Kibana </br>
  brew services start kibana

4. Configure Kibana to start visualizing logs.
  open Kibana configuration file and uncomment server.port and elasticsearch.hosts for kibana to start listening on 5601
  ```console
  $ sudo vim /usr/local/etc/kibana/kibana.yml
  ```
5. open http://localhost:5601/status. 
   if you have successfully installed ELK stack you should see kibana status as green

5. Sending data to view in Kibana
  * Follow [file](https://github.com/deepak6446/elk_stack/blob/master/logstash_config/syslog.conf) to configure logs files to send log to elasticsearch for visualization.
  * copy [file](https://github.com/deepak6446/elk_stack/blob/master/logstash_config/syslog.conf) to ```/usr/local/Cellar/logstash/7.6.1/libexec/config/syslog.conf```
  * Verify your configuration file 
  ```/usr/local/Cellar/logstash/7.6.1/bin/logstash --config.test_and_exit -f  /usr/local/Cellar/logstash/7.6.1/libexec/config/syslog.conf```

6. Restart service
  * brew services restart logstash
  or
  * specify config file and start  
  ```/usr/local/Cellar/logstash/7.6.1/bin/logstash -f /usr/local/Cellar/logstash/7.6.1/libexec/config/syslog.conf```


'''''''
change filebeat config file in 
/usr/local/etc/filebeat/filebeat.yml
brew services restart filebeat
'''''

we can now view syslogs in Kibana with the index provided in [file](https://github.com/deepak6446/elk_stack/blob/master/logstash.conf)

## LoadTesting with jmeter

1. run cleanup script

2. run nodejs server in cluster mode </br>
```NODE_ENV=production ./node_modules/.bin/pm2 start src/index.js -i 10```

3. load test with jmeter file </br>
```jmeterRequest.jmx```

# Create new index
Management --> index pattern --> create index

# APM tool
> http://localhost:5601/app/kibana#/home/tutorial/apm?_g=() </br>
> sends metric every 30 sec

1. download on mac </br>
curl -L -O https://artifacts.elastic.co/downloads/apm-server/apm-server-6.8.7-darwin-x86_64.tar.gz </br>
location: /Users/deepakpoojari/apm-server-6.8.7-darwin-x86_64

2. Test config </br>
./apm-server test config

3. Start APM Server </br>
./apm-server -e

4. Configure the agent </br>
```
require('elastic-apm-node').start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: '',

  // Use if APM Server requires a token
  secretToken: '',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: ''
})

```






## TODO 
1. Dockerised container for ELK stack.
2. Using Kafka for log collection on load.
