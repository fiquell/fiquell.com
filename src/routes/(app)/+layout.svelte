<script lang="ts">
  import { onMount } from 'svelte';
  import { expoOut } from 'svelte/easing';
  import { blur } from 'svelte/transition';

  let isPageLoaded = false;

  onMount(() => {
    isPageLoaded = true;
  });
</script>

{#if isPageLoaded}
  <main transition:blur={{ delay: 500, duration: 2000, easing: expoOut }} class="container">
    <slot />
  </main>
{/if}
