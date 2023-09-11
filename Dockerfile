# Use an official Elixir runtime as a parent image
FROM elixir:latest

# Set environment variables for Phoenix
ENV MIX_ENV=prod

# Install Hex and rebar for managing Elixir dependencies
RUN mix local.hex --force && \
    mix local.rebar --force

# Install Node.js (required for Phoenix asset compilation)
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Install inotify-tools for filesystem monitoring (optional but recommended for development)
RUN apt-get install -y inotify-tools

# Create a directory for your Phoenix app
RUN mkdir /app
WORKDIR /app

# Copy and install dependencies (mix.exs and mix.lock)
COPY mix.exs mix.lock ./
RUN mix do deps.get, deps.compile

# Copy the rest of your application code
COPY . .

# Build your Phoenix application
RUN mix do compile, phx.digest

# Expose the Phoenix port
EXPOSE 4000

# Start your Phoenix application
CMD ["mix", "phx.server"]
