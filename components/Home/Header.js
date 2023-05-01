import React from "react";
//icon
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaSearch,
  FaBars,
} from "react-icons/fa";

const data = [
  {
    name: "Lallantop",
  },
  {
    name: "Tak.live",
  },
  {
    name: "SportsTak",
  },
  {
    name: "AstroTak",
  },
  {
    name: "CrimeTak",
  },
  {
    name: "UPTak",
  },
  {
    name: "MumbaiTak",
  },
  {
    name: "GujaratTak",
  },
];

const datatwo = [{ name: "May 1, 2023" }, { name: "FOLLOW US AT :" }];

const datathree = [
  {
    name: "होम",
  },
  {
    name: "गेम्स",
  },
  {
    name: "वीडियो",
  },
  {
    name: "राजनीति",
  },
  {
    name: "क्राइम",
  },
  {
    name: "अपना राजस्थान",
  },
  {
    name: "आपका जिला  ",
  },
  {
    name: "शॉर्ट्स",
  },
];
const Header = () => {
  const iconStyle = {
    color: "#e4bb25",
    marginRight: "10px",
  };

  return (
    <section>
      <div className="flex bg-[#dedede] justify-around py-1">
        <div className="flex items-center justify-center gap-8 ">
          {data.map((itm, key) => {
            return (
              <div className="">
                <h1
                  key={key}
                  className="hover:text-[#e4bb25] font-medium cursor-pointer"
                >
                  {itm?.name}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center gap-8 mr-4">
            {datatwo.map((itm, key) => {
              return (
                <div className="">
                  <h1 key={key}>{itm?.name}</h1>
                </div>
              );
            })}
          </div>
          <a href="https://twitter.com">
            <FaTwitter size={15} style={iconStyle} />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram size={15} style={iconStyle} />
          </a>
          <a href="https://www.facebook.com">
            <FaFacebook size={15} style={iconStyle} />
          </a>
          <a href="https://www.youtube.com">
            <FaYoutube size={15} style={iconStyle} />
          </a>
        </div>
      </div>

      <div className="flex justify-evenly py-4 shadow-lg">
        <img
          className="w-[12rem]"
          src="https://www.rajasthantak.com/production/logo-main.png"
        />
        <div className="flex items-center justify-center gap-8 ">
          {datathree.map((itm, key) => {
            return (
              <div className="">
                <h1
                  key={key}
                  className="hover:text-[#e4bb25] font-medium cursor-pointer text-[1.1rem]"
                >
                  {itm?.name}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex items-center space-x-4 gap-7">
          <FaSearch size={20} style={{ color: "#747474" }} />
          <FaBars size={34} />
        </div>
      </div>
    </section>
  );
};

export default Header;
