fetch(websiteUrl)
  .then(res => {
    res.text().then(htmlTxt => {
      let domParser = new DOMParser();
      let doc = domParser.parseFromString(htmlTxt, 'text/html');
      let feedUrl = doc.querySelector('link[type="application/rss+xml"]').href;
    });
  })
  .catch(() => console.error('Error feching website'));
