function hide(e, result) {
  // if (!result.isReliable) return;
  const lang = result.languages[0];
  // TODO: set language from option
  if (lang.language !== 'ko') {
    e.classList.add('hidden');
    e.parentNode.classList.add('hidden');
  } else {
    e.classList.add('filtered');
  }
}

function hideComments(){
  const e = document.querySelectorAll('#comment.ytd-comment-thread-renderer:not(.filtered)');
  for(let i = 0; i < e.length; ++i){
    const _e = e[i];
    chrome.i18n.detectLanguage(
      _e.querySelector('#content-text.ytd-comment-renderer').innerText,
      (result) => { hide(_e, result); }
    );
  }
  setTimeout(hideComments, 1000);
}

(function(){
  hideComments();
})();