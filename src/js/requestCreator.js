import constants from './constants';
import jsonHandler from './jsonHandler';


let NotificationPopup;

const showError = (error) => {
  import(/* webpackChunkName: "NotificationPopup" */ './notificationPop')
    .then((module) => {
      NotificationPopup = module.default.getInstance();
      NotificationPopup.showPopup(error);
    });
};

export default async (type, additionalParams) => {
  let response;
  let myJson;
  try {
    switch (type) {
      case 'wrong':
        response = await fetch('https://newsapi.org/v2/sources?language=en&apiKey=b1c4d55a14a94b4187398cb730a62b58');
        myJson = await response.json();
        break;
      case 'loadChannels':
        response = await fetch(`https://newsapi.org/v2/sources?language=en&apiKey=${constants.apiKey}`);
        myJson = await response.json();
        break;
      case 'loadNews':
        response = await fetch(`https://newsapi.org/v2/everything?sources=${additionalParams[1]}&pageSize=100&apiKey=${constants.apiKey}`);
        myJson = await response.json();
        break;

      default:
        break;
    }

    if (myJson.status === constants.responseStatusIsOk) {
      jsonHandler(myJson, additionalParams[0]);
    } else {
      throw new Error(myJson.message);
    }
  } catch (error) {
    showError(error);
  }
};
