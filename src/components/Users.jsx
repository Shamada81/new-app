import React from "react";

export class Users extends React.Component{
   render() {
       return <table className="table">
           <thead>
           <tr>
               <th scope="col">#</th>
               <th scope="col">Имя</th>
               <th scope="col">Фамилия</th>
               <th scope="col">Username</th>
           </tr>
           </thead>
           <tbody>
           <tr>
               <th scope="row">1</th>
               <td>Иван</td>
               <td>Иванов</td>
               <td>@ivanko</td>
           </tr>
           <tr>
               <th scope="row">2</th>
               <td>Петр</td>
               <td>Петров</td>
               <td>@petro</td>
           </tr>
           <tr>
               <th scope="row">3</th>
               <td>Василий</td>
               <td>Васильев</td>
               <td>@vaska</td>
           </tr>
           </tbody>
       </table>
   }
}