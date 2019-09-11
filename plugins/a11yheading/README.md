# A11yFirst Heading/Paragraph

## Summary

This plugin adds the Heading/Paragraph menu button to the editor toolbar,
which supports authors in the proper use of headings and other block-level
paragraph formats within web documents.

It is a replacement for the Format plugin, and is intended to be used in
conjunction with the A11yFirst Character Style plugin.

## Overview

What makes a web document accessible to people with disabilities? One
important requirement involves the use of headings (h1, h2, h3, etc.), which
add structure to your document by hierarchically labeling and grouping its
content sections and subsections.

The presence of properly nested headings allows screen reader users to obtain
a list of headings in the form of an outline, which in turn allows them to
quickly and easily identify the types of content in the document, in the same
way that sighted users can visually scan the headings in the document for the
same purpose.

## Features

The Heading/Paragraph plugin supports the proper use of headings via the
following features:

* Headings are made prominent by appearing first in the Heading/Paragraph
  menu.
* Only heading levels that result in proper nesting are enabled in the menu
  (based on cursor position).
* The heading menu items indicate the typical usage for various heading
  levels, for example:
  * `H1 - Document title`
  * `H2 - Section title`
  * `H3 - Subsection title`
* The distraction of styling the heading menu items with different font sizes
  is avoided. All are styled the same, which reinforces their use as
  structural elements rather than for their visual effect.
* The menu includes a `Help` item, described below.

### Help

Selecting the `Help` menu item opens the A11yFirst Help dialog, which provides
information to help authors better understand the accessibility issues related
to headings and other block level elements.

NOTE: The `Help` feature is dependent on the A11yFirst Help plugin being
installed.

<!---

The Heading / Paragraph plugin supports authors in the proper use of headings
and other block level paragraph formats within documents. The plugin is
intended to be used in conjunction with the A11yFirst Character Style plugin.

The use of these two plugins together separates "block" formats and "inline"
styling into two separate toolbar menus. This separation benefits authors by
presenting them with two menus where the actions of each are more internally
consistent.

The A11yFirst Heading / Paragraph plugin replaces the standard Format plugin,
and by comparison, provides additional information and support for authors in
the correct use of headings and other block level formats.

Important authoring issues for headings:

* Headings serve as labels to describe the sections of content in a document.
  The presence of these labels allows screen reader users to quickly and
  easily identify the types of content on the page by reading through the
  list of headings, similar to how people with sight scan the section
  headings to identify content they want to read or ignore.

* Headings should be used in a hierarchical way to label sections and
  subsections of a document. When heading levels are properly nested, screen
  reader users can readily obtain an outline or table of contents that
  describes each main section of the document and each of its subsections.

NOTE: Visual styling alone should not be used in place of heading markup.

## Features of the Headings / Paragraph menu

### Headings

* Headings are the first items in the menu.

* Menu items are styled the same to reinforce their use as structural
  elements.

* Menu item labels indicate the purpose of various heading levels. For
  example, `H2 – Section title`.

* Only headings that are in sequence are enabled. For example, when the
  previous headings is `H2`, headings `H4` and lower are not enabled.

### Paragraph formats

* Normal

* Preformatted text

* Address line

* Normal (DIV)

### Other features and recommendations

* The recommended placement of Heading / Paragraph is in the first position of
  first row of the toolbar.

* A check mark next to a menu item indicates (based on cursor position) the
  current heading level or paragraph format.

* The menu is configurable using the same syntax as the Format plugin.

* The menu includes a `Help` item.

### Help

Selecting the `Help` menu item opens the A11yFirst Help dialog, which provides
information to help authors better understand the accessibility issues related
to headings and other block level elements.

--->

## Installation

Download the zip file and extract it to your plugins directory. Add the
following code to your `config.js` file:

```
config.extraPlugins =
    ...
    'a11yheading,' +
    ...
;
```

**IMPORTANT:** Do not include the standard `format` plugin in the toolbar
configuration when using the `a11yheading` plugin.

## Configuration

There are two main configuration options:

1. Specifying the heading levels and the other block level tags available to the
author, using the same syntax as the CKEditor Format plugin.

1. Identifying whether the author can include more than one `h1` heading in the
document via the property `allow_only_one_h1` (true or false).

NOTE: To promote the use of headings, the recommended placement of the
Heading/Paragraph menu button is in the first position of the first row of the
editor toolbar.

### Examples

```
  // a11yheading configuration

  config.allow_only_one_h1 = true;

  config.format_tags = 'h1;h2;h3;h4;h5;h6;p;pre;address';
```

NOTE: Gaps in the list of headings specified as the value of the `format_tags`
property are ignored. For example, `h1;h2;h4` results in `h1, h2, h3, h4`.


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
