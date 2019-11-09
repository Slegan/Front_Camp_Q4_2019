import RequestCreator from './js/requestCreator';
import logRequest from './js/logRequest';
import './main.css';

const main = document.getElementById('main');
const loadButton = document.getElementById('loadChannels');
const errorButton = document.getElementById('makeWrongRequest');

const makeWrongRequest = () => {
  logRequest('wrong', [main]);
};

const loadChannels = () => {
  logRequest('loadChannels', [main]);
};

const loadNews = (e) => {
  const selectedChannel = e.target.closest('.channel');

  if (selectedChannel) {
    const selectedChannelId = selectedChannel.getAttribute('data-url-attribute');
    logRequest('loadNews', [main, selectedChannelId]);
  }
};

const proxy = new Proxy(RequestCreator, logRequest);

loadButton.addEventListener('click', loadChannels);
errorButton.addEventListener('click', makeWrongRequest);
main.addEventListener('click', loadNews);
