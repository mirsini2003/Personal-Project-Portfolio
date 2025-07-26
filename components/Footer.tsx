
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral py-6">
            <div className="container mx-auto px-6 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Myrsini Kafetsi. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;