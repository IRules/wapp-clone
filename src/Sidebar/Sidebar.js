import React, {useEffect, useState} from 'react';
//import Material-UI - core
import { Avatar, IconButton } from '@material-ui/core';
//import Material-UI - iconuri
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons'
//import css pentru Sidebar
import './Sidebar.css';
import SidebarChat from './SidebarChat.js';
import db from "../firebase";
import { useStateValue } from '../Chat/StateProvider';

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] =  useStateValue();

    useEffect(() => {
       const unsub = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc =>(
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ));
        return () => {
            unsub();
        }
    }, []);

    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar src={user?.photoURL}/><p>{user.displayName}</p>
                <div className="sidebar__headerDreapta">
                    <IconButton >
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchBox">
                    <SearchOutlined />
                    <input placeholder="Cauta sau incepe chat nou" type="text" />
                </div>

            </div>

            <div className="sidebar__chats">
                {rooms.map(room =>(
                    <SidebarChat key={
                        room.id
                    } name={
                        room.data.name
                    } id={room.id} />
                ))}
                
            </div>
        </div>
    )
}

export default Sidebar;