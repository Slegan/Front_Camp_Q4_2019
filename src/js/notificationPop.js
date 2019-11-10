export default class NotificationPopup {
  static getInstance() {
    if (!NotificationPopup.instance) {
      NotificationPopup.instance = new NotificationPopup();
    }
    return NotificationPopup.instance;
  }

  showPopup(err) {
    this.addPopup();
    this.popup = document.getElementById('notificationPopup');
    this.popup.getElementsByClassName('js-notification-popup_body')[0].textContent = err.message;
    this.popup.classList.remove('hide');
  }

  addPopup() {
    const node = document.getElementById('main');
    const fragment = document.createDocumentFragment();
    const item = document.createElement('section');

    item.setAttribute('id', 'notificationPopup');
    item.className = 'notification-popup hide';
    item.innerHTML = `
      <div class="notification-popup_header">Something go wrong</div>
      <div class="notification-popup_body js-notification-popup_body"></div>`;
    fragment.appendChild(item);
    node.appendChild(fragment);
  }
}
