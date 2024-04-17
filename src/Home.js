import React, { useState } from "react";
import Layout from "./components/Layout.js";
import "./styles/Home.css";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Main from "./components/Main.js";

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [main, setMain] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const showMainContent = () => {
    setMain(true);
  };

  const hideMainContent = () => {
    setMain(false);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Layout>
      <div className="container1">
        <div className="sidebar">
          <div className="drawer" onClick={toggleDropdownOpen}>
            <div className="settings">
              <ArrowDropDownOutlinedIcon fontSize="large" />
              <b>Settings</b>
            </div>
          </div>
          {dropdownOpen && (
            <ul className="dropdownlist">
              <li
                className={`pointer ${selectedItem === "Members" ? "bold-text" : ""}`}
                onClick={() => {
                  handleItemClick("Members");
                  showMainContent();
                }}
              >
                Members
              </li>
              <li
                className={`pointer ${selectedItem === "Company Details" ? "bold-text" : ""}`}
                onClick={() => {
                  handleItemClick("Company Details");
                  hideMainContent();
                }}>
                Company Details
              </li>
              <li className={`pointer ${selectedItem === "Career Page" ? "bold-text" : ""}`}
              onClick={() => {
                handleItemClick("Career Page");
                hideMainContent();
              }}
                >
                Career Page
              </li>
            </ul>
          )}
        </div>


        {main && (
          <div className="main">
            <div className="header">
            <b>Welcome back, Anand Achuthan</b>
            <span className="input">
                <SearchIcon className="search"/>
                <input type="text" placeholder="Search a user, settings..."/>
                <button className="button">Save Changes</button>
            </span>
            </div>
            <Main/>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Home;
