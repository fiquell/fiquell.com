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
    url: `${$page.url.origin}/`,
    type: 'website',
    images: [
      {
        url: `${$page.url.origin}/og-image.png`,
        type: 'image/png',
        width: 6912,
        height: 4468,
        alt: 'Open Graph Image'
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
