import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type FooterProp = {
    openForm: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Footer: React.FC<FooterProp> = ({ openForm }) => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    }

    const handleMouseLeave = () => {
        setHovered(null);
    }
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-title">
                    Explore WSMATH
                </div>
                <div className="footer-body">
                    <div>
                        &copy; 2025 WSMath
                    </div>
                    <div className="footer-links">
                        <Link
                            to ="/"
                            className="footer-link"
                            onClick={() => {
                                window.ET?.track("ClickButton", { description: "footer home page" });
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            to ="/ibdp"
                            className="footer-link"
                            onClick={() => {
                                window.ET?.track("ClickButton", { description: "footer ibdp page" });
                            }}
                        >
                            IBDP
                        </Link>
                        <Link
                            to ="/a-level"
                            className="footer-link"
                            onClick={() => {
                                window.ET?.track("ClickButton", { description: "footer a-level page" });
                            }}
                        >
                            A-Level
                        </Link>
                        <Link
                            to ="/igcse"
                            className="footer-link"
                            onClick={() => {
                                window.ET?.track("ClickButton", { description: "footer igcse page" });
                            }}
                        >
                            IGCSE
                        </Link>
                        <div
                            className="footer-link"
                            onClick ={(e) => {
                                openForm(e);
                                window.ET?.track("ClickButton", { description: "footer booking" });
                            }}
                        >
                            Book a Lesson!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;