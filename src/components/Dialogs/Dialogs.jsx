import React from 'react';
import c from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


function DialogItem (props){
    return<div className={c.dialog + ' ' + c.active}>
        <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
    </div>
}

function Message (props){
    return <div className={c.message}>
        {props.message}
    </div>
}

function Dialogs(props) {
    return <div className={c.dialogs}>    
                <div className={c.dialogІtems}>
                    <DialogItem name="Dima" id="1"/>
                    <DialogItem name="Katya" id="2"/>
                    <DialogItem name="Vova" id="3"/>
                    <DialogItem name="Tanya" id="4"/>
                    <DialogItem name="Max" id="5"/>
                    <DialogItem name="Vika" id="6"/>
                </div>


                <div className={c.messages}>
                    <Message message="Lorem ipsum dolor sit amet." />
                    <Message message="Lorem ipsum" />
                    <Message message="Lorem ipsum dolor  amet." />
                </div>
          </div>


}

export default Dialogs;