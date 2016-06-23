export class Angular2WorkshopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-workshop-app h1')).getText();
  }
}
