import React from "react";

import { AiFillHome, AiOutlineHome,  AiOutlineFlag, AiFillFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv, MdMusicNote } from "react-icons/md";
import { BsFire, BsTrophy } from "react-icons/bs";

import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { HiFilm } from "react-icons/hi";
import { IoGameControllerSharp, IoGameControllerOutline, IoSettings } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiHanger } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine, RiFeedbackFill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { IoIosHelpCircle } from "react-icons/io";

export const categories = [
    { name: "New",  icon: <AiOutlineHome />, filledIcon : <AiFillHome/>  , type: "home" },
    { name: "Trending", icon: <BsFire />, filledIcon : <MdLocalFireDepartment/>, type: "category" },
    { name: "Music", icon: <CgMusicNote />, filledIcon : <MdMusicNote/>, type: "category" },
    { name: "Films", icon: <FiFilm />, filledIcon : <HiFilm/>, type: "category" },
    { name: "Live", icon: <MdLiveTv />, filledIcon : <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerOutline />, filledIcon : <IoGameControllerSharp/>, type: "category" },
    { name: "News", icon: <ImNewspaper />, filledIcon : <ImNewspaper /> , type: "category" },
    { name: "Sports", icon: <BsTrophy />, filledIcon : <GiDiamondTrophy/>, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, filledIcon : <FaLightbulb/>, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <GiHanger />, filledIcon : <GiHanger />,
        type: "category",
        divider: true,
    },
    { name: "Settings", icon: <FiSettings />, filledIcon : <IoSettings/>, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, filledIcon : <AiFillFlag/> , type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, filledIcon : <IoIosHelpCircle/>, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine /> ,filledIcon : <RiFeedbackFill/>, type: "menu" },
];
