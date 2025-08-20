import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// import mockRestaurants from "../utils/mockData";


const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

//   useEffect(() => {
//   setListOfRestraunt(mockRestaurants);
//   setFilteredRestaurant(mockRestaurants);
// }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1354492&lng=72.85750879999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

//   const data = {
//   "statusCode": 0,
//   "data": {
//     "statusMessage": "done successfully",
//     "pageOffset": {
//       "nextOffset": "CJhlELQ4KICgk9+xx8+9IDCnEzgC",
//       "widgetOffset": {
//         "NewListingView_category_bar_chicletranking_TwoRows": "",
//         "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
//         "Restaurant_Group_WebView_PB_Theme": "",
//         "Restaurant_Group_WebView_SEO_PB_Theme": "",
//         "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "9",
//         "inlineFacetFilter": "",
//         "restaurantCountWidget": ""
//       }
//     },
//     "cards": [
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
//             "header": {
//               "title": "What's on your mind?",
//               "headerStyling": {
//                 "padding": {
//                   "left": 16,
//                   "top": 16,
//                   "bottom": 4
//                 }
//               }
//             },
//             "layout": {
//               "rows": 1,
//               "columns": 10,
//               "horizontalScrollEnabled": true,
//               "itemSpacing": 24,
//               "widgetPadding": {

//               },
//               "containerStyle": {
//                 "containerPadding": {
//                   "left": 8,
//                   "top": 8,
//                   "right": 12,
//                   "bottom": 4
//                 }
//               },
//               "widgetTheme": {
//                 "defaultMode": {
//                   "backgroundColour": "#FFFFFF",
//                   "theme": "THEME_TYPE_LIGHT"
//                 },
//                 "darkMode": {
//                   "theme": "THEME_TYPE_DARK"
//                 }
//               }
//             },
//             "imageGridCards": {
//               "info": [
//                 {
//                   "id": "750587",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
//                     "text": "Chinese",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurant curated for chinese",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750579",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
//                     "text": "Pizzas",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurants curated for pizza",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750581",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
//                     "text": "North Indian",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurants curated for north indian",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750591",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
//                     "text": "Biryani",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurants curated for biryani",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750589",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
//                     "text": "Burgers",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurants curated for burger",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "749868",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
//                     "text": "Cakes",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurant curated for cake",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750222",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
//                     "text": "Rolls",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurants curated for roll",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750585",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
//                     "text": "South Indian",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurants curated for south indian",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian&search_context=southindian",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "749760",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
//                     "text": "Khichdi",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurants curated for khichdi",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "80455",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750201",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
//                     "text": "Paratha",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurants curated for paratha",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750643",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
//                     "text": "Idli",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurants curated for idly",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750131",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
//                     "text": "Dosa",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurants curated for dosa",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750571",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
//                     "text": "Pure Veg",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurants curated for veg",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "749876",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
//                     "text": "Chole Bhature",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurant curated for chhole bhatoore",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750206",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
//                     "text": "Pasta",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurant curated for pasta",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750225",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
//                     "text": "Salad",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurant curated for salad",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "749772",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
//                     "text": "Noodles",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurant curated for noodles",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "80463",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750208",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
//                     "text": "Pastry",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurant curated for Pastry",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "750248",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
//                     "text": "Shawarma",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurant curated for shawarma",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 },
//                 {
//                   "id": "745861",
//                   "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
//                   "action": {
//                     "link": "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
//                     "text": "Shake",
//                     "type": "WEBLINK"
//                   },
//                   "entityType": "BANNER",
//                   "accessibility": {
//                     "altText": "restaurants curated for shakes",
//                     "altTextCta": "open"
//                   },
//                   "entityId": "swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes",
//                   "frequencyCapping": {

//                   },
//                   "externalMarketing": {

//                   }
//                 }
//               ],
//               "style": {
//                 "width": {
//                   "type": "TYPE_RELATIVE",
//                   "value": 0.2941,
//                   "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
//                 },
//                 "height": {
//                   "type": "TYPE_RELATIVE",
//                   "value": 1.2444,
//                   "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
//                 }
//               }
//             },
//             "id": "whats_on_your_mind",
//             "gridElements": {
//               "infoWithStyle": {
//                 "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
//                 "info": [
//                   {
//                     "id": "750587",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
//                       "text": "Chinese",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for chinese",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750579",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
//                       "text": "Pizzas",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for pizza",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750581",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
//                       "text": "North Indian",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for north indian",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750591",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
//                       "text": "Biryani",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for biryani",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750589",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
//                       "text": "Burgers",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for burger",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "749868",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
//                       "text": "Cakes",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for cake",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750222",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
//                       "text": "Rolls",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for roll",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750585",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
//                       "text": "South Indian",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for south indian",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian&search_context=southindian",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "749760",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
//                       "text": "Khichdi",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for khichdi",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "80455",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750201",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
//                       "text": "Paratha",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for paratha",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750643",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
//                       "text": "Idli",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for idly",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750131",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
//                       "text": "Dosa",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for dosa",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750571",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
//                       "text": "Pure Veg",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for veg",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "749876",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
//                       "text": "Chole Bhature",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for chhole bhatoore",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750206",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
//                       "text": "Pasta",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for pasta",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750225",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
//                       "text": "Salad",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for salad",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "749772",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
//                       "text": "Noodles",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for noodles",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "80463",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750208",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
//                       "text": "Pastry",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for Pastry",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "750248",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
//                       "text": "Shawarma",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for shawarma",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   },
//                   {
//                     "id": "745861",
//                     "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
//                       "text": "Shake",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for shakes",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes",
//                     "frequencyCapping": {

//                     },
//                     "externalMarketing": {

//                     }
//                   }
//                 ],
//                 "style": {
//                   "width": {
//                     "type": "TYPE_RELATIVE",
//                     "value": 0.2941,
//                     "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
//                   },
//                   "height": {
//                     "type": "TYPE_RELATIVE",
//                     "value": 1.2444,
//                     "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
//                   }
//                 }
//               }
//             }
//           }
//         }
//       },
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
//             "header": {
//               "title": "Top restaurant chains in Mumbai",
//               "action": {

//               },
//               "headerStyling": {
//                 "padding": {
//                   "left": 16,
//                   "top": 28,
//                   "bottom": 18
//                 }
//               }
//             },
//             "layout": {
//               "rows": 1,
//               "columns": 20,
//               "horizontalScrollEnabled": true,
//               "itemSpacing": 32,
//               "widgetPadding": {

//               },
//               "containerStyle": {
//                 "containerPadding": {
//                   "left": 16,
//                   "right": 12,
//                   "bottom": 12
//                 }
//               },
//               "scrollBar": {
//                 "scrollThumbColor": "#E46D47",
//                 "scrollTrackColor": "#02060C",
//                 "width": 54,
//                 "height": 4,
//                 "scrollStyling": {
//                   "padding": {
//                     "top": 6,
//                     "bottom": 24
//                   }
//                 }
//               },
//               "widgetTheme": {
//                 "defaultMode": {
//                   "backgroundColour": "#1B3028",
//                   "theme": "THEME_TYPE_DARK"
//                 },
//                 "darkMode": {
//                   "backgroundColour": "#1B3028",
//                   "theme": "THEME_TYPE_DARK"
//                 }
//               }
//             },
//             "id": "top_brands_for_you",
//             "gridElements": {
//               "infoWithStyle": {
//                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
//                 "restaurants": [
//                   {
//                     "info": {
//                       "id": "89517",
//                       "name": "Pizza Hut",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/4f94bf38-adca-4958-83e4-8280dc5a938b_89517.JPG",
//                       "locality": "Goregaon East",
//                       "areaName": "Goregaon East",
//                       "costForTwo": "₹300 for two",
//                       "cuisines": [
//                         "Pizzas"
//                       ],
//                       "avgRating": 4.2,
//                       "parentId": "721",
//                       "avgRatingString": "4.2",
//                       "totalRatingsString": "5.9K+",
//                       "sla": {
//                         "deliveryTime": 36,
//                         "lastMileTravel": 2.6,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "35-40 mins",
//                         "lastMileTravelString": "2.6 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-21 01:00:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                             "description": "Delivery!"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "Delivery!",
//                                   "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹99"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "4.6",
//                           "ratingCount": "1.4K+"
//                         },
//                         "source": "GOOGLE",
//                         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/pizza-hut-goregaon-east-rest89517",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "173212",
//                       "name": "Theobroma",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/03881969-4935-4d1d-b049-d260a67cd17c_173212.JPG",
//                       "locality": "Mahakali Caves Rd",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹400 for two",
//                       "cuisines": [
//                         "Bakery",
//                         "Desserts"
//                       ],
//                       "avgRating": 4.5,
//                       "parentId": "1040",
//                       "avgRatingString": "4.5",
//                       "totalRatingsString": "7.8K+",
//                       "sla": {
//                         "deliveryTime": 24,
//                         "lastMileTravel": 2.4,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "20-25 mins",
//                         "lastMileTravelString": "2.4 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 23:59:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "Rxawards/_CATEGORY-Desserts.png",
//                             "description": "Delivery!"
//                           },
//                           {
//                             "imageId": "newg.png",
//                             "description": "Gourmet"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "Delivery!",
//                                   "imageId": "Rxawards/_CATEGORY-Desserts.png"
//                                 }
//                               },
//                               {
//                                 "attributes": {
//                                   "description": "Gourmet",
//                                   "imageId": "newg.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹290"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/theobroma-mahakali-caves-rd-andheri-east-rest173212",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "25569",
//                       "name": "Baskin Robbins - Ice Cream Desserts",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/8190edf7-10e9-4adf-bd22-3214727325b8_25569.JPG",
//                       "locality": "Near Tolani College",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹300 for two",
//                       "cuisines": [
//                         "Desserts",
//                         "Ice Cream"
//                       ],
//                       "avgRating": 4.7,
//                       "veg": true,
//                       "parentId": "5588",
//                       "avgRatingString": "4.7",
//                       "totalRatingsString": "4.8K+",
//                       "sla": {
//                         "deliveryTime": 22,
//                         "lastMileTravel": 1.5,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "20-25 mins",
//                         "lastMileTravelString": "1.5 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 23:59:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "android/static-assets/icons/big_rx.png",
//                             "description": "bolt!"
//                           },
//                           {
//                             "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
//                             "description": "Delivery!"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "bolt!",
//                                   "imageId": "android/static-assets/icons/big_rx.png"
//                                 }
//                               },
//                               {
//                                 "attributes": {
//                                   "description": "Delivery!",
//                                   "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹59"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/baskin-robbins-ice-cream-desserts-near-tolani-college-andheri-east-rest25569",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "23703",
//                       "name": "McDonald's",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/3f90fcbf-5c85-4bee-986e-6de499472bdd_23703.JPG",
//                       "locality": "Mahakali",
//                       "areaName": "Mahakali",
//                       "costForTwo": "₹400 for two",
//                       "cuisines": [
//                         "Burgers",
//                         "Beverages",
//                         "Cafe",
//                         "Desserts"
//                       ],
//                       "avgRating": 4.5,
//                       "parentId": "630",
//                       "avgRatingString": "4.5",
//                       "totalRatingsString": "38K+",
//                       "sla": {
//                         "deliveryTime": 34,
//                         "lastMileTravel": 2.2,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "30-35 mins",
//                         "lastMileTravelString": "2.2 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-21 01:00:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "Rxawards/_CATEGORY-Burger.png",
//                             "description": "Delivery!"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "Delivery!",
//                                   "imageId": "Rxawards/_CATEGORY-Burger.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹119"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "4.2",
//                           "ratingCount": "8.7K+"
//                         },
//                         "source": "GOOGLE",
//                         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/mcdonalds-mahakali-rest23703",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "790314",
//                       "name": "KFC",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4e204e9a-3979-4636-8f9b-f8687818f77a_790314.JPG",
//                       "locality": "Near Andheri East Station",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹400 for two",
//                       "cuisines": [
//                         "Burgers",
//                         "Fast Food",
//                         "Rolls & Wraps"
//                       ],
//                       "avgRating": 4.3,
//                       "parentId": "547",
//                       "avgRatingString": "4.3",
//                       "totalRatingsString": "1.7K+",
//                       "sla": {
//                         "deliveryTime": 37,
//                         "lastMileTravel": 2.9,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "35-40 mins",
//                         "lastMileTravelString": "2.9 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 23:00:00",
//                         "opened": true
//                       },
//                       "badges": {

//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {

//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹399"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "4.5",
//                           "ratingCount": "179"
//                         },
//                         "source": "GOOGLE",
//                         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/kfc-near-station-andheri-east-rest790314",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "750266",
//                       "name": "Daily Kitchen - Everyday Homely Meals",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/fadfebc2-8e0d-47c9-86c6-029491aa0ad5_750266.jpg",
//                       "locality": "Mahakali, Andheri (E)",
//                       "areaName": "Mahakali",
//                       "costForTwo": "₹250 for two",
//                       "cuisines": [
//                         "Home Food",
//                         "Indian",
//                         "North Indian",
//                         "Thalis"
//                       ],
//                       "avgRating": 4.5,
//                       "parentId": "444382",
//                       "avgRatingString": "4.5",
//                       "totalRatingsString": "407",
//                       "sla": {
//                         "deliveryTime": 15,
//                         "lastMileTravel": 2.1,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "10-20 mins",
//                         "lastMileTravelString": "2.1 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-21 02:00:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
//                             "description": "Delivery!"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "Delivery!",
//                                   "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹100"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/daily-kitchen-everyday-homely-meals-andheri-e-mahakali-rest750266",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "390101",
//                       "name": "NH1 Bowls - Highway To North",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/bf6b2916-eadf-421d-a5f1-bd5c481c1f7a_390101.jpg",
//                       "locality": "MMRDA Colony",
//                       "areaName": "Poonam Vihar",
//                       "costForTwo": "₹250 for two",
//                       "cuisines": [
//                         "North Indian",
//                         "Punjabi",
//                         "Home Food"
//                       ],
//                       "avgRating": 4.7,
//                       "parentId": "22452",
//                       "avgRatingString": "4.7",
//                       "totalRatingsString": "850",
//                       "sla": {
//                         "deliveryTime": 15,
//                         "lastMileTravel": 2.1,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "10-20 mins",
//                         "lastMileTravelString": "2.1 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-21 02:00:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "textExtendedBadges": [
//                           {
//                             "iconId": "guiltfree/GF_Logo_android_3x",
//                             "shortDescription": "options available",
//                             "fontColor": "#7E808C"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {

//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "",
//                                   "fontColor": "#7E808C",
//                                   "iconId": "guiltfree/GF_Logo_android_3x",
//                                   "shortDescription": "options available"
//                                 }
//                               }
//                             ]
//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹100"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/nh1-bowls-highway-to-north-mmrda-colony-poonam-vihar-rest390101",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "391045",
//                       "name": "ZAZA Mughal Biryani",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/f4de9368-4b55-4058-810a-7233c741be55_391045.jpg",
//                       "locality": "Mahakali Caves Road",
//                       "areaName": "Poonam Vihar",
//                       "costForTwo": "₹250 for two",
//                       "cuisines": [
//                         "Biryani",
//                         "North Indian",
//                         "Awadhi"
//                       ],
//                       "avgRating": 4.5,
//                       "parentId": "22473",
//                       "avgRatingString": "4.5",
//                       "totalRatingsString": "500",
//                       "sla": {
//                         "deliveryTime": 25,
//                         "lastMileTravel": 2.1,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "20-30 mins",
//                         "lastMileTravelString": "2.1 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-21 02:00:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "Rxawards/_CATEGORY-Biryani.png",
//                             "description": "Delivery!"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "Delivery!",
//                                   "imageId": "Rxawards/_CATEGORY-Biryani.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹100"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/zaza-mughal-biryani-mahakali-caves-road-poonam-vihar-rest391045",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "338057",
//                       "name": "Charcoal Eats - Biryani & Beyond",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/9e85b014-db58-4bde-bfa4-e4fe2e6f61a8_338057.jpg",
//                       "locality": "Near Andheri East Station",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹600 for two",
//                       "cuisines": [
//                         "Biryani",
//                         "Kebabs",
//                         "North Indian",
//                         "Mughlai"
//                       ],
//                       "avgRating": 4.3,
//                       "parentId": "5338",
//                       "avgRatingString": "4.3",
//                       "totalRatingsString": "5.1K+",
//                       "sla": {
//                         "deliveryTime": 31,
//                         "lastMileTravel": 2.1,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "30-35 mins",
//                         "lastMileTravelString": "2.1 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 23:59:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "textExtendedBadges": [
//                           {
//                             "iconId": "guiltfree/GF_Logo_android_3x",
//                             "shortDescription": "options available",
//                             "fontColor": "#7E808C"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {

//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "",
//                                   "fontColor": "#7E808C",
//                                   "iconId": "guiltfree/GF_Logo_android_3x",
//                                   "shortDescription": "options available"
//                                 }
//                               }
//                             ]
//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹185"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "3.8",
//                           "ratingCount": "421"
//                         },
//                         "source": "GOOGLE",
//                         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/charcoal-eats-biryani-and-beyond-near-station-andheri-east-rest338057",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "29558",
//                       "name": "Nothing But Chicken",
//                       "cloudinaryImageId": "klogmb8nw0garfnhxqif",
//                       "locality": "Mahakali",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹400 for two",
//                       "cuisines": [
//                         "Salads",
//                         "Biryani",
//                         "Kebabs",
//                         "Fast Food",
//                         "Healthy Food"
//                       ],
//                       "avgRating": 4.5,
//                       "parentId": "668",
//                       "avgRatingString": "4.5",
//                       "totalRatingsString": "13K+",
//                       "sla": {
//                         "deliveryTime": 26,
//                         "lastMileTravel": 2,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "25-30 mins",
//                         "lastMileTravelString": "2.0 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 23:59:00",
//                         "opened": true
//                       },
//                       "badges": {

//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {

