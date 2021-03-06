let renderEntireTree = () =>{
    console.log('State is changed')
}


let state = {
    profilePage :{
        posts : [
            {id : "1", post : "Hi, how are you?", like : 15, dislike : 20},
            {id : "2", post : "It's my first post", like : 6, dislike : 7}
          ],
        newPostText : "any text"
    },
    dialogsPage :{
        messages : [
            {id : "1", message : "Hello"},
            {id : "2", message : "My name is"},
            {id : "3", message : "Vladyslav"},
            {id : "4", message : "I'm 25 y.o"},
            {id : "5", message : "I work as a QA engeenear"},
            {id : "6", message : "in Owlab company"}
        ],
        dialogs : [
            {id : "1", name : "Dima"},
            {id : "2", name : "Katya"},
            {id : "3", name : "Vova"},
            {id : "4", name : "Tanya"},
            {id : "5", name : "Max"},
            {id : "6", name : "Vika"}
        ]
    }
     
      
      
  }


window.state = state;

export const addPost = ()=>{
    let newPost = {
      id: 5,
      post: state.profilePage.newPostText ,
      like: 0,
      dislike: 10
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    renderEntireTree (state)
}


export let updateNewPostText = (newText)=>{

    state.profilePage.newPostText = newText;
    renderEntireTree (state)
}


export const subscribe = (observer) =>{
    renderEntireTree = observer;
}




export default state