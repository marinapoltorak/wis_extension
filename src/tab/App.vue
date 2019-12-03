<template>
  <div>
    <div class="loading-page" v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else>
    <nav>
      <div class="reload">
        <a v-on:click="getScientist()"><i class="material-icons">refresh</i></a>
      </div>
      <h1>WOMEN IN SCIENCE</h1>
      <slider :width="350" format="push" direction="left"     :opacity="0.15" :links="[
      {'id': 1, 'text': 'More Information about this scientist', 'url': scientist.sci_link},
      {'id': 2, 'text': 'Association For Women In Science', 'url': 'https://www.awis.org/'},
      {'id': 3, 'text': 'List of Women Scientist, 21st Century', 'url': 'https://en.wikipedia.org/wiki/List_of_female_scientists_in_the_21st_century'},
      {'id': 4, 'text': 'List of Female Scientists Before the 20th Century', 'url': 'https://en.wikipedia.org/wiki/List_of_female_scientists_before_the_20th_century'},
      {'id': 5, 'text': 'Timeline of Women in Science', 'url': 'https://en.wikipedia.org/wiki/Timeline_of_women_in_science'},
      {'id': 6, 'text': 'Marina Poltorak', 'url': 'https://github.com/marinapoltorak'},
      ]">
      </slider>
    </nav>

      <main>
        <div class="name_and_field">
          <div class="name">
            {{ scientist.sci_name }}
          </div>
          <div class="field">
            {{ scientist.sci_field }}
          </div>
        </div>
        <div style="text-align:center">
          <img v-bind:src="'http://localhost:8000' + scientist.sci_image"/>
          <div class="big_stuff valign-wrapper">{{ scientist.sci_big_stuff }}</div>
        </div>
        <hr>
        <div class="bio">
          {{ scientist.sci_bio }}
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Slider from '@jeremyhamm/vue-slider'

export default {
  data () {
    return {
      loading: true,
      scientist: {},
    }
  },
  methods: {
    getScientist() {
      axios.get(
        "http://localhost:8000/api/scientist/",
        { 'headers': { 'Accept': 'application/json' }}
      )
      .then(res => {
        this.scientist = res.data;
        console.log(this.scientist)
        this.loading = false;
      });
    }
  },
  mounted() {
    this.getScientist()
  },
  components: {
    'slider': Slider
  }
}
</script>
<style>
html {
  background-image: url("../images/morocco.png");
  color: #2C3142;
}
#app {
  min-width: 100vw;
  min-height: 100vh;
}

.navMenu {
  background: #E8988A !important;

}

.navMenu a {
  color: #2C3142 !important;
  font-size: 50px;
  font-family: 'Chonburi', cursive;
}

.navMenu a:hover {
  color: #E8988A !important;
  background-color: rgba(245, 243, 244, 0.67);
}

.material-icons.pointer {
  cursor: pointer;
}
.material-icons:hover {
  cursor: pointer;
}

.bio {
  font-size: 20px;
  font-family: 'Sulphur Point', sans-serif;
}

.name_and_field {
  margin: 10px;
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: flex-end;
  font-size: 30px;
  font-family: 'Chonburi' ,cursive;
}

.field {
  color: #4BADC4;
  font-style: italic;
}
h1 {
  color: #2C3142 !important;
  font-size: 35px;
  font-family: 'Sulphur Point', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50vw;
  margin: 5px 0px;
  padding: 5px 0px;

}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75vw;
  margin: auto;
  padding: 20px 20px;
  background-color: rgba(245, 243, 244, 0.67);
  flex: 1 0 auto;
}

i.material-icons {
  font-weight: bold;
  color: #75576E;
}
.navIcon {
  color: #75576E;
  font-weight: bold;
  padding-right: 0px;
  padding-left:0px;
}

@media (max-width: 800px) {
  main  {
    flex-direction:column;
    min-width: 600px;
  }

  img {
    max-height: 50px;
    max-width: 50px;
  }

}

.big_stuff {
  font-size:25px;
  padding: 2px;
  color: #E8988A;
  font-weight: bolder;
  justify-content: space-between;
  align-items: center;
  display:flex;
  flex-direction:column;
  font-family: 'Chonburi', cursive;
  margin: 2px;
}

nav {
  background-image: url("../images/morocco.png");
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 25px;
  padding: 5px 20px;
  /* background-color: rgba(245, 243, 244, 0.75); */
  flex: 1 0 auto;
}

a.brand-logo {
  color: #100f1a;
  font-size: 30px;
  font-family: 'Vast Shadow', cursive;
  margin: auto;
  padding: 20px 20px;
  background-color: rgba(245, 243, 244, 0.67);
  flex: 1 0 auto;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row;
}


img {
  max-width:600px;
  max-height:400px;
}

button.sidenav-trigger {
  background-color: #625b75;
}

nav a {
  color: #e9e6ed;
  font-weight: bolder;
  font-family: 'Sulphur Point', sans-serif;
  font-size: 20px;
}
</style>
