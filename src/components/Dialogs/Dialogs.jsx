import React from 'react';
import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Messege'



function Dialogs(props) {

    let dialogsData=[
        {id : "1", name : "Dima"},
        {id : "2", name : "Katya"},
        {id : "3", name : "Vova"},
        {id : "4", name : "Tanya"},
        {id : "5", name : "Max"},
        {id : "6", name : "Vika"}
    ]
    
    let messagesData=[
        {id : "1", message : "Hello"},
        {id : "2", message : "My name is"},
        {id : "3", message : "Vladyslav"},
        {id : "4", message : "I'm 25 y.o"},
        {id : "5", message : "I work as a QA engeenear"},
        {id : "6", message : "in Owlab company"}
    ]


    let dialogsElements = dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = messagesData.map (m => <Message message={m.message} />);



    return <div className={c.dialogs}>    
                <div className={c.dialogІtems}>
                    {dialogsElements}
                </div>


                <div className={c.messages}>
                    {messagesElements}
                </div>
          </div>


}

export default Dialogs;