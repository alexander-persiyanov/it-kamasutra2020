import profileReducer, { addPostAC,deletePost } from "./profile-reducer";

let state = {
    newPostValue: "new post",
    posts: [
      { id: 1, message: "My post1" },
      { id: 2, message: "Post 2" },
      { id: 3, message: "Post 3" },
    ],
   
  };
test('length  of posts should be incremented', () => {
    
    let action = addPostAC("hello im test post");
    let newState = profileReducer(state,action); 
    expect(newState.posts.length ).toBe(4);
   
  });

  test('message of posts should be equal correct', () => {
    
    let action = addPostAC("hello im test post");
    let newState = profileReducer(state,action); 
  
    expect(newState.posts[3].message ).toBe("hello im test post");
  });

  test('length should be decrement before delete post', () => {
    
    let action = deletePost(1);
    let newState = profileReducer(state,action); 
  
    expect(newState.posts.length).toBe(2);
  });

