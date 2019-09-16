/*
* Copyright (c) 2016–2019 University of Illinois - Jon Gunderson and Nicholas Hoyt.
* All rights reserved. For licensing, see LICENSE.md or http://ckeditor.com/license
*/

// Recommended A11yFirst Configuration Options

CKEDITOR.editorConfig = function ( config ) {
  config.height = 480;
  config.skin = 'moono-lisa';
  config.startupFocus = true;

  // a11yheading configuration
  config.allow_only_one_h1 = true;
  config.format_tags = 'h1;h2;h3;h4;p;pre;address';

  config.plugins =
    'a11ychecker,' +
    'a11yfirsthelp,' +
    'a11yheading,' +
    'a11yhelp,' +
    'a11yimage,' +
    'a11ylink,' +
    'a11ystylescombo,' +
    'about,' +
    'balloonpanel,' +
    'basicstyles,' +
    'blockquote,' +
    'clipboard,' +
    'codesnippet,' +
    'contextmenu,' +
    'elementspath,' +
    'enterkey,' +
    'entities,' +
    'find,' +
    'htmlwriter,' +
    'indentlist,' +
    'justify,' +
    'language,' +
    'list,' +
    'liststyle,' +
    'magicline,' +
    'pastefromword,' +
    'pastetext,' +
    'removeformat,' +
    'resize,' +
    'showblocks,' +
    'showborders,' +
    'sourcearea,' +
    'specialchar,' +
    'tab,' +
    'table,' +
    'tableselection,' +
    'tabletools,' +
    'toolbar,' +
    'undo,' +
    'wysiwygarea';

  config.language_list = [
    'ar:Arabic:rtl',
    'zh:Chinese',
    'cs:Czech',
    'da:Danish',
    'nl:Dutch',
    'fi:Finnish',
    'fr:French',
    'gd:Gaelic',
    'de:German',
    'el:Greek',
    'he:Hebrew:rtl',
    'hi:Hindi',
    'hu:Hungarian',
    'id:Indonesian',
    'it:Italian',
    'ja:Japanese',
    'ko:Korean',
    'la:Latin',
    'no:Norwegian',
    'fa:Persian:rtl',
    'pl:Polish',
    'pt:Portuguese',
    'ru:Russian',
    'es:Spanish',
    'sv:Swedish',
    'th:Thai',
    'tr:Turkish',
    'vi:Vietnamese',
    'yi:Yiddish'
  ];

  // a11yfirst toolbar configuration
  config.toolbar = [
    { name: 'paragraph',      items: [ 'Heading' ] },
    { name: 'list',           items: [ 'NumberedList', 'BulletedList', 'Indent', 'Outdent' ] },
    { name: 'otherblocks',    items: [ 'Blockquote', 'CodeSnippet' ] },
    { name: 'justify',        items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight' ] },
    { name: 'misc1',          items: [ 'Image', 'Table' ] },
    { name: 'showblocks',     items: [ 'ShowBlocks' ] },
    { name: 'help',           items: [ 'A11yFirstHelp' ] },
//  { name: 'mode',           items: [ 'Source' ] },
    '/',
    { name: 'undoredo',       items: [ 'Undo', 'Redo' ] },
    { name: 'clipboard',      items: [ 'Cut', 'Copy', 'Paste', 'PasteFromWord' ] },
    { name: 'search',         items: [ 'Find', 'Replace' ] },
    { name: 'basicstyles',    items: [ 'Bold', 'Italic' ] },
    { name: 'inlinestyle',    items: [ 'InlineStyle' ] },
    { name: 'removeformat',   items: [ 'RemoveFormat' ] },
    { name: 'link',           items: [ 'Link', 'Unlink', 'Anchor' ] },
    { name: 'misc2',          items: [ 'Language', 'SpecialChar' ] },
    { name: 'a11ychecker',    items: [ 'A11ychecker' ] }
  ];

};

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
  { name: 'Inserted Text',    element: 'ins' }
] );
