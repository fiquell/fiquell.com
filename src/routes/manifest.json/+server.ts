import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
  return json(
    {
      name: 'Fiquell ✺ Web Developer and Designer',
      short_name: 'Fiquell',
      description: 'Crafting captivating websites for exciting online journeys',
      icons: [
        {
          src: `${url.origin}/192.png`,
          type: 'image/png',
          sizes: '192x192',
          purpose: 'any'
        },
        {
          src: `${url.origin}/192.png`,
          type: 'image/png',
          sizes: '192x192',
          purpose: 'maskable'
        },
        {
          src: `${url.origin}/512.png`,
          type: 'image/png',
          sizes: '512x512',
          purpose: 'any'
        },
        {
          src: `${url.origin}/512.png`,
          type: 'image/png',
          sizes: '512x512',
          purpose: 'maskable'
        }
      ],
      id: '/',
      start_url: '/',
      theme_color: '#000000',
      background_color: '#000000',
      display: 'standalone'
    },
    {
      headers: {
        'Content-Type': 'application/manifest+json'
      }
    }
  );
};
