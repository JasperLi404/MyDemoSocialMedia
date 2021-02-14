import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store= {
    getState(){
        return this._state;
    },
    _rerenderEntireTree() {},
    _state: {
        profilePage:{
            postData : [
                {id:1,
                post:'My first post, I have been waiting for it  forever', 
                likes: 654 },
                {id:2, post: 'Hello. How are you? Are you glad to see me today? Let`s talk. Don`t be a fool!',  likes:56}
            ],
            newPostText: ''
        },
        dialogsPage : {
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
              ],
            newMessageText: ""
        },
        sitebar: {
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
        },
    },
    _addPost () {
            let NewPost = {
                id: 3,
                post: this._state.profilePage.newPostText,
                likes: 238
            }
            this._state.profilePage.postData.push(NewPost);
            this._rerenderEntireTree(this._state);
            this._state.profilePage.newPostText = '';
        },
    _updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },
    _addMessage () {
        let newMessage = {   
            id:6, 
            src: 'https://images.pexels.com/photos/6163100/pexels-photo-6163100.jpeg',
            message: this._state.dialogsPage.newMessageText 
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._rerenderEntireTree(this._state);
        this._state.dialogsPage.newMessageText = '';
    },
    _updateNewMessageText (newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._rerenderEntireTree(this._state);
    },
    subscribe (observer){
        this._rerenderEntireTree = observer;
    },
    dispatch(action){        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);
        this._rerenderEntireTree(this._state);
        

    }
}


export default store;