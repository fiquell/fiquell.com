<script lang="ts">
  import { page } from '$app/stores';
  import { MetaTags } from 'svelte-meta-tags';
  import '../app.pcss';
</script>

<MetaTags
  title="Fiquell"
  titleTemplate="%s ✺ Web Developer and Designer"
  robots="index, follow"
  description="Crafting captivating websites for exciting online journeys"
  openGraph={{
    url: $page.url.href,
    type: 'website',
    images: [
      {
        url: `${$page.url.origin}/og-image.png`,
        alt: 'Open Graph Image',
        width: 6912,
        height: 4468,
        type: 'image/png'
      }
    ]
  }}
  additionalMetaTags={[
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#000000' }
  ]}
  additionalLinkTags={[
    { rel: 'icon', href: `${$page.url.origin}/favicon.ico` },
    { rel: 'apple-touch-icon', href: `${$page.url.origin}/apple-touch-icon.png` },
    { rel: 'manifest', href: `${$page.url.origin}/manifest.json` }
  ]} />

<slot />
