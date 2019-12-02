<template>
  <div>
    <div class="loading-page" v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <slider :width="300" format="push" direction="left" :opacity="0.15" :links="[{'id': 1, 'text': 'More Information', 'url': scientist.sci_link}, {'id': 2, 'text': 'Author', 'url': 'https://github.com/marinapoltorak'}]"></slider>
      <main>
        <div class="name_and_field">
          <div class="name">
            {{ scientist.sci_name }}
          </div>
          <div class="field">
            {{ scientist.sci_field }}
          </div>
        </div>
        <hr>
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
<style scoped>
</style>
