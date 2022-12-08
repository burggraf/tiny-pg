docker buildx create --name mybuilder3
docker buildx use mybuilder3
### docker buildx build --platform linux/arm64,linux/amd64,linux/arm/v8,linux/arm/v7 -t burggraf/alpine-postgres --push .
docker buildx build --platform linux/arm64,linux/amd64 -t burggraf/alpine-postgres --push .

