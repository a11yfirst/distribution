# a11yheading

The `a11yheading` plugin was originally based on the `format` plugin.
It updates that plugin with the following modifications:

## Headings

* Promoted to the top of the menu

* Menu items are styled the same to reinforce their use as structural elements

* Menu item labels indicate purpose (e.g. ‘H2 – Section title’)

* Only headings that are in sequence are enabled

* Configuration options

  * New property: `allow_only_one_h1` (true or false)

  * Gaps in list of headings are ignored (`h1;h2;h4` results in h1, h2, h3, h4)

## Paragraph formats

* Normal

* Preformatted text

* Address line

* Normal (DIV)

## Toolbar / Menu

* Menu button label changed to ‘Heading / Paragraph’

* Placed in first position of first row of toolbar

* Checkmark next to menu item indicates (based on cursor position) the current
  heading level or paragraph format

* Configuration: same syntax as `format` plugin

* Menu provides a Help menu item

## A11y considerations

* It is important to use headings to demarcate and label the structure
  of your document. This allows screen reader users to quickly and easily
  navigate from one section to another.

* Headings should be used sequentially. If a screen reader user, for example,
  is trying to understand the context of a level 4 heading and/or its content,
  and there is no corresponding level 3 heading, that can be confusing.
