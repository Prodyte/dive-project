import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../firebase';
import { useRouter } from 'next/dist/client/router';
import Message from './Message';
import { useEffect, useState } from 'react';

function Screen({ chat }) {
  const router = useRouter();
  const [inp, setinp] = useState('');
  const [user] = useAuthState(auth);
  const [input, setInput] = useState('');
  useEffect(() => {
    setInput(inp);
  }, [inp, setinp]);
  const sendMessage = () => {
    const ref = db.ref('chats/' + `${router.query.id}`);
    ref.child('/messages').push({
      message: input,
      user: user.email,
      photoURL: user.photoURL,
      timestamp: new Date().getTime(),
    });
    setInput('');
  };

  const handleinput = (e) => {
    setinp(e.target.value);
  };

  const showMessages = () => {
    return chat.map((c) => (
      <Message message={c.message} user={c.user} timestamp={c.timestamp} />
    ));
  };

  return (
    <div>
      <div className="bg-whatsapp_bg p-8 h-screen">{showMessages()}</div>
      <div className="flex">
        <input
          autoFocus
          type="text"
          placeholder="Enter Meesage"
          className="flex flex-1 outline-none border-none p-2 rounded "
          value={input}
          onChange={handleinput}
        />
        <button className="w-32 px-16 bg-green-100" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Screen;
