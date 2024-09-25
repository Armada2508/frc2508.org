# frc2508.org ![Deployment](https://github.com/Armada2508/frc2508.org/workflows/Deployment/badge.svg)

The official Armada Robotics 2508 website. Created using [Ruby](https://www.ruby-lang.org/en/), [Middleman](https://middlemanapp.com/), and [ERB](https://github.com/ruby/erb).

### Bugs/Enhancements

New features, suggestions, and existing bugs should be tracked on the [Github issues](https://github.com/Armada2508/frc2508.org/issues) page.

### Setup

1. Install the latest version of Ruby (use https://rubyinstaller.org for Windows).
2. Clone this repository with `git clone https://github.com/Armada2508/frc2508.org.git`.
3. Navigate to the root directory of this repository in a command prompt.
4. Type `bundle install` (you may need `gem install bundle` first).
5. If you're using VSCode I recommend installing [this extension](https://marketplace.visualstudio.com/items?itemName=Shopify.ruby-lsp) for improved syntax highlighting.

### Run Website Locally

1. Run `bundle exec middleman server`.
2. In your favorite browser go to `https://localhost:4567`.

### Deploying

1. Create a new branch with `git switch -c branchname`.
2. Commit your changes with `git commit -m "commit message"`.
3. Push your changes to your new branch with `git push`.
4. Open a pull request, merge your branch into master, and wait for gh actions to deploy.
