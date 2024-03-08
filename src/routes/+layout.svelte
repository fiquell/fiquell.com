<script lang="ts">
  import { onMount } from 'svelte';
  import { expoOut } from 'svelte/easing';
  import { blur } from 'svelte/transition';
  import '../app.pcss';

  let isPageLoaded = false;

  onMount(() => {
    isPageLoaded = true;
  });
</script>

<svelte:head>
  <title>Fiquell ✺ Web Developer and Designer</title>
  <meta name="description" content="Crafting captivating websites for exciting online journeys" />
</svelte:head>

{#if isPageLoaded}
  <main transition:blur={{ delay: 500, duration: 2000, easing: expoOut }} class="container">
    <slot />
  </main>
{/if}
