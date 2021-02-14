let initialStore = {
    friends: [
        {   id:1,
            src:"https://images.pexels.com/photos/6467886/pexels-photo-6467886.jpeg",
            name: "Sasha"
        },
        {   id:2,
            src:"https://images.pexels.com/photos/2970225/pexels-photo-2970225.jpeg",
            name: "Jane"
        },
        {   
            id:3,
            src:"https://images.pexels.com/photos/5606414/pexels-photo-5606414.jpeg",
            name: "Olga"
        }
    ]
}

const sitebarReducer = (state= initialStore, action) => {
    return(state);
}
export default sitebarReducer;