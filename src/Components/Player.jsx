import { useState } from "react"

export default function Player({initialName, symbol, isActive}){

    const[playerName, setPlayerName] = useState(initialName);

    const[isEditing, setIsEditing] = useState(false);
    console.log(isEditing);

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    function handleEditClick(){
        // if(isEditing === false)
        //     setIsEditing(true);
        // else
        //     setIsEditing(false);

        // setIsEditing(!isEditing);
        // setIsEditing(!isEditing);

        setIsEditing((editing)=>!editing);
        

        // In ReactJS, every command is scheduled to work one after the other. So, if we dont use the function to 
        // set the STATE
    }

    // we are using conditional statements for determining the player name or an input field...

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if(isEditing)
    {
        editablePlayerName = <input type="text" defaultValue={playerName} required onChange={handleChange}/>
        // this handle change function will get an event which contains a target directory that has the value
        // TWO-WAY-Binding
    }

    // this is what the button will say -> SAVE or Change

    let buttonCaption = "Edit";
    if(isEditing)
    {
        buttonCaption = 'Save';
    }

    return(
        <li className={isActive? 'active' : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={()=>{(handleEditClick())}}>{buttonCaption}</button>
        </li>
    )
}