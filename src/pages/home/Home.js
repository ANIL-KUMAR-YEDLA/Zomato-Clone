import React, { useState } from "react";
import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import TabOptions from "../../components/common/tabOptions/tabOptions";
import NightLife from "../../components/NightLife/nightLife";
import Delivery from "../../components/Delivery/delivery";
import DiningOut from "../../components/DiningOut/diningOut";

const HomePage = () => {

    const [activeTab, setActiveTab]=useState("Delivery")

    return (
        <div>
            <Header/>
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
            {getCorrectScreen(activeTab)}
            <Footer/>
        </div>
     );
};

const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Delivery":
        return <Delivery/>;
        case "Dining Out":
        return <DiningOut/>;
        case "Night Life":
        return <NightLife/>;
        default:
            return <Delivery/>;
    }
}
 
export default HomePage;