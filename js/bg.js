'use strict';

function addClassLang(e, result) {
  let langs = result && result.languages.length ? ' ' : ' und';
  for (let i = 0; i < result.languages.length; ++i) {
    langs += ' ' + result.languages[i].language;
  }
  const reliableClass = 'reliable';
  e.setAttribute(
    'class',
    e.getAttribute('class') +
      ' filtered ' +
      langs +
      ' ' +
      (result.isReliable ? reliableClass : '')
  );
}

function addClassToCmt(comments, checked) {
  const e = comments.querySelectorAll(
    '.ytd-comment-thread-renderer:not(.filtered)'
  );
  for (let i = 0; i < e.length; ++i) {
    const _e = e[i];
    const txt = _e.querySelector('yt-formatted-string#content-text');
    if (txt) {
      chrome.i18n.detectLanguage(txt.innerText, (result) => {
        addClassLang(_e, result);
      });
    }
  }
  // double check
  if (!checked) {
    setTimeout(addClassToCmt.bind(null, comments, true), 500);
  }
}

function setup() {
  const target = document.querySelector('ytd-item-section-renderer#sections');
  if (!target) {
    setTimeout(setup, 1000);
    return;
  }

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      setTimeout(addClassToCmt.bind(null, mutation.target, false), 10);
    });
  });

  const config = {
    attributes: true,
    childList: true,
    characterData: true,
  };

  observer.observe(target, config);

  injectUI(target);
}

function injectUI(container) {
  const path = chrome.extension.getURL('css/style.css');
  const css = document.createElement('link');
  css.setAttribute('rel', 'stylesheet');
  css.setAttribute('type', 'text/css');
  css.setAttribute('href', path);
  document.getElementsByTagName('head')[0].appendChild(css);

  const tmpCss = document.createElement('style');
  tmpCss.setAttribute('id', 'ytcf-css');
  document.getElementsByTagName('head')[0].appendChild(tmpCss);

  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'ytcf-wrapper');

  wrapper.appendChild(createButtonEnable(container));
  wrapper.appendChild(createSelectLangs());

  const title = document.createElement('div');
  title.setAttribute('class', 'ytcf-label');
  title.innerText = 'Enable Language Filter';
  wrapper.appendChild(title);

  container.insertBefore(wrapper, container.firstChild);
}

function createButtonEnable(container) {
  const node = document.createElement('div');

  const swt = document.createElement('div');
  swt.setAttribute('class', 'ytcf-switch');

  const inp = document.createElement('input');
  inp.setAttribute('id', 'ytcf-switch');
  inp.setAttribute('type', 'checkbox');
  inp.setAttribute('class', 'ytcf-switch-input');
  inp.addEventListener(
    'change',
    function (e) {
      if (e.target.checked) {
        container.classList.add('ytcf-enabled');
      } else {
        container.classList.remove('ytcf-enabled');
      }
    },
    false
  );

  const lab = document.createElement('label');
  lab.setAttribute('for', inp.id);
  lab.setAttribute('class', 'ytcf-switch-label');
  swt.appendChild(inp);
  swt.appendChild(lab);
  node.appendChild(swt);

  return node;
}

function createSelectLangs(wrapper) {
  const node = document.createElement('div');
  node.setAttribute('class', 'ytcf-select');

  const select = document.createElement('select');
  select.appendChild(document.createElement('option'));
  const langCodes = Object.keys(Language.asDict);
  langCodes.sort(function (x, y) {
    return ('' + Language.asDict[x].attr).localeCompare(
      Language.asDict[y].attr
    );
  });
  for (let i = 0; i < langCodes.length; ++i) {
    const opt = document.createElement('option');
    const lang = langCodes[i];
    opt.setAttribute('value', lang);
    opt.setAttribute('id', 'ytcf-lang-' + lang);
    opt.innerText = Language.asDict[lang];
    select.appendChild(opt);
  }
  select.addEventListener('change', function (evt) {
    Language.saveLanguageSetting(evt.target.value, applyCSS);
  });
  node.appendChild(select);

  Language.loadLanguageSetting(applyCSS);

  return node;
}

function applyCSS(langCode) {
  const style = document.getElementById('ytcf-css');
  console.log('apply', langCode, style);
  const langClass = langCode ? '.' + langCode : '';
  if (langCode) {
    document.getElementById('ytcf-lang-' + langCode).selected = true;
  }
  style.innerText =
    '.ytd-comment-thread-renderer' + langClass + '{display:block!important;}';
}

(function () {
  setup();
})();
