# eleventy-plugin-files-minifier

> [!NOTE]  
> This plugin is a continuation of [eleventy-plugin-files-minifier](https://github.com/benjaminrancourt/eleventy-plugin-files-minifier) by [Benjamin Rancourt](https://github.com/benjaminrancourt/). This repo was seemingly abandoned and left projects with an unresolvable npm vulnerability. All we've done is forked the repo, updated the dependencies, and maintained this repo going forward. All credit goes where it is due!

This plugin allows you to automatically **minify** files when builting with **[Eleventy](https://www.11ty.dev/)**.
It currently supports `css`, `html`, `json`, `xml`, `xsl` and `webmanifest` files.

Why should you minify your files? Simply to reduce the data transfered between your hosting servers and your visitors,
even if some of them maybe some bots.

Under the hood, this plugin use the following plugins to minify code:

- [pretty-data](https://www.npmjs.com/package/pretty-data): `css`, `json`, `xml` and `webmanifest`
- [html-minifier-terser](https://www.npmjs.com/package/html-minifier-terser): `html` and `xsl`

## Installation

Install the dependency with NPM:

```shell script
npm install @codestitchofficial/eleventy-plugin-minify --save-dev
```

Open up your Eleventy config file (probably `.eleventy.js`) and use `addPlugin`:

```javascript
const eleventyPluginFilesMinifier = require("@codestitchofficial/eleventy-plugin-minify");
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
};
```

## Usage

The plugin will automatically minify supported files, you don't need to do anything except the installation!

Make sure that the files you want to minify are currently written by Eleventy. If not, you can easily rename it and add
Front matter options. For example, for the `manifest.webmanifest` file, I could rename it as `manifest.webmanifest.njk`
and add the following code at his top:

```yaml
---
eleventyExcludeFromCollections: true
permalink: /manifest.webmanifest
---
```

### Options

HTML and XSL files are minified with [html-minifier-terser](https://github.com/terser/html-minifier-terser#options-quick-reference). Any of its options can be passed to `addPlugin`, and they override the defaults below:

```javascript
const eleventyPluginFilesMinifier = require("@codestitchofficial/eleventy-plugin-minify");
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier, {
    decodeEntities: true,
    removeComments: false,
  });
};
```

| Option | Default | Description |
| --- | --- | --- |
| `collapseBooleanAttributes` | `true` | Omit attribute values from boolean attributes |
| `collapseWhitespace` | `true` | Collapse whitespace that contributes to text nodes |
| `decodeEntities` | `false` | Decode entities such as `&amp;` into `&` |
| `html5` | `true` | Parse input according to HTML5 specifications |
| `minifyCSS` | `true` | Minify CSS in style elements and style attributes |
| `minifyJS` | `true` | Minify JavaScript in script elements and event attributes |
| `removeComments` | `true` | Strip HTML comments |
| `removeEmptyAttributes` | `true` | Remove attributes with whitespace-only values |
| `removeEmptyElements` | `false` | Remove elements with empty contents |
| `sortAttributes` | `true` | Sort attributes by frequency |
| `sortClassName` | `true` | Sort style classes by frequency |
| `useShortDoctype` | `true` | Replace the doctype with the short HTML5 doctype |
| `keepClosingSlash` | `true` on `.xsl` files | Keep the trailing slash on void elements |

Options that are not in this table can be set the same way. `.xsl` files keep a closing slash unless `keepClosingSlash` is set.

## Publish

This package is distributed directly through GitHub using Git tags. No npm registry publication is required. Updating the version field in `package.json` is optional, but recommended for consistency.

### 1. For this repository

Commit and push your changes to main:

  ```
  git checkout main
  git pull origin main
  git merge dev main
  git push origin main
  ```

Create and push a version tag:

  ```
  git tag --sort=-creatordate | Select-Object -First 2
  git tag -a v1.0.0 -m "Description."
  git push --tags
  ```

### 2. For the using repository

Install a specific version directly from the public GitHub repository:

`npm install github:asentris/eleventy-plugin-minify#v1.0.0`

Alternatively, install the latest commit from main:

`npm install github:asentris/eleventy-plugin-minify#main`

### 3. Updating Releases

For each new release, create and push a new Git tag (e.g., v1.2.1). Existing tags should remain unchanged.

Consuming projects can update by installing the new tag. Commit package-lock.json to ensure reproducible installations.

## License

The [MIT License][1] (MIT)

[1]: https://opensource.org/licenses/MIT
