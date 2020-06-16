<template>
  <div>
    <Header/>
    <NavBar/>
    <div class="mainContainer">
      
      <Article/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from './header/Header.vue';
import NavBar from './nav-bar/NavBar.vue';
import Article from './article/Article.vue';

@Component({
  components: {
    Header,
    NavBar,
    Article,
  },
})
export default class HomePage extends Vue {}
</script>
