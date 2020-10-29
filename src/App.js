import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {Menu} from './components/Menu';
import {Profile} from "./components/Profile";
import {Settings} from "./components/Setting";
import {Users} from "./components/Users";


// const Settings = ()=>{
//   return <div className="container">
//             <div className="row" id="name">
//               <p>Иван</p>
//               <span style={{color: "blue", padding: "6px"}} className="edit-name"> Изменить</span>
//             </div>
//             <div className="row" id="lastname">
//               <p>Иванов</p>
//               <span style={{color: "blue", padding: "6px"}} className="edit-lastname"> Изменить</span>
//             </div>
//         </div>
// }

// const Users = ()=>{
//   return <table className="table">
//     <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Имя</th>
//       <th scope="col">Фамилия</th>
//       <th scope="col">Username</th>
//     </tr>
//     </thead>
//     <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Иван</td>
//       <td>Иванов</td>
//       <td>@ivanko</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Петр</td>
//       <td>Петров</td>
//       <td>@petro</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Василий</td>
//       <td>Васильев</td>
//       <td>@vaska</td>
//     </tr>
//     </tbody>
//   </table>
// }

function App() {
  return (
      <div className="container-fluid">
        <BrowserRouter>
          <div className="row">
            <div className="col-3">
              <Menu/>
            </div>
            <div className="col-9">
              <Route path="/profile" render={()=>{return <Profile/>}}/>
              <Route path="/settings" render={()=>{return <Settings/>}}/>
              <Route path="/users" render={()=>{return <Users/>}}/>
            </div>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;