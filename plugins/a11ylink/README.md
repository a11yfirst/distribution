# A11yFirst Link

## Summary

This plugin adds the A11yFirst Link button to the editor toolbar. It provides
authors with features for ensuring that the display text of a link is
accessible for people with disabilities.

It is a replacement for the standard Link plugin.

## Overview

The A11yFirst Link plugin has all the features of the standard Link plugin,
but adds additional validation of the link display text to check for common
accessibility issues.

For example, the plugin checks for display text that does not describe the
target of the link, e.g "click here", "more", etc.

It prompts the author when a URL is used as the display text, as they are
typically not very descriptive of the link target. However, they are allowed
through a confirm dialog box, which warns the user of the accessibility
problems of using the URL.

In general, this plugin helps authors understand the importance of display
text in describing the target of a link as accurately and succinctly as
possible.

## Features

### Display Text Validation

* Does not allow empty Display Text
* Does not default to using the URL as the Display Text
* Warns when a URL is used as the Display Text
* Detects the use of ‘click here,’ ‘more’ et al.

### Help

The help command opens the A11yFirst Help plugin option to help authors learn
more about the accessibility issues related to the display text for links and
the importance of descriptive display text.

NOTE: The help feature is dependent on the A11yFirst Help plugin being installed.

## Installation

Download the zip file and extract it to your plugins directory.  Add the
following code to your `config.js` file:

```
config.extraPlugins =
    ...
    'a11ylink,' +
    ...
;
```

'IMPORTANT:' Do not include the standard `link` plugin in the toolbar
configuration when using the A11yFirst Link plugin.

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
