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

      <div class="about">
        <p class="about__header"><span class="underline">About</span></p>
        <div class="container">
          <div class="about__content">
              <p class="about__body">Hi, I'm Kara Fulgum. I'm a Nashville native (there's so few of us now!) and a web developer. Before switching into tech, I was in public relations and marketing for six years. Becuase of that I have a unique perspective when it comes to building websites. Outside of work I enjoy playing with my golden retriever mix, going to the ballet, attending as many concerts as I can and co-organizing the Nashville meetup chapter of Tech Ladies.</p>
              <img src="../images/kara.jpg" class="about__img" alt="Kara Fulgum">
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
