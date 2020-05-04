# frc2508.org ![Continuous Deployment to GitHub Pages](https://github.com/Armada2508/frc2508.org/workflows/Continuous%20Deployment%20to%20GitHub%20Pages/badge.svg?branch=master)

The official Armada Robotics 2508 website.

### Bugs/Enhancements

New features, suggestions, and existing bugs should be tracked on the [Github issues](https://github.com/Armada2508/frc2508.org/issues) page. 

### Setup

1. Install Ruby (use http://rubyinstaller.org for Windows)
2. Clone this repository.
3. Navigate to the root directory of this repository in a command prompt.
4. Type `bundle install` (you may need `gem install bundle` first)

### Run Website Locally

1. Use `middleman server`
2. In your favorite browser go to `https://localhost:4567`

### Deploying

1. Commit your changes with `git commit`
2. Use `rake publish` to deploy changes to `frc2508.org`
