import { Service, Project, Testimonial, TeamMember } from '../types';

export const services: Service[] = [
    {
        id: 1,
        title: "Web Development",
        description: "Building responsive and modern websites tailored to your needs.",
        icon: "code"
    },
    {
        id: 2,
        title: "Mobile Apps",
        description: "Creating seamless mobile experiences for iOS and Android.",
        icon: "smartphone"
    },
    {
        id: 3,
        title: "Digital Marketing",
        description: "Boosting your online presence with strategic marketing campaigns.",
        icon: "trending-up"
    }
];

export const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "/uploads/project1.jpg"
    },
    {
        id: 2,
        title: "Portfolio Website",
        category: "Design",
        image: "/uploads/project2.jpg"
    },
    {
        id: 3,
        title: "Task Management App",
        category: "Mobile App",
        image: "/uploads/project3.jpg"
    }
];

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "John Doe",
        role: "CEO, TechCorp",
        content: "Excellent service! The team delivered beyond our expectations.",
        avatar: "/assets/images/avatar1.jpg"
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Marketing Director",
        content: "Professional and timely delivery. Highly recommended.",
        avatar: "/assets/images/avatar2.jpg"
    }
];

export const team: TeamMember[] = [
    {
        id: 1,
        name: "Alice Johnson",
        role: "Lead Developer",
        image: "/assets/images/team1.jpg"
    },
    {
        id: 2,
        name: "Bob Williams",
        role: "Designer",
        image: "/assets/images/team2.jpg"
    }
];
