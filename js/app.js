class DefaultRouter extends Backbone.Router{
  constructor(options) {
    super(options);
    this.routes = {
      '': 'defaultRoute'
    };

    this._bindRoutes();
  }

  defaultRoute() {

  }
}

var App = {
  Models:{},
  Collections:{},
  Routers:{},

  start(){
    //route 초기화
    _.each(_.values(this.Routers), function(Router) {
      new Router();
    });

    //서브어플리케이션 이 위치할 mainRegion 지정
    App.mainRegion = new Region({el: '#main'});
    //global route 생성
    App.router = new DefaultRouter();

    Backbone.history.start();
  },

  //서브 어플리케이션은 하나만 실행되고 있어야 한다
  startSubApplication(SubApplication){
    if( this.currentSubApp && this.currentSubApp instanceof SubApplication ){
      return this.currentSubApp;
    }
    if( this.currentSubApp && this.currentSubApp.destroy ){
      this.currentSubApp.destroy();
    }
    //서브 어플리케이션 생성
    this.currentSubApp = new SubApplication({region: App.mainRegion});
    return this.currentSubApp;
  }
}

window.App = App;
