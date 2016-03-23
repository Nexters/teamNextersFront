'use strict';

class ActivitiesApp {
  constructor(options) {
    this.region = options.region;
  }

  show() {
    var view = this.startView(ActivitiesView);
    view.show();
  }

  startView(View){
    if( this.currentView && this.currentView instanceof View ) {
      return this.currentView;
    }
    if( this.currentView && this.currentView.destroy) {
      this.currentView.destroy();
    }
    this.currentView = new View({region: this.region});
    return this.currentView;
  }
}
