// http://aerendir.me/2018/04/06/managin-static-images-webpack-encore/
const imagesContext = require.context('../images', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);
imagesContext.keys().forEach(imagesContext);

// require('../images/icon-email.svg');
require('../css/mailhog.scss');

window.addEventListener('load', function() {
  var showTab = function() {
    if (!this.classList.contains('active')) {
      // Mark all tabs as not active.
      this.parentNode.parentNode.querySelectorAll('.nav-link').forEach(function(el) {
        el.parentNode.classList.remove('active')
        el.classList.remove('active')
      })

      // Hide all tab panes.
      this.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.tab-pane').forEach(function(el) {
        el.classList.remove('active')
      })

      this.parentNode.classList.add('active')
      this.classList.add('active')
      const match = /#(.+)$/.exec(this.href)
      if (match) {
        const target = document.getElementById(match[1])
        if (target) {
          target.classList.add('active')
        }
      }
    }
  }

  document.querySelectorAll('.nav-tabs .nav-link').forEach(function(el) {
    el.addEventListener('click', showTab);
  })
})
