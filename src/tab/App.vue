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
