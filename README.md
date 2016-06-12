# cTab

html-tab system for js used with npm (node-webkit / electron)

version 0.0.1


### HowTo

```javascript
  var tab = require('./cTab.js'),

  tab.init(
    document.querySelector('#tabNavigation'), // this dom contains multiple: <html-tag class="tab-btn" data-tab="myTabName" >Button</<html-tag>
    document.querySelector('#tabPages'), // this dom contains multiple: <html-tag id="tab-myTabName" class="tab-page" >Content</<html-tag>
    'system',  // load page at start
    'flex' // css display, default: block
  );

```

```html

<div id="tabNavigation">
  <button class="tab-btn" data-tab="page1">Page 1</button>
  <button class="tab-btn" data-tab="page2">Page 2</button>
</div>
<div id="tabPages">
  <div id="tab-page1" class="tab-page">Content Page 1</div>
  <div id="tab-page2" class="tab-page">Content Page 1</div>
</div>

```
