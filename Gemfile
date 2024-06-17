# frozen_string_literal: true
source 'https://rubygems.org'

ruby '3.1.2' # Specify the Ruby version

gem 'jquery-rails', '~> 4.4.0' # Integrate jQuery with Rails
gem 'rails', '~> 6.1.4' # Latest stable Rails version compatible with modern Ruby versions
gem 'pg', '~> 1.2.3' # PostgreSQL database adapter for Active Record
gem 'puma', '~> 5.3.2' # Fast, concurrent web server for Ruby/Rails
gem 'sass-rails', '~> 6.0.0' # Use SCSS for stylesheets
gem 'uglifier', '>= 4.2.0' # Minifies JavaScript assets for faster load times
gem 'aws-sdk-s3', '~> 1.86.0' # AWS SDK for S3 integration
gem 'coffee-rails', '~> 5.0.0' # Use CoffeeScript for .coffee assets and views
gem 'jbuilder', '~> 2.11' # Build JSON APIs with ease
gem 'bcrypt', '~> 3.1.16' # Use bcrypt for secure password hashing
gem 'bootsnap', '>= 1.7.7', require: false # Reduces boot times through caching

gem "devise", "~> 4.9" # Authentication solution for Rails
gem 'rack-cors', require: 'rack/cors' # Add rack-cors gem

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw] # Debugging tool
  gem 'better_errors', '~> 2.9.1' # Improved error page for development
  gem 'binding_of_caller', '~> 1.0.0' # Allows for inspection of binding context during debugging
  gem 'pry-rails', '~> 0.3.9' # Enhanced IRB console for Rails
  gem 'annotate', '~> 3.1.1' # Automatically add comments summarizing current schema to models and fixtures
  gem 'spring', '~> 2.1.0' # Speeds up development by keeping application running in the background
  gem 'dotenv-rails' # Loads environment variables from .env
end

group :development do
  gem 'listen', '~> 3.7.0' # Listens to file changes and reloads the application
  gem 'spring-watcher-listen', '~> 2.0.1' # Integrates Spring with Listen to watch for file changes
  gem 'rb-fsevent' # Add rb-fsevent here
  gem 'web-console', '>= 4.1.0' # Move web-console to development group
end

