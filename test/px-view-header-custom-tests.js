/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

suite('Custom Automation Tests for Simple px-view-header Example', function(done) {
  let vhFixture;
  setup((done)=>{
    vhFixture = fixture('px-view-header-fixture');
    flush(()=>{
      done();
    });
  });

  test('Header is proper height', function() {
    let header = Polymer.dom(vhFixture.root).querySelector('.vh-header'),
        height = window.getComputedStyle(header)["height"];
    assert.equal(height, "60px");
  });

  test('Subtitle not rendered if undefined', function() {
    let subtitle = Polymer.dom(vhFixture.root).querySelector('.vh-subtitle');
    assert.isNull(subtitle);
  });

  test('Title is passed correctly', function() {
    let title = Polymer.dom(vhFixture.root).querySelector('.vh-title');
    assert.equal(title.textContent, "Title");
  });
});

suite('Custom Automation Tests for Subtitle px-view-header Example', function() {
  let vhFixture;
  setup((done)=>{
    vhFixture = fixture('px-view-header-2');
    flush(()=>{
      done();
    });
  });

  test('Header is proper height', function() {
    let header = Polymer.dom(vhFixture.root).querySelector('.vh-header'),
        height = window.getComputedStyle(header)["height"];
    assert.equal(height, "60px");
  });
  test('Title is passed correctly', function() {
    let title = Polymer.dom(vhFixture.root).querySelector('.vh-title');
    assert.equal(title.textContent, "Title");
  });
  test('Subtitle is passed correctly', function() {
    let subtitle = Polymer.dom(vhFixture.root).querySelector('.vh-subtitle');
    assert.equal(subtitle.textContent, "Subtitle");
  });
  test('Left content is inserted into DOM correctly', function() {
    let left = Polymer.dom(vhFixture).querySelector('[slot=left]'),
        header = Polymer.dom(vhFixture.root).querySelector('.vh-header'),
        padding = left.getBoundingClientRect().left - header.getBoundingClientRect().left;
    assert.isNotNull(left);
    assert.closeTo(padding, 15, 1);
  });
  test('Right content is inserted into DOM correctly', function() {
    let right = Polymer.dom(vhFixture).querySelector('[slot=right]'),
        header = Polymer.dom(vhFixture.root).querySelector('.vh-header'),
        padding = header.getBoundingClientRect().right - right.getBoundingClientRect().right;
    assert.isNotNull(right);
    assert.equal(right.tagName, "DIV");
    assert.closeTo(padding, 15, 1);
  });
});

suite('Custom Automation Tests for px-view-header Example with Deck Selector', function() {
  let vhFixture;
  setup((done)=>{
    vhFixture = fixture('px-view-header-3');
    flush(()=>{
      done();
    });
  });

  test('Header is proper height', function() {
    let header = Polymer.dom(vhFixture.root).querySelector('.vh-header'),
        height = window.getComputedStyle(header)["height"];
    assert.equal(height, "60px");
  });
  test('Title is undefined', function() {
    let title = Polymer.dom(vhFixture.root).querySelector('vh-title');
    assert.isNull(title);
  });
  test('Subtitle is undefined', function() {
    let subtitle = Polymer.dom(vhFixture.root).querySelector('vh-subtitle');
    assert.isNull(subtitle);
  });
  test('Left content is undefined', function() {
    let left = Polymer.dom(vhFixture).querySelector('[slot=left]');
    assert.isNull(left);
  });
  test('Right content is undefined', function() {
    let right = Polymer.dom(vhFixture).querySelector('[slot=right]');
    assert.isNull(right);
  });
  test('Deck selector is inserted into DOM correctly', function(done) {
    let deck = Polymer.dom(vhFixture).querySelector('[slot="center"]');

    async.until(
      ()=>{
        return (Polymer.dom(deck.root).querySelector('.dropdown-text').textContent.trim() === 'Overview');
      },
      (callback)=>{
        setTimeout(callback, 1000);
      },
      ()=>{
        let selected = Polymer.dom(deck.root).querySelector('.dropdown-text').textContent.trim();
        assert.isNotNull(deck);
        assert.equal(selected,'Overview');
        done();
      }
    );
  });
});
