# A11yFirst for CKEditor

## What is it?

The A11yFirst Project is a set of accessibility enhancements to CKEditor 4
that promote and encourage the creation of accessible content as you edit.

It does this via a suggested reorganization of the editor toolbar, and by
adding plugins with auto-detected constraints and validation that enable
authors to better understand accessibility on a feature-by-feature basis.

### Reorganizes the editor toolbar

* Promotes the use of block elements for their structural semantics

* Discourages the use of stylistic features for purely visual effects

* Omits choices that are best made in CMS templates such as font size,
  font face and font color

### Adds new features via plugins

* Heading / Paragraph (a11yheading)

  * Only headings that are in sequence are enabled

  * Heading menu item labels indicate purpose

* Image (a11yimage)

  * Prompts for Alternative Text

  * Warns when Alt. Text is more than 100 char. in length

  * Detects Alt. Text words and phrases such as ‘image of,’ ‘photo of’ et al.

  * Asks whether a Long Description is needed, and if so, where it will be
    located in the document

* Link (a11ylink)

  * Does not allow empty Display Text

  * Warns when a URL is used as the Display Text

  * Detects the use of ‘click here,’ ‘more’ et al.

* Character Style (a11ystylescombo)

  * Eliminates block styles

* A11yFirst Help (a11yfirsthelp)

  * Getting Started

  * Heading / Paragraph

  * List

  * Image

  * Character Style

  * Link
