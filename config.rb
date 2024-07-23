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

# Live reloading
activate :livereload

# Production
configure :build do
  activate :minify_css
  activate :minify_javascript
end
