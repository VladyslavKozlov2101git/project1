import React from 'react';
import c from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Messege'



function Dialogs(props) {

    
    let dialogsElements = props.state.dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messages.map (m => <Message message={m.message} />);

    let newDialogElement = React.createRef();

    let addDialog = () =>{
      let text = newDialogElement.current.value;
      alert(text)
    }



    return <div className={c.dialogs}>    
                <div className={c.dialogІtems}>
                    {dialogsElements}
                </div>


                <div className={c.messages}>
                    {messagesElements}
                </div>

                <div>
                    <textarea ref = {newDialogElement}></textarea>
                </div>

                <div>
                    <button onClick={addDialog}>Add post</button>
                </div>

          </div>


}

export default Dialogs;