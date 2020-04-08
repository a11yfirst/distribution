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

Please refer to the following pages in the
[A11yFirst Documentation wiki](https://github.com/a11yfirst/documentation/wiki):

* [Installing A11yFirst Plugins](https://github.com/a11yfirst/documentation/wiki/Installing-A11yFirst-Plugins)
* [Using CKEditor Builder](https://github.com/a11yfirst/documentation/wiki/Using-CKEditor-Builder)

## Configuration and Usage

Please refer to the following pages in the
[A11yFirst Documentation wiki](https://github.com/a11yfirst/documentation/wiki):

* [Configuring CKEditor](https://github.com/a11yfirst/documentation/wiki/Configuring-CKEditor)
* [Features Overview](https://github.com/a11yfirst/documentation/wiki/Features-Overview)
