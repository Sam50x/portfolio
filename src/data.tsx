import type { Project } from "./types";

import lenzezProjectIcon from './assets/icons/lenzezProject.svg'

export const projects: Project[] = [
    {
        title: 'Lenzez',
        description: `An AI-Powered Photo Editor, where you choose the service you wish, upload your photo, then watch the magic happens.
        
        From removing or replacing a background, through generative-fill, all the way to enhancing quality.
        
        Tools: Next.js, Supabase, TailwindCSS, Cloudinary AI, and Vercel.`,
        date: 'July 2025',
        icon: <img src={lenzezProjectIcon} alt="Lenzez" />,
        github_link: 'https://github.com/Sam50x/lenzez',
    },
    {
        title: 'Lenzez',
        description: `An AI-Powered Photo Editor, where you choose the service you wish, upload your photo, then watch the magic happens.
        
        From removing or replacing a background, through generative-fill, all the way to enhancing quality.
        
        Tools: Next.js, Supabase, TailwindCSS, Cloudinary AI, and Vercel.`,
        date: 'July 2025',
        icon: <img src={lenzezProjectIcon} alt="Lenzez" />,
        github_link: 'https://github.com/Sam50x/lenzez',
    },
    {
        title: 'Lenzez',
        description: `An AI-Powered Photo Editor, where you choose the service you wish, upload your photo, then watch the magic happens.
        
        From removing or replacing a background, through generative-fill, all the way to enhancing quality.
        
        Tools: Next.js, Supabase, TailwindCSS, Cloudinary AI, and Vercel.`,
        date: 'July 2025',
        icon: <img src={lenzezProjectIcon} alt="Lenzez" />,
        github_link: 'https://github.com/Sam50x/lenzez',
    },
    {
        title: 'Lenzez',
        description: `An AI-Powered Photo Editor, where you choose the service you wish, upload your photo, then watch the magic happens.
        
        From removing or replacing a background, through generative-fill, all the way to enhancing quality.
        
        Tools: Next.js, Supabase, TailwindCSS, Cloudinary AI, and Vercel.`,
        date: 'July 2025',
        icon: <img src={lenzezProjectIcon} alt="Lenzez" />,
        github_link: 'https://github.com/Sam50x/lenzez',
    },
    {
        title: 'Lenzez',
        description: `An AI-Powered Photo Editor, where you choose the service you wish, upload your photo, then watch the magic happens.
        
        From removing or replacing a background, through generative-fill, all the way to enhancing quality.
        
        Tools: Next.js, Supabase, TailwindCSS, Cloudinary AI, and Vercel.`,
        date: 'July 2025',
        icon: <img src={lenzezProjectIcon} alt="Lenzez" />,
        github_link: 'https://github.com/Sam50x/lenzez',
    },
]

export const positions = {
    none: 'transform w-0 h-0 hidden',
    beforePrev: 'transform bg-cards-dark-inactive scale-50 -rotate-10 z-0 -translate-y-40 -translate-x-3000 md:scale-70 md:translate-y-0 lg:rotate-0 lg:scale-80 opacity-0 h-0 w-0',
    prev: 'transform bg-cards-dark-inactive scale-50 -rotate-10 z-1 -translate-y-40 -translate-x-30 md:scale-70 md:translate-y-0 md:-translate-x-50 lg:rotate-0 lg:-translate-x-77 lg:scale-80 h-[500px] w-[320px]',
    current: 'transform bg-cards-dark z-2 w-[320px] h-[500px]',
    next: 'transform bg-cards-dark-inactive scale-50 rotate-10 z-1 -translate-y-40 translate-x-30 md:scale-70 md:translate-y-0 md:translate-x-50 lg:rotate-0 lg:translate-x-77 lg:scale-80 h-[500px] w-[320px]',
    afterNext: 'transform bg-cards-dark-inactive scale-50 rotate-10 z-0 -translate-y-40 translate-x-3000 md:scale-70 md:translate-y-0 lg:rotate-0 lg:scale-80 opacity-0 h-0 w-0',
}