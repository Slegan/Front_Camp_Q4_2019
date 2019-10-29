export default (newsInfo) => {
  let date = new Date(newsInfo.publishedAt);
  let publishDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;

  let newsItem = document.createElement('section');
  newsItem.className = "news-item";
  newsItem.innerHTML = `
    <div class="news-title">
      <strong>${newsInfo.title}</strong>
    </div>
    <div class="news-description">
      ${newsInfo.description}
    </div>
    <div class="news-info">
      <span>Was published on ${publishDate} ${newsInfo.author ? 'by <i>' + newsInfo.author + '</i>' : ''} 
    </div>
    ${newsInfo.urlToImage ? '<img class="news-image" src=' + newsInfo.urlToImage + ">" : ''}
    <a class="link-to-official" href="${newsInfo.url}">
      Go to official site
    </a>`
  return newsItem;
}
