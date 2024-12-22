const Footer = () => {
    return (
        <footer className="p-4 text-center">
            <p className="text-sm">© {new Date().getFullYear()} Weather Info App. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2 ">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
