'use strict';

App.Routers = App.Routers || {};

class MembershipRouter extends Backbone.Router {
  constructor(options) {
    super(options);
    this.routes = {
      'membership': 'showMembership',
    };
    this._bindRoutes();
  }

  showMembership() {
    var app = this.startApp();
    app.show();
  }

  startApp() {
    return App.startSubApplication(MembershipApp);
  }
}

App.Routers.MembershipRouter = MembershipRouter;
