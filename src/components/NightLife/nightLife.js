import { nightLife } from "../../data/night";
import Collections from "../collections/collections";
import ExploeSection from "../common/exploreSection/exploreSection";
import Filters from "../common/filters/filters";
import "./nightLife.css";


const collectionList=[
    

    {
        id:"2",
        title:"New Year's Special Restaurants",
        cover:"https://b.zmtcdn.com/data/collections/fb7415a2dacd01e17322ddf3bd558330_1702300338.jpg",
        places:"8 Places",
    },

    {
        id:"3",
        title:"Newly Opened Restaurants",
        cover:"https://b.zmtcdn.com/data/collections/3768494e2a366a00dd8c40268bfcaed0_1696839700.png",
        places:"7 Places",
    },

    {
        id:"4",
        title:"Places for Regional Cuisines",
        cover:"https://b.zmtcdn.com/data/collections/4d8bbdfe1fe2b4cfa8aad710676fcb61_1674847218.jpg",
        places:"17 Places",
    },

    {
        id:"5",
        title:"Best in Hyderabad",
        cover:"https://b.zmtcdn.com/data/collections/e93d6e31d600f667f55611e80149cdc7_1702980875.jpg",
        places:"21 Places",
    },

    {
        id:"1",
        title:"Christmas Special Restaurants",
        cover:"https://b.zmtcdn.com/data/collections/97498331dacbb2eea768e86dfe1f04e6_1702299729.jpg",
        places:"7 Places",
    },
    
    {
        id:"6",
        title:"Places for Exotic Cocktails",
        cover:"https://b.zmtcdn.com/data/collections/b2f4b4e29c3cee6a3e5820944a71113a_1674844520.jpg",
        places:"20 Places",
    },

    {
        id:"7",
        title:"Blissful Breakfast Places",
        cover:"https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054286.jpg",
        places:"14 Places",
    },

    {
        id:"8",
        title:"Best Pubs and Bars",
        cover:"https://b.zmtcdn.com/data/collections/b002ac3dedef51dd605505656450b099_1696922967.jpg",
        places:"21 Places",
    },
    
]
const nightFilters=[
    {
        id:1,
        icon:<i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title:"Filters",
    },

    {
        id:2,
        title:"Rating: 4.0+",
    },

    {
        id:3,
        title:"Safe and Hygienic",
    },

    {
        id:4,
        title:"Pure Veg",
    },

    {
        id:5,
        title:"Delivery Time",
        icon:<i className="fi fi-rr-apps-sort absolute-center"></i>,
    },

    {
        id:6,
        title:"Great Offers",
    },

]

const nightList=nightLife;
const NightLife = () => {
    return ( 
        <div>
            <Collections list={collectionList}/>
            <div className="max-width">
                <Filters filterList={nightFilters}/>
            </div>
            <ExploeSection list={nightList} collectionName='Night Restaurants in Bangalore'/>
        </div>
    );
}
 
export default NightLife;