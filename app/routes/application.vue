<template lang="html">
  <div class="" id="home">
    <div class="nav">
      <div class="container">
        <div class="nav__content">
          <a class="nav__home" href="#home"><img src="../images/KLOGO-S.png" class="logo" alt="Kara Fulgum Logo"></a>
          <ul class="nav__right">
            <li>
              <a href='#about' class="nav__right-item">About</a>
            </li>
            <li>
              <a href="#portfolio" class="nav__right-item">Portfolio</a>
            </li>
            <li>
              <a href="#resume" class="nav__right-item">Resume</a>
            </li>
            <li>
              <a href="#contact" class="nav__right-item">Contact</a>
            </li>
          </ul>
          <!-- <button class="hamburger hamburger--slider is-active" @click="showMenu" type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button> -->
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
              <div class="about__text">
                <p class="about__header">Hey there,</p>
                <p class="about__body">I'm a Nashville native (there's so few of us now!) and a web developer. A couple fun facts about me: I grew up training in classical ballet and fully embrace being a ginger.</p>
                <p class="about__body--2">After a six year career in public relations, I realized I wanted a new career where I could use my love of solving puzzles. That's where web development came in and I decided to dedicate three months to learning to code at <a href="http://www.theironyard.com" class="about__link" target="_blank">The Iron Yard</a>. Outside of work, I love playing with my golden retriever mix (Maggie), talking about Harry Potter and attending as many concerts as I can.</p>
                <!-- <p class="about__body--2">Outside of work, I love playing with my golden retriever mix (Maggie), talking about Harry Potter and attending as many concerts as I can.</p> -->
              </div>
              <img src="../images/kara.jpg" class="about__img" alt="Kara Fulgum">
          </div>
        </div>
      </div>

      <!-- TODO: fix overlay from being over the image -->
      <div class="portfolio" id="portfolio">
        <p class="header header--light"><span class="header__underline">Portfolio</span></p>
        <div class="container">
          <div class="portfolio__group">
            <div class="portfolio__image">
              <img src="../images/computer.png" class="portfolio__display" alt="">
              <img src="../images/puppies.png" class="portfolio__cover" alt="Puppies Project">
            </div>
            <div class="portfolio__description">
              <p class="portfolio__title">Puppies</p>
              <p class="portfolio__subtitle">Built with HTML, CSS, Bulma and Vue.js</p>
              <div class="portfolio__buttons">
                <a href="http://kf-puppies.surge.sh" class="portfolio__link" target="_blank" alt="Live Link">Live</a>
                <a href="https://github.com/karafulgum/17-puppy-adoption" class="portfolio__link" target="_blank" alt="Code">Code</a>
              </div>
            </div>
          </div>

          <div class="portfolio__group portfolio__group--reverse">
            <div class="portfolio__image">
              <img src="../images/computer.png" class="portfolio__display" alt="">
              <img src="../images/tshirts.png" class="portfolio__cover" alt="Tshirts Project">
              <img src="../images/ipad.png" class="portfolio__ipad">
              <img src="../images/tshirts-ipad.png" class="portfolio__mobile-cover">
            </div>
            <div class="portfolio__description portfolio__description--reverse">
              <p class="portfolio__title">T-Shirts</p>
              <p class="portfolio__subtitle">Built with HTML, CSS and SASS. Focusing on responsive design.</p>
              <div class="portfolio__buttons">
                <a href="http://kf-tshirts.surge.sh" class="portfolio__link" target="_blank" alt="Live Link">Live</a>
                <a href="https://github.com/karafulgum/06-tshirts" class="portfolio__link" target="_blank" alt="Code">Code</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="passions">
        <div class="container">
          <div class="passions__group">
            <p class="passions__item">Dog Mom</p>
            <p class="passions__item">Retired Ballerina</p>
            <p class="passions__item">Pizza Lover</p>
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

            <div class="resume__header">Skills</div>
            <div class="resume__group">
            <p class="resume__skills">HTML, CSS, SASS, JavaScript, Ember.js, Vue.js, Adonis.js, Node.js, Responsive Web Design</p>
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

      <div class="contact" id="contact">
        <div class="container">
          <!-- <p class="header"><span class="header__underline">Contact</span></p> -->
          <div class="contact__content">
           <p class="contact__header"><span class="header__underline">Let's keep in touch</span></p>
             <a href="mailto:karafulgum@gmail.com" class="contact__email"><i class="fa fa-envelope-o" aria-hidden="true"></i>karafulgum@gmail.com</a>
            <div class="contact__phone">
              <i class="fa fa-mobile" aria-hidden="true"></i><p class="contact__phone--number">615-574-8577</p>
            </div>
           <div class="contact__socials">
             <a target="_blank" href="http://www.github.com/karafulgum" class="contact__social"><i class="fa fa-github" aria-hidden="true"></i></a>
             <a target="_blank" href="http://www.linkedin.com/in/karafulgum" class="contact__social"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
             <a target="_blank" href="http://www.twitter.com/karafulgum" class="contact__social"><i class="fa fa-twitter" aria-hidden="true"></i></a>
             <a target="_blank" href="http://www.instagram.com/karafulgum" class="contact__social"><i class="fa fa-instagram" aria-hidden="true"></i></a>
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
    return {};
  },

  mounted() {},

  methods: {
    showMenu() {
      this.addEventListener("click", function() {
        this.classList.toggle("is-active");
      });
    }
  },
};
</script>
