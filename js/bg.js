function hideNotKorComments(){
  let e = document.querySelectorAll('ytd-comment-thread-renderer:not(.completed)');
  Array.from(e).forEach((v, i) => {
    let text = v.querySelector('#expander').innerText || '';
    chrome.i18n.detectLanguage(text, function (result) {
      if (!result.isReliable) return;
      console.log(result, text);
      let lang = result.languages[0];
      if (lang.language !== 'ko') {
        v.remove();
      } else {
        v.classList.add('completed');
      }
    });
  });
}

(function(){
  setInterval(hideNotKorComments, 1000);
})();