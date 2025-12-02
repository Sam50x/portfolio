import type { Experience, Project, Skill } from "./types";

import lenzezProjectIcon from './assets/icons/lenzezProject.svg'
import xpenseProjectIcon from './assets/icons/xpenseProject.svg'
import sputnikProjectIcon from './assets/icons/sputnikProject.svg'
import ontrackProjectIcon from './assets/icons/ontrackProject.svg'
import filelockdownProjectIcon from './assets/icons/filelockdownProject.svg'
import iotProjectIcon from './assets/icons/iotProject.svg'
import RobotIcon from './assets/icons/robot.svg'
import MLIcon from './assets/icons/machinelearning.svg'

import D1 from './assets/images/D1.png'
import D2 from './assets/images/D2.png'
import D3 from './assets/images/D3.png'
import D4 from './assets/images/D4.png'
import D5 from './assets/images/D5.png'
import D6 from './assets/images/D6.png'
import D7 from './assets/images/D7.png'
import D8 from './assets/images/D8.png'

export const projects: Project[] = [
    {
        title: 'Lenzez',
        description: `An AI-Powered Photo Editor, where you choose the service you wish, upload your photo, then watch the magic happens.
        
        From removing or replacing a background, through generative-fill, all the way to enhancing quality.
        
        Tools: Next.js, Supabase, TailwindCSS, TypeScript, Cloudinary AI, and Vercel.`,
        date: 'July 2025',
        icon: <img src={lenzezProjectIcon} alt="Lenzez" />,
        github_link: 'https://github.com/Sam50x/lenzez',
        live_demo_link: 'https://lenzez.vercel.app',
    },
    {
        title: 'Sputnik ERP System',
        description: `An ERP system built for Sputnik to automate processes like their clients' data, sessions, employees' tasks, reports and more.

        Sputnik is a startup that delivers space-themed learning experiences to nurseries and schools.

        Tools: Node.js, express.js, prisma, PostgreSQL, neon, and Notion API.`,
        date: 'July 2025 - November 2025',
        icon: <img src={sputnikProjectIcon} alt="Sputnik" />,
    },
    {
        title: 'X-Pense',
        description: `An Expense Tracker where you log your transactions, manage your income, and control budgets by linking transactions to budgets.

        This web app was my first ever Full-Stack project that I built from start to finish, it took a long time but taught me a lot.

        Tools: Next.js, Supabase, TailwindCSS, TypeScript, and Vercel.`,
        date: 'March 2025 - May 2025',
        icon: <img src={xpenseProjectIcon} alt="X-Pense" />,
        github_link: 'https://github.com/Sam50x/x-pense',
        live_demo_link: 'https://x-pense-kappa.vercel.app',
    },
    {
        title: 'onTrack',
        description: `A Subscription Tracker where you log each of your subscriptions' details and the app reminds you when it's time to either pay or cancel the subscription.

        This app is what I built while teaching myself how to build mobile apps with React Native and Expo APIs. 

        Tools: React Native, Expo.io, EAS Build, and Supabase`,
        date: 'September 2025',
        icon: <img src={ontrackProjectIcon} alt="onTrack" />,
        github_link: 'https://github.com/Sam50x/ontrack',
    },
    {
        title: 'Smart Radar',
        description: `A smart radar built using ESP32 that detects near objects and calculate their distances, with a web dashboard connected with the hardware through HiveMQ.

        Built as a final-project of the IoT training in college.

        Tools: ESP32 toolkit, Next.js, HiveMQ, Supabase, TailwindCSS and TypeScript`,
        date: 'August 2025',
        icon: <img src={iotProjectIcon} alt="Smart Radar" />,
        github_link: 'https://github.com/Sam50x/iot-project',
    },
    {
        title: 'File Lockdown',
        description: `A file sharing system where you can upload files and store them.

        Built using an AWS S3 bucket for data storage as a final-project of a cloud computing course in college.

        Tools: Next.js, AWS, TailwindCSS, TypeScript, and Vercel.`,
        date: 'May 2025',
        icon: <img src={filelockdownProjectIcon} alt="File Lockdown" />,
        github_link: 'https://github.com/Sam50x/cloud-project',
    },
]

