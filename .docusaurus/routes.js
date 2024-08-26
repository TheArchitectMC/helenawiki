import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', 'ca4'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/faq',
    component: ComponentCreator('/faq', '0a0'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '5e8'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '7b9'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '862'),
            routes: [
              {
                path: '/docs/database/DaedalusClass/intro',
                component: ComponentCreator('/docs/database/DaedalusClass/intro', 'd8d'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Amogus Vault',
                component: ComponentCreator('/docs/database/EleosClass/Amogus Vault', 'daa'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Anomics OG Prisons',
                component: ComponentCreator('/docs/database/EleosClass/Anomics OG Prisons', '4e2'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Apheleias Temple',
                component: ComponentCreator('/docs/database/EleosClass/Apheleias Temple', '1e4'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Aquatic Aurora',
                component: ComponentCreator('/docs/database/EleosClass/Aquatic Aurora', '269'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Arctic Bastion',
                component: ComponentCreator('/docs/database/EleosClass/Arctic Bastion', 'ec0'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Arctic Bastion 21',
                component: ComponentCreator('/docs/database/EleosClass/Arctic Bastion 21', 'afb'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Astraeus Citadel',
                component: ComponentCreator('/docs/database/EleosClass/Astraeus Citadel', '536'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Attis Vault',
                component: ComponentCreator('/docs/database/EleosClass/Attis Vault', '439'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/B Basement',
                component: ComponentCreator('/docs/database/EleosClass/B Basement', '601'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/B Complex',
                component: ComponentCreator('/docs/database/EleosClass/B Complex', 'fff'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/B Vault',
                component: ComponentCreator('/docs/database/EleosClass/B Vault', 'bff'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Branbert KC',
                component: ComponentCreator('/docs/database/EleosClass/Branbert KC', '29c'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Brunels Engine',
                component: ComponentCreator('/docs/database/EleosClass/Brunels Engine', 'df4'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/CAMPT Corporation',
                component: ComponentCreator('/docs/database/EleosClass/CAMPT Corporation', '3b8'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Catboys Crib',
                component: ComponentCreator('/docs/database/EleosClass/Catboys Crib', 'd35'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Cold Blooded Citadel',
                component: ComponentCreator('/docs/database/EleosClass/Cold Blooded Citadel', '738'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Crystal Vortex',
                component: ComponentCreator('/docs/database/EleosClass/Crystal Vortex', '9ea'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Daedalus Labyrinth',
                component: ComponentCreator('/docs/database/EleosClass/Daedalus Labyrinth', '65a'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Dark Shadows Vault',
                component: ComponentCreator('/docs/database/EleosClass/Dark Shadows Vault', '94f'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Deimos Prism',
                component: ComponentCreator('/docs/database/EleosClass/Deimos Prism', 'eae'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Delaydalus Labyrinth',
                component: ComponentCreator('/docs/database/EleosClass/Delaydalus Labyrinth', '23a'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Diamond Chamber',
                component: ComponentCreator('/docs/database/EleosClass/Diamond Chamber', '4ce'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Eleos Citadel',
                component: ComponentCreator('/docs/database/EleosClass/Eleos Citadel', 'ca9'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/FAACK Complex',
                component: ComponentCreator('/docs/database/EleosClass/FAACK Complex', 'c14'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Faculty Y',
                component: ComponentCreator('/docs/database/EleosClass/Faculty Y', '7b2'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Fortress Of Solitude',
                component: ComponentCreator('/docs/database/EleosClass/Fortress Of Solitude', '7b3'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Gaias Vault IBSMISOW',
                component: ComponentCreator('/docs/database/EleosClass/Gaias Vault IBSMISOW', '5ea'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Hades Vault KC',
                component: ComponentCreator('/docs/database/EleosClass/Hades Vault KC', '452'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Hells Tomb',
                component: ComponentCreator('/docs/database/EleosClass/Hells Tomb', '162'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Hells Tomb Revamped',
                component: ComponentCreator('/docs/database/EleosClass/Hells Tomb Revamped', 'b2b'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Hephaestus\'s Vault',
                component: ComponentCreator('/docs/database/EleosClass/Hephaestus\'s Vault', '066'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Hypnos Vault',
                component: ComponentCreator('/docs/database/EleosClass/Hypnos Vault', '2d5'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Icarus Tomb',
                component: ComponentCreator('/docs/database/EleosClass/Icarus Tomb', '00e'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Inescapable Cake',
                component: ComponentCreator('/docs/database/EleosClass/Inescapable Cake', 'c20'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Kojins Hearth',
                component: ComponentCreator('/docs/database/EleosClass/Kojins Hearth', 'eb5'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Liliths Temple',
                component: ComponentCreator('/docs/database/EleosClass/Liliths Temple', 'bda'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Lokis Final Vault',
                component: ComponentCreator('/docs/database/EleosClass/Lokis Final Vault', 'b7b'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Medusas Vault',
                component: ComponentCreator('/docs/database/EleosClass/Medusas Vault', '0ef'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Minervas Vault',
                component: ComponentCreator('/docs/database/EleosClass/Minervas Vault', '6c2'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Mini Vault 2',
                component: ComponentCreator('/docs/database/EleosClass/Mini Vault 2', '54a'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Mount Everest',
                component: ComponentCreator('/docs/database/EleosClass/Mount Everest', '2c0'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Napkins Moment',
                component: ComponentCreator('/docs/database/EleosClass/Napkins Moment', '737'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Napkins Smol',
                component: ComponentCreator('/docs/database/EleosClass/Napkins Smol', 'bc2'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Nemesis Citadel',
                component: ComponentCreator('/docs/database/EleosClass/Nemesis Citadel', '9ab'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Neptunes Monument',
                component: ComponentCreator('/docs/database/EleosClass/Neptunes Monument', 'f46'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Nyxs Temple',
                component: ComponentCreator('/docs/database/EleosClass/Nyxs Temple', '7dd'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Pandora\'s Vault Upgrade',
                component: ComponentCreator('/docs/database/EleosClass/Pandora\'s Vault Upgrade', 'ff4'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Poseidon\'s Vault Upgraded',
                component: ComponentCreator('/docs/database/EleosClass/Poseidon\'s Vault Upgraded', '2f6'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/PSUP',
                component: ComponentCreator('/docs/database/EleosClass/PSUP', 'e20'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Pumpkin Prison',
                component: ComponentCreator('/docs/database/EleosClass/Pumpkin Prison', '0a4'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Pyramid of Osiris',
                component: ComponentCreator('/docs/database/EleosClass/Pyramid of Osiris', '64c'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Ragnarok',
                component: ComponentCreator('/docs/database/EleosClass/Ragnarok', '525'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Raijins Leven',
                component: ComponentCreator('/docs/database/EleosClass/Raijins Leven', 'ee8'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Ravens Coffin',
                component: ComponentCreator('/docs/database/EleosClass/Ravens Coffin', '8ba'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Redwood Citadel',
                component: ComponentCreator('/docs/database/EleosClass/Redwood Citadel', 'f12'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Rheas Final Prism',
                component: ComponentCreator('/docs/database/EleosClass/Rheas Final Prism', '391'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Rock Bottom',
                component: ComponentCreator('/docs/database/EleosClass/Rock Bottom', 'ef7'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Sedimentary Penitentiary',
                component: ComponentCreator('/docs/database/EleosClass/Sedimentary Penitentiary', 'e99'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Smol Ruins',
                component: ComponentCreator('/docs/database/EleosClass/Smol Ruins', '18a'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Smol School',
                component: ComponentCreator('/docs/database/EleosClass/Smol School', '47c'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Smol Vault',
                component: ComponentCreator('/docs/database/EleosClass/Smol Vault', '253'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Snow Grave',
                component: ComponentCreator('/docs/database/EleosClass/Snow Grave', '1b2'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Solar Hell',
                component: ComponentCreator('/docs/database/EleosClass/Solar Hell', 'd5d'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Sunters Vault',
                component: ComponentCreator('/docs/database/EleosClass/Sunters Vault', '666'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Sunters Vault 2',
                component: ComponentCreator('/docs/database/EleosClass/Sunters Vault 2', 'c43'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Temple Of Ra',
                component: ComponentCreator('/docs/database/EleosClass/Temple Of Ra', '3d7'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/TGWBW Vault',
                component: ComponentCreator('/docs/database/EleosClass/TGWBW Vault', '482'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/THAW Citadel',
                component: ComponentCreator('/docs/database/EleosClass/THAW Citadel', 'ac8'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Backrooms',
                component: ComponentCreator('/docs/database/EleosClass/The Backrooms', '3df'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Basalt Vault',
                component: ComponentCreator('/docs/database/EleosClass/The Basalt Vault', '6ab'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Box',
                component: ComponentCreator('/docs/database/EleosClass/The Box', '877'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Cosmos',
                component: ComponentCreator('/docs/database/EleosClass/The Cosmos', '938'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The FAACK Rooms',
                component: ComponentCreator('/docs/database/EleosClass/The FAACK Rooms', 'd15'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Hadron',
                component: ComponentCreator('/docs/database/EleosClass/The Hadron', 'ac5'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Lock',
                component: ComponentCreator('/docs/database/EleosClass/The Lock', 'b67'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Matrix',
                component: ComponentCreator('/docs/database/EleosClass/The Matrix', 'c60'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Molotov',
                component: ComponentCreator('/docs/database/EleosClass/The Molotov', '585'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Mothership',
                component: ComponentCreator('/docs/database/EleosClass/The Mothership', 'e17'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Panopticon',
                component: ComponentCreator('/docs/database/EleosClass/The Panopticon', '1e1'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Pillar',
                component: ComponentCreator('/docs/database/EleosClass/The Pillar', 'fd7'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Pulsar',
                component: ComponentCreator('/docs/database/EleosClass/The Pulsar', 'c99'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Singularity',
                component: ComponentCreator('/docs/database/EleosClass/The Singularity', '799'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Sunshine Institute',
                component: ComponentCreator('/docs/database/EleosClass/The Sunshine Institute', 'b67'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Terra Capsule',
                component: ComponentCreator('/docs/database/EleosClass/The Terra Capsule', 'a64'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The TNT',
                component: ComponentCreator('/docs/database/EleosClass/The TNT', 'bff'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/The Wither Dungeon',
                component: ComponentCreator('/docs/database/EleosClass/The Wither Dungeon', 'db6'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Tigers Cage',
                component: ComponentCreator('/docs/database/EleosClass/Tigers Cage', '2ae'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Trying Its Best Vault',
                component: ComponentCreator('/docs/database/EleosClass/Trying Its Best Vault', '607'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Typhons Vault',
                component: ComponentCreator('/docs/database/EleosClass/Typhons Vault', 'a44'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Vault 69',
                component: ComponentCreator('/docs/database/EleosClass/Vault 69', '459'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Vault X',
                component: ComponentCreator('/docs/database/EleosClass/Vault X', 'd31'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Wesleys BOX',
                component: ComponentCreator('/docs/database/EleosClass/Wesleys BOX', '68e'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/EleosClass/Zero Tick Melon',
                component: ComponentCreator('/docs/database/EleosClass/Zero Tick Melon', '52d'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Akumas Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Akumas Vault', '8ee'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Apollos Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Apollos Vault', 'a3f'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Atlantis Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Atlantis Vault', 'f38'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Bankers Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Bankers Vault', 'a29'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Ciphers Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Ciphers Vault', 'ca3'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Citadel 32',
                component: ComponentCreator('/docs/database/GaeaClass/Citadel 32', '77a'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Cleopatras Tomb',
                component: ComponentCreator('/docs/database/GaeaClass/Cleopatras Tomb', 'c9e'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Erebus Abyss',
                component: ComponentCreator('/docs/database/GaeaClass/Erebus Abyss', '365'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Gaias Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Gaias Vault', '1e5'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Gleipnir',
                component: ComponentCreator('/docs/database/GaeaClass/Gleipnir', 'c09'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Helios Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Helios Vault', 'bfd'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Icy Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Icy Vault', 'edc'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Impel Down',
                component: ComponentCreator('/docs/database/GaeaClass/Impel Down', 'd21'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Kenos',
                component: ComponentCreator('/docs/database/GaeaClass/Kenos', '30c'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Kings Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Kings Vault', 'dc5'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Lucifers Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Lucifers Vault', 'a45'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Meteorite Prison',
                component: ComponentCreator('/docs/database/GaeaClass/Meteorite Prison', 'e5d'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Mount Olympus',
                component: ComponentCreator('/docs/database/GaeaClass/Mount Olympus', '8df'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Neptunes Last Wave',
                component: ComponentCreator('/docs/database/GaeaClass/Neptunes Last Wave', '963'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Nidavellir',
                component: ComponentCreator('/docs/database/GaeaClass/Nidavellir', '386'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Operators Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Operators Vault', '91b'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Percys Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Percys Vault', 'bd3'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Satans Arch',
                component: ComponentCreator('/docs/database/GaeaClass/Satans Arch', '9f5'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Tardos Cone',
                component: ComponentCreator('/docs/database/GaeaClass/Tardos Cone', '8da'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/The Chunk Border',
                component: ComponentCreator('/docs/database/GaeaClass/The Chunk Border', 'da3'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/The Infinity Vault',
                component: ComponentCreator('/docs/database/GaeaClass/The Infinity Vault', '43a'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/The Kingstone',
                component: ComponentCreator('/docs/database/GaeaClass/The Kingstone', '576'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/The Palantir',
                component: ComponentCreator('/docs/database/GaeaClass/The Palantir', 'aef'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/The Pyramid',
                component: ComponentCreator('/docs/database/GaeaClass/The Pyramid', 'aa9'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/The Ruby',
                component: ComponentCreator('/docs/database/GaeaClass/The Ruby', 'eee'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Ursa Major',
                component: ComponentCreator('/docs/database/GaeaClass/Ursa Major', '145'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Vault 36',
                component: ComponentCreator('/docs/database/GaeaClass/Vault 36', '750'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Vault 666',
                component: ComponentCreator('/docs/database/GaeaClass/Vault 666', 'f7d'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Vertex Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Vertex Vault', 'cee'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/GaeaClass/Zelictics Vault',
                component: ComponentCreator('/docs/database/GaeaClass/Zelictics Vault', '7a7'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/LostClass/Aress Fortress',
                component: ComponentCreator('/docs/database/LostClass/Aress Fortress', '9ab'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/LostClass/Bedrock Box',
                component: ComponentCreator('/docs/database/LostClass/Bedrock Box', 'e40'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/LostClass/Devils Lair',
                component: ComponentCreator('/docs/database/LostClass/Devils Lair', 'db7'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/LostClass/Netherite Vault',
                component: ComponentCreator('/docs/database/LostClass/Netherite Vault', 'e63'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/LostClass/Smoller Vault',
                component: ComponentCreator('/docs/database/LostClass/Smoller Vault', '562'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/LostClass/The Core',
                component: ComponentCreator('/docs/database/LostClass/The Core', 'ece'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/LostClass/The Cube',
                component: ComponentCreator('/docs/database/LostClass/The Cube', 'e27'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/LostClass/The Cube2',
                component: ComponentCreator('/docs/database/LostClass/The Cube2', '245'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/LostClass/The Midas Tower III',
                component: ComponentCreator('/docs/database/LostClass/The Midas Tower III', '018'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/LostClass/The Omega Vault',
                component: ComponentCreator('/docs/database/LostClass/The Omega Vault', 'a95'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/LostClass/Tluav Box',
                component: ComponentCreator('/docs/database/LostClass/Tluav Box', '7ca'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/LostClass/Typhons Column',
                component: ComponentCreator('/docs/database/LostClass/Typhons Column', 'fee'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Amazon Lily',
                component: ComponentCreator('/docs/database/MangrovesClass/Amazon Lily', '764'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Ametrine Impulse',
                component: ComponentCreator('/docs/database/MangrovesClass/Ametrine Impulse', '234'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Apotheosis',
                component: ComponentCreator('/docs/database/MangrovesClass/Apotheosis', '0a3'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Arctic Smol',
                component: ComponentCreator('/docs/database/MangrovesClass/Arctic Smol', '57f'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Atom Bomb',
                component: ComponentCreator('/docs/database/MangrovesClass/Atom Bomb', 'c73'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Auto Rooms',
                component: ComponentCreator('/docs/database/MangrovesClass/Auto Rooms', '973'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Big Citadel',
                component: ComponentCreator('/docs/database/MangrovesClass/Big Citadel', 'a51'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Catalocke',
                component: ComponentCreator('/docs/database/MangrovesClass/Catalocke', '5da'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Catboys Smol',
                component: ComponentCreator('/docs/database/MangrovesClass/Catboys Smol', '3cc'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Catboys Smoller',
                component: ComponentCreator('/docs/database/MangrovesClass/Catboys Smoller', '449'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Cathedrals Faith',
                component: ComponentCreator('/docs/database/MangrovesClass/Cathedrals Faith', '54d'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Cherry Wood Eye',
                component: ComponentCreator('/docs/database/MangrovesClass/Cherry Wood Eye', 'f05'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Cryofrost Citadel',
                component: ComponentCreator('/docs/database/MangrovesClass/Cryofrost Citadel', 'da7'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Cryofrost Container',
                component: ComponentCreator('/docs/database/MangrovesClass/Cryofrost Container', 'd54'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Diktaean Cave',
                component: ComponentCreator('/docs/database/MangrovesClass/Diktaean Cave', '61f'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Dwarven Keep',
                component: ComponentCreator('/docs/database/MangrovesClass/Dwarven Keep', '722'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Edge Of Destiny',
                component: ComponentCreator('/docs/database/MangrovesClass/Edge Of Destiny', '54e'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Eleos Citadel 21',
                component: ComponentCreator('/docs/database/MangrovesClass/Eleos Citadel 21', 'c89'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Erebus Citadel',
                component: ComponentCreator('/docs/database/MangrovesClass/Erebus Citadel', '65e'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Factory X',
                component: ComponentCreator('/docs/database/MangrovesClass/Factory X', '3f5'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Fractal Monument',
                component: ComponentCreator('/docs/database/MangrovesClass/Fractal Monument', 'd65'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Game & Watch',
                component: ComponentCreator('/docs/database/MangrovesClass/Game & Watch', '2a0'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/GAs 1 Chunk Prison',
                component: ComponentCreator('/docs/database/MangrovesClass/GAs 1 Chunk Prison', '20a'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Heavy Vault',
                component: ComponentCreator('/docs/database/MangrovesClass/Heavy Vault', 'ec6'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Hephaestus\' Vault',
                component: ComponentCreator('/docs/database/MangrovesClass/Hephaestus\' Vault', '8f1'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Hydrogen Powerplant',
                component: ComponentCreator('/docs/database/MangrovesClass/Hydrogen Powerplant', '8d7'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Iron Cage',
                component: ComponentCreator('/docs/database/MangrovesClass/Iron Cage', 'ff6'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/James Vault',
                component: ComponentCreator('/docs/database/MangrovesClass/James Vault', '7fd'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Kenadians Small Prisons',
                component: ComponentCreator('/docs/database/MangrovesClass/Kenadians Small Prisons', 'a17'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Mangroves Eye',
                component: ComponentCreator('/docs/database/MangrovesClass/Mangroves Eye', '99a'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Minimum Wage Vault',
                component: ComponentCreator('/docs/database/MangrovesClass/Minimum Wage Vault', 'f9e'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Monoliths Reprisal',
                component: ComponentCreator('/docs/database/MangrovesClass/Monoliths Reprisal', '5d2'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Neon Void',
                component: ComponentCreator('/docs/database/MangrovesClass/Neon Void', '625'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Nintendo Switch',
                component: ComponentCreator('/docs/database/MangrovesClass/Nintendo Switch', '553'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Nintendo Switch Lite',
                component: ComponentCreator('/docs/database/MangrovesClass/Nintendo Switch Lite', '68e'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Obitus',
                component: ComponentCreator('/docs/database/MangrovesClass/Obitus', '0c1'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Omega Citadel',
                component: ComponentCreator('/docs/database/MangrovesClass/Omega Citadel', 'f53'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/P-69',
                component: ComponentCreator('/docs/database/MangrovesClass/P-69', '6cd'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Peak 11',
                component: ComponentCreator('/docs/database/MangrovesClass/Peak 11', '216'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Piglins Crater',
                component: ComponentCreator('/docs/database/MangrovesClass/Piglins Crater', '269'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/PRISON',
                component: ComponentCreator('/docs/database/MangrovesClass/PRISON', '83b'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Project 113',
                component: ComponentCreator('/docs/database/MangrovesClass/Project 113', '813'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Rating System Vault',
                component: ComponentCreator('/docs/database/MangrovesClass/Rating System Vault', 'b6b'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/RAvenge',
                component: ComponentCreator('/docs/database/MangrovesClass/RAvenge', 'd70'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Ravens Retaliation',
                component: ComponentCreator('/docs/database/MangrovesClass/Ravens Retaliation', 'ea3'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Ravens Revenge',
                component: ComponentCreator('/docs/database/MangrovesClass/Ravens Revenge', 'acc'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Snack Fridge',
                component: ComponentCreator('/docs/database/MangrovesClass/Snack Fridge', '921'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Solitude\'s Solstice',
                component: ComponentCreator('/docs/database/MangrovesClass/Solitude\'s Solstice', '32a'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Stormable',
                component: ComponentCreator('/docs/database/MangrovesClass/Stormable', '954'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Survival Prison Speedrun',
                component: ComponentCreator('/docs/database/MangrovesClass/Survival Prison Speedrun', 'd72'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Temple Of Poseidon',
                component: ComponentCreator('/docs/database/MangrovesClass/Temple Of Poseidon', 'a71'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/The Acid Alps',
                component: ComponentCreator('/docs/database/MangrovesClass/The Acid Alps', 'f8d'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/The Arena',
                component: ComponentCreator('/docs/database/MangrovesClass/The Arena', '27b'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/The Cave',
                component: ComponentCreator('/docs/database/MangrovesClass/The Cave', '953'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/The Ecosystem',
                component: ComponentCreator('/docs/database/MangrovesClass/The Ecosystem', '154'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/The Fish Tank',
                component: ComponentCreator('/docs/database/MangrovesClass/The Fish Tank', 'aec'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/The Fox Den',
                component: ComponentCreator('/docs/database/MangrovesClass/The Fox Den', 'db7'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/The Hallucination',
                component: ComponentCreator('/docs/database/MangrovesClass/The Hallucination', 'edc'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/The Solar Eclipse',
                component: ComponentCreator('/docs/database/MangrovesClass/The Solar Eclipse', '46f'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/The Supernova',
                component: ComponentCreator('/docs/database/MangrovesClass/The Supernova', 'ec8'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/The Terrarium',
                component: ComponentCreator('/docs/database/MangrovesClass/The Terrarium', '406'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/The Wardens Den',
                component: ComponentCreator('/docs/database/MangrovesClass/The Wardens Den', 'd71'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Ton 618',
                component: ComponentCreator('/docs/database/MangrovesClass/Ton 618', 'd6b'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Vault Z',
                component: ComponentCreator('/docs/database/MangrovesClass/Vault Z', '686'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Velox',
                component: ComponentCreator('/docs/database/MangrovesClass/Velox', '2e3'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Vulcans Tower',
                component: ComponentCreator('/docs/database/MangrovesClass/Vulcans Tower', '21b'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Vulcans Vengeance',
                component: ComponentCreator('/docs/database/MangrovesClass/Vulcans Vengeance', 'b63'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Y-Positive',
                component: ComponentCreator('/docs/database/MangrovesClass/Y-Positive', '5df'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/MangrovesClass/Yoxy Vault',
                component: ComponentCreator('/docs/database/MangrovesClass/Yoxy Vault', '90b'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Admins Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Admins Vault', '570'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Apollos Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Apollos Vault', '3d2'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Apollos Vault2',
                component: ComponentCreator('/docs/database/PandoraClass/Apollos Vault2', '6b1'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Ares Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Ares Vault', '08e'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Ares Vault2',
                component: ComponentCreator('/docs/database/PandoraClass/Ares Vault2', '671'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Bifrost Complex',
                component: ComponentCreator('/docs/database/PandoraClass/Bifrost Complex', '268'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Chytons Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Chytons Vault', '1d0'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Creavault',
                component: ComponentCreator('/docs/database/PandoraClass/Creavault', '497'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Demonic Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Demonic Vault', '508'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Devils Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Devils Vault', 'd59'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Glaciers Orb',
                component: ComponentCreator('/docs/database/PandoraClass/Glaciers Orb', '021'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Guardians Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Guardians Vault', '510'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Hades Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Hades Vault', '0fb'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Hestias Grave',
                component: ComponentCreator('/docs/database/PandoraClass/Hestias Grave', 'b91'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Nyxes Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Nyxes Vault', 'f44'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Odysseus Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Odysseus Vault', '332'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Olympus Stronghold',
                component: ComponentCreator('/docs/database/PandoraClass/Olympus Stronghold', '3c5'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Pandoras Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Pandoras Vault', '257'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Perception Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Perception Vault', '533'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Poseidons Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Poseidons Vault', 'fc3'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Tartarus',
                component: ComponentCreator('/docs/database/PandoraClass/Tartarus', '670'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/The Alpha',
                component: ComponentCreator('/docs/database/PandoraClass/The Alpha', '406'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/The Black Hole',
                component: ComponentCreator('/docs/database/PandoraClass/The Black Hole', 'c80'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/The Chaos',
                component: ComponentCreator('/docs/database/PandoraClass/The Chaos', 'd75'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/The Cuckoos Nest',
                component: ComponentCreator('/docs/database/PandoraClass/The Cuckoos Nest', 'ef6'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/The Ender Chest',
                component: ComponentCreator('/docs/database/PandoraClass/The Ender Chest', 'fc6'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/The Fortress',
                component: ComponentCreator('/docs/database/PandoraClass/The Fortress', 'c21'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/The Obelisk',
                component: ComponentCreator('/docs/database/PandoraClass/The Obelisk', 'b3a'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Titans Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Titans Vault', '412'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Tomb of Anubis',
                component: ComponentCreator('/docs/database/PandoraClass/Tomb of Anubis', '071'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/PandoraClass/Zeus Vault',
                component: ComponentCreator('/docs/database/PandoraClass/Zeus Vault', 'a2f'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/database/synopsis',
                component: ComponentCreator('/docs/database/synopsis', '472'),
                exact: true,
                sidebar: "databaseSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '853'),
                exact: true
              },
              {
                path: '/docs/resources/Glossary/general',
                component: ComponentCreator('/docs/resources/Glossary/general', '24c'),
                exact: true,
                sidebar: "resourcesSidebar"
              },
              {
                path: '/docs/resources/synopsis',
                component: ComponentCreator('/docs/resources/synopsis', '4e8'),
                exact: true,
                sidebar: "resourcesSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'a34'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '739'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
