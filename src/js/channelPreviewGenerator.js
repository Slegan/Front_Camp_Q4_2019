export default (channelInfo) => {
  let channel = document.createElement('section');
  channel.className = "channel";
  channel.setAttribute('data-url-attribute', channelInfo.id)
  channel.innerHTML = `
    <div class="channel-name">
      <strong>${channelInfo.name}</strong>
    </div>
    <div class="channel-description">
      ${channelInfo.description}
    </div>
    <div class="channel-category">
      <i>${channelInfo.category}</i>
    </div>
    <a class="link-to-official" href="${channelInfo.url}">
      Go to official site
    </a>`
  return channel;
}
