# bootstrap or bootstrap-red
set :theme, 'bootstrap-red'

# Assets
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :documents_dir, 'assets/documents'

# Pretty URLs
activate :directory_indexes

# Disable directory indexes for certain pages
page "/404.html", :directory_index => false

# JavaScript
activate :sprockets

# Live reloading
activate :livereload

# Production
configure :build do
  activate :minify_css
  # Minify javascript, this uses Terser instead of the stock middleman minifier to support > ES5
  # I have to shim the constructor because otherwise it tries to grab something from Rails
  class ::Terser::Compressor
    def initialize(options = {})
      options[:comments] ||= :none
      @options = options
      @cache_key = -"Terser:#{::Terser::VERSION}:#{VERSION}:#{::Sprockets::DigestUtils.digest(options)}"
      @terser = ::Terser.new(@options)
    end
  end
  sprockets.register_compressor 'application/javascript', :terser, Terser::Compressor
  sprockets.js_compressor = :terser
end
