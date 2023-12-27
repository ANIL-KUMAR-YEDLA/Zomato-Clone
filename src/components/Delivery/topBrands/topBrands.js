import Slider from "react-slick";
import "./topBrands.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";

const topBrandList=[
    {
        id:1,
        time:"24 min" ,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png" ,
    },

    {
        id:2 ,
        time:"36 min" ,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521806382.png" ,
    },

    {
        id:3 ,
        time:"24 min" ,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520868.png" ,
    },

    {
        id:4,
        time:"26 min" ,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655799626.png" ,
    },

    {
        id:5 ,
        time:"31 min" ,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/babc446ea02430ca995290686b2e90ea_1673259926.png" ,
    },

    {
        id:6 ,
        time:"27 min" ,
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6cdda70c6d5596290305bd962afdd301_1655884367.png" ,
    },
];

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  }; 

const TopBrands = () => {
    return (
        <div className="top-brands max-width">
            <div className="collection-title">Top brands for you</div>
            <Slider {...settings}>
                 {topBrandList.map((brand)=>{
                    return <div>
                        <div className="top-brands-cover">
                            <img src={brand.cover} alt={brand.time} className="top-brands-image" />
                        </div>
                    </div>
                 })}
            </Slider>
        </div>
     );
}
 
export default TopBrands;