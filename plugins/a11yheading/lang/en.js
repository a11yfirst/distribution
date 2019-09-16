/**
* Copyright (c) 2016-2019, University of Illinois - Jon Gunderson and Nicholas Hoyt.
* All rights reserved. For licensing, see LICENSE.md
*
* The 'a11yheading' plugin was based originally on the CKSource 'format' plugin:
*
* @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
* For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/

CKEDITOR.plugins.setLang( 'a11yheading', 'en', {
  label:          'Heading / Paragraph',
  panelTitle:     'Select heading/paragraph format',
  level_h1:       'H1 – Document title',
  level_h2:       'H2 – Section title',
  level_h3:       'H3 – Subsection title',
  level_h4:       'H4 – Subsection title',
  level_h5:       'H5 – Subsection title',
  level_h6:       'H6 – Subsection title',
  format_p:       'Normal',
  format_pre:     'Preformatted text',
  format_address: 'Address line',
  format_div:     'Normal (DIV)',
  helpLabel:      'Help',
  helpNotFound:   'The A11yFirst Help system is not installed. Please contact your CMS or CKEditor administrator for more information.',
  pluginConflict: 'The \'a11yheading\' plugin could not be initialized due to a conflict with one of the following plugins:\n\n    %s\n\nPlease contact your CMS or CKEditor administrator for more information.'
} );
