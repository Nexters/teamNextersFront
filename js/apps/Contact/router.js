'use strict';

App.Routers = App.Routers || {};

class ContactRouter extends Backbone.Router {
  constructor(options) {
    super(options);
    this.routes = {
      'contact': 'showContact',
    };
    this._bindRoutes();
  }

  showContact() {
    var app = this.startApp();
    app.show();
  }

  startApp() {
    return App.startSubApplication(ContactApp);
  }
}

App.Routers.ContactRouter = ContactRouter;
