'use strict';

App.Routers = App.Routers || {};

class ActivitiesRouter extends Backbone.Router {
  constructor(options) {
    super(options);
    this.routes = {
      'activities': 'showActivities'
    };
    this._bindRoutes();
  }

  showActivities() {
    var app = this.startApp();
    app.show();
  }

  startApp() {
    return App.startSubApplication(ActivitiesApp);
  }
}

App.Routers.ActivitiesRouter = ActivitiesRouter;
