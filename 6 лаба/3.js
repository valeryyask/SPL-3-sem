let store = {
  state: { 
      profilePage:{ 
          posts: [ 
          
              {id: 1, message: 'Hi', likeCount: 12},
              {id:2, message: 'By', likeCount: 1},
      ],
      newPostText: 'About me',
  },
  dialogsPage:{
      dialogs:[
          {id: 1, name: 'Valera'},
          {id: 2, name: 'Andrey'},
          {id: 3, name: 'Sasha'},
          {id: 4, name: 'Viktor'},
      ],
      messages: [
          {id: 1, message: 'hi'},
          {id: 2, message: 'hi hi'},
          {id: 3, message: 'hi hi hi'},
      ],
  },
  sidebar:[],
},
}
let {state:{profilePage:{posts}, dialogsPage:{dialogs, messages},sidebar }} = store;
console.log("значения likesCount из массива posts");
for (post of posts)
{
  console.log(post.likeCount);
}
console.log("фильтрация массива dialogs – выбрать пользователей с четными id");
let filterDialogs = dialogs.filter(function(dialog){
  return dialog.id % 2 == 0;
});
console.log(filterDialogs);
console.log("В массиве messages заменить все сообщения на “Hello user”");
let newMassege = store.state.dialogsPage.messages.map((message) => "Hello user");
console.log(newMassege);