//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹99"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "4.1",
//                           "ratingCount": "397"
//                         },
//                         "source": "GOOGLE",
//                         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/nothing-but-chicken-mahakali-andheri-east-rest29558",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "681482",
//                       "name": "LeanCrust Pizza- ThinCrust Experts",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/4a2ec983-483c-4acf-ad16-230f5494a2c2_681482.jpg",
//                       "locality": "Mahakali, Andheri (E)",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹300 for two",
//                       "cuisines": [
//                         "Pizzas",
//                         "Italian",
//                         "Desserts"
//                       ],
//                       "avgRating": 4.6,
//                       "parentId": "11216",
//                       "avgRatingString": "4.6",
//                       "totalRatingsString": "310",
//                       "sla": {
//                         "deliveryTime": 25,
//                         "lastMileTravel": 2.1,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "20-30 mins",
//                         "lastMileTravelString": "2.1 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-21 02:00:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "textExtendedBadges": [
//                           {
//                             "iconId": "guiltfree/GF_Logo_android_3x",
//                             "shortDescription": "options available",
//                             "fontColor": "#7E808C"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {

//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "",
//                                   "fontColor": "#7E808C",
//                                   "iconId": "guiltfree/GF_Logo_android_3x",
//                                   "shortDescription": "options available"
//                                 }
//                               }
//                             ]
//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹169"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/leancrust-pizza-thincrust-experts-mahakali-andheri-e-andheri-east-rest681482",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "681233",
//                       "name": "GLOBO Ice Creams Of The World",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/c83a3f4b-688c-4eb3-a4a1-9539053221f1_681233.JPG",
//                       "locality": "Mahakali, Andheri (E)",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹150 for two",
//                       "cuisines": [
//                         "Ice Cream",
//                         "Desserts",
//                         "Bakery"
//                       ],
//                       "avgRating": 4.5,
//                       "parentId": "22303",
//                       "avgRatingString": "4.5",
//                       "totalRatingsString": "36",
//                       "sla": {
//                         "deliveryTime": 25,
//                         "lastMileTravel": 2.1,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "20-30 mins",
//                         "lastMileTravelString": "2.1 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-21 02:00:00",
//                         "opened": true
//                       },
//                       "badges": {

//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {

//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹100"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/globo-ice-creams-of-the-world-mahakali-andheri-e-andheri-east-rest681233",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "137262",
//                       "name": "Sweet Bengal",
//                       "cloudinaryImageId": "rtz4bn4if1ivwzvttrjv",
//                       "locality": "Ambika apartments",
//                       "areaName": "Mahakali",
//                       "costForTwo": "₹150 for two",
//                       "cuisines": [
//                         "Sweets",
//                         "Indian",
//                         "Snacks",
//                         "Desserts"
//                       ],
//                       "avgRating": 4.7,
//                       "veg": true,
//                       "parentId": "1250",
//                       "avgRatingString": "4.7",
//                       "totalRatingsString": "6.0K+",
//                       "sla": {
//                         "deliveryTime": 28,
//                         "lastMileTravel": 2.2,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "25-30 mins",
//                         "lastMileTravelString": "2.2 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 23:00:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "v1695133679/badges/Pure_Veg111.png",
//                             "description": "pureveg"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "pureveg",
//                                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "20% OFF",
//                         "subHeader": "UPTO ₹50"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "4.1",
//                           "ratingCount": "290"
//                         },
//                         "source": "GOOGLE",
//                         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/sweet-bengal-ambika-apartments-mahakali-rest137262",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "96175",
//                       "name": "Jumboking Burgers",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/23/6f12594a-b6a7-45c2-953c-835b8133e42f_96175.JPG",
//                       "locality": "Tolani College, Sher-E-Punjab Mahakali Caves",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹250 for two",
//                       "cuisines": [
//                         "American",
//                         "Mexican",
//                         "Fast Food",
//                         "Snacks",
//                         "Beverages"
//                       ],
//                       "avgRating": 4.4,
//                       "veg": true,
//                       "parentId": "533269",
//                       "avgRatingString": "4.4",
//                       "totalRatingsString": "3.9K+",
//                       "sla": {
//                         "deliveryTime": 23,
//                         "lastMileTravel": 1.6,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "20-25 mins",
//                         "lastMileTravelString": "1.6 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 23:59:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "v1695133679/badges/Pure_Veg111.png",
//                             "description": "pureveg"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "pureveg",
//                                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹29"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/jumboking-burgers-tolani-college-sher-e-punjab-mahakali-caves-andheri-east-rest96175",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "183588",
//                       "name": "Starbucks Coffee",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/4/72a22ca2-443f-49ec-a2a5-dd8005a031c1_183588.JPG",
//                       "locality": "Chakala",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹400 for two",
//                       "cuisines": [
//                         "Beverages",
//                         "Cafe",
//                         "Snacks",
//                         "Desserts",
//                         "Bakery",
//                         "Ice Cream"
//                       ],
//                       "avgRating": 4.4,
//                       "parentId": "195515",
//                       "avgRatingString": "4.4",
//                       "totalRatingsString": "6.2K+",
//                       "sla": {
//                         "deliveryTime": 31,
//                         "lastMileTravel": 3,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "30-35 mins",
//                         "lastMileTravelString": "3.0 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 23:59:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
//                             "description": "Delivery!"
//                           },
//                           {
//                             "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
//                             "description": "Delivery!"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "Delivery!",
//                                   "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
//                                 }
//                               },
//                               {
//                                 "attributes": {
//                                   "description": "Delivery!",
//                                   "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "40% OFF",
//                         "subHeader": "UPTO ₹80"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "4.4",
//                           "ratingCount": "253"
//                         },
//                         "source": "GOOGLE",
//                         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/starbucks-coffee-chakala-andheri-east-rest183588",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "448563",
//                       "name": "B Burger - Bigger Burger",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/4c2e79af-4ba6-4af0-9ea6-1894ea4137a4_448563.jpg",
//                       "locality": "Mahakali Caves Road",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹500 for two",
//                       "cuisines": [
//                         "Burgers",
//                         "Fast Food",
//                         "American"
//                       ],
//                       "avgRating": 4.3,
//                       "parentId": "454391",
//                       "avgRatingString": "4.3",
//                       "totalRatingsString": "2.5K+",
//                       "sla": {
//                         "deliveryTime": 35,
//                         "lastMileTravel": 2.1,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "30-35 mins",
//                         "lastMileTravelString": "2.1 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 23:59:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "newg.png",
//                             "description": "Gourmet"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "Gourmet",
//                                   "imageId": "newg.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹99"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/b-burger-bigger-burger-mahakali-caves-road-andheri-east-rest448563",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "488267",
//                       "name": "Minus 30",
//                       "cloudinaryImageId": "84dfb731ca567d0cd955a5f33ffeba3a",
//                       "locality": "Near Andheri East Station",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹500 for two",
//                       "cuisines": [
//                         "Desserts"
//                       ],
//                       "avgRating": 4.8,
//                       "veg": true,
//                       "parentId": "292823",
//                       "avgRatingString": "4.8",
//                       "totalRatingsString": "400",
//                       "sla": {
//                         "deliveryTime": 27,
//                         "lastMileTravel": 2.2,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "25-30 mins",
//                         "lastMileTravelString": "2.2 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 23:59:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "newg.png",
//                             "description": "Gourmet"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "Gourmet",
//                                   "imageId": "newg.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "₹125 OFF",
//                         "subHeader": "ABOVE ₹249",
//                         "discountTag": "FLAT DEAL"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "2.7",
//                           "ratingCount": "14"
//                         },
//                         "source": "GOOGLE",
//                         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/minus-30-near-station-andheri-east-rest488267",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "740395",
//                       "name": "Hola Pasta - Fresh Gourmet Pasta",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/f8d94b93-a629-425f-8f73-91d8ceb80261_740395.JPG",
//                       "locality": "Mahakali, Andheri (E)",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹250 for two",
//                       "cuisines": [
//                         "Pastas",
//                         "Italian",
//                         "Desserts",
//                         "Beverages"
//                       ],
//                       "avgRating": 4.1,
//                       "parentId": "418135",
//                       "avgRatingString": "4.1",
//                       "totalRatingsString": "81",
//                       "sla": {
//                         "deliveryTime": 25,
//                         "lastMileTravel": 2.1,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "20-30 mins",
//                         "lastMileTravelString": "2.1 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-21 02:00:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "textExtendedBadges": [
//                           {
//                             "iconId": "guiltfree/GF_Logo_android_3x",
//                             "shortDescription": "options available",
//                             "fontColor": "#7E808C"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {

//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "",
//                                   "fontColor": "#7E808C",
//                                   "iconId": "guiltfree/GF_Logo_android_3x",
//                                   "shortDescription": "options available"
//                                 }
//                               }
//                             ]
//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹109"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/hola-pasta-fresh-gourmet-pasta-mahakali-andheri-e-andheri-east-rest740395",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "313659",
//                       "name": "Itminaan Matka Biryani - Slow Cooked",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/7c1722f3-d8a8-43ee-9711-9ae46d1769c0_313659.JPG",
//                       "locality": "Poonam Nagar",
//                       "areaName": "Poonam Vihar",
//                       "costForTwo": "₹400 for two",
//                       "cuisines": [
//                         "Biryani",
//                         "North Indian",
//                         "Mughlai"
//                       ],
//                       "avgRating": 4.5,
//                       "parentId": "107673",
//                       "avgRatingString": "4.5",
//                       "totalRatingsString": "336",
//                       "sla": {
//                         "deliveryTime": 25,
//                         "lastMileTravel": 2.1,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "20-30 mins",
//                         "lastMileTravelString": "2.1 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-21 02:00:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "textExtendedBadges": [
//                           {
//                             "iconId": "guiltfree/GF_Logo_android_3x",
//                             "shortDescription": "options available",
//                             "fontColor": "#7E808C"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {

//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "",
//                                   "fontColor": "#7E808C",
//                                   "iconId": "guiltfree/GF_Logo_android_3x",
//                                   "shortDescription": "options available"
//                                 }
//                               }
//                             ]
//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹199"
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/itminaan-matka-biryani-slow-cooked-poonam-nagar-poonam-vihar-rest313659",
//                       "type": "WEBLINK"
//                     }
//                   },
//                   {
//                     "info": {
//                       "id": "54147",
//                       "name": "The J",
//                       "cloudinaryImageId": "pk30rttazxktbcev6bpk",
//                       "locality": "Mahakali Caves Road",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹300 for two",
//                       "cuisines": [
//                         "American",
//                         "Snacks",
//                         "Desserts"
//                       ],
//                       "avgRating": 4.6,
//                       "parentId": "2022",
//                       "avgRatingString": "4.6",
//                       "totalRatingsString": "9.7K+",
//                       "sla": {
//                         "deliveryTime": 31,
//                         "lastMileTravel": 2.2,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "30-35 mins",
//                         "lastMileTravelString": "2.2 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 23:59:00",
//                         "opened": true
//                       },
//                       "badges": {

//                       },
//                       "isOpen": true,
//                       "aggregatedDiscountInfoV2": {

