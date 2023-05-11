import React from "react";
import Navbar from "./components/Navbar";
import HeroContent from "./components/Hero";
import Card from "./components/card";

export default function Project(){
    return (
        <div className="page">
            <Navbar />
            <HeroContent />
            <Card />
        </div>
    )
}