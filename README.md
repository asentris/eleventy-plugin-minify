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

Increment the `version` defined in the `package.json` file and run the command below to publish the module in the
registry:

```bash
# Dry run
npm publish --dry-run

# For real (are you really sure?)
npm publish --access public
```

## License

The [MIT License][1] (MIT)

[1]: https://opensource.org/licenses/MIT
