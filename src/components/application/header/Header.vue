<template>
    <div>
        <header>
            
            <Logo/>
        </header>
        <div class="parallax">
            <!-- <img src="@/assets/berlin.jpg" alt=""> -->
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Logo from './Logo.vue';

window.addEventListener('scroll', function(){

  const img = document.querySelector('.parallax') as HTMLElement;
  
  img.style.transform = 'translate3d(0px, '+(-window.pageYOffset*0.2)+'px, 0px)';
})

@Component({
  components: {
    Logo,
  },
})
export default class Header extends Vue {}
</script>