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
"[erb]": {
    "editor.defaultFormatter": "aliariff.vscode-erb-beautify"
},
"[css][javascript][yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
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

## Pull Request Previews

Our website supports previewing the changes a PR makes through the use of this [github action](https://github.com/rossjrw/pr-preview-action). *Cool, right?* <br>
This allows others to see the changes you've made to the website without them downloading the repo and tools needed to run it locally. <br>
Once a pull request is created the website will be built and then deployed under a subdirectory. A comment will appear on the pull request with a link to the preview version of the website. It will be updated every time you push a new commit, but keep in mind it takes time (~2-3 minutes) for Github Pages to deploy.

### <rainbow>The `<base>` element and you</rainbow>

In order for all of the links to other pages and assets to reference the correct items in a preview we use the `<base>` element. This takes every relative link (`href`/`src`) and prepends it with a base url. The `<base>` element's href is automatically configured by our github action. When developing on the website and you reference an internal resource, you should ensure it's a relative link so it works with our previews. <br>

To make an absolute link relative, all you have to do is **drop the leading slash**. <br>
For example instead of writing `src="/assets/images/img.jpg"` you write `src="assets/images/img.jpg"`. You would do something similar with an `<a>` element's href.<br>

Finally, because we use the `<base>` element it means *every* relative link is prepended with a url. This means if you have a link to an ID on the same page (e.g. `<a href="#bar">`), you need to write the page as well, `<a href="foo#bar">`.

Further reading, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base.

<style>
rainbow {
  background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
} 
</style>