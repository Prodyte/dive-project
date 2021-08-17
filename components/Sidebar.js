import { Avatar, IconButton } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import SearchIcon from '@material-ui/icons/Search';
import { useState, useEffect } from 'react';
import * as EmailValidator from 'email-validator';
import Chat from './Chat';

function Sidebar() {
  const [user] = useAuthState(auth);
  const [search, setSearch] = useState('');
  const [chat, setChat] = useState({});
  var chatreF = db.ref('chats/');
  useEffect(() => {
    chatreF.on('value', (snapshot) => {
      const data = snapshot.val();
      setChat(data);
    });
  }, [search]);
  const createChat = async () => {
    const x = [];
    var query = db.ref('chats').orderByKey();
    query.once('value').then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        const arr = childSnapshot.val();
      });
    });
    const a = await x;
    if (a.length === 0) {
      const chatref = db.ref('chats');
      if (EmailValidator.validate(search) && search !== user.email) {
        chatref.push([user.email, search]);
      } else {
        alert('Something wrong with email, try again :)');
      }
    } else {
      alert('Chat already exists');
    }
  };

  const chatarr = [];
  if (chat) {
    Object.keys(chat).forEach((key) => {
      chatarr.push([key, chat[key]]);
    });
  }

  return (
    <div className="relative w-96 border-r-2 border-solid border-gray-200 h-screen">
      <div className="p-8 flex justify-between align-center h-32 border-b-2 border-solid border-gray-200">
        <Avatar src={user.photoURL} />
      </div>
      <div className="flex items-center bg-gray-200 p-4">
        <SearchIcon
          style={{ fontSize: 22, marginRight: '1rem' }}
          onClick={createChat}
        />
        <input
          type="text"
          placeholder="Enter the gmail of the user"
          className="outline-none border-none p-2 rounded flex-1"
          onInput={(e) => setSearch(e.target.value)}
        />
      </div>

      {chatarr.map((chat) => {
        if (user.email != chat[1][1])
          return <Chat id={chat[0]} users={chat[1]} />;
      })}
    </div>
  );
}

export default Sidebar;
