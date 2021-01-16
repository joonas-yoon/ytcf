'use strict';function addClassLang(e,result){let langs=result&&result.languages.length?" ":" und";for(let i=0;i<result.languages.length;++i)langs+=" "+result.languages[i].language;e.setAttribute("class",e.getAttribute("class")+" filtered "+langs+" "+(result.isReliable?"reliable":""))}function addClassToCmt(comments,checked){const e=comments.querySelectorAll(".ytd-comment-thread-renderer:not(.filtered)");for(let i=0;i<e.length;++i){const _e=e[i],txt=_e.querySelector("yt-formatted-string#content-text");txt&&chrome.i18n.detectLanguage(txt.innerText,result=>{addClassLang(_e,result)})}checked||setTimeout(addClassToCmt.bind(null,comments,!0),500)}function setup(){const target=document.querySelector("ytd-item-section-renderer#sections");if(!target)return void setTimeout(setup,1e3);const observer=new MutationObserver(function(mutations){mutations.forEach(function(mutation){setTimeout(addClassToCmt.bind(null,mutation.target,!1),10)})});observer.observe(target,{attributes:!0,childList:!0,characterData:!0}),injectUI(target)}function injectUI(container){const path=chrome.extension.getURL("css/style.css"),css=document.createElement("link");css.setAttribute("rel","stylesheet"),css.setAttribute("type","text/css"),css.setAttribute("href",path),document.getElementsByTagName("head")[0].appendChild(css);const tmpCss=document.createElement("style");tmpCss.setAttribute("id","ytcf-css"),document.getElementsByTagName("head")[0].appendChild(tmpCss);const wrapper=document.createElement("div");wrapper.setAttribute("class","ytcf-wrapper"),wrapper.appendChild(createButtonEnable(container)),wrapper.appendChild(createSelectLangs());const title=document.createElement("div");title.setAttribute("class","ytcf-label"),title.innerText="Enable Language Filter",wrapper.appendChild(title),container.insertBefore(wrapper,container.firstChild)}function createButtonEnable(container){const node=document.createElement("div"),swt=document.createElement("div");swt.setAttribute("class","ytcf-switch");const inp=document.createElement("input");inp.setAttribute("id","ytcf-switch"),inp.setAttribute("type","checkbox"),inp.setAttribute("class","ytcf-switch-input");const enabledClass="ytcf-enabled";inp.addEventListener("change",function(e){Config.save("enable",e.target.checked,checked=>{checked?container.classList.add(enabledClass):container.classList.remove(enabledClass)})},!1),Config.load("enable",checked=>{inp.checked=checked,checked&&container.classList.add(enabledClass)});const lab=document.createElement("label");return lab.setAttribute("for",inp.id),lab.setAttribute("class","ytcf-switch-label"),swt.appendChild(inp),swt.appendChild(lab),node.appendChild(swt),node}function createSelectLangs(){const node=document.createElement("div");node.setAttribute("class","ytcf-select");const select=document.createElement("select");select.appendChild(document.createElement("option"));const langCodes=Object.keys(Language.asDict);langCodes.sort(function(x,y){return(""+Language.asDict[x].attr).localeCompare(Language.asDict[y].attr)});for(let i=0;i<langCodes.length;++i){const opt=document.createElement("option"),lang=langCodes[i];opt.setAttribute("value",lang),opt.setAttribute("id","ytcf-lang-"+lang),opt.innerText=Language.asDict[lang],select.appendChild(opt)}return select.addEventListener("change",function(evt){Config.save("lang",evt.target.value,applyCSS)}),node.appendChild(select),Config.load("lang",applyCSS),node}function applyCSS(langCode){const style=document.getElementById("ytcf-css"),langClass=langCode?"."+langCode:"";langCode&&(document.getElementById("ytcf-lang-"+langCode).selected=!0),style.innerText=".ytd-comment-thread-renderer"+langClass+"{display:block!important;}"}(function(){setup()})();