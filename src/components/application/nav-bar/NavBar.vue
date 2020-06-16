<template>
  <div>

    <b-navbar class="navBar" toggleable="lg">
    <b-navbar-brand href="#">Home</b-navbar-brand>

    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <b-navbar-nav>
        <b-nav-item-dropdown text="O mnie">
          <b-dropdown-item href="#">Referencje</b-dropdown-item>
          <b-dropdown-item href="#">Doświadczenie</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Strzał</b-nav-item>
        <b-nav-item href="#">Korepetycje</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';



window.addEventListener('scroll', function() {
  
  const nav = document.querySelector('.navBar') as HTMLElement;
  const topOfNav = nav.offsetTop;
  console.log(topOfNav);
  
  if(window.scrollY>=300){
    nav.classList.add('fixedNav');
  }else{
    nav.classList.remove('fixedNav');
  } 
  // target.style.transform = 'translate3d(0px, '+window.pageYOffset*1.5+'px, 0px)';
  // target.style.background = '#ffcc00'
})

@Component
export default class NavBar extends Vue {}
</script>