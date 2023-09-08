import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="user-profile">
                <img src="profile.png" alt="Profile" />
            </div>
        </div>
    );
};

export default Header;
