const ADD_MESSAGE = 'ADD-MESSAGE';

let initialStore = {
    dialogsData : [
        {id:1, name: 'Olga'}
      ],
    messagesData : [
        {   id:1, 
            speaker: "Olga",
            message: "Hi"},
        {   id:2, speaker: "Me",
            message:"How are u doin?"},
            
        {   id:3, speaker: "Olga",
            message:"Hey!"},
        {   id:4,speaker: "Me",
            message:"Ba-Da-Boom!"},
            
        {   id:5, speaker: "Olga",
            message:"Yesks!"}
      ]
};
const dialogsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {   
                id:6, 
                speaker: "Me",
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