const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold">YayasanJS</h3>
                        <p className="text-gray-400 text-sm mt-1">Building the digital future.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Yayasan Dharma Laksana. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
