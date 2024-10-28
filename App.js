
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/beautiful-unique-food-restaurant-company-logo-design_981150-2156.jpg" />
            </div>
            <ul className="nav-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Conatct Us</li> 
                <li>Cart</li>
            </ul>
        </div>
    )
}

const resList = [
     {
                                        "info": {
                                            "id": "234875",
                                            "name": "Adil Hotel",
                                            "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
                                            "locality": "Rautha Wada",
                                            "areaName": "Chhindwara Locality",
                                            "costForTwo": "₹150 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Biryani",
                                                "Tandoor"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "27123",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "1.0K+",
                                            "sla": {
                                                "deliveryTime": 40,
                                                "lastMileTravel": 10.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40-45 mins",
                                                "lastMileTravelString": "10.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-10-27 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹150 OFF",
                                                "subHeader": "ABOVE ₹349",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-0d5fa636-b236-4d79-bf68-9babe3689a27"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
                                            "type": "WEBLINK"
                                        }
                                    }
];

const RestaurantCard = (props) => {
    const {name, cloudinaryImageId, costForTwo, cuisines, avgRating } = props.resData.info;
    return (
        <div className="res-card">
           <img className="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
           <h2>{name}</h2>
           <p>{costForTwo}</p>
           <p>{cuisines.join(', ')}</p>
           <p>{avgRating}</p>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body-container">
       {
             resList.map(res => <RestaurantCard key="res.info.id" resData={res}/>)
       }
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="container">
            <Header />
           <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);