# Use the official Ruby image from Docker Hub
# https://hub.docker.com/_/ruby

# Pinning the OS to buster because the nodejs install script is buster-specific.
# Be sure to update the nodejs install command if the base image OS is updated.
FROM ruby:3.1.1-bullseye

RUN (curl -sS https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor | apt-key add -) && \
  echo "deb https://deb.nodesource.com/node_14.x buster main"      > /etc/apt/sources.list.d/nodesource.list && \
  apt-get update && apt-get install -y nodejs lsb-release

RUN (curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -) && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -y yarn

WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN gem install bundler && \
  bundle config set force_ruby_platform true && \
  bundle config set --local deployment 'true' && \
  bundle config set --local without 'development test' && \
  bundle install


COPY . /app

ENV RAILS_ENV=production
ENV RAILS_SERVE_STATIC_FILES=true
ENV RAILS_LOG_TO_STDOUT=true

# RUN bundle install nokogiri -v 1.14.1 --platform=ruby
# RUN bundle install mini_portile2 -v 2.8.1 --platform=ruby


# pre-compile Rails assets with master key
# RUN bundle exec rails assets:precompile

EXPOSE 8080

CMD ["bin/rails", "server", "-b", "0.0.0.0", "-p", "8080"]
