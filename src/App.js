import React from 'react';
import './App.css';

class App extends React.Component {
 constructor(props){
   super(props);
       this.getBook = this.getBook.bind(this);
 }

 async getBook() {
  let response = await fetch(`http://xkcd.com/info.0.json`,
     {'mode': 'no-cors'})
  let data = await response.json()
  console.log(data);
  return data;
}
async getBook(id) {
  const url = this.domain + "/global/Book/"+id;
  const rsp = await fetch(url,{"headers":new Headers({'Authorization':'Token'+localStorage.getItem("authToken")})
});
  const json = await rsp.json();
  return json;
}

 render() {
   this.getBook()
   return (
     <div className="App">
     <h3>heyy </h3>
     </div>
   );
 }
}


export default App;
