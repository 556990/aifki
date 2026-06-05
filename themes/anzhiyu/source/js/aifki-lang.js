(function() {
  'use strict';

  var STORAGE_KEY = 'aifki-lang';
  var currentLang = 'zh-CN';
  var gtReady = false;

  // 检测语言
  function detectLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && ['zh-CN','zh-TW','en'].includes(saved)) return saved;
    var nl = (navigator.language || '').toLowerCase();
    if (nl.startsWith('en')) return 'en';
    if (nl.startsWith('zh') && (nl.includes('tw') || nl.includes('hk'))) return 'zh-TW';
    return 'zh-CN';
  }

  // 切换语言
  window.aifkiSwitchLang = function(lang) {
    if (!lang || lang === currentLang) { closeMenu(); return; }
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    updateActive();
    closeMenu();

    if (lang === 'zh-TW') {
      resetLang();
      chineseConvert(2);
    } else if (lang === 'en') {
      resetLang();
      showLangStatus('翻译中...');
      setEnglishMode();
    } else {
      resetLang();
      chineseConvert(1);
    }
  };

  window.toggleLangMenu = function() {
    var m = document.getElementById('lang-menu');
    if (m) m.classList.toggle('show');
  };

  function closeMenu() {
    var m = document.getElementById('lang-menu');
    if (m) m.classList.remove('show');
  }

  function updateActive() {
    document.querySelectorAll('.lang-opt').forEach(function(el) {
      el.classList.toggle('active', el.dataset.lang === currentLang);
    });
    var btn = document.getElementById('translateLink');
    if (btn) {
      var labels = {'zh-CN':'简','zh-TW':'繁','en':'EN'};
      btn.textContent = labels[currentLang] || '简';
    }
  }

  // 显示状态提示
  function showLangStatus(text) {
    var el = document.getElementById('lang-status');
    if (el) {
      el.textContent = text;
      el.style.display = 'block';
    }
  }
  function hideLangStatus() {
    var el = document.getElementById('lang-status');
    if (el) {
      el.style.display = 'none';
    }
  }

  // 简繁转换
  function chineseConvert(target) {
    if (typeof window.translateFn === 'undefined') {
      setTimeout(function() { chineseConvert(target); }, 300);
      return;
    }
    try { localStorage.setItem('translate-chn-cht', target); } catch(e) {}
    window.translateFn.translatePage();
  }

  // 英文模式：用 Google Translate
  function setEnglishMode() {
    document.documentElement.lang = 'en';
    if (!gtReady) {
      tryLoadGT();
    } else {
      doGT('en');
    }
  }

  function resetLang() {
    document.documentElement.lang = 'zh-CN';
    if (gtReady) {
      doGT('zh-CN');
      setTimeout(hideLangStatus, 2000);
    }
  }

  function tryLoadGT() {
    var s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=gtReadyCallback';
    s.onerror = function() { hideLangStatus(); };
    document.body.appendChild(s);
    window.gtReadyCallback = function() {
      new google.translate.TranslateElement({
        pageLanguage: 'zh-CN',
        includedLanguages: 'en,zh-CN,zh-TW',
        autoDisplay: false
      }, 'gt-container');
      gtReady = true;
      setTimeout(function() { doGT('en'); }, 500);
    };
  }

  function doGT(lang) {
    var select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
    }
  }

  // 点击外部关闭菜单
  document.addEventListener('click', function(e) {
    var sw = document.getElementById('lang-switch');
    if (sw && !sw.contains(e.target)) closeMenu();
  });

  // 初始化
  function init() {
    if (!document.getElementById('gt-container')) {
      var c = document.createElement('div');
      c.id = 'gt-container';
      c.style.display = 'none';
      document.body.appendChild(c);
    }
    currentLang = detectLang();
    updateActive();
    if (document.readyState === 'complete') {
      if (currentLang === 'zh-TW') chineseConvert(2);
    } else {
      window.addEventListener('load', function() {
        if (currentLang === 'zh-TW') chineseConvert(2);
      });
    }
    document.addEventListener('pjax:complete', updateActive);
  }

  init();
})();