//                       },
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {

//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/the-j-mahakali-caves-road-andheri-east-rest54147",
//                       "type": "WEBLINK"
//                     }
//                   }
//                 ],
//                 "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
//                 "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
//                 "style": {
//                   "width": {
//                     "type": "TYPE_RELATIVE",
//                     "value": 0.41111112,
//                     "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
//                   },
//                   "height": {
//                     "type": "TYPE_RELATIVE",
//                     "value": 0.7027027,
//                     "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
//                   },
//                   "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
//                 },
//                 "collectionId": "84124"
//               }
//             }
//           }
//         }
//       },
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
//             "title": "Restaurants with online food delivery in Mumbai",
//             "id": "popular_restaurants_title"
//           }
//         }
//       },
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
//             "sortConfigs": [
//               {
//                 "key": "relevance",
//                 "title": "Relevance (Default)",
//                 "selected": true,
//                 "defaultSelection": true
//               },
//               {
//                 "key": "deliveryTimeAsc",
//                 "title": "Delivery Time"
//               },
//               {
//                 "key": "modelBasedRatingDesc",
//                 "title": "Rating"
//               },
//               {
//                 "key": "costForTwoAsc",
//                 "title": "Cost: Low to High"
//               },
//               {
//                 "key": "costForTwoDesc",
//                 "title": "Cost: High to Low"
//               }
//             ],
//             "restaurantCount": 1973,
//             "facetList": [
//               {
//                 "label": "Delivery Time",
//                 "id": "deliveryTime",
//                 "selection": "SELECT_TYPE_MULTISELECT",
//                 "facetInfo": [
//                   {
//                     "label": "Fast Delivery",
//                     "id": "deliveryTimefacetquery1",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   }
//                 ],
//                 "viewType": "VIEW_TYPE_HALF_CARD",
//                 "subLabel": "Filterby"
//               },
//               {
//                 "label": "Cuisines",
//                 "id": "catalog_cuisines",
//                 "selection": "SELECT_TYPE_MULTISELECT",
//                 "facetInfo": [
//                   {
//                     "label": "Afghani",
//                     "id": "query_afghani",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "American",
//                     "id": "query_american",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Andhra",
//                     "id": "query_andhra",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Arabian",
//                     "id": "query_arabian",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Asian",
//                     "id": "query_asian",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Attractive Combos Available",
//                     "id": "query_attractive_combos_available",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Awadhi",
//                     "id": "query_awadhi",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Bakery",
//                     "id": "query_bakery",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Barbecue",
//                     "id": "query_barbecue",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Bengali",
//                     "id": "query_bengali",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Beverages",
//                     "id": "query_beverages",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Bihari",
//                     "id": "query_bihari",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Biryani",
//                     "id": "query_biryani",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Breakfast",
//                     "id": "query_breakfast",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "British",
//                     "id": "query_british",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Bubble Tea",
//                     "id": "query_bubble_tea",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Burger",
//                     "id": "query_burger",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Burgers",
//                     "id": "query_burgers",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Burmese",
//                     "id": "query_burmese",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Cafe",
//                     "id": "query_cafe",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Cakes",
//                     "id": "query_cakes",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Cakes & Pastries",
//                     "id": "query_cakes_&_pastries",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Cakes and Pastries",
//                     "id": "query_cakes_and_pastries",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Chaat",
//                     "id": "query_chaat",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Chinese",
//                     "id": "query_chinese",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Chocolate",
//                     "id": "query_chocolate",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Coastal",
//                     "id": "query_coastal",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Coffee",
//                     "id": "query_coffee",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Combo",
//                     "id": "query_combo",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Combos",
//                     "id": "query_combos",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Confectionery",
//                     "id": "query_confectionery",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Continental",
//                     "id": "query_continental",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Dairy",
//                     "id": "query_dairy",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Dairy Products",
//                     "id": "query_dairy_products",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Desert",
//                     "id": "query_desert",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Desserts",
//                     "id": "query_desserts",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "European",
//                     "id": "query_european",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "FUSION",
//                     "id": "query_fusion",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Fast Food",
//                     "id": "query_fast_food",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "French",
//                     "id": "query_french",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "German",
//                     "id": "query_german",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Goan",
//                     "id": "query_goan",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Greek",
//                     "id": "query_greek",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Grill",
//                     "id": "query_grill",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Gujarati",
//                     "id": "query_gujarati",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Healthy",
//                     "id": "query_healthy",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Healthy Food",
//                     "id": "query_healthy_food",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Home Food",
//                     "id": "query_home_food",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Home food",
//                     "id": "query_home_food",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Hyderabadi",
//                     "id": "query_hyderabadi",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Ice Cream",
//                     "id": "query_ice_cream",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Ice Cream Cakes",
//                     "id": "query_ice_cream_cakes",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Indian",
//                     "id": "query_indian",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Indonesian",
//                     "id": "query_indonesian",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Italian",
//                     "id": "query_italian",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Italian-American",
//                     "id": "query_italian-american",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Jain",
//                     "id": "query_jain",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Japanese",
//                     "id": "query_japanese",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Juice and shake",
//                     "id": "query_juice_and_shake",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Juices",
//                     "id": "query_juices",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Kashmiri",
//                     "id": "query_kashmiri",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Kebabs",
//                     "id": "query_kebabs",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Kerala",
//                     "id": "query_kerala",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Keto",
//                     "id": "query_keto",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Khasi",
//                     "id": "query_khasi",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Konkan",
//                     "id": "query_konkan",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Korean",
//                     "id": "query_korean",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Lassi",
//                     "id": "query_lassi",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Lebanese",
//                     "id": "query_lebanese",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Lucknowi",
//                     "id": "query_lucknowi",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Maharashtrian",
//                     "id": "query_maharashtrian",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Malwani",
//                     "id": "query_malwani",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Mangalorean",
//                     "id": "query_mangalorean",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Mediterranean",
//                     "id": "query_mediterranean",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Mexican",
//                     "id": "query_mexican",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Middle Eastern",
//                     "id": "query_middle_eastern",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Milkshakes",
//                     "id": "query_milkshakes",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Momos",
//                     "id": "query_momos",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Mughlai",
//                     "id": "query_mughlai",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Naga",
//                     "id": "query_naga",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Navratri Special",
//                     "id": "query_navratri_special",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Nepalese",
//                     "id": "query_nepalese",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "North Eastern",
//                     "id": "query_north_eastern",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "North Indian",
//                     "id": "query_north_indian",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Omlette",
//                     "id": "query_omlette",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Oriental",
//                     "id": "query_oriental",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Paan",
//                     "id": "query_paan",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Pan Asian",
//                     "id": "query_pan_asian",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Pan-Asian",
//                     "id": "query_pan-asian",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Parsi",
//                     "id": "query_parsi",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Pasta",
//                     "id": "query_pasta",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Pastas",
//                     "id": "query_pastas",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Pizza",
//                     "id": "query_pizza",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Pizzas",
//                     "id": "query_pizzas",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Punjabi",
//                     "id": "query_punjabi",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Rajasthani",
//                     "id": "query_rajasthani",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Rolls",
//                     "id": "query_rolls",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Rolls & Wraps",
//                     "id": "query_rolls_&_wraps",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Salad",
//                     "id": "query_salad",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Salads",
//                     "id": "query_salads",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Seafood",
//                     "id": "query_seafood",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Sindhi",
//                     "id": "query_sindhi",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Snacks",
//                     "id": "query_snacks",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "South Indian",
//                     "id": "query_south_indian",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Spanish",
//                     "id": "query_spanish",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Street Food",
//                     "id": "query_street_food",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "StreetFood",
//                     "id": "query_streetfood",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Sushi",
//                     "id": "query_sushi",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Sweets",
//                     "id": "query_sweets",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Tandoor",
//                     "id": "query_tandoor",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Tandoori",
//                     "id": "query_tandoori",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Tea",
//                     "id": "query_tea",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Tex-Mex",
//                     "id": "query_tex-mex",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Thai",
//                     "id": "query_thai",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Thali",
//                     "id": "query_thali",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Thalis",
//                     "id": "query_thalis",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Tibetan",
//                     "id": "query_tibetan",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Turkish",
//                     "id": "query_turkish",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Vietnamese",
//                     "id": "query_vietnamese",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Waffle",
//                     "id": "query_waffle",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Wrap",
//                     "id": "query_wrap",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "briyani",
//                     "id": "query_briyani",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "chikan khroma",
//                     "id": "query_chikan_khroma",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "dessert",
//                     "id": "query_dessert",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "fastfood",
//                     "id": "query_fastfood",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "gujrati",
//                     "id": "query_gujrati",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "healthy",
//                     "id": "query_healthy",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "indian snacks",
//                     "id": "query_indian_snacks",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "juice",
//                     "id": "query_juice",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "north indian parantha",
//                     "id": "query_north_indian_parantha",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "pan asian",
//                     "id": "query_pan_asian",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "paratha",
//                     "id": "query_paratha",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "pav bhaji",
//                     "id": "query_pav_bhaji",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "pizza",
//                     "id": "query_pizza",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "pure veg",
//                     "id": "query_pure_veg",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "rolls",
//                     "id": "query_rolls",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "sandwich",
//                     "id": "query_sandwich",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "shawarma",
//                     "id": "query_shawarma",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "snack",
//                     "id": "query_snack",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "steak",
//                     "id": "query_steak",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "wrap",
//                     "id": "query_wrap",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   }
//                 ],
//                 "viewType": "VIEW_TYPE_HALF_CARD",
//                 "canSearch": true,
//                 "subLabel": "Filterbycuisine",
//                 "openFilter": true
//               },
//               {
//                 "label": "Explore",
//                 "id": "explore",
//                 "selection": "SELECT_TYPE_MULTISELECT",
//                 "facetInfo": [
//                   {
//                     "label": "New on Swiggy",
//                     "id": "newfacetquery1",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Swiggy Exclusives",
//                     "id": "isExclusivefacetquery1",
//                     "analytics": {

//                     }
//                   }
//                 ],
//                 "viewType": "VIEW_TYPE_HALF_CARD"
//               },
//               {
//                 "label": "Ratings",
//                 "id": "rating",
//                 "selection": "SELECT_TYPE_MULTISELECT",
//                 "facetInfo": [
//                   {
//                     "label": "Ratings 4.5+",
//                     "id": "ratingfacetquery3",
//                     "analytics": {

//                     }
//                   },
//                   {
//                     "label": "Ratings 4.0+",
//                     "id": "ratingfacetquery4",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Ratings 3.5+",
//                     "id": "ratingfacetquery5",
//                     "analytics": {

//                     }
//                   }
//                 ],
//                 "viewType": "VIEW_TYPE_HALF_CARD",
//                 "subLabel": "Filterby"
//               },
//               {
//                 "label": "Veg/Non-Veg",
//                 "id": "isVeg",
//                 "selection": "SELECT_TYPE_SINGLESELECT",
//                 "facetInfo": [
//                   {
//                     "label": "Pure Veg",
//                     "id": "isVegfacetquery2",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Non Veg",
//                     "id": "isVegfacetquery3",
//                     "analytics": {

//                     }
//                   }
//                 ],
//                 "viewType": "VIEW_TYPE_FLATTENED",
//                 "subLabel": "Filterby"
//               },
//               {
//                 "label": "Offers",
//                 "id": "restaurantOfferMultiTd",
//                 "selection": "SELECT_TYPE_SINGLESELECT",
//                 "facetInfo": [
//                   {
//                     "label": "Offers",
//                     "id": "restaurantOfferMultiTdfacetquery3",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   }
//                 ],
//                 "viewType": "VIEW_TYPE_FLATTENED",
//                 "subLabel": "Restaurantswith"
//               },
//               {
//                 "label": "Cost for two",
//                 "id": "costForTwo",
//                 "selection": "SELECT_TYPE_MULTISELECT",
//                 "facetInfo": [
//                   {
//                     "label": "Rs. 300-Rs. 600",
//                     "id": "costForTwofacetquery3",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   },
//                   {
//                     "label": "Greater than Rs. 600",
//                     "id": "costForTwofacetquery4",
//                     "analytics": {

//                     }
//                   },
//                   {
//                     "label": "Less than Rs. 300",
//                     "id": "costForTwofacetquery5",
//                     "analytics": {

//                     },
//                     "openFilter": true
//                   }
//                 ],
//                 "viewType": "VIEW_TYPE_HALF_CARD",
//                 "subLabel": "Filterby"
//               }
//             ]
//           }
//         }
//       },
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
//             "layout": {
//               "columns": 4
//             },
//             "id": "restaurant_grid_listing_v2",
//             "gridElements": {
//               "infoWithStyle": {
//                 "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo",
//                 "restaurants": [
//                   {
//                     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                     "info": {
//                       "id": "89517",
//                       "name": "Pizza Hut",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/4f94bf38-adca-4958-83e4-8280dc5a938b_89517.JPG",
//                       "locality": "Goregaon East",
//                       "areaName": "Goregaon East",
//                       "costForTwo": "₹300 for two",
//                       "cuisines": [
//                         "Pizzas"
//                       ],
//                       "avgRating": 4.2,
//                       "parentId": "721",
//                       "avgRatingString": "4.2",
//                       "totalRatingsString": "5.9K+",
//                       "sla": {
//                         "deliveryTime": 36,
//                         "lastMileTravel": 2.6,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "35-40 mins",
//                         "lastMileTravelString": "2.6 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-21 01:00:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                             "description": "Delivery!"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "Delivery!",
//                                   "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹99"
//                       },
//                       "orderabilityCommunication": {
//                         "title": {

//                         },
//                         "subTitle": {

//                         },
//                         "message": {

//                         },
//                         "customIcon": {

//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "4.6",
//                           "ratingCount": "1.4K+"
//                         },
//                         "source": "GOOGLE",
//                         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/pizza-hut-goregaon-east-rest89517",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   },
//                   {
//                     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                     "info": {
//                       "id": "72069",
//                       "name": "Chinese Wok",
//                       "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//                       "locality": "Mahakali",
//                       "areaName": "Mahakali",
//                       "costForTwo": "₹250 for two",
//                       "cuisines": [
//                         "Chinese",
//                         "Asian",
//                         "Tibetan",
//                         "Desserts"
//                       ],
//                       "avgRating": 4.3,
//                       "parentId": "61955",
//                       "avgRatingString": "4.3",
//                       "totalRatingsString": "19K+",
//                       "sla": {
//                         "deliveryTime": 52,
//                         "lastMileTravel": 3,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "50-60 mins",
//                         "lastMileTravelString": "3.0 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-21 01:00:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "Rxawards/_CATEGORY-Chinese.png",
//                             "description": "Delivery!"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "Delivery!",
//                                   "imageId": "Rxawards/_CATEGORY-Chinese.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹129"
//                       },
//                       "orderabilityCommunication": {
//                         "title": {

//                         },
//                         "subTitle": {

//                         },
//                         "message": {

//                         },
//                         "customIcon": {

//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "3.7",
//                           "ratingCount": "666"
//                         },
//                         "source": "GOOGLE",
//                         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/chinese-wok-mahakali-rest72069",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   },
//                   {
//                     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                     "info": {
//                       "id": "173212",
//                       "name": "Theobroma",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/03881969-4935-4d1d-b049-d260a67cd17c_173212.JPG",
//                       "locality": "Mahakali Caves Rd",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹400 for two",
//                       "cuisines": [
//                         "Bakery",
//                         "Desserts"
//                       ],
//                       "avgRating": 4.5,
//                       "parentId": "1040",
//                       "avgRatingString": "4.5",
//                       "totalRatingsString": "7.8K+",
//                       "sla": {
//                         "deliveryTime": 24,
//                         "lastMileTravel": 2.4,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "20-25 mins",
//                         "lastMileTravelString": "2.4 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 23:59:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "Rxawards/_CATEGORY-Desserts.png",
//                             "description": "Delivery!"
//                           },
//                           {
//                             "imageId": "newg.png",
//                             "description": "Gourmet"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "Delivery!",
//                                   "imageId": "Rxawards/_CATEGORY-Desserts.png"
//                                 }
//                               },
//                               {
//                                 "attributes": {
//                                   "description": "Gourmet",
//                                   "imageId": "newg.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹290"
//                       },
//                       "orderabilityCommunication": {
//                         "title": {

//                         },
//                         "subTitle": {

//                         },
//                         "message": {

//                         },
//                         "customIcon": {

//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/theobroma-mahakali-caves-rd-andheri-east-rest173212",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   },
//                   {
//                     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                     "info": {
//                       "id": "25569",
//                       "name": "Baskin Robbins - Ice Cream Desserts",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/8190edf7-10e9-4adf-bd22-3214727325b8_25569.JPG",
//                       "locality": "Near Tolani College",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹300 for two",
//                       "cuisines": [
//                         "Desserts",
//                         "Ice Cream"
//                       ],
//                       "avgRating": 4.7,
//                       "veg": true,
//                       "parentId": "5588",
//                       "avgRatingString": "4.7",
//                       "totalRatingsString": "4.8K+",
//                       "sla": {
//                         "deliveryTime": 22,
//                         "lastMileTravel": 1.5,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "20-25 mins",
//                         "lastMileTravelString": "1.5 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 23:59:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "android/static-assets/icons/big_rx.png",
//                             "description": "bolt!"
//                           },
//                           {
//                             "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
//                             "description": "Delivery!"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "bolt!",
//                                   "imageId": "android/static-assets/icons/big_rx.png"
//                                 }
//                               },
//                               {
//                                 "attributes": {
//                                   "description": "Delivery!",
//                                   "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹59"
//                       },
//                       "orderabilityCommunication": {
//                         "title": {

//                         },
//                         "subTitle": {

//                         },
//                         "message": {

//                         },
//                         "customIcon": {

//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/baskin-robbins-ice-cream-desserts-near-tolani-college-andheri-east-rest25569",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   },
//                   {
//                     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                     "info": {
//                       "id": "296470",
//                       "name": "Big Bowl",
//                       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_296470.JPG",
//                       "locality": "Ackruti Center Point",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹300 for two",
//                       "cuisines": [
//                         "North Indian",
//                         "Chinese",
//                         "Tibetan",
//                         "Desserts"
//                       ],
//                       "avgRating": 4.4,
//                       "parentId": "434792",
//                       "avgRatingString": "4.4",
//                       "totalRatingsString": "4.6K+",
//                       "sla": {
//                         "deliveryTime": 52,
//                         "lastMileTravel": 4.1,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "50-60 mins",
//                         "lastMileTravelString": "4.1 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-21 01:00:00",
//                         "opened": true
//                       },
//                       "badges": {

//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {

//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹129"
//                       },
//                       "orderabilityCommunication": {
//                         "title": {

//                         },
//                         "subTitle": {

//                         },
//                         "message": {

//                         },
//                         "customIcon": {

//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/big-bowl-ackruti-center-point-andheri-east-rest296470",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   },
//                   {
//                     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                     "info": {
//                       "id": "708033",
//                       "name": "Tewari Brothers",
//                       "cloudinaryImageId": "7067d4bb529e3d692155d65a0f314000",
//                       "locality": "9th Gulmohar Cross Road",
//                       "areaName": "Juhu",
//                       "costForTwo": "₹300 for two",
//                       "cuisines": [
//                         "Sweets",
//                         "Snacks",
//                         "Indian"
//                       ],
//                       "avgRating": 4.7,
//                       "veg": true,
//                       "parentId": "203755",
//                       "avgRatingString": "4.7",
//                       "totalRatingsString": "3.4K+",
//                       "sla": {
//                         "deliveryTime": 39,
//                         "lastMileTravel": 4.7,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "35-40 mins",
//                         "lastMileTravelString": "4.7 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 22:30:00",
//                         "opened": true
//                       },
//                       "badges": {

//                       },
//                       "isOpen": true,
//                       "aggregatedDiscountInfoV2": {

//                       },
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {

//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "orderabilityCommunication": {
//                         "title": {

//                         },
//                         "subTitle": {

//                         },
//                         "message": {

//                         },
//                         "customIcon": {

//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/tewari-brothers-9th-gulmohar-cross-road-juhu-rest708033",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   },
//                   {
//                     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                     "info": {
//                       "id": "64636",
//                       "name": "Urban Tadka",
//                       "cloudinaryImageId": "dghzdiajch3lipplr4zd",
//                       "locality": "Andheri Link Road",
//                       "areaName": "Andheri Link Road",
//                       "costForTwo": "₹800 for two",
//                       "cuisines": [
//                         "North Indian",
//                         "Mughlai"
//                       ],
//                       "avgRating": 4.5,
//                       "parentId": "1273",
//                       "avgRatingString": "4.5",
//                       "totalRatingsString": "12K+",
//                       "sla": {
//                         "deliveryTime": 49,
//                         "lastMileTravel": 3.6,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "45-50 mins",
//                         "lastMileTravelString": "3.6 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-21 02:00:00",
//                         "opened": true
//                       },
//                       "badges": {

//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {

//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "50% OFF",
//                         "discountTag": "FLAT DEAL"
//                       },
//                       "orderabilityCommunication": {
//                         "title": {

//                         },
//                         "subTitle": {

//                         },
//                         "message": {

//                         },
//                         "customIcon": {

//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "4.1",
//                           "ratingCount": "561"
//                         },
//                         "source": "GOOGLE",
//                         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/urban-tadka-andheri-link-road-rest64636",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   },
//                   {
//                     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                     "info": {
//                       "id": "770843",
//                       "name": "Dabba Garam (Homestyle,Combo, Thali & More)",
//                       "cloudinaryImageId": "8bbf91df3c4bb6c43ebdece3f3d3398a",
//                       "locality": "Mahakali",
//                       "areaName": "Andheri East",
//                       "costForTwo": "₹350 for two",
//                       "cuisines": [
//                         "Indian",
//                         "Desserts"
//                       ],
//                       "avgRating": 4.5,
//                       "veg": true,
//                       "parentId": "67608",
//                       "avgRatingString": "4.5",
//                       "totalRatingsString": "2.9K+",
//                       "sla": {
//                         "deliveryTime": 25,
//                         "lastMileTravel": 1.3,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "20-25 mins",
//                         "lastMileTravelString": "1.3 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2025-08-20 15:20:00",
//                         "opened": true
//                       },
//                       "badges": {
//                         "imageBadges": [
//                           {
//                             "imageId": "android/static-assets/icons/big_rx.png",
//                             "description": "bolt!"
//                           },
//                           {
//                             "imageId": "v1695133679/badges/Pure_Veg111.png",
//                             "description": "pureveg"
//                           }
//                         ]
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
//                             "badgeObject": [
//                               {
//                                 "attributes": {
//                                   "description": "bolt!",
//                                   "imageId": "android/static-assets/icons/big_rx.png"
//                                 }
//                               },
//                               {
//                                 "attributes": {
//                                   "description": "pureveg",
//                                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                 }
//                               }
//                             ]
//                           },
//                           "textBased": {

//                           },
//                           "textExtendedBadges": {

//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "ITEMS",
//                         "subHeader": "AT ₹99"
//                       },
//                       "orderabilityCommunication": {
//                         "title": {

//                         },
//                         "subTitle": {

//                         },
//                         "message": {

//                         },
//                         "customIcon": {

//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {

//                           },
//                           "video": {

//                           }
//                         }
//                       },
//                       "reviewsSummary": {

//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {

//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       },
//                       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                     },
//                     "analytics": {
//                       "context": "seo-data-b141b8b4-2043-4df8-bc80-952766dc0670"
//                     },
//                     "cta": {
//                       "link": "https://www.swiggy.com/city/mumbai/dabba-garam-homestyle-combo-thali-and-more-mahakali-andheri-east-rest770843",
//                       "text": "RESTAURANT_MENU",
//                       "type": "WEBLINK"
//                     },
//                     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                   }
//                 ],
//                 "theme": "SeoRestaurantListingGridWidget"
//               }
//             }
//           }
//         }
//       },
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
//             "message": "Show More",
//             "id": "show_more_button"
//           }
//         }
//       },
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
//             "title": "Best Places to Eat Across Cities",
//             "brands": [
//               {
//                 "text": "Best Restaurants in Bangalore",
//                 "link": "https://www.swiggy.com/city/bangalore/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Pune",
//                 "link": "https://www.swiggy.com/city/pune/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Mumbai",
//                 "link": "https://www.swiggy.com/city/mumbai/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Delhi",
//                 "link": "https://www.swiggy.com/city/delhi/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Hyderabad",
//                 "link": "https://www.swiggy.com/city/hyderabad/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Kolkata",
//                 "link": "https://www.swiggy.com/city/kolkata/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Chennai",
//                 "link": "https://www.swiggy.com/city/chennai/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Chandigarh",
//                 "link": "https://www.swiggy.com/city/chandigarh/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Ahmedabad",
//                 "link": "https://www.swiggy.com/city/ahmedabad/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Jaipur",
//                 "link": "https://www.swiggy.com/city/jaipur/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Nagpur",
//                 "link": "https://www.swiggy.com/city/nagpur/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Bhubaneswar",
//                 "link": "https://www.swiggy.com/city/bhubaneswar/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Kochi",
//                 "link": "https://www.swiggy.com/city/kochi/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Surat",
//                 "link": "https://www.swiggy.com/city/surat/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Dehradun",
//                 "link": "https://www.swiggy.com/city/dehradun/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Ludhiana",
//                 "link": "https://www.swiggy.com/city/ludhiana/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Patna",
//                 "link": "https://www.swiggy.com/city/patna/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Mangaluru",
//                 "link": "https://www.swiggy.com/city/mangaluru/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Bhopal",
//                 "link": "https://www.swiggy.com/city/bhopal/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Gurgaon",
//                 "link": "https://www.swiggy.com/city/gurgaon/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Coimbatore",
//                 "link": "https://www.swiggy.com/city/coimbatore/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Agra",
//                 "link": "https://www.swiggy.com/city/agra/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Noida",
//                 "link": "https://www.swiggy.com/city/noida/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Vijayawada",
//                 "link": "https://www.swiggy.com/city/vijayawada/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Guwahati",
//                 "link": "https://www.swiggy.com/city/guwahati/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Mysore",
//                 "link": "https://www.swiggy.com/city/mysore/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Pondicherry",
//                 "link": "https://www.swiggy.com/city/pondicherry/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Thiruvananthapuram",
//                 "link": "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Ranchi",
//                 "link": "https://www.swiggy.com/city/ranchi/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Vizag",
//                 "link": "https://www.swiggy.com/city/vizag/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Udaipur",
//                 "link": "https://www.swiggy.com/city/udaipur/best-restaurants"
//               },
//               {
//                 "text": "Best Restaurants in Vadodara",
//                 "link": "https://www.swiggy.com/city/vadodara/best-restaurants"
//               }
//             ],
//             "id": "restaurant_near_me_links"
//           }
//         }
//       },
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
//             "title": "Best Cuisines Near Me",
//             "brands": [
//               {
//                 "text": "Chinese Restaurant Near Me",
//                 "link": "https://www.swiggy.com/chinese-restaurants-near-me"
//               },
//               {
//                 "text": "South Indian Restaurant Near Me",
//                 "link": "https://www.swiggy.com/south-indian-restaurants-near-me"
//               },
//               {
//                 "text": "Indian Restaurant Near Me",
//                 "link": "https://www.swiggy.com/indian-restaurants-near-me"
//               },
//               {
//                 "text": "Kerala Restaurant Near Me",
//                 "link": "https://www.swiggy.com/kerala-restaurants-near-me"
//               },
//               {
//                 "text": "Korean Restaurant Near Me",
//                 "link": "https://www.swiggy.com/korean-restaurants-near-me"
//               },
//               {
//                 "text": "North Indian Restaurant Near Me",
//                 "link": "https://www.swiggy.com/north-indian-restaurants-near-me"
//               },
//               {
//                 "text": "Seafood Restaurant Near Me",
//                 "link": "https://www.swiggy.com/seafood-restaurants-near-me"
//               },
//               {
//                 "text": "Bengali Restaurant Near Me",
//                 "link": "https://www.swiggy.com/bengali-restaurants-near-me"
//               },
//               {
//                 "text": "Punjabi Restaurant Near Me",
//                 "link": "https://www.swiggy.com/punjabi-restaurants-near-me"
//               },
//               {
//                 "text": "Italian Restaurant Near Me",
//                 "link": "https://www.swiggy.com/italian-restaurants-near-me"
//               },
//               {
//                 "text": "Andhra Restaurant Near Me",
//                 "link": "https://www.swiggy.com/andhra-restaurants-near-me"
//               },
//               {
//                 "text": "Biryani Restaurant Near Me",
//                 "link": "https://www.swiggy.com/biryani-restaurants-near-me"
//               },
//               {
//                 "text": "Japanese Restaurant Near Me",
//                 "link": "https://www.swiggy.com/japanese-restaurants-near-me"
//               },
//               {
//                 "text": "Arabian Restaurant Near Me",
//                 "link": "https://www.swiggy.com/arabian-restaurants-near-me"
//               },
//               {
//                 "text": "Fast Food Restaurant Near Me",
//                 "link": "https://www.swiggy.com/fast-food-restaurants-near-me"
//               },
//               {
//                 "text": "Jain Restaurant Near Me",
//                 "link": "https://www.swiggy.com/jain-restaurants-near-me"
//               },
//               {
//                 "text": "Gujarati Restaurant Near Me",
//                 "link": "https://www.swiggy.com/gujarati-restaurants-near-me"
//               },
//               {
//                 "text": "Thai Restaurant Near Me",
//                 "link": "https://www.swiggy.com/thai-restaurants-near-me"
//               },
//               {
//                 "text": "Pizzas Restaurant Near Me",
//                 "link": "https://www.swiggy.com/pizzas-restaurants-near-me"
//               },
//               {
//                 "text": "Asian Restaurant Near Me",
//                 "link": "https://www.swiggy.com/asian-restaurants-near-me"
//               },
//               {
//                 "text": "Cafe Restaurant Near Me",
//                 "link": "https://www.swiggy.com/cafe-restaurants-near-me"
//               },
//               {
//                 "text": "Continental Restaurant Near Me",
//                 "link": "https://www.swiggy.com/continental-restaurants-near-me"
//               },
//               {
//                 "text": "Mexican Restaurant Near Me",
//                 "link": "https://www.swiggy.com/mexican-restaurants-near-me"
//               },
//               {
//                 "text": "Mughlai Restaurant Near Me",
//                 "link": "https://www.swiggy.com/mughlai-restaurants-near-me"
//               },
//               {
//                 "text": "Sushi Restaurant Near Me",
//                 "link": "https://www.swiggy.com/sushi-restaurants-near-me"
//               },
//               {
//                 "text": "Mangalorean Restaurant Near Me",
//                 "link": "https://www.swiggy.com/mangalorean-restaurants-near-me"
//               },
//               {
//                 "text": "Tibetan Restaurant Near Me",
//                 "link": "https://www.swiggy.com/tibetan-restaurants-near-me"
//               },
//               {
//                 "text": "Barbecue Restaurant Near Me",
//                 "link": "https://www.swiggy.com/barbecue-restaurants-near-me"
//               },
//               {
//                 "text": "Maharashtrian Restaurant Near Me",
//                 "link": "https://www.swiggy.com/maharashtrian-restaurants-near-me"
//               },
//               {
//                 "text": "Nepalese Restaurant Near Me",
//                 "link": "https://www.swiggy.com/nepalese-restaurants-near-me"
//               },
//               {
//                 "text": "Rajasthani Restaurant Near Me",
//                 "link": "https://www.swiggy.com/rajasthani-restaurants-near-me"
//               },
//               {
//                 "text": "Turkish Restaurant Near Me",
//                 "link": "https://www.swiggy.com/turkish-restaurants-near-me"
//               }
//             ],
//             "id": "restaurant_near_me_links"
//           }
//         }
//       },
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
//             "title": "Explore Every Restaurants Near Me",
//             "brands": [
//               {
//                 "text": "Explore Restaurants Near Me",
//                 "link": "https://www.swiggy.com/restaurants-near-me"
//               },
//               {
//                 "text": "Explore Top Rated Restaurants Near Me",
//                 "link": "https://www.swiggy.com/best-restaurants-near-me"
//               }
//             ],
//             "id": "restaurant_near_me_links"
//           }
//         }
//       },
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
//             "title": "For better experience,download the Swiggy app now",
//             "androidAppImage": "portal/m/play_store.png",
//             "androidAppLink": "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
//             "iosAppImage": "portal/m/app_store.png",
//             "iosAppLink": "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
//             "id": "app_install_links"
//           }
//         }
//       },
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
//             "cities": [
//               {
//                 "text": "Bangalore",
//                 "link": "https://www.swiggy.com/city/bangalore"
//               },
//               {
//                 "text": "Gurgaon",
//                 "link": "https://www.swiggy.com/city/gurgaon"
//               },
//               {
//                 "text": "Hyderabad",
//                 "link": "https://www.swiggy.com/city/hyderabad"
//               },
//               {
//                 "text": "Delhi",
//                 "link": "https://www.swiggy.com/city/delhi"
//               },
//               {
//                 "text": "Mumbai",
//                 "link": "https://www.swiggy.com/city/mumbai"
//               },
//               {
//                 "text": "Pune",
//                 "link": "https://www.swiggy.com/city/pune"
//               },
//               {
//                 "text": "Kolkata",
//                 "link": "https://www.swiggy.com/city/kolkata"
//               },
//               {
//                 "text": "Chennai",
//                 "link": "https://www.swiggy.com/city/chennai"
//               },
//               {
//                 "text": "Ahmedabad",
//                 "link": "https://www.swiggy.com/city/ahmedabad"
//               },
//               {
//                 "text": "Chandigarh",
//                 "link": "https://www.swiggy.com/city/chandigarh"
//               },
//               {
//                 "text": "Jaipur",
//                 "link": "https://www.swiggy.com/city/jaipur"
//               },
//               {
//                 "text": "Kochi",
//                 "link": "https://www.swiggy.com/city/kochi"
//               },
//               {
//                 "text": "Coimbatore",
//                 "link": "https://www.swiggy.com/city/coimbatore"
//               },
//               {
//                 "text": "Lucknow",
//                 "link": "https://www.swiggy.com/city/lucknow"
//               },
//               {
//                 "text": "Nagpur",
//                 "link": "https://www.swiggy.com/city/nagpur"
//               },
//               {
//                 "text": "Vadodara",
//                 "link": "https://www.swiggy.com/city/vadodara"
//               },
//               {
//                 "text": "Indore",
//                 "link": "https://www.swiggy.com/city/indore"
//               },
//               {
//                 "text": "Guwahati",
//                 "link": "https://www.swiggy.com/city/guwahati"
//               },
//               {
//                 "text": "Vizag",
//                 "link": "https://www.swiggy.com/city/vizag"
//               },
//               {
//                 "text": "Surat",
//                 "link": "https://www.swiggy.com/city/surat"
//               },
//               {
//                 "text": "Dehradun",
//                 "link": "https://www.swiggy.com/city/dehradun"
//               },
//               {
//                 "text": "Noida",
//                 "link": "https://www.swiggy.com/city/noida"
//               },
//               {
//                 "text": "Ludhiana",
//                 "link": "https://www.swiggy.com/city/ludhiana"
//               },
//               {
//                 "text": "Trichy",
//                 "link": "https://www.swiggy.com/city/trichy"
//               },
//               {
//                 "text": "Vijayawada",
//                 "link": "https://www.swiggy.com/city/vijayawada"
//               },
//               {
//                 "text": "Kanpur",
//                 "link": "https://www.swiggy.com/city/kanpur"
//               },
//               {
//                 "text": "Mysore",
//                 "link": "https://www.swiggy.com/city/mysore"
//               },
//               {
//                 "text": "Nashik",
//                 "link": "https://www.swiggy.com/city/nashik"
//               },
//               {
//                 "text": "Udaipur",
//                 "link": "https://www.swiggy.com/city/udaipur"
//               },
//               {
//                 "text": "Pondicherry",
//                 "link": "https://www.swiggy.com/city/pondicherry"
//               },
//               {
//                 "text": "Agra",
//                 "link": "https://www.swiggy.com/city/agra"
//               },
//               {
//                 "text": "Aurangabad",
//                 "link": "https://www.swiggy.com/city/aurangabad"
//               },
//               {
//                 "text": "Jalandhar",
//                 "link": "https://www.swiggy.com/city/jalandhar"
//               },
//               {
//                 "text": "Kota",
//                 "link": "https://www.swiggy.com/city/kota"
//               },
//               {
//                 "text": "Madurai",
//                 "link": "https://www.swiggy.com/city/madurai"
//               },
//               {
//                 "text": "Allahabad",
//                 "link": "https://www.swiggy.com/city/allahabad"
//               },
//               {
//                 "text": "Manipal",
//                 "link": "https://www.swiggy.com/city/manipal"
//               },
//               {
//                 "text": "Amritsar",
//                 "link": "https://www.swiggy.com/city/amritsar"
//               },
//               {
//                 "text": "Bareilly",
//                 "link": "https://www.swiggy.com/city/bareilly"
//               },
//               {
//                 "text": "Meerut",
//                 "link": "https://www.swiggy.com/city/meerut"
//               },
//               {
//                 "text": "Bhopal",
//                 "link": "https://www.swiggy.com/city/bhopal"
//               },
//               {
//                 "text": "Ooty",
//                 "link": "https://www.swiggy.com/city/ooty"
//               },
//               {
//                 "text": "Bhubaneswar",
//                 "link": "https://www.swiggy.com/city/bhubaneswar"
//               },
//               {
//                 "text": "Raipur",
//                 "link": "https://www.swiggy.com/city/raipur"
//               },
//               {
//                 "text": "Bikaner",
//                 "link": "https://www.swiggy.com/city/bikaner"
//               },
//               {
//                 "text": "Rajkot",
//                 "link": "https://www.swiggy.com/city/rajkot"
//               },
//               {
//                 "text": "Kozhikode",
//                 "link": "https://www.swiggy.com/city/kozhikode"
//               },
//               {
//                 "text": "Central Goa",
//                 "link": "https://www.swiggy.com/city/central-goa"
//               },
//               {
//                 "text": "Sirsa",
//                 "link": "https://www.swiggy.com/city/sirsa"
//               },
//               {
//                 "text": "Gwalior",
//                 "link": "https://www.swiggy.com/city/gwalior"
//               },
//               {
//                 "text": "Thrissur",
//                 "link": "https://www.swiggy.com/city/thrissur"
//               },
//               {
//                 "text": "Kharagpur",
//                 "link": "https://www.swiggy.com/city/kharagpur"
//               },
//               {
//                 "text": "Tirupati",
//                 "link": "https://www.swiggy.com/city/tirupati"
//               },
//               {
//                 "text": "Tirupur",
//                 "link": "https://www.swiggy.com/city/tirupur"
//               },
//               {
//                 "text": "Vellore",
//                 "link": "https://www.swiggy.com/city/vellore"
//               },
//               {
//                 "text": "Thiruvananthapuram",
//                 "link": "https://www.swiggy.com/city/thiruvananthapuram"
//               },
//               {
//                 "text": "Warangal",
//                 "link": "https://www.swiggy.com/city/warangal"
//               },
//               {
//                 "text": "Varanasi",
//                 "link": "https://www.swiggy.com/city/varanasi"
//               },
//               {
//                 "text": "Mangaluru",
//                 "link": "https://www.swiggy.com/city/mangaluru"
//               },
//               {
//                 "text": "Patna",
//                 "link": "https://www.swiggy.com/city/patna"
//               },
//               {
//                 "text": "Ranchi",
//                 "link": "https://www.swiggy.com/city/ranchi"
//               },
//               {
//                 "text": "Faridabad",
//                 "link": "https://www.swiggy.com/city/faridabad"
//               },
//               {
//                 "text": "Guntur",
//                 "link": "https://www.swiggy.com/city/guntur"
//               },
//               {
//                 "text": "Ujjain",
//                 "link": "https://www.swiggy.com/city/ujjain"
//               },
//               {
//                 "text": "Patiala",
//                 "link": "https://www.swiggy.com/city/patiala"
//               },
//               {
//                 "text": "Karnal",
//                 "link": "https://www.swiggy.com/city/karnal"
//               },
//               {
//                 "text": "Kakinada",
//                 "link": "https://www.swiggy.com/city/kakinada"
//               },
//               {
//                 "text": "Rajahmundry",
//                 "link": "https://www.swiggy.com/city/rajahmundry"
//               },
//               {
//                 "text": "Bilaspur",
//                 "link": "https://www.swiggy.com/city/bilaspur"
//               },
//               {
//                 "text": "Bhilai",
//                 "link": "https://www.swiggy.com/city/bhilai"
//               },
//               {
//                 "text": "Anand",
//                 "link": "https://www.swiggy.com/city/anand"
//               },
//               {
//                 "text": "Bhavnagar",
//                 "link": "https://www.swiggy.com/city/bhavnagar"
//               },
//               {
//                 "text": "Jammu",
//                 "link": "https://www.swiggy.com/city/jammu"
//               },
//               {
//                 "text": "Muktsar",
//                 "link": "https://www.swiggy.com/city/muktsar"
//               },
//               {
//                 "text": "Panipat",
//                 "link": "https://www.swiggy.com/city/panipat"
//               },
//               {
//                 "text": "Jamshedpur",
//                 "link": "https://www.swiggy.com/city/jamshedpur"
//               },
//               {
//                 "text": "Dhanbad",
//                 "link": "https://www.swiggy.com/city/dhanbad"
//               },
//               {
//                 "text": "Bokaro",
//                 "link": "https://www.swiggy.com/city/bokaro"
//               },
//               {
//                 "text": "Hubli",
//                 "link": "https://www.swiggy.com/city/hubli"
//               },
//               {
//                 "text": "Belgaum",
//                 "link": "https://www.swiggy.com/city/belgaum"
//               },
//               {
//                 "text": "Jabalpur",
//                 "link": "https://www.swiggy.com/city/jabalpur"
//               },
//               {
//                 "text": "Kolhapur",
//                 "link": "https://www.swiggy.com/city/kolhapur"
//               },
//               {
//                 "text": "Solapur",
//                 "link": "https://www.swiggy.com/city/solapur"
//               },
//               {
//                 "text": "Shillong",
//                 "link": "https://www.swiggy.com/city/shillong"
//               },
//               {
//                 "text": "Cuttack",
//                 "link": "https://www.swiggy.com/city/cuttack"
//               },
//               {
//                 "text": "Aligarh",
//                 "link": "https://www.swiggy.com/city/aligarh"
//               },
//               {
//                 "text": "Salem",
//                 "link": "https://www.swiggy.com/city/salem"
//               },
//               {
//                 "text": "Agartala",
//                 "link": "https://www.swiggy.com/city/agartala"
//               },
//               {
//                 "text": "Jodhpur",
//                 "link": "https://www.swiggy.com/city/jodhpur"
//               },
//               {
//                 "text": "Ajmer",
//                 "link": "https://www.swiggy.com/city/ajmer"
//               },
//               {
//                 "text": "Jhansi",
//                 "link": "https://www.swiggy.com/city/jhansi"
//               },
//               {
//                 "text": "Gorakhpur",
//                 "link": "https://www.swiggy.com/city/gorakhpur"
//               },
//               {
//                 "text": "Thanjavur",
//                 "link": "https://www.swiggy.com/city/thanjavur"
//               },
//               {
//                 "text": "Erode",
//                 "link": "https://www.swiggy.com/city/erode"
//               },
//               {
//                 "text": "Nellore",
//                 "link": "https://www.swiggy.com/city/nellore"
//               },
//               {
//                 "text": "Rourkela",
//                 "link": "https://www.swiggy.com/city/rourkela"
//               },
//               {
//                 "text": "Anantapur",
//                 "link": "https://www.swiggy.com/city/anantapur"
//               },
//               {
//                 "text": "Kurnool",
//                 "link": "https://www.swiggy.com/city/kurnool"
//               },
//               {
//                 "text": "Ahmednagar",
//                 "link": "https://www.swiggy.com/city/ahmednagar"
//               },
//               {
//                 "text": "Phagwara",
//                 "link": "https://www.swiggy.com/city/phagwara"
//               },
//               {
//                 "text": "Ambala",
//                 "link": "https://www.swiggy.com/city/ambala"
//               },
//               {
//                 "text": "Ballari",
//                 "link": "https://www.swiggy.com/city/ballari"
//               },
//               {
//                 "text": "Saharanpur",
//                 "link": "https://www.swiggy.com/city/saharanpur"
//               },
//               {
//                 "text": "Tirunelveli",
//                 "link": "https://www.swiggy.com/city/tirunelveli"
//               },
//               {
//                 "text": "Bathinda",
//                 "link": "https://www.swiggy.com/city/bathinda"
//               },
//               {
//                 "text": "Mathura",
//                 "link": "https://www.swiggy.com/city/mathura"
//               },
//               {
//                 "text": "Haridwar",
//                 "link": "https://www.swiggy.com/city/haridwar"
//               },
//               {
//                 "text": "Ratnagiri",
//                 "link": "https://www.swiggy.com/city/ratnagiri"
//               },
//               {
//                 "text": "Sangli",
//                 "link": "https://www.swiggy.com/city/sangli"
//               },
//               {
//                 "text": "Amravati",
//                 "link": "https://www.swiggy.com/city/amravati"
//               },
//               {
//                 "text": "Rishikesh",
//                 "link": "https://www.swiggy.com/city/rishikesh"
//               },
//               {
//                 "text": "Nagercoil",
//                 "link": "https://www.swiggy.com/city/nagercoil"
//               },
//               {
//                 "text": "KanyaKumari",
//                 "link": "https://www.swiggy.com/city/kanyakumari"
//               },
//               {
//                 "text": "Kadapa",
//                 "link": "https://www.swiggy.com/city/kadapa"
//               },
//               {
//                 "text": "Nizamabad",
//                 "link": "https://www.swiggy.com/city/nizamabad"
//               },
//               {
//                 "text": "Shivamogga",
//                 "link": "https://www.swiggy.com/city/shivamogga"
//               },
//               {
//                 "text": "Davanagere",
//                 "link": "https://www.swiggy.com/city/davanagere"
//               },
//               {
//                 "text": "Roorkee",
//                 "link": "https://www.swiggy.com/city/roorkee"
//               },
//               {
//                 "text": "Nanded",
//                 "link": "https://www.swiggy.com/city/nanded"
//               },
//               {
//                 "text": "Rewa",
//                 "link": "https://www.swiggy.com/city/rewa"
//               },
//               {
//                 "text": "Satna",
//                 "link": "https://www.swiggy.com/city/satna"
//               },
//               {
//                 "text": "Shimla",
//                 "link": "https://www.swiggy.com/city/shimla"
//               },
//               {
//                 "text": "Muzaffarpur",
//                 "link": "https://www.swiggy.com/city/muzaffarpur"
//               },
//               {
//                 "text": "Valsad",
//                 "link": "https://www.swiggy.com/city/valsad"
//               },
//               {
//                 "text": "Vapi",
//                 "link": "https://www.swiggy.com/city/vapi"
//               },
//               {
//                 "text": "Chhapra",
//                 "link": "https://www.swiggy.com/city/chhapra"
//               },
//               {
//                 "text": "Dharamshala",
//                 "link": "https://www.swiggy.com/city/dharamshala"
//               },
//               {
//                 "text": "Kollam",
//                 "link": "https://www.swiggy.com/city/kollam"
//               },
//               {
//                 "text": "Silchar",
//                 "link": "https://www.swiggy.com/city/silchar"
//               },
//               {
//                 "text": "Alappuzha",
//                 "link": "https://www.swiggy.com/city/alappuzha"
//               },
//               {
//                 "text": "Sonipat",
//                 "link": "https://www.swiggy.com/city/sonipat"
//               },
//               {
//                 "text": "Rohtak",
//                 "link": "https://www.swiggy.com/city/rohtak"
//               },
//               {
//                 "text": "Mehsana",
//                 "link": "https://www.swiggy.com/city/mehsana"
//               },
//               {
//                 "text": "Kullu",
//                 "link": "https://www.swiggy.com/city/kullu"
//               },
//               {
//                 "text": "Dhule",
//                 "link": "https://www.swiggy.com/city/dhule"
//               },
//               {
//                 "text": "Dharwad",
//                 "link": "https://www.swiggy.com/city/dharwad"
//               },
//               {
//                 "text": "Latur",
//                 "link": "https://www.swiggy.com/city/latur"
//               },
//               {
//                 "text": "Vizianagaram",
//                 "link": "https://www.swiggy.com/city/vizianagaram"
//               },
//               {
//                 "text": "Khammam",
//                 "link": "https://www.swiggy.com/city/khammam"
//               },
//               {
//                 "text": "Hampi",
//                 "link": "https://www.swiggy.com/city/hampi"
//               },
//               {
//                 "text": "Nainital",
//                 "link": "https://www.swiggy.com/city/nainital"
//               },
//               {
//                 "text": "Akola",
//                 "link": "https://www.swiggy.com/city/akola"
//               },
//               {
//                 "text": "Kalaburagi",
//                 "link": "https://www.swiggy.com/city/kalaburagi"
//               },
//               {
//                 "text": "Gaya",
//                 "link": "https://www.swiggy.com/city/gaya"
//               },
//               {
//                 "text": "Muzaffarnagar",
//                 "link": "https://www.swiggy.com/city/muzaffarnagar"
//               },
//               {
//                 "text": "Dewas",
//                 "link": "https://www.swiggy.com/city/dewas"
//               },
//               {
//                 "text": "Korba",
//                 "link": "https://www.swiggy.com/city/korba"
//               },
//               {
//                 "text": "Mussoorie",
//                 "link": "https://www.swiggy.com/city/mussoorie"
//               },
//               {
//                 "text": "Jalgaon",
//                 "link": "https://www.swiggy.com/city/jalgaon"
//               },
//               {
//                 "text": "Yamuna Nagar",
//                 "link": "https://www.swiggy.com/city/yamuna-nagar"
//               },
//               {
//                 "text": "Bhagalpur",
//                 "link": "https://www.swiggy.com/city/bhagalpur"
//               },
//               {
//                 "text": "Hapur",
//                 "link": "https://www.swiggy.com/city/hapur"
//               },
//               {
//                 "text": "Morena",
//                 "link": "https://www.swiggy.com/city/morena"
//               },
//               {
//                 "text": "Hassan",
//                 "link": "https://www.swiggy.com/city/hassan"
//               },
//               {
//                 "text": "Hisar",
//                 "link": "https://www.swiggy.com/city/hisar"
//               },
//               {
//                 "text": "Godhra",
//                 "link": "https://www.swiggy.com/city/godhra"
//               },
//               {
//                 "text": "Kolar ",
//                 "link": "https://www.swiggy.com/city/kolar"
//               },
//               {
//                 "text": "Rampur",
//                 "link": "https://www.swiggy.com/city/rampur"
//               },
//               {
//                 "text": "Sitapur",
//                 "link": "https://www.swiggy.com/city/sitapur"
//               },
//               {
//                 "text": "Etawah",
//                 "link": "https://www.swiggy.com/city/etawah"
//               },
//               {
//                 "text": "Porbandar",
//                 "link": "https://www.swiggy.com/city/porbandar"
//               },
//               {
//                 "text": "Nadiad",
//                 "link": "https://www.swiggy.com/city/nadiad"
//               },
//               {
//                 "text": "Sagar",
//                 "link": "https://www.swiggy.com/city/sagar"
//               },
//               {
//                 "text": "Morbi",
//                 "link": "https://www.swiggy.com/city/morbi"
//               },
//               {
//                 "text": "Chhindwara",
//                 "link": "https://www.swiggy.com/city/chhindwara"
//               },
//               {
//                 "text": "Tumakuru",
//                 "link": "https://www.swiggy.com/city/tumakuru"
//               },
//               {
//                 "text": "Singrauli",
//                 "link": "https://www.swiggy.com/city/singrauli"
//               },
//               {
//                 "text": "Thoothukudi",
//                 "link": "https://www.swiggy.com/city/thoothukudi"
//               },
//               {
//                 "text": "Katni",
//                 "link": "https://www.swiggy.com/city/katni"
//               },
//               {
//                 "text": "Khandwa",
//                 "link": "https://www.swiggy.com/city/khandwa"
//               },
//               {
//                 "text": "Eluru",
//                 "link": "https://www.swiggy.com/city/eluru"
//               },
//               {
//                 "text": "Malappuram",
//                 "link": "https://www.swiggy.com/city/malappuram"
//               },
//               {
//                 "text": "Dibrugarh",
//                 "link": "https://www.swiggy.com/city/dibrugarh"
//               },
//               {
//                 "text": "Deoghar",
//                 "link": "https://www.swiggy.com/city/deoghar"
//               },
//               {
//                 "text": "Khanna",
//                 "link": "https://www.swiggy.com/city/khanna"
//               },
//               {
//                 "text": "Bidar",
//                 "link": "https://www.swiggy.com/city/bidar"
//               },
//               {
//                 "text": "Anantnag",
//                 "link": "https://www.swiggy.com/city/anantnag"
//               },
//               {
//                 "text": "Madikeri",
//                 "link": "https://www.swiggy.com/city/madikeri"
//               },
//               {
//                 "text": "Haldwani",
//                 "link": "https://www.swiggy.com/city/haldwani"
//               },
//               {
//                 "text": "Panchkula",
//                 "link": "https://www.swiggy.com/city/panchkula"
//               },
//               {
//                 "text": "Farrukhabad",
//                 "link": "https://www.swiggy.com/city/farrukhabad"
//               },
//               {
//                 "text": "Malegaon",
//                 "link": "https://www.swiggy.com/city/malegaon"
//               },
//               {
//                 "text": "Dindigul",
//                 "link": "https://www.swiggy.com/city/dindigul"
//               },
//               {
//                 "text": "Shahjahanpur",
//                 "link": "https://www.swiggy.com/city/shahjahanpur"
//               },
//               {
//                 "text": "Beed",
//                 "link": "https://www.swiggy.com/city/beed"
//               },
//               {
//                 "text": "Junagadh",
//                 "link": "https://www.swiggy.com/city/junagadh"
//               },
//               {
//                 "text": "Asansol",
//                 "link": "https://www.swiggy.com/city/asansol"
//               },
//               {
//                 "text": "Beawar",
//                 "link": "https://www.swiggy.com/city/beawar"
//               },
//               {
//                 "text": "Kishangarh",
//                 "link": "https://www.swiggy.com/city/kishangarh"
//               },
//               {
//                 "text": "Budhwal",
//                 "link": "https://www.swiggy.com/city/budhwal"
//               },
//               {
//                 "text": "Parbhani",
//                 "link": "https://www.swiggy.com/city/parbhani"
//               },
//               {
//                 "text": "Gondia",
//                 "link": "https://www.swiggy.com/city/gondia"
//               },
//               {
//                 "text": "Ichalkaranji",
//                 "link": "https://www.swiggy.com/city/ichalkaranji"
//               },
//               {
//                 "text": "Jalna",
//                 "link": "https://www.swiggy.com/city/jalna"
//               },
//               {
//                 "text": "Yavatmal",
//                 "link": "https://www.swiggy.com/city/yavatmal"
//               },
//               {
//                 "text": "Shivpuri",
//                 "link": "https://www.swiggy.com/city/shivpuri"
//               },
//               {
//                 "text": "Moga",
//                 "link": "https://www.swiggy.com/city/moga"
//               },
//               {
//                 "text": "Abohar",
//                 "link": "https://www.swiggy.com/city/abohar"
//               },
//               {
//                 "text": "Adoni",
//                 "link": "https://www.swiggy.com/city/adoni"
//               },
//               {
//                 "text": "Madanapalle",
//                 "link": "https://www.swiggy.com/city/madanapalle"
//               },
//               {
//                 "text": "Tiruvannamalai",
//                 "link": "https://www.swiggy.com/city/tiruvannamalai"
//               },
//               {
//                 "text": "Satara",
//                 "link": "https://www.swiggy.com/city/satara"
//               },
//               {
//                 "text": "Ambur",
//                 "link": "https://www.swiggy.com/city/ambur"
//               },
//               {
//                 "text": "Karimnagar",
//                 "link": "https://www.swiggy.com/city/karimnagar"
//               },
//               {
//                 "text": "Ratlam",
//                 "link": "https://www.swiggy.com/city/ratlam"
//               },
//               {
//                 "text": "Moradabad",
//                 "link": "https://www.swiggy.com/city/moradabad"
//               },
//               {
//                 "text": "Machilipatnam",
//                 "link": "https://www.swiggy.com/city/machilipatnam"
//               },
//               {
//                 "text": "Ongole",
//                 "link": "https://www.swiggy.com/city/ongole"
//               },
//               {
//                 "text": "Kottayam",
//                 "link": "https://www.swiggy.com/city/kottayam"
//               },
//               {
//                 "text": "Darbhanga",
//                 "link": "https://www.swiggy.com/city/darbhanga"
//               },
//               {
//                 "text": "Kurukshetra",
//                 "link": "https://www.swiggy.com/city/kurukshetra"
//               },
//               {
//                 "text": "Unnao",
//                 "link": "https://www.swiggy.com/city/unnao"
//               },
//               {
//                 "text": "Bulandshahr",
//                 "link": "https://www.swiggy.com/city/bulandshahr"
//               },
//               {
//                 "text": "Durgapur",
//                 "link": "https://www.swiggy.com/city/durgapur"
//               },
//               {
//                 "text": "Siliguri",
//                 "link": "https://www.swiggy.com/city/siliguri"
//               },
//               {
//                 "text": "Pali",
//                 "link": "https://www.swiggy.com/city/pali"
//               },
//               {
//                 "text": "Tadepalligudem",
//                 "link": "https://www.swiggy.com/city/tadepalligudem"
//               },
//               {
//                 "text": "Ramagundam",
//                 "link": "https://www.swiggy.com/city/ramagundam"
//               },
//               {
//                 "text": "Mahbubnagar",
//                 "link": "https://www.swiggy.com/city/mahbubnagar"
//               },
//               {
//                 "text": "Bhiwani",
//                 "link": "https://www.swiggy.com/city/bhiwani"
//               },
//               {
//                 "text": "Cuddalore",
//                 "link": "https://www.swiggy.com/city/cuddalore"
//               },
//               {
//                 "text": "Kaithal",
//                 "link": "https://www.swiggy.com/city/kaithal"
//               },
//               {
//                 "text": "Jagtial",
//                 "link": "https://www.swiggy.com/city/jagtial"
//               },
//               {
//                 "text": "Palakkad",
//                 "link": "https://www.swiggy.com/city/palakkad"
//               },
//               {
//                 "text": "Guna",
//                 "link": "https://www.swiggy.com/city/guna"
//               },
//               {
//                 "text": "Kumbakonam",
//                 "link": "https://www.swiggy.com/city/kumbakonam"
//               },
//               {
//                 "text": "Maunath Bhanjan",
//                 "link": "https://www.swiggy.com/city/maunath-bhanjan"
//               },
//               {
//                 "text": "Baripada",
//                 "link": "https://www.swiggy.com/city/baripada"
//               },
//               {
//                 "text": "Orai",
//                 "link": "https://www.swiggy.com/city/orai"
//               },
//               {
//                 "text": "Bhadrak",
//                 "link": "https://www.swiggy.com/city/bhadrak"
//               },
//               {
//                 "text": "Batala",
//                 "link": "https://www.swiggy.com/city/batala"
//               },
//               {
//                 "text": "Firozpur",
//                 "link": "https://www.swiggy.com/city/firozpur"
//               },
//               {
//                 "text": "Barnala",
//                 "link": "https://www.swiggy.com/city/barnala"
//               },
//               {
//                 "text": "Raigarh",
//                 "link": "https://www.swiggy.com/city/raigarh"
//               },
//               {
//                 "text": "Nagaon",
//                 "link": "https://www.swiggy.com/city/nagaon"
//               },
//               {
//                 "text": "Mainpuri",
//                 "link": "https://www.swiggy.com/city/mainpuri"
//               },
//               {
//                 "text": "Balurghat",
//                 "link": "https://www.swiggy.com/city/balurghat"
//               },
//               {
//                 "text": "Giridih",
//                 "link": "https://www.swiggy.com/city/giridih"
//               },
//               {
//                 "text": "Ghazipur",
//                 "link": "https://www.swiggy.com/city/ghazipur"
//               },
//               {
//                 "text": "Jagdalpur",
//                 "link": "https://www.swiggy.com/city/jagdalpur"
//               },
//               {
//                 "text": "Vidisha",
//                 "link": "https://www.swiggy.com/city/vidisha"
//               },
//               {
//                 "text": "Dimapur",
//                 "link": "https://www.swiggy.com/city/dimapur"
//               },
//               {
//                 "text": "Shikohabad",
//                 "link": "https://www.swiggy.com/city/shikohabad"
//               },
//               {
//                 "text": "Imphal",
//                 "link": "https://www.swiggy.com/city/imphal"
//               },
//               {
//                 "text": "Lakhimpur",
//                 "link": "https://www.swiggy.com/city/lakhimpur"
//               },
//               {
//                 "text": "Rudrapur",
//                 "link": "https://www.swiggy.com/city/rudrapur"
//               },
//               {
//                 "text": "Ambikapur",
//                 "link": "https://www.swiggy.com/city/ambikapur"
//               },
//               {
//                 "text": "Damoh",
//                 "link": "https://www.swiggy.com/city/damoh"
//               },
//               {
//                 "text": "Rae Bareli",
//                 "link": "https://www.swiggy.com/city/rae-bareli"
//               },
//               {
//                 "text": "Tinsukia",
//                 "link": "https://www.swiggy.com/city/tinsukia"
//               },
//               {
//                 "text": "Rajapalayam",
//                 "link": "https://www.swiggy.com/city/rajapalayam"
//               },
//               {
//                 "text": "Rajnandgaon",
//                 "link": "https://www.swiggy.com/city/rajnandgaon"
//               },
//               {
//                 "text": "Kashipur",
//                 "link": "https://www.swiggy.com/city/kashipur"
//               },
//               {
//                 "text": "Ranibennur",
//                 "link": "https://www.swiggy.com/city/ranibennur"
//               },
//               {
//                 "text": "Burhanpur",
//                 "link": "https://www.swiggy.com/city/burhanpur"
//               },
//               {
//                 "text": "Bhadravati",
//                 "link": "https://www.swiggy.com/city/bhadravati"
//               },
//               {
//                 "text": "Chittoor",
//                 "link": "https://www.swiggy.com/city/chittoor"
//               },
//               {
//                 "text": "Pudukkottai",
//                 "link": "https://www.swiggy.com/city/pudukkottai"
//               },
//               {
//                 "text": "Hardoi",
//                 "link": "https://www.swiggy.com/city/hardoi"
//               },
//               {
//                 "text": "Basti",
//                 "link": "https://www.swiggy.com/city/basti"
//               },
//               {
//                 "text": "Karaikkudi",
//                 "link": "https://www.swiggy.com/city/karaikkudi"
//               },
//               {
//                 "text": "Lalitpur",
//                 "link": "https://www.swiggy.com/city/lalitpur"
//               },
//               {
//                 "text": "Hospet",
//                 "link": "https://www.swiggy.com/city/hospet"
//               },
//               {
//                 "text": "Budaun",
//                 "link": "https://www.swiggy.com/city/budaun"
//               },
//               {
//                 "text": "Neemuch",
//                 "link": "https://www.swiggy.com/city/neemuch"
//               },
//               {
//                 "text": "Pilibhit",
//                 "link": "https://www.swiggy.com/city/pilibhit"
//               },
//               {
//                 "text": "Amroha",
//                 "link": "https://www.swiggy.com/city/amroha"
//               },
//               {
//                 "text": "Barshi",
//                 "link": "https://www.swiggy.com/city/barshi"
//               },
//               {
//                 "text": "Sri Ganganagar",
//                 "link": "https://www.swiggy.com/city/sri-ganganagar"
//               },
//               {
//                 "text": "Wardha",
//                 "link": "https://www.swiggy.com/city/wardha"
//               },
//               {
//                 "text": "Sehore",
//                 "link": "https://www.swiggy.com/city/sehore"
//               },
//               {
//                 "text": "Bhimavaram",
//                 "link": "https://www.swiggy.com/city/bhimavaram"
//               },
//               {
//                 "text": "Hanumangarh",
//                 "link": "https://www.swiggy.com/city/hanumangarh"
//               },
//               {
//                 "text": "Pathankot",
//                 "link": "https://www.swiggy.com/city/pathankot"
//               },
//               {
//                 "text": "Puri",
//                 "link": "https://www.swiggy.com/city/puri"
//               },
//               {
//                 "text": "Fatehpur",
//                 "link": "https://www.swiggy.com/city/fatehpur"
//               },
//               {
//                 "text": "Surendranagar Dudhrej",
//                 "link": "https://www.swiggy.com/city/surendranagar-dudhrej"
//               },
//               {
//                 "text": "Jamnagar",
//                 "link": "https://www.swiggy.com/city/jamnagar"
//               },
//               {
//                 "text": "Bhuj",
//                 "link": "https://www.swiggy.com/city/bhuj"
//               },
//               {
//                 "text": "Gandhidham",
//                 "link": "https://www.swiggy.com/city/gandhidham"
//               },
//               {
//                 "text": "Bharuch",
//                 "link": "https://www.swiggy.com/city/bharuch"
//               },
//               {
//                 "text": "Navsari",
//                 "link": "https://www.swiggy.com/city/navsari"
//               },
//               {
//                 "text": "Amreli",
//                 "link": "https://www.swiggy.com/city/amreli"
//               },
//               {
//                 "text": "Palanpur",
//                 "link": "https://www.swiggy.com/city/palanpur"
//               },
//               {
//                 "text": "Bhilwara",
//                 "link": "https://www.swiggy.com/city/bhilwara"
//               },
//               {
//                 "text": "Suratgarh",
//                 "link": "https://www.swiggy.com/city/suratgarh"
//               },
//               {
//                 "text": "Sikar",
//                 "link": "https://www.swiggy.com/city/sikar"
//               },
//               {
//                 "text": "Churu",
//                 "link": "https://www.swiggy.com/city/churu"
//               },
//               {
//                 "text": "Alwar",
//                 "link": "https://www.swiggy.com/city/alwar"
//               },
//               {
//                 "text": "Bhiwadi",
//                 "link": "https://www.swiggy.com/city/bhiwadi"
//               },
//               {
//                 "text": "Bharatpur",
//                 "link": "https://www.swiggy.com/city/bharatpur"
//               },
//               {
//                 "text": "Mount Abu",
//                 "link": "https://www.swiggy.com/city/mount-abu"
//               },
//               {
//                 "text": "Bundi",
//                 "link": "https://www.swiggy.com/city/bundi"
//               },
//               {
//                 "text": "Sawai Madhopur",
//                 "link": "https://www.swiggy.com/city/sawai-madhopur"
//               },
//               {
//                 "text": "Purulia",
//                 "link": "https://www.swiggy.com/city/purulia"
//               },
//               {
//                 "text": "Bardhaman",
//                 "link": "https://www.swiggy.com/city/bardhaman"
//               },
//               {
//                 "text": "Raniganj",
//                 "link": "https://www.swiggy.com/city/raniganj"
//               },
//               {
//                 "text": "Darjeeling",
//                 "link": "https://www.swiggy.com/city/darjeeling"
//               },
//               {
//                 "text": "Jalpaiguri",
//                 "link": "https://www.swiggy.com/city/jalpaiguri"
//               },
//               {
//                 "text": "Chittorgarh",
//                 "link": "https://www.swiggy.com/city/chittorgarh"
//               },
//               {
//                 "text": "Dholpur",
//                 "link": "https://www.swiggy.com/city/dholpur"
//               },
//               {
//                 "text": "Uluberia",
//                 "link": "https://www.swiggy.com/city/uluberia"
//               },
//               {
//                 "text": "Nabadwip",
//                 "link": "https://www.swiggy.com/city/nabadwip"
//               },
//               {
//                 "text": "Bongaon",
//                 "link": "https://www.swiggy.com/city/bongaon"
//               },
//               {
//                 "text": "Kanchrapara",
//                 "link": "https://www.swiggy.com/city/kanchrapara"
//               },
//               {
//                 "text": "Bankura",
//                 "link": "https://www.swiggy.com/city/bankura"
//               },
//               {
//                 "text": "Habra",
//                 "link": "https://www.swiggy.com/city/habra"
//               },
//               {
//                 "text": "Firozabad",
//                 "link": "https://www.swiggy.com/city/firozabad"
//               },
//               {
//                 "text": "Nalgonda",
//                 "link": "https://www.swiggy.com/city/nalgonda"
//               },
//               {
//                 "text": "Chandrapur",
//                 "link": "https://www.swiggy.com/city/chandrapur"
//               },
//               {
//                 "text": "Bijapur",
//                 "link": "https://www.swiggy.com/city/bijapur"
//               },
//               {
//                 "text": "Bhusawal",
//                 "link": "https://www.swiggy.com/city/bhusawal"
//               },
//               {
//                 "text": "Raichur",
//                 "link": "https://www.swiggy.com/city/raichur"
//               },
//               {
//                 "text": "Bahraich",
//                 "link": "https://www.swiggy.com/city/bahraich"
//               },
//               {
//                 "text": "Azamgarh",
//                 "link": "https://www.swiggy.com/city/azamgarh"
//               },
//               {
//                 "text": "Bahadurgarh",
//                 "link": "https://www.swiggy.com/city/bahadurgarh"
//               },
//               {
//                 "text": "Jind",
//                 "link": "https://www.swiggy.com/city/jind"
//               },
//               {
//                 "text": "Rewari",
//                 "link": "https://www.swiggy.com/city/rewari"
//               },
//               {
//                 "text": "Palwal",
//                 "link": "https://www.swiggy.com/city/palwal"
//               },
//               {
//                 "text": "Hathras",
//                 "link": "https://www.swiggy.com/city/hathras"
//               },
//               {
//                 "text": "Sambalpur",
//                 "link": "https://www.swiggy.com/city/sambalpur"
//               },
//               {
//                 "text": "Banda",
//                 "link": "https://www.swiggy.com/city/banda"
//               },
//               {
//                 "text": "Hoshiarpur",
//                 "link": "https://www.swiggy.com/city/hoshiarpur"
//               },
//               {
//                 "text": "Faridkot",
//                 "link": "https://www.swiggy.com/city/faridkot"
//               },
//               {
//                 "text": "Mandsaur",
//                 "link": "https://www.swiggy.com/city/mandsaur"
//               },
//               {
//                 "text": "Suryapet",
//                 "link": "https://www.swiggy.com/city/suryapet"
//               },
//               {
//                 "text": "Adilabad",
//                 "link": "https://www.swiggy.com/city/adilabad"
//               },
//               {
//                 "text": "Narasaraopet",
//                 "link": "https://www.swiggy.com/city/narasaraopet"
//               },
//               {
//                 "text": "Faizabad",
//                 "link": "https://www.swiggy.com/city/faizabad"
//               },
//               {
//                 "text": "Tadpatri",
//                 "link": "https://www.swiggy.com/city/tadpatri"
//               },
//               {
//                 "text": "Gonda",
//                 "link": "https://www.swiggy.com/city/gonda"
//               },
//               {
//                 "text": "Mughalsarai",
//                 "link": "https://www.swiggy.com/city/mughalsarai"
//               },
//               {
//                 "text": "Medinipur",
//                 "link": "https://www.swiggy.com/city/medinipur"
//               },
//               {
//                 "text": "Nagda",
//                 "link": "https://www.swiggy.com/city/nagda"
//               },
//               {
//                 "text": "Chilakaluripet",
//                 "link": "https://www.swiggy.com/city/chilakaluripet"
//               },
//               {
//                 "text": "Hindupur",
//                 "link": "https://www.swiggy.com/city/hindupur"
//               },
//               {
//                 "text": "Kasganj",
//                 "link": "https://www.swiggy.com/city/kasganj"
//               },
//               {
//                 "text": "Raiganj",
//                 "link": "https://www.swiggy.com/city/raiganj"
//               },
//               {
//                 "text": "Deoria City",
//                 "link": "https://www.swiggy.com/city/deoria-city"
//               },
//               {
//                 "text": "Sultanpur",
//                 "link": "https://www.swiggy.com/city/sultanpur"
//               },
//               {
//                 "text": "Shamli",
//                 "link": "https://www.swiggy.com/city/shamli"
//               },
//               {
//                 "text": "Krishnanagar",
//                 "link": "https://www.swiggy.com/city/krishnanagar"
//               },
//               {
//                 "text": "Ballia",
//                 "link": "https://www.swiggy.com/city/ballia"
//               },
//               {
//                 "text": "Guntakal",
//                 "link": "https://www.swiggy.com/city/guntakal"
//               },
//               {
//                 "text": "Miryalaguda",
//                 "link": "https://www.swiggy.com/city/miryalaguda"
//               },
//               {
//                 "text": "Etah",
//                 "link": "https://www.swiggy.com/city/etah"
//               },
//               {
//                 "text": "Berhampore",
//                 "link": "https://www.swiggy.com/city/berhampore"
//               },
//               {
//                 "text": "Gudivada",
//                 "link": "https://www.swiggy.com/city/gudivada"
//               },
//               {
//                 "text": "Haldia",
//                 "link": "https://www.swiggy.com/city/haldia"
//               },
//               {
//                 "text": "Santipur",
//                 "link": "https://www.swiggy.com/city/santipur"
//               },
//               {
//                 "text": "Basirhat",
//                 "link": "https://www.swiggy.com/city/basirhat"
//               },
//               {
//                 "text": "Seoni",
//                 "link": "https://www.swiggy.com/city/seoni"
//               },
//               {
//                 "text": "Udgir",
//                 "link": "https://www.swiggy.com/city/udgir"
//               },
//               {
//                 "text": "Proddatur",
//                 "link": "https://www.swiggy.com/city/proddatur"
//               },
//               {
//                 "text": "Nagapattinam",
//                 "link": "https://www.swiggy.com/city/nagapattinam"
//               },
//               {
//                 "text": "Chikmagalur",
//                 "link": "https://www.swiggy.com/city/chikmagalur"
//               },
//               {
//                 "text": "Chandausi",
//                 "link": "https://www.swiggy.com/city/chandausi"
//               },
//               {
//                 "text": "Bhind",
//                 "link": "https://www.swiggy.com/city/bhind"
//               },
//               {
//                 "text": "Mandya",
//                 "link": "https://www.swiggy.com/city/mandya"
//               },
//               {
//                 "text": "Bagalkot",
//                 "link": "https://www.swiggy.com/city/bagalkot"
//               },
//               {
//                 "text": "Nandurbar",
//                 "link": "https://www.swiggy.com/city/nandurbar"
//               },
//               {
//                 "text": "Chitradurga",
//                 "link": "https://www.swiggy.com/city/chitradurga"
//               },
//               {
//                 "text": "Osmanabad",
//                 "link": "https://www.swiggy.com/city/osmanabad"
//               },
//               {
//                 "text": "Modinagar",
//                 "link": "https://www.swiggy.com/city/modinagar"
//               },
//               {
//                 "text": "Gadag-Betigeri",
//                 "link": "https://www.swiggy.com/city/gadag-betigeri"
//               },
//               {
//                 "text": "Hoshangabad",
//                 "link": "https://www.swiggy.com/city/hoshangabad"
//               },
//               {
//                 "text": "Jaunpur",
//                 "link": "https://www.swiggy.com/city/jaunpur"
//               },
//               {
//                 "text": "Khurja",
//                 "link": "https://www.swiggy.com/city/khurja"
//               },
//               {
//                 "text": "Port Blair",
//                 "link": "https://www.swiggy.com/city/port-blair"
//               },
//               {
//                 "text": "Jorhat",
//                 "link": "https://www.swiggy.com/city/jorhat"
//               },
//               {
//                 "text": "Nandyal",
//                 "link": "https://www.swiggy.com/city/nandyal"
//               },
//               {
//                 "text": "Biharsharif",
//                 "link": "https://www.swiggy.com/city/biharsharif"
//               },
//               {
//                 "text": "Buxar",
//                 "link": "https://www.swiggy.com/city/buxar"
//               },
//               {
//                 "text": "Siwan",
//                 "link": "https://www.swiggy.com/city/siwan"
//               },
//               {
//                 "text": "Dehri",
//                 "link": "https://www.swiggy.com/city/dehri"
//               },
//               {
//                 "text": "Bettiah",
//                 "link": "https://www.swiggy.com/city/bettiah"
//               },
//               {
//                 "text": "Kishanganj",
//                 "link": "https://www.swiggy.com/city/kishanganj"
//               },
//               {
//                 "text": "Saharsa",
//                 "link": "https://www.swiggy.com/city/saharsa"
//               },
//               {
//                 "text": "Hajipur",
//                 "link": "https://www.swiggy.com/city/hajipur"
//               },
//               {
//                 "text": "Motihari",
//                 "link": "https://www.swiggy.com/city/motihari"
//               },
//               {
//                 "text": "Sasaram",
//                 "link": "https://www.swiggy.com/city/sasaram"
//               },
//               {
//                 "text": "Munger",
//                 "link": "https://www.swiggy.com/city/munger"
//               },
//               {
//                 "text": "Katihar",
//                 "link": "https://www.swiggy.com/city/katihar"
//               },
//               {
//                 "text": "Arrah",
//                 "link": "https://www.swiggy.com/city/arrah"
//               },
//               {
//                 "text": "Srikakulam",
//                 "link": "https://www.swiggy.com/city/srikakulam"
//               },
//               {
//                 "text": "Begusarai",
//                 "link": "https://www.swiggy.com/city/begusarai"
//               },
//               {
//                 "text": "Neyveli",
//                 "link": "https://www.swiggy.com/city/neyveli"
//               },
//               {
//                 "text": "Waidhan",
//                 "link": "https://www.swiggy.com/city/waidhan"
//               },
//               {
//                 "text": "Markapur",
//                 "link": "https://www.swiggy.com/city/markapur"
//               },
//               {
//                 "text": "Chikkaballapur",
//                 "link": "https://www.swiggy.com/city/chikkaballapur"
//               },
//               {
//                 "text": "Bhatkal",
//                 "link": "https://www.swiggy.com/city/bhatkal"
//               },
//               {
//                 "text": "Gokak",
//                 "link": "https://www.swiggy.com/city/gokak"
//               },
//               {
//                 "text": "Itarsi",
//                 "link": "https://www.swiggy.com/city/itarsi"
//               },
//               {
//                 "text": "Dabra",
//                 "link": "https://www.swiggy.com/city/dabra"
//               },
//               {
//                 "text": "Dhar",
//                 "link": "https://www.swiggy.com/city/dhar"
//               },
//               {
//                 "text": "Chalisgaon",
//                 "link": "https://www.swiggy.com/city/chalisgaon"
//               },
//               {
//                 "text": "Thiruvallur",
//                 "link": "https://www.swiggy.com/city/thiruvallur"
//               },
//               {
//                 "text": "Namakkal",
//                 "link": "https://www.swiggy.com/city/namakkal"
//               },
//               {
//                 "text": "Dharmapuri",
//                 "link": "https://www.swiggy.com/city/dharmapuri"
//               },
//               {
//                 "text": "Bhandara",
//                 "link": "https://www.swiggy.com/city/bhandara"
//               },
//               {
//                 "text": "Virudhunagar",
//                 "link": "https://www.swiggy.com/city/virudhunagar"
//               },
//               {
//                 "text": "Siddipet",
//                 "link": "https://www.swiggy.com/city/siddipet"
//               },
//               {
//                 "text": "Gadwal",
//                 "link": "https://www.swiggy.com/city/gadwal"
//               },
//               {
//                 "text": "Bodhan-Rural",
//                 "link": "https://www.swiggy.com/city/bodhan-rural"
//               },
//               {
//                 "text": "Kamareddy",
//                 "link": "https://www.swiggy.com/city/kamareddy"
//               },
//               {
//                 "text": "Jhunjhunu",
//                 "link": "https://www.swiggy.com/city/jhunjhunu"
//               },
//               {
//                 "text": "Kapurthala",
//                 "link": "https://www.swiggy.com/city/kapurthala"
//               },
//               {
//                 "text": "Sangrur",
//                 "link": "https://www.swiggy.com/city/sangrur"
//               },
//               {
//                 "text": "Gurdaspur",
//                 "link": "https://www.swiggy.com/city/gurdaspur"
//               },
//               {
//                 "text": "Ramgarh",
//                 "link": "https://www.swiggy.com/city/ramgarh"
//               },
//               {
//                 "text": "Bantwal",
//                 "link": "https://www.swiggy.com/city/bantwal"
//               },
//               {
//                 "text": "Doddaballapura",
//                 "link": "https://www.swiggy.com/city/doddaballapura"
//               },
//               {
//                 "text": "Buldana",
//                 "link": "https://www.swiggy.com/city/buldana"
//               },
//               {
//                 "text": "Karad",
//                 "link": "https://www.swiggy.com/city/karad"
//               },
//               {
//                 "text": "Krishnagiri",
//                 "link": "https://www.swiggy.com/city/krishnagiri"
//               },
//               {
//                 "text": "Tiptur",
//                 "link": "https://www.swiggy.com/city/tiptur"
//               },
//               {
//                 "text": "Bhadrachalam",
//                 "link": "https://www.swiggy.com/city/bhadrachalam"
//               },
//               {
//                 "text": "Mancherial",
//                 "link": "https://www.swiggy.com/city/mancherial"
//               },
//               {
//                 "text": "Balrampur",
//                 "link": "https://www.swiggy.com/city/balrampur"
//               },
//               {
//                 "text": "Bharabanki",
//                 "link": "https://www.swiggy.com/city/bharabanki"
//               },
//               {
//                 "text": "Malout",
//                 "link": "https://www.swiggy.com/city/malout"
//               },
//               {
//                 "text": "Fatehgarh Sahib",
//                 "link": "https://www.swiggy.com/city/fatehgarh-sahib"
//               },
//               {
//                 "text": "Ropar",
//                 "link": "https://www.swiggy.com/city/ropar"
//               },
//               {
//                 "text": "Nangal",
//                 "link": "https://www.swiggy.com/city/nangal"
//               },
//               {
//                 "text": "Narnaul",
//                 "link": "https://www.swiggy.com/city/narnaul"
//               },
//               {
//                 "text": "Naraingarh",
//                 "link": "https://www.swiggy.com/city/naraingarh"
//               },
//               {
//                 "text": "Himmatnagar",
//                 "link": "https://www.swiggy.com/city/himmatnagar"
//               },
//               {
//                 "text": "Dausa",
//                 "link": "https://www.swiggy.com/city/dausa"
//               },
//               {
//                 "text": "Jahanabad",
//                 "link": "https://www.swiggy.com/city/jahanabad"
//               },
//               {
//                 "text": "Samastipur",
//                 "link": "https://www.swiggy.com/city/samastipur"
//               },
//               {
//                 "text": "Purnea",
//                 "link": "https://www.swiggy.com/city/purnea"
//               },
//               {
//                 "text": "Berhampur",
//                 "link": "https://www.swiggy.com/city/berhampur"
//               },
//               {
//                 "text": "Malda",
//                 "link": "https://www.swiggy.com/city/malda"
//               },
//               {
//                 "text": "Tuni",
//                 "link": "https://www.swiggy.com/city/tuni"
//               },
//               {
//                 "text": "Puttur",
//                 "link": "https://www.swiggy.com/city/puttur"
//               },
//               {
//                 "text": "Rayachoty",
//                 "link": "https://www.swiggy.com/city/rayachoty"
//               },
//               {
//                 "text": "Medak",
//                 "link": "https://www.swiggy.com/city/medak"
//               },
//               {
//                 "text": "Nirmal",
//                 "link": "https://www.swiggy.com/city/nirmal"
//               },
//               {
//                 "text": "Mirzapur",
//                 "link": "https://www.swiggy.com/city/mirzapur"
//               },
//               {
//                 "text": "Tanuku",
//                 "link": "https://www.swiggy.com/city/tanuku"
//               },
//               {
//                 "text": "Dahod",
//                 "link": "https://www.swiggy.com/city/dahod"
//               },
//               {
//                 "text": "Barmer",
//                 "link": "https://www.swiggy.com/city/barmer"
//               },
//               {
//                 "text": "Gangapur City",
//                 "link": "https://www.swiggy.com/city/gangapur-city"
//               },
//               {
//                 "text": "Mandi Gobindgarh",
//                 "link": "https://www.swiggy.com/city/mandi-gobindgarh"
//               },
//               {
//                 "text": "Tarn Taran Sahib",
//                 "link": "https://www.swiggy.com/city/tarn-taran-sahib"
//               },
//               {
//                 "text": "Nakodar",
//                 "link": "https://www.swiggy.com/city/nakodar"
//               },
//               {
//                 "text": "Ankleshwar",
//                 "link": "https://www.swiggy.com/city/ankleshwar"
//               },
//               {
//                 "text": "Vyara",
//                 "link": "https://www.swiggy.com/city/vyara"
//               },
//               {
//                 "text": "Bardoli",
//                 "link": "https://www.swiggy.com/city/bardoli"
//               },
//               {
//                 "text": "Halol",
//                 "link": "https://www.swiggy.com/city/halol"
//               },
//               {
//                 "text": "Bijnor",
//                 "link": "https://www.swiggy.com/city/bijnor"
//               },
//               {
//                 "text": "Sawantwadi",
//                 "link": "https://www.swiggy.com/city/sawantwadi"
//               },
//               {
//                 "text": "Shrirampur",
//                 "link": "https://www.swiggy.com/city/shrirampur"
//               },
//               {
//                 "text": "Sangamner",
//                 "link": "https://www.swiggy.com/city/sangamner"
//               },
//               {
//                 "text": "Baramati",
//                 "link": "https://www.swiggy.com/city/baramati"
//               },
//               {
//                 "text": "Betul",
//                 "link": "https://www.swiggy.com/city/betul"
//               },
//               {
//                 "text": "Chhatarpur",
//                 "link": "https://www.swiggy.com/city/chhatarpur"
//               },
//               {
//                 "text": "Datia",
//                 "link": "https://www.swiggy.com/city/datia"
//               },
//               {
//                 "text": "Balaghat",
//                 "link": "https://www.swiggy.com/city/balaghat"
//               },
//               {
//                 "text": "Sivakasi",
//                 "link": "https://www.swiggy.com/city/sivakasi"
//               },
//               {
//                 "text": "Viluppuram",
//                 "link": "https://www.swiggy.com/city/viluppuram"
//               },
//               {
//                 "text": "Ramanathapuram",
//                 "link": "https://www.swiggy.com/city/ramanathapuram"
//               },
//               {
//                 "text": "Sirsi",
//                 "link": "https://www.swiggy.com/city/sirsi"
//               },
//               {
//                 "text": "Kodaikanal",
//                 "link": "https://www.swiggy.com/city/kodaikanal"
//               },
//               {
//                 "text": "Theni",
//                 "link": "https://www.swiggy.com/city/theni"
//               },
//               {
//                 "text": "Karur",
//                 "link": "https://www.swiggy.com/city/karur"
//               },
//               {
//                 "text": "Karwar",
//                 "link": "https://www.swiggy.com/city/karwar"
//               },
//               {
//                 "text": "Sindhanur",
//                 "link": "https://www.swiggy.com/city/sindhanur"
//               },
//               {
//                 "text": "Kannur",
//                 "link": "https://www.swiggy.com/city/kannur"
//               },
//               {
//                 "text": "Noida 1",
//                 "link": "https://www.swiggy.com/city/noida-1"
//               },
//               {
//                 "text": "Karunagappaly",
//                 "link": "https://www.swiggy.com/city/karunagappaly"
//               },
//               {
//                 "text": "Thiruvalla",
//                 "link": "https://www.swiggy.com/city/thiruvalla"
//               },
//               {
//                 "text": "Thodupuzha",
//                 "link": "https://www.swiggy.com/city/thodupuzha"
//               },
//               {
//                 "text": "Kadiri",
//                 "link": "https://www.swiggy.com/city/kadiri"
//               },
//               {
//                 "text": "Kavali",
//                 "link": "https://www.swiggy.com/city/kavali"
//               },
//               {
//                 "text": "Tezpur",
//                 "link": "https://www.swiggy.com/city/tezpur"
//               },
//               {
//                 "text": "Kayamkulam",
//                 "link": "https://www.swiggy.com/city/kayamkulam"
//               },
//               {
//                 "text": "Kottarakkara",
//                 "link": "https://www.swiggy.com/city/kottarakkara"
//               },
//               {
//                 "text": "Mandi Dabwali",
//                 "link": "https://www.swiggy.com/city/mandi-dabwali"
//               },
//               {
//                 "text": "Fatehabad",
//                 "link": "https://www.swiggy.com/city/fatehabad"
//               },
//               {
//                 "text": "Jagraon",
//                 "link": "https://www.swiggy.com/city/jagraon"
//               },
//               {
//                 "text": "Mansa",
//                 "link": "https://www.swiggy.com/city/mansa"
//               },
//               {
//                 "text": "Pinjore City",
//                 "link": "https://www.swiggy.com/city/pinjore-city"
//               },
//               {
//                 "text": "Fazilka",
//                 "link": "https://www.swiggy.com/city/fazilka"
//               },
//               {
//                 "text": "Baddi",
//                 "link": "https://www.swiggy.com/city/baddi"
//               },
//               {
//                 "text": "Solan",
//                 "link": "https://www.swiggy.com/city/solan"
//               },
//               {
//                 "text": "Daltonganj",
//                 "link": "https://www.swiggy.com/city/daltonganj"
//               },
//               {
//                 "text": "Balangir",
//                 "link": "https://www.swiggy.com/city/balangir"
//               },
//               {
//                 "text": "Paonta Sahib",
//                 "link": "https://www.swiggy.com/city/paonta-sahib"
//               },
//               {
//                 "text": "Kothagudem",
//                 "link": "https://www.swiggy.com/city/kothagudem"
//               },
//               {
//                 "text": "Hansi",
//                 "link": "https://www.swiggy.com/city/hansi"
//               },
//               {
//                 "text": "Aurangabad_Bihar",
//                 "link": "https://www.swiggy.com/city/aurangabadbihar"
//               },
//               {
//                 "text": "Charkhi Dadri",
//                 "link": "https://www.swiggy.com/city/charkhi-dadri"
//               },
//               {
//                 "text": "Gopalganj",
//                 "link": "https://www.swiggy.com/city/gopalganj"
//               },
//               {
//                 "text": "Jharsuguda",
//                 "link": "https://www.swiggy.com/city/jharsuguda"
//               },
//               {
//                 "text": "Tohana",
//                 "link": "https://www.swiggy.com/city/tohana"
//               },
//               {
//                 "text": "Jhalawar",
//                 "link": "https://www.swiggy.com/city/jhalawar"
//               },
//               {
//                 "text": "Sivasagar",
//                 "link": "https://www.swiggy.com/city/sivasagar"
//               },
//               {
//                 "text": "Bagdogra",
//                 "link": "https://www.swiggy.com/city/bagdogra"
//               },
//               {
//                 "text": "Angul",
//                 "link": "https://www.swiggy.com/city/angul"
//               },
//               {
//                 "text": "Kendrapada",
//                 "link": "https://www.swiggy.com/city/kendrapada"
//               },
//               {
//                 "text": "Mallapuram (Do not Use)",
//                 "link": "https://www.swiggy.com/city/mallapuram-do-not-use"
//               },
//               {
//                 "text": "Veraval",
//                 "link": "https://www.swiggy.com/city/veraval"
//               },
//               {
//                 "text": "Daman",
//                 "link": "https://www.swiggy.com/city/daman"
//               },
//               {
//                 "text": "Chiplun",
//                 "link": "https://www.swiggy.com/city/chiplun"
//               },
//               {
//                 "text": "Silvassa",
//                 "link": "https://www.swiggy.com/city/silvassa"
//               },
//               {
//                 "text": "Bapatla&Chirala",
//                 "link": "https://www.swiggy.com/city/bapatla-and-chirala"
//               },
//               {
//                 "text": "Lonavla",
//                 "link": "https://www.swiggy.com/city/lonavla"
//               },
//               {
//                 "text": "Bongaigaon",
//                 "link": "https://www.swiggy.com/city/bongaigaon"
//               },
//               {
//                 "text": "Golaghat",
//                 "link": "https://www.swiggy.com/city/golaghat"
//               },
//               {
//                 "text": "Duliajan",
//                 "link": "https://www.swiggy.com/city/duliajan"
//               },
//               {
//                 "text": "Ramnagar",
//                 "link": "https://www.swiggy.com/city/ramnagar"
//               },
//               {
//                 "text": "Bolpur",
//                 "link": "https://www.swiggy.com/city/bolpur"
//               },
//               {
//                 "text": "Madhubani",
//                 "link": "https://www.swiggy.com/city/madhubani"
//               },
//               {
//                 "text": "Balasore",
//                 "link": "https://www.swiggy.com/city/balasore"
//               },
//               {
//                 "text": "Palampur",
//                 "link": "https://www.swiggy.com/city/palampur"
//               },
//               {
//                 "text": "Kotdwar",
//                 "link": "https://www.swiggy.com/city/kotdwar"
//               },
//               {
//                 "text": "Koppal",
//                 "link": "https://www.swiggy.com/city/koppal"
//               },
//               {
//                 "text": "Chikhli",
//                 "link": "https://www.swiggy.com/city/chikhli"
//               },
//               {
//                 "text": "Dahanu",
//                 "link": "https://www.swiggy.com/city/dahanu"
//               },
//               {
//                 "text": "Itanagar",
//                 "link": "https://www.swiggy.com/city/itanagar"
//               },
//               {
//                 "text": "Rangpo",
//                 "link": "https://www.swiggy.com/city/rangpo"
//               },
//               {
//                 "text": "Aizawl",
//                 "link": "https://www.swiggy.com/city/aizawl"
//               },
//               {
//                 "text": "Gangtok",
//                 "link": "https://www.swiggy.com/city/gangtok"
//               },
//               {
//                 "text": "Mayiladuthurai",
//                 "link": "https://www.swiggy.com/city/mayiladuthurai"
//               },
//               {
//                 "text": "Kannauj",
//                 "link": "https://www.swiggy.com/city/kannauj"
//               },
//               {
//                 "text": "Cooch Behar",
//                 "link": "https://www.swiggy.com/city/cooch-behar"
//               },
//               {
//                 "text": "Jaigaon",
//                 "link": "https://www.swiggy.com/city/jaigaon"
//               },
//               {
//                 "text": "Palani",
//                 "link": "https://www.swiggy.com/city/palani"
//               },
//               {
//                 "text": "Bilimora",
//                 "link": "https://www.swiggy.com/city/bilimora"
//               },
//               {
//                 "text": "Udhampur",
//                 "link": "https://www.swiggy.com/city/udhampur"
//               },
//               {
//                 "text": "Boisar",
//                 "link": "https://www.swiggy.com/city/boisar"
//               },
//               {
//                 "text": "Kohima",
//                 "link": "https://www.swiggy.com/city/kohima"
//               },
//               {
//                 "text": "Naharlagun",
//                 "link": "https://www.swiggy.com/city/naharlagun"
//               },
//               {
//                 "text": "Dumka",
//                 "link": "https://www.swiggy.com/city/dumka"
//               },
//               {
//                 "text": "Rajsamand",
//                 "link": "https://www.swiggy.com/city/rajsamand"
//               },
//               {
//                 "text": "Gauriganj",
//                 "link": "https://www.swiggy.com/city/gauriganj"
//               },
//               {
//                 "text": "Bodinayakanur",
//                 "link": "https://www.swiggy.com/city/bodinayakanur"
//               },
//               {
//                 "text": "Bhawanipatna",
//                 "link": "https://www.swiggy.com/city/bhawanipatna"
//               },
//               {
//                 "text": "Baran",
//                 "link": "https://www.swiggy.com/city/baran"
//               },
//               {
//                 "text": "Narsinghpur",
//                 "link": "https://www.swiggy.com/city/narsinghpur"
//               },
//               {
//                 "text": "Uran Islampur",
//                 "link": "https://www.swiggy.com/city/uran-islampur"
//               },
//               {
//                 "text": "Kovilpatti",
//                 "link": "https://www.swiggy.com/city/kovilpatti"
//               },
//               {
//                 "text": "Kasaragod",
//                 "link": "https://www.swiggy.com/city/kasaragod"
//               },
//               {
//                 "text": "Pusad",
//                 "link": "https://www.swiggy.com/city/pusad"
//               },
//               {
//                 "text": "Kendujhar",
//                 "link": "https://www.swiggy.com/city/kendujhar"
//               },
//               {
//                 "text": "Manali",
//                 "link": "https://www.swiggy.com/city/manali"
//               },
//               {
//                 "text": "Diu",
//                 "link": "https://www.swiggy.com/city/diu"
//               },
//               {
//                 "text": "Khamgaon",
//                 "link": "https://www.swiggy.com/city/khamgaon"
//               },
//               {
//                 "text": "Ramanagara",
//                 "link": "https://www.swiggy.com/city/ramanagara"
//               },
//               {
//                 "text": "Alipurduar",
//                 "link": "https://www.swiggy.com/city/alipurduar"
//               },
//               {
//                 "text": "Almora",
//                 "link": "https://www.swiggy.com/city/almora"
//               },
//               {
//                 "text": "Jhargram",
//                 "link": "https://www.swiggy.com/city/jhargram"
//               },
//               {
//                 "text": "Arambagh",
//                 "link": "https://www.swiggy.com/city/arambagh"
//               },
//               {
//                 "text": "Bhadohi",
//                 "link": "https://www.swiggy.com/city/bhadohi"
//               },
//               {
//                 "text": "Tenkasi",
//                 "link": "https://www.swiggy.com/city/tenkasi"
//               },
//               {
//                 "text": "Srivilliputhur",
//                 "link": "https://www.swiggy.com/city/srivilliputhur"
//               },
//               {
//                 "text": "Chidambaram",
//                 "link": "https://www.swiggy.com/city/chidambaram"
//               },
//               {
//                 "text": "Rajgarh",
//                 "link": "https://www.swiggy.com/city/rajgarh"
//               },
//               {
//                 "text": "Pratapgarh",
//                 "link": "https://www.swiggy.com/city/pratapgarh"
//               },
//               {
//                 "text": "Washim",
//                 "link": "https://www.swiggy.com/city/washim"
//               },
//               {
//                 "text": "Mandi HP",
//                 "link": "https://www.swiggy.com/city/mandi-hp"
//               },
//               {
//                 "text": "Ranaghat",
//                 "link": "https://www.swiggy.com/city/ranaghat"
//               },
//               {
//                 "text": "Raghunathpur",
//                 "link": "https://www.swiggy.com/city/raghunathpur"
//               },
//               {
//                 "text": "Suri",
//                 "link": "https://www.swiggy.com/city/suri"
//               },
//               {
//                 "text": "Kadayanallur",
//                 "link": "https://www.swiggy.com/city/kadayanallur"
//               },
//               {
//                 "text": "Thiruvarur",
//                 "link": "https://www.swiggy.com/city/thiruvarur"
//               },
//               {
//                 "text": "Ranaghat-WB",
//                 "link": "https://www.swiggy.com/city/ranaghat-wb"
//               },
//               {
//                 "text": "Idukki",
//                 "link": "https://www.swiggy.com/city/idukki"
//               },
//               {
//                 "text": "Wayanad",
//                 "link": "https://www.swiggy.com/city/wayanad"
//               },
//               {
//                 "text": "Perambalur",
//                 "link": "https://www.swiggy.com/city/perambalur"
//               },
//               {
//                 "text": "Paramakudi",
//                 "link": "https://www.swiggy.com/city/paramakudi"
//               },
//               {
//                 "text": "Khopoli",
//                 "link": "https://www.swiggy.com/city/khopoli"
//               },
//               {
//                 "text": "Bela Pratapgarh",
//                 "link": "https://www.swiggy.com/city/bela-pratapgarh"
//               },
//               {
//                 "text": "Mahoba",
//                 "link": "https://www.swiggy.com/city/mahoba"
//               },
//               {
//                 "text": "Sitamarhi",
//                 "link": "https://www.swiggy.com/city/sitamarhi"
//               },
//               {
//                 "text": "Chakdaha",
//                 "link": "https://www.swiggy.com/city/chakdaha"
//               },
//               {
//                 "text": "Khalilabad",
//                 "link": "https://www.swiggy.com/city/khalilabad"
//               },
//               {
//                 "text": "Pattukkottai",
//                 "link": "https://www.swiggy.com/city/pattukkottai"
//               },
//               {
//                 "text": "Tindivanam",
//                 "link": "https://www.swiggy.com/city/tindivanam"
//               },
//               {
//                 "text": "Tiruttani",
//                 "link": "https://www.swiggy.com/city/tiruttani"
//               },
//               {
//                 "text": "Gangarampur",
//                 "link": "https://www.swiggy.com/city/gangarampur"
//               },
//               {
//                 "text": "Dharapuram",
//                 "link": "https://www.swiggy.com/city/dharapuram"
//               },
//               {
//                 "text": "Arakkonam",
//                 "link": "https://www.swiggy.com/city/arakkonam"
//               },
//               {
//                 "text": "Sirkali",
//                 "link": "https://www.swiggy.com/city/sirkali"
//               },
//               {
//                 "text": "Aruppukottai",
//                 "link": "https://www.swiggy.com/city/aruppukottai"
//               },
//               {
//                 "text": "Mettupalayam",
//                 "link": "https://www.swiggy.com/city/mettupalayam"
//               },
//               {
//                 "text": "Digboi",
//                 "link": "https://www.swiggy.com/city/digboi"
//               },
//               {
//                 "text": "Biswanath Chariali",
//                 "link": "https://www.swiggy.com/city/biswanath-chariali"
//               },
//               {
//                 "text": "Nalbari",
//                 "link": "https://www.swiggy.com/city/nalbari"
//               },
//               {
//                 "text": "Shirdi city",
//                 "link": "https://www.swiggy.com/city/shirdi-city"
//               },
//               {
//                 "text": "Mukerian",
//                 "link": "https://www.swiggy.com/city/mukerian"
//               },
//               {
//                 "text": "Hosur",
//                 "link": "https://www.swiggy.com/city/hosur"
//               },
//               {
//                 "text": "Palakollu",
//                 "link": "https://www.swiggy.com/city/palakollu"
//               },
//               {
//                 "text": "Amalapuram",
//                 "link": "https://www.swiggy.com/city/amalapuram"
//               },
//               {
//                 "text": "Ravulapalem",
//                 "link": "https://www.swiggy.com/city/ravulapalem"
//               },
//               {
//                 "text": "Narsipatnam",
//                 "link": "https://www.swiggy.com/city/narsipatnam"
//               },
//               {
//                 "text": "Barh",
//                 "link": "https://www.swiggy.com/city/barh"
//               },
//               {
//                 "text": "Palghar",
//                 "link": "https://www.swiggy.com/city/palghar"
//               },
//               {
//                 "text": "Shahdol",
//                 "link": "https://www.swiggy.com/city/shahdol"
//               },
//               {
//                 "text": "Kushalnagar",
//                 "link": "https://www.swiggy.com/city/kushalnagar"
//               },
//               {
//                 "text": "Dungarpur",
//                 "link": "https://www.swiggy.com/city/dungarpur"
//               },
//               {
//                 "text": "Chaibasa",
//                 "link": "https://www.swiggy.com/city/chaibasa"
//               },
//               {
//                 "text": "Haveri",
//                 "link": "https://www.swiggy.com/city/haveri"
//               },
//               {
//                 "text": "Karaikal",
//                 "link": "https://www.swiggy.com/city/karaikal"
//               },
//               {
//                 "text": "Jjajjar",
//                 "link": "https://www.swiggy.com/city/jjajjar"
//               },
//               {
//                 "text": "Kokrajhar",
//                 "link": "https://www.swiggy.com/city/kokrajhar"
//               },
//               {
//                 "text": "Rangia",
//                 "link": "https://www.swiggy.com/city/rangia"
//               },
//               {
//                 "text": "Hamirpur",
//                 "link": "https://www.swiggy.com/city/hamirpur"
//               },
//               {
//                 "text": "Una",
//                 "link": "https://www.swiggy.com/city/una"
//               },
//               {
//                 "text": "Sulthan Bathery",
//                 "link": "https://www.swiggy.com/city/sulthan-bathery"
//               },
//               {
//                 "text": "Rayagada",
//                 "link": "https://www.swiggy.com/city/rayagada"
//               },
//               {
//                 "text": "Paradeep",
//                 "link": "https://www.swiggy.com/city/paradeep"
//               },
//               {
//                 "text": "Mandapeta",
//                 "link": "https://www.swiggy.com/city/mandapeta"
//               },
//               {
//                 "text": "Jamui",
//                 "link": "https://www.swiggy.com/city/jamui"
//               },
//               {
//                 "text": "Pilkhuwa",
//                 "link": "https://www.swiggy.com/city/pilkhuwa"
//               },
//               {
//                 "text": "Parvathipuram",
//                 "link": "https://www.swiggy.com/city/parvathipuram"
//               },
//               {
//                 "text": "Ambajogai",
//                 "link": "https://www.swiggy.com/city/ambajogai"
//               },
//               {
//                 "text": "Araria",
//                 "link": "https://www.swiggy.com/city/araria"
//               },
//               {
//                 "text": "North Lakhimpur",
//                 "link": "https://www.swiggy.com/city/north-lakhimpur"
//               },
//               {
//                 "text": "Rajampet",
//                 "link": "https://www.swiggy.com/city/rajampet"
//               },
//               {
//                 "text": "Udumalaipettai",
//                 "link": "https://www.swiggy.com/city/udumalaipettai"
//               },
//               {
//                 "text": "Tirupattur",
//                 "link": "https://www.swiggy.com/city/tirupattur"
//               },
//               {
//                 "text": "Hojai",
//                 "link": "https://www.swiggy.com/city/hojai"
//               },
//               {
//                 "text": "Khagaria",
//                 "link": "https://www.swiggy.com/city/khagaria"
//               },
//               {
//                 "text": "Dasuya",
//                 "link": "https://www.swiggy.com/city/dasuya"
//               },
//               {
//                 "text": "Gudur",
//                 "link": "https://www.swiggy.com/city/gudur"
//               },
//               {
//                 "text": "Sullurpeta",
//                 "link": "https://www.swiggy.com/city/sullurpeta"
//               },
//               {
//                 "text": "Piler",
//                 "link": "https://www.swiggy.com/city/piler"
//               },
//               {
//                 "text": "SankaranKoil",
//                 "link": "https://www.swiggy.com/city/sankarankoil"
//               },
//               {
//                 "text": "Nabha",
//                 "link": "https://www.swiggy.com/city/nabha"
//               },
//               {
//                 "text": "LPU - Phagwara",
//                 "link": "https://www.swiggy.com/city/lpu-phagwara"
//               },
//               {
//                 "text": "Jangipur",
//                 "link": "https://www.swiggy.com/city/jangipur"
//               },
//               {
//                 "text": "Roha",
//                 "link": "https://www.swiggy.com/city/roha"
//               },
//               {
//                 "text": "Maharajganj",
//                 "link": "https://www.swiggy.com/city/maharajganj"
//               },
//               {
//                 "text": "Kallakurichi",
//                 "link": "https://www.swiggy.com/city/kallakurichi"
//               },
//               {
//                 "text": "Kalimpong",
//                 "link": "https://www.swiggy.com/city/kalimpong"
//               },
//               {
//                 "text": "Sundernagar",
//                 "link": "https://www.swiggy.com/city/sundernagar"
//               },
//               {
//                 "text": "Nawada",
//                 "link": "https://www.swiggy.com/city/nawada"
//               },
//               {
//                 "text": "Forbesganj",
//                 "link": "https://www.swiggy.com/city/forbesganj"
//               },
//               {
//                 "text": "Mokameh Khas",
//                 "link": "https://www.swiggy.com/city/mokameh-khas"
//               },
//               {
//                 "text": "Bazpur",
//                 "link": "https://www.swiggy.com/city/bazpur"
//               },
//               {
//                 "text": "Lakhisarai",
//                 "link": "https://www.swiggy.com/city/lakhisarai"
//               },
//               {
//                 "text": "Rameswaram",
//                 "link": "https://www.swiggy.com/city/rameswaram"
//               },
//               {
//                 "text": "Sahjanwa",
//                 "link": "https://www.swiggy.com/city/sahjanwa"
//               },
//               {
//                 "text": "Siddharthnagar",
//                 "link": "https://www.swiggy.com/city/siddharthnagar"
//               },
//               {
//                 "text": "Nanjangud",
//                 "link": "https://www.swiggy.com/city/nanjangud"
//               },
//               {
//                 "text": "Chamarajanagar",
//                 "link": "https://www.swiggy.com/city/chamarajanagar"
//               },
//               {
//                 "text": "Kurali",
//                 "link": "https://www.swiggy.com/city/kurali"
//               },
//               {
//                 "text": "Sundar Nagar",
//                 "link": "https://www.swiggy.com/city/sundar-nagar"
//               },
//               {
//                 "text": "Bobbili",
//                 "link": "https://www.swiggy.com/city/bobbili"
//               },
//               {
//                 "text": "Jangaon",
//                 "link": "https://www.swiggy.com/city/jangaon"
//               },
//               {
//                 "text": "Banswara",
//                 "link": "https://www.swiggy.com/city/banswara"
//               },
//               {
//                 "text": "Sundergarh",
//                 "link": "https://www.swiggy.com/city/sundergarh"
//               },
//               {
//                 "text": "Godda",
//                 "link": "https://www.swiggy.com/city/godda"
//               },
//               {
//                 "text": "Madhupur",
//                 "link": "https://www.swiggy.com/city/madhupur"
//               },
//               {
//                 "text": "Katwa",
//                 "link": "https://www.swiggy.com/city/katwa"
//               },
//               {
//                 "text": "Dhupguri",
//                 "link": "https://www.swiggy.com/city/dhupguri"
//               },
//               {
//                 "text": "Contai",
//                 "link": "https://www.swiggy.com/city/contai"
//               },
//               {
//                 "text": "Baramulla",
//                 "link": "https://www.swiggy.com/city/baramulla"
//               },
//               {
//                 "text": "Kangeyam",
//                 "link": "https://www.swiggy.com/city/kangeyam"
//               },
//               {
//                 "text": "Naugachia",
//                 "link": "https://www.swiggy.com/city/naugachia"
//               },
//               {
//                 "text": "Madhepura",
//                 "link": "https://www.swiggy.com/city/madhepura"
//               },
//               {
//                 "text": "Jamkhambhaliya",
//                 "link": "https://www.swiggy.com/city/jamkhambhaliya"
//               },
//               {
//                 "text": "Mundra",
//                 "link": "https://www.swiggy.com/city/mundra"
//               },
//               {
//                 "text": "Patan",
//                 "link": "https://www.swiggy.com/city/patan"
//               },
//               {
//                 "text": "Mahuva",
//                 "link": "https://www.swiggy.com/city/mahuva"
//               },
//               {
//                 "text": "Attur",
//                 "link": "https://www.swiggy.com/city/attur"
//               },
//               {
//                 "text": "Pen",
//                 "link": "https://www.swiggy.com/city/pen"
//               },
//               {
//                 "text": "Mandla",
//                 "link": "https://www.swiggy.com/city/mandla"
//               },
//               {
//                 "text": "Sidhi",
//                 "link": "https://www.swiggy.com/city/sidhi"
//               },
//               {
//                 "text": "Lakshadweep",
//                 "link": "https://www.swiggy.com/city/lakshadweep"
//               },
//               {
//                 "text": "Chitrakoot",
//                 "link": "https://www.swiggy.com/city/chitrakoot"
//               },
//               {
//                 "text": "Rajam",
//                 "link": "https://www.swiggy.com/city/rajam"
//               },
//               {
//                 "text": "Nippani",
//                 "link": "https://www.swiggy.com/city/nippani"
//               },
//               {
//                 "text": "Sankeshwar",
//                 "link": "https://www.swiggy.com/city/sankeshwar"
//               },
//               {
//                 "text": "Chikkodi",
//                 "link": "https://www.swiggy.com/city/chikkodi"
//               },
//               {
//                 "text": "Modasa",
//                 "link": "https://www.swiggy.com/city/modasa"
//               },
//               {
//                 "text": "Bavla",
//                 "link": "https://www.swiggy.com/city/bavla"
//               },
//               {
//                 "text": "Puttur_AP",
//                 "link": "https://www.swiggy.com/city/puttur-ap"
//               },
//               {
//                 "text": "Sinnar",
//                 "link": "https://www.swiggy.com/city/sinnar"
//               },
//               {
//                 "text": "singur",
//                 "link": "https://www.swiggy.com/city/singur"
//               },
//               {
//                 "text": "Nelamangala",
//                 "link": "https://www.swiggy.com/city/nelamangala"
//               },
//               {
//                 "text": "Srinagar Uttarakhand",
//                 "link": "https://www.swiggy.com/city/srinagar-uttarakhand"
//               },
//               {
//                 "text": "Dhampur",
//                 "link": "https://www.swiggy.com/city/dhampur"
//               }
//             ],
//             "id": "footer_content"
//           }
//         }
//       },
//       {
//         "card": {
//           "card": {
//             "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
//             "citySlug": "mumbai",
//             "lat": "19.1354492",
//             "lng": "72.85750879999999",
//             "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
//             "gandalfRequest": "{\"sortAttribute\":\"relevance\",\"isFiltered\":false,\"queryId\":\"seo-data-b141b8b4-2043-4df8-bc80-952766dc0670\",\"seoParams\":{\"apiName\":\"FoodHomePage\",\"brandId\":\"\",\"seoUrl\":\"www.swiggy.com\",\"pageType\":\"FOOD_HOME_PAGE\",\"businessLine\":\"FOOD\"}}",
//             "id": "meta_data",
//             "metaInfo": {
//               "pageType": "FOOD_HOME_PAGE",
//               "pageTitle": "Order Food Online from India's Best Food Delivery Service | Swiggy",
//               "pageMetaDescription": "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
//               "pageKeywords": "Food delivery, Online food order, Online food dleivery"
//             },
//             "screenType": "filteredCollection",
//             "seoParams": {
//               "apiName": "FoodHomePage",
//               "seoUrl": "www.swiggy.com",
//               "pageType": "FOOD_HOME_PAGE",
//               "businessLine": "FOOD"
//             },
//             "pageContext": {
//               "citySlug": "mumbai",
//               "cityName": "Mumbai",
//               "pageType": "FOOD_HOME_PAGE"
//             }
//           }
//         }
//       }
//     ],
//     "firstOffsetRequest": true,
//     "cacheExpiryTime": 240,
//     "nextFetch": 1
//   },
//   "tid": "e0249f05-8048-49a1-b260-dc3be2d898eb",
//   "sid": "meb4a49e-8e31-41d9-a8c8-dfcea16efe20",
//   "deviceId": "bd6bae9f-28dd-dd50-21a5-3b7fd5d5a295",
//   "csrfToken": "Q3MYL5mZZE4y-o9zoY-GhK46xX7PqOs4iHCio7C8"
// };  

//     const data = await fetch(
//   "https://corsproxy.io/?" +
//     encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1354492&lng=72.85750879999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
// );

    // const json = await data.json();
    const json = await data.json(); 

    console.log(json);
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[2]?.data?.data?.cards);

    // Optional Chaining
    setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // return listOfRestaurants.length === 0 ? (
  //   <Shimmer />
  // )
  return !Array.isArray(listOfRestaurants) || listOfRestaurants.length === 0 ? (
  <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* {listOfRestaurants.map((restaurant) => ( */}
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};


export default Body;