curl -XDELETE localhost:9200/index-elk-stack-test-server
pm2 kill
rm ./nodejs_server/log/.*.json
rm ./nodejs_server/log/*
