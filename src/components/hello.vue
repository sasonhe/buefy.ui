<template>
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>

        <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fa fa-lg fa-github"></i>
          </span>
        </a>

        <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fa fa-lg fa-twitter"></i>
          </span>
        </a>

        <div class="navbar-burger burger" data-target="navMenuTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenuTransparentExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item " href="http://bulma.io/expo/">
              <span class="bd-emoji">⭐️</span>
              Expo
            </a>
            <a class="navbar-item " href="http://bulma.io/love/">
              <span class="bd-emoji">❤️</span>
              Love
            </a>
          <a class="navbar-item " href="http://bulma.io/expo/">
            <span class="bd-emoji">⭐️</span>
            Expo
          </a>
          <a class="navbar-item " href="http://bulma.io/love/">
            <span class="bd-emoji">❤️</span>
            Love
          </a>
        </div>

        <div class="navbar-end">
          <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fa fa-lg fa-github"></i>
            </span>
          </a>
          <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" style="color: #55acee;">
              <i class="fa fa-lg fa-twitter"></i>
            </span>
          </a>
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="http://bulma.io"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
                  <span class="icon">
                    <i class="fa fa-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>

              </p>
              <p class="control">
                <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.3.zip">
                  <span class="icon">
                    <i class="fa fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
export default{
    components:{

    }
};
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>
<style scoped>
</style>
