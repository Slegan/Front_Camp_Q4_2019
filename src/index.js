import channelPreviewGenerator from './js/channelPreviewGenerator.js';
import newsGenerator from './js/newsGenerator.js';
import variables from './js/variables.js';
import './main.css';

const main = document.getElementById('main');

const makeRequest = async function () {
  let enNews;
  
  try {
    const response = await fetch(`https://newsapi.org/v2/sources?language=en&apiKey=${variables.apiKey}`);
    const myJson = await response.json();
    
    if (myJson.status === 'ok') {
      enNews = await myJson.sources;
      let fragment = document.createDocumentFragment();

      enNews.forEach(element => {
        fragment.appendChild(channelPreviewGenerator(element));
      });
      main.innerHTML='';
      main.appendChild(fragment);
    } else {
      console.log(`Request failed with ${myJson.code} and message ${myJson.message}`);
    }
  } catch (error) {
    console.log(error);
  }
}

const loadNews = async function (e) {
  let newsList;

  if (e.target.closest('.channel')) {
    const selectedChannelId = e.target.closest('.channel').getAttribute('data-url-attribute');
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?sources=${selectedChannelId}&pageSize=100&apiKey=${variables.apiKey}`);
      const myJson = await response.json();

      if (myJson.status === 'ok') {
        newsList = await myJson.articles;
        let fragment = document.createDocumentFragment();

        newsList.forEach(element => {
          fragment.appendChild(newsGenerator(element));
        });
        main.innerHTML='';
        main.appendChild(fragment);
      } else {
        console.log(`Request failed with ${myJson.code} and message ${myJson.message}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const loadButton = document.getElementById('makeRequest');
loadButton.onclick = makeRequest;

main.onclick = loadNews;
