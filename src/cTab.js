/**
* Simple js Tab System
*
* @class cTab
* @version 0.0.1
* @license MIT
*
* @author Christian Marienfeld post@chrisand.de
*
* ### Examples:
*
* var tab = require('./cTab.js'),
*
* tab.init(
*   document.querySelector('#tabNavigation'), // this dom contains multiple: <html-tag class="tab-btn" data-tab="myTabName" >Button</<html-tag>
*   document.querySelector('#tabPages'), // this dom contains multiple: <html-tag id="tab-myTabName" class="tab-page" >Content</<html-tag>
*   'system',  // load page at start
*   'flex' // css display, default: block
* );
* 
* @return {Object} cTab Object
*
* @api public
*/


var _tab = {

  btns: [],
  pages: [],

  init: function (domNav, domPage, rel, display) {
    if (!domNav || !domPage) {
      console.error('no dom');
      return false;
    }

    var btns = domNav.querySelectorAll('.tab-btn');
    for(var i = 0; i < btns.length; i++) {
      _tab.btns.push(btns[i]);
    }
    if (_tab.btns.length < 1) {
      console.error('missing buttons');
      return false;
    }

    var pages = domPage.querySelectorAll('.tab-page');
    for(var i = 0; i < pages.length; i++) {
      _tab.pages.push({
        dom: pages[i],
        display: display || 'block',
        id: pages[i].id
      });
    }
    if (_tab.pages.length < 1) {
      console.error('missing pages');
      return false;
    }

    if (_tab.btns.length != _tab.pages.length) {
      console.error('something missing');
      return false;
    }

    _tab.show(rel);
    _tab.events();
  },
  events: function () {

    for(var i = 0; i < _tab.btns.length; i++) {
      _tab.btns[i].addEventListener('click',function (e) {
        var rel = e.srcElement.dataset.tab;
        if (rel) {
          _tab.show(rel);

        }
      });
    }

  },
  hide: function () {
    for(var i = 0; i < _tab.pages.length; i++) {
      _tab.pages[i].dom.style.display = 'none';
    }
  },
  show: function (rel) {
    _tab.hide();
    if (!rel) {
      return false;
    }
    for(var i = 0; i < _tab.pages.length; i++) {
      if (_tab.pages[i].id == 'tab-'+rel) {
        _tab.pages[i].dom.style.display = _tab.pages[i].display;
      }
    }

    for(var i = 0; i < _tab.btns.length; i++) {
      if ( _tab.btns[i].classList.contains('active') ) {
        _tab.btns[i].classList.remove('active');
      }
      if (_tab.btns[i].dataset.tab == rel) {
        _tab.btns[i].classList.add('active');
      }
    }
    return true;
  }
}

module.exports.init = _tab.init;
module.exports.show = _tab.show;
