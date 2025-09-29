// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Solutions',
      href: '#solutions',
    },
    {
      text: 'Training',
      href: '#training',
    },
    {
      text: 'Support',
      href: '#support',
    },
    {
      text: 'FAQ',
      href: '#faq',
    },
    {
      text: 'Team',
      href: '#team',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Level Up',
      links: [
        { text: 'Solutions', href: getPermalink('#solutions') },
        { text: 'Training', href: getPermalink('#training') },
      ],
    },
    {
      title: 'Behind The Beard',
      links: [
        { text: 'Contact', href: getPermalink('#contact') },
        { text: 'FAQ', href: getPermalink('#faq') },
        { text: 'Team', href: getPermalink('#team') },
      ],
    },
    {
      title: 'The Small Print',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    {
      customHtml: `
        <a href="//www.dmca.com/Protection/Status.aspx?ID=23179879-0f49-4d9c-b732-b3d562667881" 
           title="DMCA.com Protection Status" 
           class="dmca-badge"
           target="_blank" 
           rel="noopener noreferrer">
          <img src="https://www.dmca.com/Badges/dmca-badge-w200-5x1-10.png?ID=23179879-0f49-4d9c-b732-b3d562667881" 
               alt="DMCA.com Protection Status" />
        </a>
        <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></script>
      `,
    },
    {
      image: '/images/tp-dark.png',
      href: 'https://www.trustpilot.com/review/weirdbeardit.com',
    },
  ],

  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/weirdbeardit' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@WeirdBeardIT' },
  ],
  footNote: `
    © 2025 Weird Beard IT Limited (Company No. 16740585). All rights reserved.
  `,
};
