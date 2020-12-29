<template>
  <b-modal id="project" size="lg" hide-footer hide-header centered>
    <b-container>
      <b-row>
        <b-col>
          <b-carousel class="mb-3"
                      controls
                      indicators>
            <b-carousel-slide v-for="image in project.image"
                              :key="image.id"
                              :img-src="$store.getters.getApiUrl + image.url"
            ></b-carousel-slide>
          </b-carousel>
          <div class="d-flex justify-content-between">
            <h5>{{project.title}}</h5>
            <span class="mr-3">
              <a class="mr-3 font-weight-normal" :href="project.url_source_code" target="_blank"><font-awesome-icon :icon="['fas', 'code']" /> Source Code</a>
              <a class="font-weight-normal" :href="project.url_demo" target="_blank"><font-awesome-icon :icon="['fas', 'external-link-alt']" /> Demo</a>
          </span>
          </div>
          <vue-simple-markdown class="mb-3" :source="project.description"></vue-simple-markdown>
          <b-badge variant="dark" class="mr-2" v-for="technology in project.technologies" :key="technology.id">
            {{technology.name}}
          </b-badge>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
  export default {
    name: "project",
    props: ['project'],
  }
</script>

<style>
  .carousel-control-next,
  .carousel-control-prev /*, .carousel-indicators */ {
    filter: invert(75%);
  }

  .carousel-indicators li {
    filter: invert(75%);
  }
  a.carousel-control-next:after,
  a.carousel-control-next:after,
  a.carousel-control-prev:after,
  a.carousel-indicators:focus:after,
  a.carousel-indicators:after {
    background-color: transparent;
  }
</style>