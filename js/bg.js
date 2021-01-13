'use strict';

function hide(e, result) {
  // if (!result.isReliable) return;
  const lang = result.languages[0];
  // TODO: set language from option
  if (lang.language !== 'ko') {
    (e.parentNode || e).remove();
  } else {
    e.classList.add('filtered');
  }
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
  var target = document.querySelector('ytd-item-section-renderer#sections');
  if (target == null) {
    setTimeout(setup, 1000);
    return;
  }

  var observer = new MutationObserver(function(mutations) { 
    mutations.forEach(function(mutation) { 
      setTimeout(hideComments.bind(null, mutation.target), 10);
    }); 
  });

  var config = { 
    attributes: true,
    childList: true,
    characterData: true
  }; 

  observer.observe(target, config);
}

(function(){
  setup();
})();