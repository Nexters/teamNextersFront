'use strict';

class Region {
  //render되는 DOM element 를 지정
  constructor(options){
    this.el = options.el;
  }
  //view 보기
  show(view){
    this.closeView(this.currentView);
    this.currentView = view;
    this.openView(view);
  }

  //view 종료
  closeView(view){
    if(view && view.remove) {
      view.remove();
    }
  }
  //view 를 $el 에 render한다.
  openView(view){
    this.ensureEl();
    view.render();
    this.$el.html(view.el);
  }
  //$el 어트리뷰트 생성.
  ensureEl(){
    if(this.$el) return;
    this.$el = $(this.el);
  }
  //region 파괴.
  remove() {
    this.closeView(this.currentView);

  }
}
