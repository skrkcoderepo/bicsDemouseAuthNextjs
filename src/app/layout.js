'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './globals.css'
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';
import userContext from '@/context/usersContext';
import data from '@/app/dat/staticValue'

export default function RootLayout({ children }) {
    const [mobileSite, setMobileSite] = useState(false);
    const [curdMode, setCurdMode] = useState({
        u: false,
        d: false,
        c: false,
        r: false,
        userID: false, // this will hold the particular userID whenever an event is triggered on entire CURD mode Operation
        modalCurdDialog: false, // this value is responsible for modalDialog open Close event
    });
    const [userlist, setUserlist] = useState([]);

    // this below func will set the initial user Dummy Data.
    function initData(){
        setUserlist(data.users);
    }

    useEffect(() => {
        initData()
    }, [])

    // the below is a simple function to handel the UX experience for mobile site Nav bar
    function setBodyClass() {
        setMobileSite(!mobileSite);
    }
    return (
        <userContext.Provider value={{ userlist, setUserlist, curdMode, setCurdMode }}>
            <html lang="en">
                <body className={mobileSite ? "mobile-nav-active" : ""}>

                    <i onClick={() => setBodyClass()} className="bi bi-list mobile-nav-toggle d-lg-none"></i>
                    {/* ======= Header ======= */}
                    <header
                        id="header"
                        className="d-flex flex-column justify-content-center"
                    >
                        <nav id="navbar" className="navbar nav-menu">
                            <ul>
                                <li>
                                    <Link
                                        href="/"
                                        onClick={() => setBodyClass()}
                                        className="nav-link scrollto active"
                                    >
                                        <i className="bx bx-home" />
                                        <span>Home</span>
                                    </Link>
                                </li>
                                {/* <li>
                                <Link href="/about" className="nav-link scrollto">
                                    <i className="bx bx-user" />
                                    <span>About</span>
                                </Link>
                            </li> */}
                                <li>
                                    <Link href="/admin" onClick={() => setBodyClass()} className="nav-link scrollto">
                                        <i className="bx bx-file-blank" />
                                        <span>Simple CURD</span>
                                    </Link>
                                </li>
                                {/* <li>
                                <a
                                    href="/profile"
                                    className="nav-link scrollto"
                                >
                                    <i className="bx bx-book-content" />
                                    <span>My Profile</span>
                                </a>
                            </li> */}
                                {/* <li>
                                <a
                                    href="#services"
                                    className="nav-link scrollto"
                                >
                                    <i className="bx bx-server" />
                                    <span>Features</span>
                                </a>
                            </li> */}
                                {/* <li>
                                <a
                                    href="#contact"
                                    className="nav-link scrollto"
                                >
                                    <i className="bx bx-envelope" />
                                    <span>Contact</span>
                                </a>
                            </li> */}
                            </ul>
                        </nav>
                    </header>
                    {children}</body>
            </html>
        </userContext.Provider>
    )
}
