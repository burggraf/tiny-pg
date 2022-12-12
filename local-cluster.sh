echo "create the environment 5011.env file for the primary server"
echo "HOST_TYPE=PRIMARY" > 5011.env
echo "REPUSER_PASSWORD=password" >> 5011.env
echo "POSTGRES_PASSWORD=password" >> 5011.env
echo "start the primary server"
./tiny-pg-detached.sh 5011

echo "create the environment 5012.env file for the first secondary server"
echo "HOST_TYPE=SECONDARY" > 5012.env
echo "REPUSER_PASSWORD=password" >> 5012.env
echo "POSTGRES_PASSWORD=password" >> 5012.env
echo "HOST_IP=`ipconfig getifaddr en0`" >> 5012.env
echo "HOST_PORT=5011" >> 5012.env

echo "wait 10 seconds for the primary server to start up"
sleep 10
echo "start the first secondary servers"
./tiny-pg-detached.sh 5012

echo "create the environment 5013.env file for the second secondary server"
echo "HOST_TYPE=SECONDARY" > 5013.env
echo "REPUSER_PASSWORD=password" >> 5013.env
echo "POSTGRES_PASSWORD=password" >> 5013.env
echo "HOST_IP=`ipconfig getifaddr en0`" >> 5013.env
echo "HOST_PORT=5011" >> 5013.env

echo "start the second secondary servers"
./tiny-pg-detached.sh 5013
