# A11yFirst Character Style

## Summary

This plugin adds the Character Style menu button to the editor toolbar, which
enables you to add and remove inline character styling to the text content of
your web document.

This plugin is a replacement for the Styles Combo plugin, and is intended to
be used in conjunction with the A11yFirst Heading / Paragraph plugin.

## Overview

How does the visual styling of your document contribute to its accessibility
for people with disabilities?

The use of this plugin together with the Heading / Paragraph plugin separates
_block_ formats and _inline_ styling into two separate toolbar menus. This
separation benefits authors by presenting them with two logically distinct
menus where the actions of each have different implications.

Block formats such as headings and lists, carry with them semantics that
enhance document accessibility by making metadata available to screen reader
users. For example, when a heading is encountered, its heading level in the
hierarchy of available levels is communicated; when a list is encountered,
the number of items it contains is announced.

Character styling, on the other hand, is primarily visual, and does not always
contribute to accessibility. For example, the use of bold and italic styling
may not translate to anything meaningful for screen reader users.

By separating block formats from inline styling, the proper use of each is
encouraged, which can result in web documents that are more accessible.

## Features

### Inline Character Styles

The Character Style plugin applies an inline styling element to selected text
or, if no text is selected, toggles on the selected character style until the
author switches to a different style or a new line is inserted.

The default set of character styles include:

* Strong (strong)
* Emphasis (em)
* Marker (marker)
* Inline quotation (q)
* Cited work (cite)
* Computer code (code)
* Subscript (sup)
* Superscript (sub)
* Deleted Text (del)
* Inserted Text (ins)
* Strikethrough (strike)
* Underline (u)

NOTE: The set of character styles can be customized through configuration
settings and should only contain inline elements.

### Remove Styles

The "Remove Styles" menu option removes the character styling of the text
containing the insert cursor.  If the text containing the insert cursor does
not have any inline styling no action is taken.

### Help

The help command opens the A11yFirst Help plugin option to provide additional
information to the authors to help them understand the accessibility issues
related to using inline styling of text content.

NOTE: The help feature is dependent on the A11yFirst Help plugin being
installed.

## Installation

Download the zip file and extract it to your plugins directory.  Add the
following code to your `config.js` file:

```
config.extraPlugins =
    ...
    'a11ystylescombo,' +
    ...
;
```

'IMPORTANT:' Do not include the standard Styles plugin in the toolbar
configuration when using the A11yFirst Character Style plugin.

## Configuration

There is a `stylesSet.add` function that can be used in the `config.js` file
to define the set of inline styles available in the Character Style menu.

The following is the default list of styles; you may wish to remove some of
them based your installation needs.

```
// a11ystylescombo configuration
CKEDITOR.stylesSet.add ( 'default', [
  { name: 'Strong',           element: 'strong', overrides: 'b' },
  { name: 'Emphasis',         element: 'em' , overrides: 'i' },
  { name: 'Marker',           element: 'span', attributes: { 'class': 'marker' } },
  { name: 'Inline quotation', element: 'q' },
  { name: 'Cited work',       element: 'cite' },
  { name: 'Computer code',    element: 'code' },
  { name: 'Subscript',        element: 'sub' },
  { name: 'Superscript',      element: 'sup' },
  { name: 'Deleted Text',     element: 'del' },
  { name: 'Inserted Text',    element: 'ins' },
  { name: 'Strikethrough',    element: 'strike' },
  { name: 'Underline',        element: 'u' }
] );
```

## Using the A11yFirst Plugins

The A11yFirst suite of plugins are designed to work together to support
accessible authoring, and we encourage people to use them in the same toolbar.
A [recommended toolbar configuration](https://go.illinois.edu/a11yfirst-config)
is available on the [demonstration page](https://go.illinois.edu/a11yfirst).
The following table show the suite of A11yFirst plugins and the standard
plugins they are designed to replace.

| A11yFirst Plugin  | Replaces Standard Plugin |
|-------------------|--------------------------|
| `a11yheading`     | `format` |
| `a11ystylescombo` | `stylescombo` |
| `a11ylink`        | `link` |
| `a11yimage`       | `image2` or `image` |
| `a11yfirsthelp`   | none |
