import React from 'react';
import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Messege'



function Dialogs(props) {

    
    let dialogsElements = props.dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messages.map (m => <Message message={m.message} />);



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