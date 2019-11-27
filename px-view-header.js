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
/*
    Relative paths assume component is being run from inside an app or another component, where dependencies are flat
    siblings. When this component is run from its own repo (e.g. tests, examples), we assume the server is started with
    'gulp serve' (or similar server setup) to enable correct finding of bower dependencies for local runs.
*/
/**
The view header is located at the top of the page/view, as an alternative to px-context-browser. The view header provides the user an overview of the content they are viewing and interacting with. The header contains two content insertion points that will automatically render anything with id of "left" and "right" to the appropriate spots in the header.

### Usage
Simple:

    <px-view-header title="Title" subtitle="Subtitle"></px-view-header>

Using content insertion points:

    <px-view-header title="Title" subtitle="Subtitle">
      <div slot="left" class="actionable">Back</div>
      <button slot="right" class="btn btn--primary">Save</div>
    </px-view-header>

Using px-deck-selector:

    <px-view-header use-deck-selector="true">
      <px-deck-selector slot="px-deck-selector" decks='[...]' config-options='...'></px-deck-selector>
    </px-view-header>

### Styling
The following custom properties are available for styling:

Custom property | Description
:----------------|:-------------
`--px-view-header-background-color` | Background color for the view header

@element px-view-header
@blurb The view header is located at the top of the page/view, as an alternative to px-context-browser.
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './css/px-view-header-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-view-header-styles"></style>

    <div class="vh-header">
      <div>
        <slot name="left"></slot>
      </div>
      <div class="vh-header-text vh-header-text--ms-fix">
        <template is="dom-if" if="{{useDeckSelector}}">
          <slot name="center"></slot>
        </template>
        <template is="dom-if" if="{{!useDeckSelector}}">
          <div class="regular vh-title truncate" title="[[title]]">[[title]]</div>
          <template is="dom-if" if="{{subtitle}}">
            <div class="zeta vh-subtitle truncate" title="[[subtitle]]">[[subtitle]]</div>
          </template>
        </template>
      </div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
`,

  is: 'px-view-header',

  properties: {
    /**
    * The title displayed in the center of the header.
    * @property title
    * @type String
    */
    title: {
      type: String
    },
    /**
    * The (optional) subtitle displayed in the center of the header.
    * @property subtitle
    * @type String
    */
    subtitle: {
      type: String
    },
    /**
    * Whether the deck selector will be passed in between the opening and closing tags of px-view-header.
    * If true, title and subtitle are ignored.
    * @property useDeckSelector
    * @type Boolean
    */
    useDeckSelector: {
      type: Boolean,
      value: false
    }
  }
});
