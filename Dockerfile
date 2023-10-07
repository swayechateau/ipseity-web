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

COPY --from=build-stage /ipseity-web /ipseity-web

WORKDIR /

COPY ./templates ./templates

# Expose the port your Go application is listening on
EXPOSE 8080

USER 1000:1000

ENTRYPOINT ["/ipseity-web"]