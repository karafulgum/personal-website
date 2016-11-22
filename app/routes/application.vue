<template lang="html">
  <div class="">
    <div class="nav">
      <div class="container">
        <div class="nav__content">
          <img src="../images/KLOGO-S.png" class="logo" alt="Kara Fulgum Logo">
          <ul class="nav__right">
            <li>
              <a href='#about' class="nav__right-item">About</a>
            </li>
            <li>
              <a href="#resume" class="nav__right-item">Resume</a>
            </li>
            <li>
              <a href="#portfolio" class="nav__right-item">Portfolio</a>
            </li>
            <li>
              <a href="#contact" class="nav__right-item">Contact</a>
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

      <div class="about" id="about">
        <p class="header"><span class="header__underline">About</span></p>
        <div class="container">
          <div class="about__content">
              <p class="about__body">Hi, I'm Kara Fulgum. I'm a Nashville native (there's so few of us now!) and a web developer. Before switching into tech, I was in public relations and marketing for six years. Becuase of that I have a unique perspective when it comes to building websites. Outside of work I enjoy playing with my golden retriever mix, going to the ballet, attending as many concerts as I can and co-organizing the Nashville meetup chapter of Tech Ladies.</p>
              <img src="../images/kara.jpg" class="about__img" alt="Kara Fulgum">
          </div>
        </div>
      </div>

      <div class="resume" id="resume">
        <p class="header header--light"><span class="header__underline">Resume</span></p>
        <div class="container">
          <div class="resume__content">
            <div class="resume__header">Education</div>
            <div class="resume__group">
              <p class="resume__date">Sept. 2016 - Dec. 2016</p>
              <div class="resume__info">
                <p class="resume__title">The Iron Yard</p>
                <p class="resume__subtitle">Front End Engineering Student</p>
              </div>
            </div>
            <div class="resume__group">
              <p class="resume__date">Jan. 2013 - June 2013</p>
              <div class="resume__info">
                <p class="resume__title">Florence University of the Arts</p>
                <p class="resume__subtitle">Study Abroad</p>
              </div>
            </div>
            <div class="resume__group">
              <p class="resume__date">Aug. 2010 - May 2014</p>
              <div class="resume__info">
                <p class="resume__title">Belmont University</p>
                <p class="resume__subtitle">Bachelor of Arts in Public Relations</p>
              </div>
            </div>

            <div class="resume__header">Employment</div>
            <div class="resume__group">
              <p class="resume__date">Nov. 2015 - Sept. 2016</p>
              <div class="resume__info">
                <p class="resume__title">Publicist</p>
                <p class="resume__subtitle">Crowd Surf</p>
                <ul class="resume__description">
                  <li class="resume__description-item">Responsible for managing day-to-day publicity for 5+ artists at a time</li>
                  <li class="resume__description-item">Generated media coverage by securing national and regional digital opportunities, writing and distributing press releases and managing interview requests</li>
                  <li class="resume__description-item">Maintained relationships with contacts at outlets inclduing Buzzfeed, Billboard, Huffington Post, Mashable, CMT, Sounds Like Nashville, Taste of Country and more</li>
                </ul>
              </div>
            </div>
            <div class="resume__group">
              <p class="resume__date">July 2014 - Nov. 2015</p>
              <div class="resume__info">
                <p class="resume__title">Publicity Assistant</p>
                <p class="resume__subtitle">Crowd Surf</p>
                <ul class="resume__description">
                  <li class="resume__description-item">Assisted publicity department in booking travel, keeping calendars and creating day sheets and talking points</li>
                  <li class="resume__description-item">Handled Spotify playlisting as well as social influencer research and outreach</li>
                  <li class="resume__description-item">Serviced press materials to the media and influencers</li>
                  <li class="resume__description-item">Hired and supervised publicity department interns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Index from './routes/index.vue';

export default {
  data() {
    return {
    };
  },

  mounted() {
  },

  methods: {

  },
};
</script>
