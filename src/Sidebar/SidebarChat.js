import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './SidebarChat.css';

function SidebarChat({ id, name, addNewChat }) {
    //Un string random pentru a genera un avatar random
    const [seed, setSeed] = useState('');
    useEffect(() =>{
        setSeed(Math.floor(Math.random()*5000)) 
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter the name of the new chat!")

        if(roomName) {
            //soon tm
        }
    };

    return !addNewChat ?  (
        <Link to={`/rooms/${id}`}>
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__content">
                <h2>{name}</h2>
                <p>Last message..</p>
            </div>
        </div>
        </Link>
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    )
}


export default SidebarChat
