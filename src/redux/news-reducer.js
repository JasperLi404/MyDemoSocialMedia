import amazonImage from "../../src/assets/image/amazonImage.jpg";
let initialStore = {
    news : [
        {id:1,
        theme:'Amazon rainforest plots sold via Facebook Marketplace ads', 
        url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/13F22/production/_117289618_gettyimages-brazil-rightscleared.jpg",
        link: "https://www.bbc.com/news/technology-56168844"},
        {id:2,
            theme:'Cryptocurrencies: Why Nigeria is a global leader in Bitcoin trade', 
            url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17330/production/_115542059_bitcoin.jpg",
            link: "https://www.bbc.com/news/world-africa-56169917"},
        {id:3,
            theme:'The mystery of India’s ‘lake of skeletons’', 
            url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/DE2D/production/_117077865_atish_waghwase_1.jpg",
            link: "https://www.bbc.com/news/world-asia-india-56116533"},
    ],

};

const newsReducer = (state = initialStore, action) => {
    return state;
}



export default newsReducer;