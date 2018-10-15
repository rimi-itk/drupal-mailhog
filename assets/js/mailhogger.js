require('../css/mailhogger.scss');

window.addEventListener('load', function() {
  var showTab = function() {
    if (!this.classList.contains('active')) {
      // Mark all tabs as not active.
      this.parentNode.parentNode.querySelectorAll('.nav-link').forEach(function(el) {
        el.classList.remove('active')
      })

      // Hide all tab panes.
      this.parentNode.parentNode.parentNode.querySelectorAll('.tab-pane').forEach(function(el) {
        el.classList.remove('active')
      })

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
