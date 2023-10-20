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
RUN go test -v ./...

# Create the release stage
FROM alpine:latest AS build-release-stage

# Set the user and group to 1000:1000
USER 1000:1000

# Copy the built binary to /app/ipseity-web
COPY --from=build-stage /ipseity-web /app/ipseity-web

# Create the /app/data directory and set permissions
USER root
RUN mkdir -p /app/data
RUN chown -R 1000:1000 /app/data
# RUN chmod -R 777:777 /app/data

# Set the working directory
# USER 1000:1000
WORKDIR /app

# Copy templates to the image
COPY ./templates ./templates

# Expose the port your Go application is listening on
EXPOSE 8080

# Specify the entry point
ENTRYPOINT ["/app/ipseity-web"]
