"use client";
import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
  

const items = [
    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/restore_trd"},
    { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/ReStore.TRD"},
    { name: "LinkedIn", icon: FaLinkedinIn, link: "https://www.linkedin.com/company/restore-trd" },
  ];
  

const Footer = () => {
  return (
    <>
      <div className="w-full pt-10 pb-10 bg-gray-300 items-center">
        <div className="container mx-auto px-4 h-full w-11/12">
            <div className="flex justify-between ">
                <div>
                    Sit
                </div>
                <div className="flex items-center space-x-3 text-2xl">
                    {items.map((x, index) => {
                        return <x.icon key={index} href={x.link} rel="noopener noreferrer" target="_blank" className="hover:text-white"/>;
                    })}
                </div>
                <div>
                    Address
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;