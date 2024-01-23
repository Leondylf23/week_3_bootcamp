import { iconAdvanced, iconArcade, iconPro } from "../assets/imgs";

export const plans = [
    {
        id: 0,
        category: "monthly",
        title: "Arcade",
        description: "$9/mo",
        priceNum: 9,
        extra: "",
        icon: iconArcade,
    },
    {
        id: 1,
        category: "monthly",
        title: "Advanced",
        description: "$12/mo",
        priceNum: 12,
        extra: "",
        icon: iconAdvanced,
    },
    {
        id: 2,
        category: "monthly",
        title: "Pro",
        description: "$15/mo",
        priceNum: 15,
        extra: "",
        icon: iconPro,
    },
    {
        id: 3,
        category: "yearly",
        title: "Arcade",
        description: "$90/yr",
        priceNum: 90,
        extra: "2 months free",
        icon: iconArcade,
    },
    {
        id: 4,
        category: "yearly",
        title: "Advanced",
        description: "$120/yr",
        priceNum: 120,
        extra: "2 months free",
        icon: iconAdvanced,
    },
    {
        id: 5,
        category: "yearly",
        title: "Pro",
        description: "$150/yr",
        priceNum: 150,
        extra: "2 months free",
        icon: iconPro,
    },
];
export const addOns = [
    {
        id: 0,
        name: "Online service",
        description: "Access to multiplayer games",
        price: "+$1/mo",
        priceNum: 1,
        category: "monthly",
    },
    {
        id: 1,
        name: "Larger storage",
        description: "Extra 1 TB of cloud save",
        price: "+$2/mo",
        priceNum: 2,
        category: "monthly",
    },
    {
        id: 2,
        name: "Customizable profile",
        description: "Custom theme on your profile",
        price: "+$2/mo",
        priceNum: 2,
        category: "monthly",
    },
    {
        id: 3,
        name: "Online service",
        description: "Access to multiplayer games",
        price: "+$10/yr",
        priceNum: 10,
        category: "yearly",
    },
    {
        id: 4,
        name: "Larger storage",
        description: "Extra 1 TB of cloud save",
        price: "+$20/yr",
        priceNum: 20,
        category: "yearly",
    },
    {
        id: 5,
        name: "Customizable profile",
        description: "Custom theme on your profile",
        price: "+$20/yr",
        priceNum: 20,
        category: "yearly",
    },
];
export const phoneRegex = /^(\+\d{1,3}\s?)?\(?\d{1,4}\)?[-.\s]?\d{1,10}$/
;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

