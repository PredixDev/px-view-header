// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  suite('Custom Automation Tests for Simple px-view-header Example', function() {
    test('Header is proper height', function() {
      var header = document.querySelector('#px-view-header-1 #container'),
          height = window.getComputedStyle(header)["min-height"];
      assert.equal(height, "60px");
    });
    test('Subtitle not rendered if undefined', function() {
      var subtitle = document.querySelector('#px-view-header-1 #subtitle');
      assert.isNull(subtitle);
    });
    test('Title is passed correctly', function() {
      var title = document.querySelector('#px-view-header-1 #title');
      assert.equal(title.textContent, "Title");
    });
  });

  suite('Custom Automation Tests for Subtitle px-view-header Example', function() {
    test('Header is proper height', function() {
      var header = document.querySelector('#px-view-header-2 #container'),
          height = window.getComputedStyle(header)["min-height"];
      assert.equal(height, "60px");
    });
    test('Title is passed correctly', function() {
      var title = document.querySelector('#px-view-header-2 #title');
      assert.equal(title.textContent, "Title");
    });
    test('Subtitle is passed correctly', function() {
      var subtitle = document.querySelector('#px-view-header-2 #subtitle');
      assert.equal(subtitle.textContent, "Subtitle");
    });
    test('Left content is inserted into DOM correctly', function() {
      var left = document.querySelector('#px-view-header-2 .left'),
          header = document.querySelector('#px-view-header-1 #container'),
          padding = left.getBoundingClientRect().left - header.getBoundingClientRect().left;
      assert.isNotNull(left);
      assert.closeTo(padding, 15, 1);
    });
    test('Right content is inserted into DOM correctly', function() {
      var right = document.querySelector('#px-view-header-2 .right'),
          header = document.querySelector('#px-view-header-2 #container'),
          padding = header.getBoundingClientRect().right - right.getBoundingClientRect().right;
      assert.isNotNull(right);
      assert.equal(right.tagName, "DIV");
      assert.closeTo(padding, 15, 1);
    });
  });

  suite('Custom Automation Tests for px-view-header Example with Deck Selector', function() {
    test('Header is proper height', function() {
      var header = document.querySelector('#px-view-header-3 #container'),
          height = window.getComputedStyle(header)["min-height"];
      assert.equal(height, "60px");
    });
    test('Title is undefined', function() {
      var title = document.querySelector('#px-view-header-3 #title');
      assert.isNull(title);
    });
    test('Subtitle is undefined', function() {
      var subtitle = document.querySelector('#px-view-header-3 #subtitle');
      assert.isNull(subtitle);
    });
    test('Left content is undefined', function() {
      var left = document.querySelector('#px-view-header-3 .left');
      assert.isNull(left);
    });
    test('Right content is undefined', function() {
      var right = document.querySelector('#px-view-header-3 .right');
      assert.isNull(right);
    });
    test('Deck selector is inserted into DOM correctly', function() {
      var deck = document.querySelector('#px-view-header-3 px-deck-selector'),
          selected = deck.querySelector('.epsilon').textContent;
      assert.isNotNull(deck);
      assert.equal(selected,"Overview");
    });
  });
}
