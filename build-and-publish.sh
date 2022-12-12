docker buildx create --name build-tiny-pg
docker buildx use build-tiny-pg
### docker buildx build --platform linux/arm64,linux/amd64,linux/arm/v8,linux/arm/v7 -t burggraf/tiny-pg --push .
docker buildx build --platform linux/arm64,linux/amd64 -t burggraf/tiny-pg --push .

