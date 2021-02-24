import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
let initialStore = {
    postData : [
        {id:1,
        post:'My first post, I have been waiting for it  forever', 
        likes: 654 },
        {id:2, post: 'Hello. How are you? Are you glad to see me today? Let`s talk. Don`t be a fool!',  likes:56}
    ],
    profile: null,
    status: ""
};


it("number of posts should increase", () => {
    let action = addPostActionCreator("new Post!!!");
    let NewState = profileReducer(initialStore, action);
    expect(NewState.postData.length).toBe(3);
})
it("message of new post should be correct ", () => {
    let action = addPostActionCreator("new Post!!!");
    let NewState = profileReducer(initialStore, action);
    expect(NewState.postData[2].post).toBe("new Post!!!");
})

it("after deleting length of messages should be decrement ", () => {
    let action = deletePost(1);
    let NewState = profileReducer(initialStore, action);
    expect(NewState.postData.length).toBe(1);
})