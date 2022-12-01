docker buildx create --name mybuilder
docker buildx use mybuilder
docker buildx build --platform linux/arm64,linux/amd64,linux/arm/v8,linux/arm/v7 -t burggraf/alpine-postgres --push .