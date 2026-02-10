import Image from "next/image";
import { services, projects, testimonials, team } from "@/data/mockData";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-between">
            {/* Hero Section */}
            <section className="w-full bg-slate-900 text-white py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Building Digital Excellence</h1>
                <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-slate-300">We provide top-notch web solutions optimized for your business growth.</p>
                <div className="flex justify-center gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
                        Get Started
                    </button>
                    <button className="bg-transparent border border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition-colors">
                        Learn More
                    </button>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="w-full py-20 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">We offer a wide range of digital services to help you succeed online.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="p-8 border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 font-bold">
                                {/* Icon placeholder if not using lucide directly here to avoid errors */}
                                sv
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="w-full py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
                        <p className="text-slate-600">See what we've built for our clients.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-56 w-full bg-slate-200">
                                    {/* In a real app, use next/image. Here we use a placeholder or check if image exists */}
                                    {project.image ? (
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200">
                                            <span className="text-sm">Image: {project.image}</span>
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 bg-slate-200" />
                                    )}
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">{project.category}</span>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="w-full py-20 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">What Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm">
                            <div className="flex mb-4 text-yellow-400">
                                ★★★★★
                            </div>
                            <p className="text-slate-700 italic mb-6 text-lg">"{testimonial.content}"</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-slate-200 mr-4"></div>
                                <div>
                                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="w-full py-20 px-4 bg-blue-600 text-white text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
                <p className="mb-10 text-blue-100 text-lg max-w-2xl mx-auto">Contact us today to discuss how we can help you achieve your digital goals.</p>
                <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-colors shadow-lg">
                    Contact Us
                </button>
            </section>
        </div>
    );
}
