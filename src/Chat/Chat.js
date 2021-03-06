import { Avatar, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './Chat.css';
import { InsertEmoticon, SearchOutlined} from '@material-ui/icons'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';
import db from '../firebase';
import { useStateValue } from './StateProvider';



function Chat() {
    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

    const rooms = "rooms";

    const {roomId} = useParams();

    const [roomName, setRoomName] = useState("");

    const [messages, setMessages] = useState([]);

    const [{user}, dispatch] = useStateValue();





    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name);
            });

            db.collection('rooms').doc(roomId).collection('messages').orderBy("timestamp","asc").onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            });

        }
    },[roomId])
    //Un string random pentru a genera un avatar random
    const [seed, setSeed] = useState('');
    useEffect(() =>{
        setSeed(Math.floor(Math.random()*5000)) 
    }, []);

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Ultima data online: ...</p>
                </div>

                <div className="chat__headerDreapta">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

            </div>
            </div>

            <div className="chat__body" >

                {messages.map((message) => (
                    <p className={`chat__mesaj ${message.name == user.displayName && 'chat__receptor'}`}>
                    <span className="chat__nume">{message.name}</span>
                    {message.message}
                    <span className="chat__timp">
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                </p>
                ))}
                


            </div>

            <div className="chat__box">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input value={input} onChange={(event) => setInput(event.target.value)} type="text" placeholder="Trimite mesaj..." /><button onClick={sendMessage} type="submit"></button>
                </form>
                <IconButton>
                        <AttachFile />
                </IconButton>
                <IconButton >
                    <MicIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Chat
