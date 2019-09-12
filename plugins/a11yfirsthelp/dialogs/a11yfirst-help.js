/**
* Copyright (c) 2016-2019, University of Illinois - Jon Gunderson and Nicholas Hoyt.
* All rights reserved. For licensing, see LICENSE.md
*/

CKEDITOR.dialog.add( 'a11yFirstHelpDialog', function( editor ) {
  var lang = editor.lang.a11yfirsthelp,
      config = editor.config,
      version = '1.2.2',
      dialogObj;

  var basePathExt = {
    type: 'lang',
    regex: /basePath\//g,
    replace: typeof CKEDITOR.drupalA11yFirstPath === 'string' ? CKEDITOR.drupalA11yFirstPath : CKEDITOR.basePath
  };

  // Register the showdown extension
  showdown.extension( 'basePath', basePathExt );

  var helpTopicKeys = Object.keys( config.a11yFirstHelpTopics ),
      helpOptions = [],
      dialogMenuButtons = [];

  // Initialize helpOptions array from config defined in plugin.js
  for ( var i = 0; i < helpTopicKeys.length; i++ ) {
    var key = helpTopicKeys[ i ];
    helpOptions.push( config.a11yFirstHelpTopics[ key ].option );
  }

  // Initialize dialogMenuButtons array from helpTopicKeys and helpOptions
  for ( var i = 0; i < helpTopicKeys.length; i++ ) {
    var key = helpTopicKeys[ i ];
    var option = helpOptions[ i ];
    var offset = 2;
    var buttonObj = {
      type: 'button',
      id: 'button' + option,
      style: (i == helpTopicKeys.length - offset) ? 'margin-top: 1.5em': undefined,
      label: lang[ key ].label,
      title: lang[ key ].title,
      option: option,
      onClick: function() {
        showHelpTopic( this.option );
      }
    };
    dialogMenuButtons.push ( buttonObj );
  }

  function showHelpTopic( value ) {
    var node, button, buttonElement, option, contentId, buttonId;

    for ( var i = 0; i < helpOptions.length; i++ ) {
      option = helpOptions[ i ];
      contentId = 'content' + option;
      buttonId  = 'button'  + option;

      node = document.getElementById( contentId );
      button = dialogObj.getContentElement( 'a11yFirstHelpTab', buttonId );

      if ( node && button ) {

        buttonElement = button.getElement();
        buttonElement.addClass( 'a11yfirsthelp' );
        buttonElement.getParent().addClass( 'a11yfirsthelp' );

        if (option == value) {
          node.style.display = 'block';
          buttonElement.addClass( 'selected' );
        }
        else {
          node.style.display = 'none';
          buttonElement.removeClass( 'selected' );
        }
      }
    }

    var container = dialogObj.getContentElement( 'a11yFirstHelpTab', 'helpContentContainer' );
    container.focus();
  }

  return {
    title: lang.a11yFirstHelpLabel,

    minWidth: 600,

    minHeight: 360,

    onLoad: function() {
      this.getElement().addClass( 'a11yfirsthelp_dialog' );
    },

    onShow: function( event ) {
      var key, contentId, node, html;

      dialogObj = this;

      var converter = new showdown.Converter({ extensions: [ 'basePath' ] });

      for ( var i = 0; i < helpTopicKeys.length; i++ ) {
        key = helpTopicKeys[ i ];
        contentId = 'content' + helpOptions[ i ];
        node = document.getElementById( contentId );
        node.innerHTML = converter.makeHtml( lang[ key ].content ).replace( /%version/g, version );
      }

      if ( editor.a11yfirst.helpOption ) {
        showHelpTopic( editor.a11yfirst.helpOption );
      }
    },

    contents: [
      {
        id: 'a11yFirstHelpTab',
        label: lang.a11yFirstHelpLabel,
        title: lang.a11yFirstHelpTitle,
        expand: true,
        padding: 0,
        elements: [
          {
            type: 'hbox',
            widths: [ '35%', '65%' ],
            children: [
              {
                type: 'vbox',
                align: 'left',
                children: dialogMenuButtons
              },
              {
                type: 'html',
                id: 'helpContentContainer',
                focus: function() {
                  this.getElement().focus();
                },
                html:
                  '<div tabindex="-1" class="a11yfirsthelpcontent">' +
                    '<div id="contentHeadingHelp"></div>' +
                    '<div id="contentListHelp"></div>' +
                    '<div id="contentImageHelp"></div>' +
                    '<div id="contentInlineStyleHelp"></div>' +
                    '<div id="contentLinkHelp"></div>' +
                    '<div id="contentGettingStarted"></div>' +
                    '<div id="contentAboutA11yFirst"></div>' +
                  '</div>'
              }
            ]
          }
        ]
      }
    ],

    buttons: [ CKEDITOR.dialog.okButton ]
  };
} );
