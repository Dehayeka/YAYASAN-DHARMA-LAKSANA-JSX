export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    description?: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
}
