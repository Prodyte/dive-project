import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar } from '@material-ui/core';
import { db, auth } from '../firebase';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
function Chat({ id, users }) {
  const enterChat = () => {
    router.push(`/chat/${id}`);
  };
  const router = useRouter();
  var query = db.ref('/users/').orderByKey();
  const [userS, setUserS] = useState({});
  useEffect(() => {
    query.on('value', (snapshot) => {
      const data = snapshot.val();
      setUserS(data);
    });
  }, []);
  let photo = '';
  let c = '';
  if (userS) {
    for (const key in userS) {
      if (userS[key] && userS[key].email == users[1]) {
        photo = userS[key].photoURL;
        c = userS[key].name;
        break;
      }
    }
  }
  const [user] = useAuthState(auth);
  return (
    <div
      className="flex items-center cursor-pointer border-b-2 relative hover:bg-gray-100"
      onClick={enterChat}
    >
      <div className="m-4 m-r-1">
        <Avatar src={photo} />
      </div>

      <p>{c}</p>
    </div>
  );
}

export default Chat;
