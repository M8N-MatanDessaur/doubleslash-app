# // DoubleSlash
### Note taking app for coders


---

> [App Description]
>
> DoubleSlash 
> is a note-taking app for coders.  
> It uses syntax highlighting to make taking coding notes easier. You can also store your coding tips, snippets, and to-do lists or even just plain text notes. 
> It's a minimalist app with a fun twist that's easy to use.  
---
> [Project Information]
>
> DoubleSlash is a Full-Stack (MERN) web app that uses React for the front-end and NodeJs with the Express Framework for the back-end.  
> MongoDB is used for data storage and retrieval with Axios.
>
> You'll improve your web programming skills by researching and using resources such as Google's prettify for syntax highlighting.  
> The design is modern and minimalistic with clean, reusable React functional components built with hooks like NextJS useSWR, useState, useNavigate, etc. The layout and > style design will be live coded using sementic html and css using the latest versions of selectors, functions and properties  
> making the app feel fresh and modern.  
---
> [Project Inspirations]
>
> - Google Keep
> - Material UI
> - @uiw/react-textarea-code-editor
---


## • Data Models:

```JS
//User  
{   
  avatar {type : String}, 
  firstName {type : String},
  lastName {type : String} 
  email {type: String},  
  password {type: String}  
};

//Notes  
{  
  author {type : String}, //user.email 
  title {type : String}, 
  body : {type : String}, 
  extention : {type : String}, //file
  dateCreated {type : date} //date.now 
}  
```