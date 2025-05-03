"use client";

import React from "react";
import {
    FaLinkedinIn,
    FaGoogleScholar,
    FaFile
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { socialLinks } from "app/config";


function SocialLink({ href, icon: Icon }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon />
        </a>
    );
}

export default function SocialLinks() {
    return (
        <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
            <SocialLink href={socialLinks.cv} icon={FaFile} />
            <SocialLink href={socialLinks.googlescholar} icon={FaGoogleScholar} />
            {/* <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} /> */}
            <SocialLink href={socialLinks.email} icon={TbMailFilled} />
        </div>
    );
}