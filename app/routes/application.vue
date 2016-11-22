<template lang="html">
  <div class="">
    <div class="nav">
      <div class="container">
        <div class="nav__content">
          <img src="../images/KLOGO-S.png" class="logo" alt="Kara Fulgum Logo">
          <ul class="nav__right">
            <li>
              <router-link to='#' class="nav__right-item">About</router-link>
            </li>
            <li>
              <router-link to='#' class="nav__right-item">Resume</router-link>
            </li>
            <li>
              <router-link to='#' class="nav__right-item">Portfolio</router-link>
            </li>
            <li>
              <router-link to='#' class="nav__right-item">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="app__content">
      <div class="hero">
        <div class="container">
          <div class="hero__content">
            <div class="hero__content-title">Kara Fulgum</div>
            <div class="hero__content-subtitle">Web Developer</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
