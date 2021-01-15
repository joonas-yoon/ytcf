'use strict';

// TODO: hide and show by css
// TODO: just add language into class list
// TODO: change input/select, show/hide css

function hide(e, result) {
  let langs = result && result.languages.length ? ' ' : ' und';
  for (let i = 0; i < result.languages.length; ++i) {
    langs += ' ' + result.languages[i].language;
  }
  let reliableClass = 'reliable';
  e.setAttribute('class', e.getAttribute('class') + ' filtered ' + langs + ' ' + (result.isReliable ? reliableClass : ''));
}

function hideComments(comments, checked){
  let e = comments.querySelectorAll('.ytd-comment-thread-renderer:not(.filtered)');
  for(let i = 0; i < e.length; ++i){
    const _e = e[i];
    const txt = _e.querySelector('yt-formatted-string#content-text');
    if (txt) {
      chrome.i18n.detectLanguage(
        txt.innerText,
        (result) => { hide(_e, result); }
      );
    }
  }
  // double check
  if (!checked) {
    setTimeout(hideComments.bind(null, comments, true), 500);
  }
}

function setup(){
  let target = document.querySelector('ytd-item-section-renderer#sections');
  if (!target) {
    setTimeout(setup, 1000);
    return;
  }

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) { 
      setTimeout(hideComments.bind(null, mutation.target, false), 10);
    });
  });

  var config = { 
    attributes: true,
    childList: true,
    characterData: true
  }; 

  observer.observe(target, config);

  injectUI(target);
}

function injectUI(container){
  var path = chrome.extension.getURL('css/style.css');
  var css = document.createElement('link');
  css.setAttribute('rel', 'stylesheet');
  css.setAttribute('type', 'text/css');
  css.setAttribute('href', path);
  document.getElementsByTagName('head')[0].appendChild(css);

  let node = document.createElement('div');
  node.setAttribute('class', 'ytcf-wrapper');
  let swt = document.createElement('div');
  swt.setAttribute('class', 'ytcf-switch');
  let inp = document.createElement('input');
  inp.setAttribute('id', 'ytcf-switch');
  inp.setAttribute('type', 'checkbox');
  inp.setAttribute('class', 'ytcf-switch-input');
  let lab = document.createElement('label');
  lab.setAttribute('for', inp.id);
  lab.setAttribute('class', 'ytcf-switch-label');
  swt.appendChild(inp);
  swt.appendChild(lab);
  node.appendChild(swt);
  let text = document.createElement('div');
  text.setAttribute('class', 'ytcf-label');
  text.innerText = 'Enable Language Filter';
  node.appendChild(text);
  container.insertBefore(node, container.firstChild);
  inp.addEventListener('change', function(e){
    if (e.target.checked) {
      container.classList.add('ytcf-enabled');
    } else {
      container.classList.remove('ytcf-enabled');
    }
  }, false);
}

(function(){
  setup();
})();