# frc2508.org ![Deployment](https://github.com/Armada2508/frc2508.org/workflows/Deployment/badge.svg)

The official Armada Robotics 2508 website. Created using [Ruby](https://www.ruby-lang.org/en/), [Middleman](https://middlemanapp.com/), and [ERB](https://github.com/ruby/erb).

### Bugs/Enhancements

New features, suggestions, and existing bugs should be tracked on the [Github issues](https://github.com/Armada2508/frc2508.org/issues) page.

## Setup

1. Install the latest version of Ruby (use https://rubyinstaller.org for Windows).
2. Clone this repository with `git clone https://github.com/Armada2508/frc2508.org.git`.
3. Navigate to the root directory of this repository in a command prompt.
4. Type `bundle install` (you may need `gem install bundle` first).
5. If you're using VSCode I recommend installing [this extension](https://marketplace.visualstudio.com/items?itemName=Shopify.ruby-lsp) for improved syntax highlighting.

### Code Formatting

All of the website code is formatted using two different tools, **HTML Beautifier** and **Prettier**. <br>

#### HTML Beautifier

HTML Beautifier is a Ruby gem that is used to format the `erb` files.
It will be installed when you run `bundle install` from the setup. It can be run using the command

```sh
htmlbeautifier .\source\**\**.erb
```

There is a corresponding [VSCode extension](https://marketplace.visualstudio.com/items?itemName=aliariff.vscode-erb-beautify) to do the formatting for you. <br>

#### Prettier

Prettier is a javascript formatting tool. It formats files such as `css`, `js`, and `yml`. <br>
It can be installed locally through NPM but it's easier to install the [VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for it.

#### VSCode Settings

If you have installed the two formatting extensions and want your code to be formatted on save you can add this to your
VSCode user settings.json
```json
"[erb][css][javascript][yaml]": {
    "editor.formatOnSave": true
},
```

### Running the Website Locally

1. Run `bundle exec middleman server`.
2. In your favorite browser go to `https://localhost:4567`.

### Deploying Changes

1. Create a new branch with `git switch -c branchname`.
2. Commit your changes with `git commit -m "commit message"`.
3. Push your changes to your new branch with `git push`.
4. Open a pull request, merge your branch into master, and wait for gh actions to deploy.
