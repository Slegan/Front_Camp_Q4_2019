import constants from './constants';
import itemRender from './itemRender';

export default (myJson, node) => {
  if (myJson.status === constants.responseStatusIsOk) {

    const fragment = document.createDocumentFragment();
    const ItemList = myJson.sources || myJson.articles;
    let isChannel = myJson.sources ? true : false;
  
    ItemList.forEach(element => {
      fragment.appendChild(itemRender(element, isChannel));
    });
  
    node.innerHTML = '';
    node.appendChild(fragment);
  }
  else {
    console.log(`Request failed with ${myJson.code} and message ${myJson.message}`);
  }
}
