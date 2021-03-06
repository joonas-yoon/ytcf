'use strict';

function addClassLang(e, result) {
  let langs = result && result.languages.length ? ' ' : ' und';
  for (let i = 0; i < result.languages.length; ++i) {
    langs += ' ' + result.languages[i].language;
  }
  const reliableClass = 'reliable';
  function _addClass(el) {
    el.setAttribute(
      'class',
      el.getAttribute('class') +
        ' filtered ' +
        langs +
        ' ' +
        (result.isReliable ? reliableClass : '')
    );
  }
  _addClass(e); // comment text
  _addClass(e.parentElement.children[1]); // replies (slibling)
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
  title.innerText = chrome.i18n.getMessage('msg_enable');
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
  const enabledClass = 'ytcf-enabled';
  inp.addEventListener(
    'change',
    function (e) {
      Config.save('enable', e.target.checked, (checked) => {
        if (checked) {
          container.classList.add(enabledClass);
        } else {
          container.classList.remove(enabledClass);
        }
      });
    },
    false
  );
  Config.load('enable', (checked) => {
    inp.checked = checked;
    if (checked) {
      container.classList.add(enabledClass);
    }
  });

  const lab = document.createElement('label');
  lab.setAttribute('for', inp.id);
  lab.setAttribute('class', 'ytcf-switch-label');
  swt.appendChild(inp);
  swt.appendChild(lab);
  node.appendChild(swt);

  return node;
}

function createSelectLangs(wrapper) {
  function getLanguages(callback) {
    const langCodes = Object.keys(Language.asDict);
    const result = [];
    for (let i = 0; i < langCodes.length; ++i) {
      result.push({
        code: langCodes[i],
        name: chrome.i18n.getMessage('lang_' + langCodes[i]),
      });
    }
    result.sort(function (x, y) {
      return ('' + x.name).localeCompare(y.name);
    });
    callback(result);
  }

  const node = document.createElement('div');
  node.setAttribute('class', 'ytcf-select');

  const select = document.createElement('select');
  select.appendChild(document.createElement('option'));
  select.addEventListener('change', function (evt) {
    Config.save('lang', evt.target.value, applyCSS);
  });
  node.appendChild(select);

  getLanguages((langCodes) => {
    console.log(langCodes);
    langCodes.forEach((v, i) => {
      const opt = document.createElement('option');
      opt.setAttribute('value', v.code);
      opt.setAttribute('id', 'ytcf-lang-' + v.code);
      opt.innerText = v.name;
      select.appendChild(opt);
    });
  });

  Config.load('lang', applyCSS);

  return node;
}

function applyCSS(langCode) {
  const style = document.getElementById('ytcf-css');
  const langClass = langCode ? '.' + langCode : '';
  if (langCode) {
    document.getElementById('ytcf-lang-' + langCode).selected = true;
  }
  style.innerText =
    '.ytcf-enabled .ytd-comment-thread-renderer' +
    langClass +
    '{display:block!important;}';
}

(function () {
  setup();
})();