export const experiences: Experience[] = [
    {
        title: 'Machine Learning Trainee',
        company: 'DEPI',
        location: 'Online - Alexandria - Egypt',
        date: 'November 2025 - ongoing',
        description: `In the Machine Learning Track with DEPI I am gaining hands on practice on building and training AI/ML systems, deploying AI with cloud technologies, and the soft skills needed for career success.

        Topics: Machine Learning, Neural Networks, NLP, Computer Vision, Azure, and MLOps`,
        icon: <img src={MLIcon} alt='Machine Learning' />
    },
    {
        title: 'Backend Engineer',
        company: 'Sputnik',
        location: 'Alexandria - Egypt',
        date: 'July 2025 - November 2025',
        description: `Was Responsible for the backend infrastructure of the ERP system that was being built.

        - Designed the whole database system, which was a mix of 2 different databases.
        - Built most of the API endpoints interacting with the database.
        - Wrote Documentation for most of the steps taken, which is something really normal.

        Tools: Node.js, Express.js, Prisma, PostgreSQL, NotionAPI, and APIdog.`,
        icon: <img src={sputnikProjectIcon} alt='Sputnik' />
    },
    {
        title: 'IoT Trainee',
        company: 'Alexandria University',
        location: 'Alexandria - Egypt',
        date: 'July 2025 - August 2025',
        description: `In the IoT training in Alexandria University I gained hands on practice on building IoT devices, programming them, connecting them, and linking them with cloud services and dashboard applications.
        
        The Smart Radar project was created for this training, which was graded with 100%.
        
        Tools: ESP32 toolkit, C, HiveMQ, and Supabase`,
        icon: <img src={RobotIcon} alt='iot' />
    },
]

export const skills: Skill[] = [
    {
        title: 'Frontend',
        tools: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Figma', 'React Native', 'Expo.io']
    },
    {
        title: 'Backend',
        tools: ['Node.js', 'Express.js', 'Nest.js', 'PostgreSQL', 'Prisma', 'mongoose', 'Supabase', 'APIdog']
    },
    {
        title: 'Mobile',
        tools: ['React', 'React Native', 'Expo.io', 'EAS build']
    },
    {
        title: 'Software Engineering',
        tools: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Figma', 'React Native', 'Expo.io', 'EAS build', 'Node.js', 'Express.js', 'Nest.js', 'PostgreSQL', 'Prisma', 'mongoose', 'Supabase', 'APIdog']
    },
    {
        title: 'Machine Learning',
        tools: ['python', 'tensorflow', 'pytorch', 'scikit-learn', 'MLOps']
    },
    {
        title: 'Data Science',
        tools: ['python', 'Power bi', 'tensorflow', 'pytorch', 'scikit-learn', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'streamlit']
    },
    {
        title: 'Soft Skills',
        tools: ['A good team player', 'disciplined and hard working', 'creativity', 'always seeking to learn and improve']
    },
    {
        title: 'All',
        tools: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Figma', 'React Native', 'Expo.io', 'EAS build', 'Node.js', 'Express.js', 'Nest.js', 'PostgreSQL', 'Prisma', 'mongoose', 'Supabase', 'APIdog', 'python', 'Power bi', 'tensorflow', 'pytorch', 'scikit-learn', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'streamlit', 'A good team player', 'disciplined and hard working', 'creativity', 'always seeking to learn and improve']
    },
]

export const designs: string[] = [
    D1, D2, D3, D4, D5, D6, D7, D8,
]

export const positions = {
    none: 'transform w-0 h-0 hidden',
    beforePrev: 'transform bg-cards-dark-inactive scale-50 -rotate-10 z-0 -translate-y-40 -translate-x-3000 md:scale-70 md:translate-y-0 lg:rotate-0 lg:scale-80 opacity-0 h-0 w-0',
    prev: 'transform bg-cards-dark-inactive scale-50 -rotate-10 z-1 -translate-y-40 -translate-x-30 md:scale-70 md:translate-y-0 md:-translate-x-50 lg:rotate-0 lg:-translate-x-77 lg:scale-80 h-[500px] w-[320px]',
    current: 'transform bg-cards-dark z-2 w-[320px] h-[500px]',
    next: 'transform bg-cards-dark-inactive scale-50 rotate-10 z-1 -translate-y-40 translate-x-30 md:scale-70 md:translate-y-0 md:translate-x-50 lg:rotate-0 lg:translate-x-77 lg:scale-80 h-[500px] w-[320px]',
    afterNext: 'transform bg-cards-dark-inactive scale-50 rotate-10 z-0 -translate-y-40 translate-x-3000 md:scale-70 md:translate-y-0 lg:rotate-0 lg:scale-80 opacity-0 h-0 w-0',
}