import React from "react";
import '../styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HelpIcon from '@mui/icons-material/Help';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';

const Header = () => {
    return (
        <div className="container">
            <div className="plumes">
                <b>plumes</b>
                <div className="icons">
                    <div className="icon"><SearchIcon /></div>
                    <div className="icon"><CircleNotificationsIcon /></div>
                    <div className="icon"><HelpIcon /></div>
                    <div className="icon1"><HdrAutoIcon fontSize="large"/></div>
                </div>
            </div>
        </div>
    )
}

export default Header;
