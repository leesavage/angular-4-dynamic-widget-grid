import { Angular2DynamicWidgetGridPage } from './app.po';

describe('angular2-dynamic-widget-grid App', () => {
  let page: Angular2DynamicWidgetGridPage;

  beforeEach(() => {
    page = new Angular2DynamicWidgetGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
