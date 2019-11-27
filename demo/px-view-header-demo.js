/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-icon-set/px-icon.js';
import 'px-icon-set/px-icon-set-navigation.js';
import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import 'px-deck-selector/px-deck-selector.js';
import '../px-view-header.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-view-header" description="The view header is located at the top of the page/view, as an alternative to px-context-browser. The view header provides the user an overview of the content they are viewing and interacting with." mobile="" tablet="" desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component" style="width:100%">
        <px-view-header use-deck-selector="{{props.useDeckSelector.value}}" title="{{props.title.value}}" subtitle="{{props.subtitle.value}}">
          <template is="dom-if" if="{{!props.useDeckSelector.value}}">
            <div slot="left" class="actionable">
              <px-icon icon="px-nav:back"></px-icon>&nbsp;&nbsp;Back
            </div>
            <div slot="right" class="actionable">
              Next&nbsp;&nbsp;<px-icon icon="px-nav:next"></px-icon>
            </div>
          </template>
          <template is="dom-if" if="{{props.useDeckSelector.value}}">
            <px-deck-selector slot="center" decks="[{&quot;id&quot;:&quot;1&quot;,&quot;name&quot;:&quot;Overview&quot;,&quot;url&quot;:&quot;/overview&quot;}, {&quot;id&quot;:&quot;2&quot;,&quot;name&quot;:&quot;Something else&quot;,&quot;url&quot;:&quot;/something&quot;}, {&quot;id&quot;:&quot;3&quot;,&quot;name&quot;:&quot;A third option&quot;,&quot;url&quot;:&quot;third&quot;}]"></px-deck-selector>
          </template>
        </px-view-header>
      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-view-header" links-includes="[&quot;px-deck-selector/px-deck-selector.html&quot;]">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-view-header"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-view-header-demo',

  properties: {

    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    configs: {
      type: Array,
      value: function(){
        return [
          { configName: "Mobile-style header",
            configReset: true,
            lightDomContent: '<div id="left" class="actionable">Back</div><div id="right" class="actionable">Next</div>' },

          { configName: "With deck selector",
            useDeckSelector: true,
            title: '',
            subtitle: '',
            lightDomContent: '<px-deck-selector decks=\'[{"id":"1","name":"Overview","url":"/overview"}, {"id":"2","name":"Something else","url":"/something"}, {"id":"3","name":"A third option","url":"/third"}]\'></px-deck-selector>' }
        ]
      }
    }
  },

  demoProps: {
    useDeckSelector: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    title: {
      type: String,
      defaultValue: 'Current View Title',
      inputType: 'text'
    },

    subtitle: {
      type: String,
      defaultValue: 'A subtitle describing the view.',
      inputType: 'text'
    },

    lightDomContent: {
      type: String,
      defaultValue: '<div id="left" class="actionable"><px-icon icon="px-nav:back"></px-icon>Back</div><div id="right" class="actionable">Next<px-icon icon="px-nav:next"></px-icon></div>'
    }
  },

  ready: function() {
    window.addEventListener('iron-change', function() {
      if (this.props.useDeckSelector.value) {
        this.set('props.lightDomContent.value', '<px-deck-selector decks=\'[{"id":"1","name":"Overview","url":"/overview"}, {"id":"2","name":"Something else","url":"/something"}, {"id":"3","name":"A third option","url":"/third"}]\'></px-deck-selector>');
      }
      else {
        this.set('props.lightDomContent.value', '<div id="left" class="actionable">Back</div><div id="right" class="actionable">Next</div>');
      }
    }.bind(this));
  }
});
