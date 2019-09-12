/**
* Copyright (c) 2016-2019, University of Illinois - Jon Gunderson and Nicholas Hoyt.
* All rights reserved. For licensing, see LICENSE.md
*
* The 'a11yimage' plugin was based originally on the CKSource 'image2' plugin:
*
* @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
* For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/

CKEDITOR.plugins.setLang( 'a11yimage', 'en', {

  // URL
  urlTitle: 'URL of the image source file',

  // Alternative text
  altTextLabel: 'Alternative text (spoken by screen reader)',
  // Note: The max. length in the following message should match the
  // value of the alternativeTextMaxLength property defined below.
  altTextTitle: 'A short description of the content and function of the image, no longer than 100 characters',
  altTextNotRequiredLabel: 'Image does not require alternative text',

  // Long description
  longDescLabel: 'Is a long description needed, and if so, where will it be located?',
  longDescTitle: 'Many people benefit from a detailed description of a complex image, including, but not limited to, people with visual impairments',

  // Long desc. select options
  longDescOptionNo: 'No, the alternative text is adequate',
  longDescOptionYesBefore: 'Yes; in the document before the image',
  longDescOptionYesAfter: 'Yes; in the document after the image',
  longDescOptionYesBoth: 'Yes; in the document before and after the image',

  // Long desc. information appended to alternative text
  longDescBefore: 'Long description is located just before the image',
  longDescAfter: 'Long description is located just after the image',
  longDescBoth: 'Long description is located before and after the image',

  // imageDescHelpLabel: 'Help: Accessible image descriptions',
  imageDescHelpLabel: 'Help',

  // Caption
  captionLabel: 'Insert a caption text box below the image',
  captionTitle: 'The caption text is editable within the document',
  captionPlaceholder: 'Caption',

  // Miscellaneous
  btnUpload: 'Send it to the Server',
  infoTab: 'Image Info',
  lockRatio: 'Lock Ratio',
  menu: 'Image Properties',
  pathName: 'image',
  pathNameCaption: 'caption',
  resetSize: 'Reset Size',
  resizer: 'Click and drag to resize',
  title: 'Image Properties',
  uploadTab: 'Upload',
  helpNotFound: 'The A11yFirst Help system is not installed. Please contact your CMS or CKEditor administrator for more information.',
  pluginConflict: 'The \'a11yimage\' plugin could not be initialized due to a conflict with one of the following plugins:\n\n%s\n\nPlease contact your CMS or CKEditor administrator for more information.',

  // Additional properties used in a11yimage
  alignNone: 'None',
  alignLeft: 'Left',
  alignCenter: 'Center',
  alignRight: 'Right',

  // Validation settings and messaging
  urlMissing: 'Please provide the URL for the image',

  alternativeTextMaxLength: 100,
  altContainsFilename: ['.fpx', '.gif', '.j2c', '.j2k', '.jfif', '.jif', '.jp2',
    '.jpeg', '.jpg', '.jpx', '.pcd', '.pdf', '.png', '.tif', '.tiff'],
  altIsInvalid: ['photo', 'spacer', 'separator', 'nbsp', 'image'],
  altStartsWithInvalid: ['image of', 'graphic of'],
  altEndsWithInvalid: ['bytes'],

  msgAltPrefix: 'The alternative text should succinctly describe the content of the image.',
  msgAltTextNotRequired: 'An image typically requires alternative text (i.e. a short description) for people with visual impairments using screen readers.\n\nAre you sure you want to continue?',
  msgAltTextWillBeRemoved: 'An image typically requires alternative text (i.e. a short description) for people with visual impairments using screen readers.\n\nThe alternative text you specified will be removed.\n\nAre you sure you want to continue?',
  msgAltEmpty: 'Please provide alternative text (i.e. a short description of the image) for people with visual impairments using screen readers.',
  msgAltTooLong: 'The alternative text is %s1 characters, which is longer than the recommended maximum length of %s2 characters.\n\nAre you sure you want to continue?',
  msgAltContainsFilename: 'Please remove the filename with the extension "%s" from the alternative text.',
  msgAltIsInvalid: 'Please replace "%s" with alternative text that describes the image.',
  msgAltStartsWithInvalid: 'Please remove the unnecessary phrase "%s" from the alternative text.',
  msgAltEndsWithInvalid: 'Please do not include the size of the image in the alternative text.',
} );
