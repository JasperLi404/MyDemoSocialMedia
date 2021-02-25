const ADD_MESSAGE = 'ADD-MESSAGE';

let initialStore = {
    dialogsData : [
        {id:1, name: 'Olga'},
        {id:2, name:'Sasha'},
        {id:3, name:'Jane'},
        {id:4, name:'Denny'},
        {id:5, name:'Diego'},
        {id:6, name:'Ben'}
      ],
    messagesData : [
        {   id:1, 
            src: "https://images.pexels.com/photos/4869063/pexels-photo-4869063.jpeg",
            message: "Hi"},
        {   id:2,
            src: "https://images.pexels.com/photos/5999928/pexels-photo-5999928.jpeg",
            message:"How are u doin?"},
        {   id:3,
            src:"https://images.pexels.com/photos/3574779/pexels-photo-3574779.jpeg",
            message:"Hey!"},
        {   id:4,
            src:"https://images.pexels.com/photos/2820523/pexels-photo-2820523.jpeg",
            message:"Ba-Da-Boom!"},
        {   id:5,
            src: "https://images.pexels.com/photos/5712114/pexels-photo-5712114.jpeg",
            message:"Yesks!"}
      ]
};
const dialogsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {   
                id:6, 
                src: 'https://images.pexels.com/photos/6163100/pexels-photo-6163100.jpeg',
                message: action.newMessageBody 
            };
            return  {
                ...state,
                messagesData: [...state.messagesData,  newMessage]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({type:ADD_MESSAGE,newMessageBody});


export default dialogsReducer;