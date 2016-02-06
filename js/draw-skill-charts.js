 $(function() {
  $('.web-design').easyPieChart({
    barColor: "#3c989e",
    easing: 'easeOutElastic',
    delay: 3000,
    trackColor: "#f7f7f7",
    lineWidth: 13,
    lineCap: 'butt',
    scaleColor: false,
    size: 160,
    onStep: function(from, to, percent) {
    this.el.children[0].innerHTML = Math.round(percent);
    }
  });

  $('.html-css').easyPieChart({
    barColor: "#ed5276",
    easing: 'easeOutElastic',
    delay: 3000,
    trackColor: "#f7f7f7",
    lineWidth: 13,
    lineCap: 'butt',
    scaleColor: false,
    size: 160,
    onStep: function(from, to, percent) {
    this.el.children[0].innerHTML = Math.round(percent);
    }
  });

  $('.graphic-design').easyPieChart({
    barColor: "#5db5a4",
    easing: 'easeOutElastic',
    delay: 3000,
    trackColor: "#f7f7f7",
    lineWidth: 13,
    lineCap: 'butt',
    scaleColor: false,
    size: 160,
    onStep: function(from, to, percent) {
    this.el.children[0].innerHTML = Math.round(percent);
    }
  });

  $('.ui-ux').easyPieChart({
    barColor: "#f57a82",
    easing: 'easeOutElastic',
    delay: 3000,
    trackColor: "#f7f7f7",
    lineWidth: 13,
    lineCap: 'butt',
    scaleColor: false,
    size: 160,
    onStep: function(from, to, percent) {
    this.el.children[0].innerHTML = Math.round(percent);
  }
  });
});
