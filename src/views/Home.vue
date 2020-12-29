<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="isLoaded" key="loaded">
        <b-container class="mb-5">
          <!--#region Name-->
          <b-row>
            <b-col>
              <h1>Hi, I'm Mike.</h1>
            </b-col>
          </b-row>
          <!--#endregion-->

          <!--#region Desc-->
          <b-row>
            <b-col>
              <pre>{{headerDesc}}</pre>
            </b-col>
          </b-row>
          <!--#endregion-->

          <!--#region Links-->
          <b-row>
            <b-col class="mb-3">
              <a v-for="link in links" :key="link.id" :href="link.url" target="_blank" class="font-weight-normal mr-3">
                <font-awesome-icon size="lg" :icon="[link.prefix, link.icon_name]" />
                {{link.name}}
              </a>
            </b-col>
          </b-row>
          <!--#endregion-->
        </b-container>

        <b-container>
          <b-row>
            <!--#region Work-->
            <b-col lg="6" class="mb-5">
              <h5>Work</h5>
              <p v-for="experience in experiences" :key="experience.id">
                <span class="small font-weight-light">{{experience.dates}}</span> <br>
                {{experience.position}} @ <a :href="experience.company_url">{{experience.company}}</a>
              </p>
            </b-col>
            <!--#endregion-->

            <!--#region Projects-->
            <b-col lg="6">
              <h5>Projects</h5>
              <span v-for="project in projects" :key="project.id">
                <span @click="showProjectModal(project)">
                  <a>{{project.title}}</a>
                </span>
                <span class="small font-italic font-weight-light"> {{project.type}}</span>
                <br>
              </span>
            </b-col>
            <!--#endregion-->
          </b-row>
        </b-container>
      </div>
      <!--#region loading spinner-->
      <div class="text-center" v-else key="loading">
        <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
      </div>
      <!--#endregion-->
    </transition>
    <project-modal :project="currentProject"/>
  </div>
</template>

<script>
  import projectModal from '@/components/projectModal'

  export default {
    name: 'Home',
    components: {
      projectModal
    },
    data() {
      return {
        loaded: true,
        currentProject: {}
      }
    },
    methods: {
      showProjectModal(project) {
        this.currentProject = project
        this.$bvModal.show("project")
      }
    },
    computed: {
      email() {
        return this.$store.getters.getEmail
      },
      links() {
        return this.$store.getters.getLinks
      },
      headerDesc() {
        return this.$store.getters.getHeaderDesc
      },
      experiences() {
        return this.$store.getters.getExperiences
      },
      projects() {
        return this.$store.getters.getProjects
      },
      isLoaded() {
        return this.$store.getters.getIsHomeLoaded
      }
    },
    mounted() {
      this.$store.dispatch("setEmailLinksHeader")
      this.$store.dispatch("setExperience")
      this.$store.dispatch("setProjects")
    }
  }
</script>

<style scoped>
  h5 {
    letter-spacing: .4rem;
    text-transform: uppercase;
  }
</style>