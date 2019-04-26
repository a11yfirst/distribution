# a11yimage

The `a11yimage` plugin was originally based on the `image2` plugin.
It updates that plugin with the following modifications:

## Features

* Prompts for Alternative Text

* Warns when Alt. Text is more than 100 char. in length

* Detects Alt. Text words and phrases such as ‘image of,’ ‘photo of’ et al.

* Detects use of file name or size in Alt. Text

* For a decorative image, allows the user to indicate that Alt. Text is not
  required

* Asks the user whether a Long Description is needed, and if so, where it will
  be located in the document

* Provides a Help button

## A11y considerations

* People with visual impairments need text descriptions of informative images.

* Each informative image must at least have alternative text.

* Alternative text should be succinct and should not include redundant or
  irrelevant information.

* An image that is purely decorative should have an empty `alt` attribute
  (thus there should be a way to indicate that an image is decorative).

* A complex informative image should have a long description in the document,
  adjacent to the image.
