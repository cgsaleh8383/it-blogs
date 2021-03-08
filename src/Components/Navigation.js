import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Image } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact'
    },
    {
        title: 'Login',
        path: '/login'
    },
]

const Navigation = ({user}) => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <nav className="site-navigation" role="navigation">
            <span className="menu-title">It Blogs</span>
            <div className={`menu-contact-container ${menuActive && 'active'}`}>
                <ul>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        ))
                    }
                </ul>
                <span className="menu-avatar-container">
                    <Avatar size={38} src="https://avatars.githubusercontent.com/u/67531698?s=460&u=fc58da70dc747ede0dc3eb5e7532b3f8d361b2f0&v=4" />
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                </span>
            </div>
            <MenuOutlined className="toggle_menu" onClick={() => setMenuActive(!menuActive)} />         
        </nav>
    );
};

export default Navigation;