# a11ylink

The `a11ylink` plugin was originally based on the `link` plugin.
It updates that plugin with the following modifications:

## Features

* Does not allow empty Display Text

* Does not default to using the URL as the Display Text

* Warns when a URL is used as the Display Text

* Detects the use of ‘click here,’ ‘more’ et al.

* Provides a Help button

## A11y considerations

* The display text for a link should describe the target of the link.

* URLs are typically not very descriptive when used as display text.
