export default (itemInfo, isChannel) => {
  const item = document.createElement('section');

  if (isChannel) {
    item.className = 'channel';
    item.setAttribute('data-url-attribute', itemInfo.id);
    item.innerHTML = `
      <div class="channel-name">
        <strong>${itemInfo.name}</strong>
      </div>
      <div class="channel-description">
        ${itemInfo.description}
      </div>
      <div class="channel-category">
        <i>${itemInfo.category}</i>
      </div>
      <a class="link-to-official" href="${itemInfo.url}">
        Go to official site
      </a>`;
  } else {
    const date = new Date(itemInfo.publishedAt);
    const publishDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;

    item.className = 'news-item';
    item.innerHTML = `
      <div class="news-title">
        <strong>${itemInfo.title}</strong>
      </div>
      <div class="news-description">
        ${itemInfo.description}
      </div>
      <div class="news-info">
        <span>Was published on ${publishDate} ${itemInfo.author ? 'by <i>' + itemInfo.author + '</i>' : ''} 
      </div>
      ${itemInfo.urlToImage ? '<img class="news-image" src=' + itemInfo.urlToImage + ">" : ''}
      <a class="link-to-official" href="${itemInfo.url}">
        Go to official site
      </a>`;
  }

  return item;
};
