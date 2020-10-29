import React from "react";

export class Settings extends React.Component{

    constructor() {
        super();
        this.state = {
            userName: "empty"
        }

    }
    componentDidMount() {
        fetch("http://levadny02.beget.tech/getUserJSON")
            .then(response=>response.text())
            .then(info=>{
                this.setState({
                    userName: info
                })
            });
    }

    render() {
        console.log("Настраиваем");
        return <div className="container">
               <div className="row" id="name">
                   <p>{this.state.userName}</p>
                   <span style={{color: "blue", padding: "6px"}} className="edit-name"> Изменить</span>
               </div>
               <div className="row" id="lastname">
                   <p>Иванов</p>
                   <span style={{color: "blue", padding: "6px"}} className="edit-lastname"> Изменить</span>
               </div>
            </div>

    }
}

// const Settings = ()=>{
//     return <div className="container">
//         <div className="row" id="name">
//             <p>Иван</p>
//             <span style={{color: "blue", padding: "6px"}} className="edit-name"> Изменить</span>
//         </div>
//         <div className="row" id="lastname">
//             <p>Иванов</p>
//             <span style={{color: "blue", padding: "6px"}} className="edit-lastname"> Изменить</span>
//         </div>
//     </div>
// }