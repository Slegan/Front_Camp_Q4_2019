import itemRender from './itemRender';

export default (myJson, node) => {
  const fragment = document.createDocumentFragment();
  const ItemList = myJson.sources || myJson.articles;
  const isChannel = myJson.sources ? true : false;
  ItemList.forEach((element) => {
    fragment.appendChild(itemRender(element, isChannel));
  });
  node.innerHTML = '';
  node.appendChild(fragment);
};
