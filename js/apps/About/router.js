'use strict';

App.Routers = App.Routers || {};

class AboutRouter extends Backbone.Router {
  constructor(options) {
    super(options);
    this.routes = {
      'about': 'showAbout'
    };
    this._bindRoutes();
  }

  showAbout() {
    var app = this.startApp();
    app.show();
  }

  startApp() {
    return App.startSubApplication(AboutApp);
  }
}

App.Routers.AboutRouter = AboutRouter;
