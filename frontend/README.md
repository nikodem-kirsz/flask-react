### List the running containers and get the container ID of the frontend
docker ps

docker network ls

### Inspect the network to see if the "backend" service is listed
docker network inspect flask-react_default

### Enter the frontend container and try to ping the "backend" service
docker exec -it bc4ec14cae98 /bin/bash
ping backend
