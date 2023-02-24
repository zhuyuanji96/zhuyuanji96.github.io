function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  if (script.readyState) {
    //    IE
    script.onreadystatechange = function () {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null; // 只要loaded和complete任何一个触发，则删除事件处理器（以确保事件不会处理两次）
        callback();
      }
    };
  } else {
    //其他浏览器
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

loadScript('https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js', function () {
  var div = document.createElement('div');
  div.id = 'algoliasearchNetlifysearch';
  div.style = 'position:absolute;top:0;z-index:99;display:none;';
  document.getElementsByTagName('body')[0].appendChild(div);

  algoliasearchNetlify({
    appId: 'B1Z0XSGSTJ',
    apiKey: '3e46e0dfed813e90f69f9a1980be29d7',
    siteId: 'bb1d7170-a600-48b8-afd3-e742a45ea79b',
    branch: 'gh-pages',
    selector: 'div#algoliasearchNetlifysearch'
  });
});
