'use strict';

class AboutView extends Backbone.View {
  constructor(option) {
    super(option);
    this.region = option.region;
    this.template = _.template( $("#about-template").html());
  }

  render() {
    var renderedHTML = this.template();
    this.$el.html(renderedHTML);
    return this;
  }

  show(){
    this.region.show(this);
  }
}
