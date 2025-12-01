export type Project = {
    title: string,
    description: string,
    date: string,
    icon: React.ReactNode,
    github_link?: string,
    live_demo_link?: string,
}

export type Experience = {
    title: string,
    company: string,
    location: string,
    description: string,
    date: string,
    icon: React.ReactNode,
}

export type Position = 'none' | 'beforePrev' | 'prev' | 'current' | 'next' | 'afterNext'