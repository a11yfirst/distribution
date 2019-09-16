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

Please refer to the following pages in the
[A11yFirst Documentation wiki](https://github.com/a11yfirst/documentation/wiki):

* [Installing A11yFirst Plugins](https://github.com/a11yfirst/documentation/wiki/Installing-A11yFirst-Plugins)
* [Using CKEditor Builder](https://github.com/a11yfirst/documentation/wiki/Using-CKEditor-Builder)

## Configuration and Usage

Please refer to the following pages in the
[A11yFirst Documentation wiki](https://github.com/a11yfirst/documentation/wiki):

* [Configuring CKEditor](https://github.com/a11yfirst/documentation/wiki/Configuring-CKEditor)
* [Features Overview](https://github.com/a11yfirst/documentation/wiki/Features-Overview)
