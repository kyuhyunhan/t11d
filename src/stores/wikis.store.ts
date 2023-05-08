import { readable } from 'svelte/store';

export interface Wiki {
  title: string;
  slug: string;
  isPublished: boolean;
  datePublished: Date;
}

export const wikis = readable<Wiki[]>([
  {
    title: 'My First Post',
    slug: 'wiki/my-first-post',
    isPublished: true,
    datePublished: new Date('2023-01-01'),
  },
]);