import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import {  FaThinkPeaks } from "react-icons/fa";

export const SidebarData = [
	
{
	title: "About Us",
	path: "/components/aboutUs",
	icon: <FaThinkPeaks/>,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Our Aim",
		path: "/aboutUs/aim",
		icon: <AiIcons.AiOutlineAim/>
	},
	{
		title: "Our Vision",
		path: "/aboutUs/vision",
		icon: <AiIcons.AiFillEye/>,
	},
	],
},
{
	title: "Services",
	path: "/components/other_components/services",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Service 1",
		path: "/services/services1",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Service 2",
		path: "/services/services2",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Service 3",
		path: "/services/services3",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Contact",
	path: "/components/other_components/contact",
	icon: <FaIcons.FaPhone />,
},
{
	title: "Events",
	path: "/components/other_components/events",
	icon: <FaIcons.FaEnvelopeOpenText />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Event 1",
		path: "/events/events1",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Event 2",
		path: "/events/events2",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Support",
	path: "/components/other_components/support",
	icon: <IoIcons.IoMdHelpCircle />,
},
];
