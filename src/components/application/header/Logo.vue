<template>
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
            <div class="logoSpans">
                <span id="black">Szko</span>
                <span id="red">pen</span>
                <span id="yellow">haga</span>
            </div>
        </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {}
</script>