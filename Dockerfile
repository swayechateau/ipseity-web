# Use the official Go image as the base image
FROM golang:latest AS build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code to the container
COPY . .

RUN go mod download

# Build the Go application
RUN CGO_ENABLED=0 GOOS=linux go build -o /ipseity-web

# Run the tests in the container
FROM build-stage AS run-test-stage
RUN go test -v ./...

FROM alpine:latest AS build-release-stage

USER 1000:1000

COPY --from=build-stage /ipseity-web /app/ipseity-web

RUN mkdir /app/templates && \
    mkdir /app/data \
    chmod 777 /app/data \
    chown -R 1000:1000 /app

WORKDIR /app

COPY ./templates ./templates

# Expose the port your Go application is listening on
EXPOSE 8080



ENTRYPOINT ["/app/ipseity-web"]