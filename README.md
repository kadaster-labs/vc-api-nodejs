# solid-vc-api
NodeJS server for issuing Verifiable Credentials


### Running the server
To run the server, run:

```
npm start
```

To view the Swagger UI interface:

```
open http://localhost:8080/docs
```

Or, run using Docker:
```
docker build -t vc-api-nodejs:latest .
docker run -d -p 8080:8080 -it --rm vc-api-nodejs:latest
```

This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.

## Swagger generated server

### Overview
This server was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project. By using the [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification) from a remote server, you can easily generate a server stub.

This repo was generated as follows:
```
curl -X POST \
  https://generator3.swagger.io/api/generate \
  -H 'content-type: application/json' \
  -d '{
  "specURL" : "https://raw.githubusercontent.com/w3c-ccg/vc-api/main/issuer.yml",
  "lang" : "nodejs-server",
  "type" : "SERVER",
  "codegenVersion" : "V3"
}' --output vc-api-nodejs.zip
```
From: https://github.com/swagger-api/swagger-codegen/tree/3.0.0#online-generators
