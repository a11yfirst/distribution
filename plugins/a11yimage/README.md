# A11yFirst Image

## Summary

This plugin adds the A11yFirst Image button to the editor toolbar. It provides
authors with additional features for ensuring image accessibility for people
with disabilities.

It is a replacement for the standard Image and Enhanced Image plugins.

## Overview

The A11yFirst Image plugin is a modification of the Enhanced Image (image2)
plugin to include important accessibility features for validating Alternative
Text and allowing the author to identify the location within the document of
a longer description of the image.

People with visual impairments need descriptions of informative images to
understand the purpose of the image. Each informative image must at least
have Alternative Text and may require a longer description, especially if the
image is a chart or graph.

Alternative Text should be succinct and should not include redundant or
irrelevant information (e.g. "image of .."). An image that is purely
decorative should have empty Alternative Text, but since this is rare the
plugin requires the author to confirm that the image is purely decorative.

A complex informative image should have a long description in the page,
adjacent to the image. The plugin provides a way for the author to provide a
reference to the location of the long description in the page, which can
provide a more semantically meaningful description. For example, a table
may be provided that includes the data used to generate a chart or graph.

## Features

### Alternative Text Validation

The following conditions for Alternative Text are checked:
* Empty
* More than 100 char. in length
* Starts with the phrases ‘image of,’ ‘photo of’ et al.
* Includes file name or size
* For a decorative image, allows the user to confirm that Alternative Text is
  not required

### Identifying Long Description

A select box allows the author to indicate if a longer description of the
image exists in the document, and if so, its location (i.e. before, after or
before and after the location of the image in the document).

### Help

The help command opens a dialog box that contains information to help authors
learn more about the accessibility issues related creating alternative text
and long descriptions.

NOTE: The help feature is dependent on the A11yFirst Help plugin being installed.

## Installation

Download the zip file and extract it to your plugins directory.  Add the
following code to your `config.js` file:

```
config.extraPlugins =
    ...
    'a11yimage,' +
    ...
;
```

'IMPORTANT:' Do not include the standard Image or Image 2 plugins in the toolbar
configuration when using the A11yFirst Image plugin.

## Using the A11yFirst Plugins

The A11yFirst suite of plugins are designed to work together to support
accessible authoring, and we encourage people to use them in the same toolbar.
A [recommended toolbar configuration](https://go.illinois.edu/a11yfirst-config)
is available on the [demonstration page](https://go.illinois.edu/a11yfirst).
The following table show the suite of A11yFirst plugins and the standard plugins
they are designed to replace.

| A11yFirst Plugin | Standard Plugin being Replaced    |
|---  |---  |
| `a11yheadings`    | `format` |
| `a11ystylescombo` | `stylescombo`   |
| `a11ylink`        | `link`  |
| `a11yimage`       | `image2` or `image`  |
| `a11yfirsthelp`   | none |
