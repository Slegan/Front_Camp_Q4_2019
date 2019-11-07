import jsonHandler from './js/jsonHandler';
import constants from './js/constants';
import './main.css';

const main = document.getElementById('main');

const makeRequest = async () => {
  try {
    const response = await fetch(`https://newsapi.org/v2/sources?language=en&apiKey=${constants.apiKey}`);
    const myJson = await response.json();

    jsonHandler(myJson, main);
  } catch (error) {
    console.log(error);
  }
};

const loadNews = async (e) => {
  const selectedChannel = e.target.closest('.channel');

  if (selectedChannel) {
    const selectedChannelId = selectedChannel.getAttribute('data-url-attribute');
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?sources=${selectedChannelId}&pageSize=100&apiKey=${constants.apiKey}`);
      const myJson = await response.json();

      jsonHandler(myJson, main);
    } catch (error) {
      console.log(error);
    }
  }
};

const loadButton = document.getElementById('makeRequest');
loadButton.addEventListener('click', makeRequest);

main.addEventListener('click', loadNews);
