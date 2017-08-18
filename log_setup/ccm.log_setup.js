/**
 * @overview <i>ccm</i> component for set up data logging behavior
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

( function () {

  var ccm_version = '8.0.0';
  var ccm_url     = 'https://akless.github.io/ccm/version/ccm-8.0.0.min.js';

  var component_name = 'log_setup';
  var component_obj  = {

    name: component_name,

    config: {

      html_templates: {
        main: {
          id: 'main',
          inner: [
            { id: 'input_mask' },
            { id: 'log_preview' }
          ]
        },
        preview: {
          tag: 'fieldset',
          inner: [
            { tag: 'legend' },
            { id: 'preview' }
          ]
        }
      },
      css_layout: [ 'ccm.load', 'https://akless.github.io/ccm-components/log_setup/layouts/default.css' ],
      input_mask: [ 'ccm.component', 'https://akless.github.io/ccm-components/input/ccm.input.js', {
        css_layout: [ 'ccm.load', 'https://akless.github.io/ccm-components/input/layouts/table.css' ],
        inputs: [
          {
            label: 'Pseudonymisierung',
            name: 'hash',
            input: 'checkbox',
            value: "['ccm.load','https://akless.github.io/ccm-components/libs/md5/md5.min.js']"
          },
          {
            label: 'Zu erfassende Ereignisse',
            name: 'events',
            input: 'text'
          },
          {
            label: 'Ereignisspezifische Daten',
            name: 'logging.data',
            input: 'checkbox'
          },
          {
            label: 'Nur bei diesen Ereingissen',
            name: 'logging_data',
            input: 'text'
          },
          {
            label: 'Webbrowser',
            name: 'logging.browser',
            input: 'checkbox'
          },
          {
            label: 'Nur bei diesen Ereingissen',
            name: 'logging_browser',
            input: 'text'
          },
          {
            label: 'Protokollierte App',
            name: 'logging.parent',
            input: 'checkbox'
          },
          {
            label: 'Nur bei diesen Ereingissen',
            name: 'logging_parent',
            input: 'text'
          },
          {
            label: 'Übergeordnete App',
            name: 'logging.root',
            input: 'checkbox'
          },
          {
            label: 'Nur bei diesen Ereingissen',
            name: 'logging_root',
            input: 'text'
          },
          {
            label: 'Benutzer',
            name: 'logging.user',
            input: 'checkbox'
          },
          {
            label: 'Nur bei diesen Ereingissen',
            name: 'logging_user',
            input: 'text'
          },
          {
            label: 'Webseite',
            name: 'logging.website',
            input: 'checkbox'
          },
          {
            label: 'Nur bei diesen Ereingissen',
            name: 'logging_website',
            input: 'text'
          }
        ]
      } ],
      logger: [ 'ccm.component', 'https://akless.github.io/ccm-components/log/ccm.log.js' ],
      app: [ 'ccm.component', 'https://akless.github.io/ccm-components/cloze/ccm.cloze.js' ],
      onfinish: function ( instance, results ) { console.log( results ); }

      // initial_data

    },

    Instance: function () {

      var self = this;
      var my;           // contains privatized instance members

      this.ready = function ( callback ) {

        // privatize all possible instance members
        my = self.ccm.helper.privatize( self );

        callback();
      };

      this.start = function ( callback ) {

        // show loading icon until rendering is finished
        self.ccm.helper.hide( self );

        // prepare main HTML structure
        var main_elem = self.ccm.helper.html( my.html_templates.main );
        var preview_elem = main_elem.querySelector( '#log_preview' );

        // set content of own website area (not visible yet)
        self.ccm.helper.setContent( self.element, self.ccm.helper.protect( main_elem ) );

        // prepare initial dataset
        var initial_data; if ( my.initial_data ) prepareInitialData();

        // render input mask
        my.input_mask.start( {

          element: main_elem.querySelector( '#input_mask' ),
          initial_data: initial_data,
          onchange: function ( instance, results, name ) {

            // show/hide post-relevant entries
            if ( name === 'logging.data'    ) instance.element.querySelector( '.entry[data-name=logging_data]'    ).classList.toggle( 'hidden' );
            if ( name === 'logging.browser' ) instance.element.querySelector( '.entry[data-name=logging_browser]' ).classList.toggle( 'hidden' );
            if ( name === 'logging.parent'  ) instance.element.querySelector( '.entry[data-name=logging_parent]'  ).classList.toggle( 'hidden' );
            if ( name === 'logging.root'    ) instance.element.querySelector( '.entry[data-name=logging_root]'    ).classList.toggle( 'hidden' );
            if ( name === 'logging.user'    ) instance.element.querySelector( '.entry[data-name=logging_user]'    ).classList.toggle( 'hidden' );
            if ( name === 'logging.website' ) instance.element.querySelector( '.entry[data-name=logging_website]' ).classList.toggle( 'hidden' );

            // prepare result data
            prepareResults( results );

            // update preview container
            renderPreview( results );

          },
          onfinish: function ( instance, results ) {

            // prepare result data
            prepareResults( results );

            // provide result data
            self.ccm.helper.onFinish( self, results );

          }

        }, function ( input_mask ) {

          // hide post-relevant entries
          if ( !input_mask.element.querySelector( 'input[name="logging.data"]'    ).checked ) input_mask.element.querySelector( '.entry[data-name=logging_data]'    ).classList.add( 'hidden' );
          if ( !input_mask.element.querySelector( 'input[name="logging.browser"]' ).checked ) input_mask.element.querySelector( '.entry[data-name=logging_browser]' ).classList.add( 'hidden' );
          if ( !input_mask.element.querySelector( 'input[name="logging.parent"]'  ).checked ) input_mask.element.querySelector( '.entry[data-name=logging_parent]'  ).classList.add( 'hidden' );
          if ( !input_mask.element.querySelector( 'input[name="logging.root"]'    ).checked ) input_mask.element.querySelector( '.entry[data-name=logging_root]'    ).classList.add( 'hidden' );
          if ( !input_mask.element.querySelector( 'input[name="logging.user"]'    ).checked ) input_mask.element.querySelector( '.entry[data-name=logging_user]'    ).classList.add( 'hidden' );
          if ( !input_mask.element.querySelector( 'input[name="logging.website"]' ).checked ) input_mask.element.querySelector( '.entry[data-name=logging_website]' ).classList.add( 'hidden' );

          // replace loading icon with hidden rendered content
          self.ccm.helper.show( self );

          // render preview
          renderPreview( my.initial_data );

          if ( callback ) callback();
        } );

        /** prepares the initial dataset */
        function prepareInitialData() {

          // clone initial dataset
          initial_data = self.ccm.helper.clone( my.initial_data );

          // handle values of post-relevant properties
          if ( Array.isArray( initial_data.logging.data    ) ) { initial_data.logging_data    = initial_data.logging.data.join(    ' ' ); initial_data.logging.data    = true; }
          if ( Array.isArray( initial_data.logging.browser ) ) { initial_data.logging_browser = initial_data.logging.browser.join( ' ' ); initial_data.logging.browser = true; }
          if ( Array.isArray( initial_data.logging.parent  ) ) { initial_data.logging_parent  = initial_data.logging.parent.join(  ' ' ); initial_data.logging.parent  = true; }
          if ( Array.isArray( initial_data.logging.root    ) ) { initial_data.logging_root    = initial_data.logging.root.join(    ' ' ); initial_data.logging.root    = true; }
          if ( Array.isArray( initial_data.logging.user    ) ) { initial_data.logging_user    = initial_data.logging.user.join(    ' ' ); initial_data.logging.user    = true; }
          if ( Array.isArray( initial_data.logging.website ) ) { initial_data.logging_website = initial_data.logging.website.join( ' ' ); initial_data.logging.website = true; }

          // encode ccm dependencies in initial dataset
          self.ccm.helper.encodeDependencies( initial_data );

        }

        /** prepares the result data */
        function prepareResults( results ) {

          // handle values of post-relevant properties
          if ( results.logging.data    && results.logging_data    ) results.logging.data    = results.logging_data.split(    /\s+/ ); delete results.logging_data;
          if ( results.logging.browser && results.logging_browser ) results.logging.browser = results.logging_browser.split( /\s+/ ); delete results.logging_browser;
          if ( results.logging.parent  && results.logging_parent  ) results.logging.parent  = results.logging_parent.split(  /\s+/ ); delete results.logging_parent;
          if ( results.logging.root    && results.logging_root    ) results.logging.root    = results.logging_root.split(    /\s+/ ); delete results.logging_root;
          if ( results.logging.user    && results.logging_user    ) results.logging.user    = results.logging_user.split(    /\s+/ ); delete results.logging_user;
          if ( results.logging.website && results.logging_website ) results.logging.website = results.logging_website.split( /\s+/ ); delete results.logging_website;

          // decode ccm dependencies in result data
          self.ccm.helper.decodeDependencies( results );

        }

        /** renders preview of build fill-in-the-blank text */
        function renderPreview( config ) {

          self.ccm.helper.setContent( preview_elem, self.ccm.helper.protect( self.ccm.helper.html( my.html_templates.preview ) ) );
          //my.logger.start( { key: config, element: preview_elem.querySelector( '#preview' ) } );

        }

      }

    }

  };

  var namespace = window.ccm && ccm.components[ component_name ]; if ( namespace ) { if ( namespace.ccm_version ) ccm_version = namespace.ccm_version; if ( namespace.ccm_url ) ccm_url = namespace.ccm_url; }
  if ( !window.ccm || !ccm[ ccm_version ] ) { var tag = document.createElement( 'script' ); document.head.appendChild( tag ); tag.onload = register; tag.src = ccm_url; } else register();
  function register() { ccm[ ccm_version ].component( component_obj ); }
}() );