import Head from 'next/head';
import Sidebar from '../../components/Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase';
import Screen from '../../components/Screen';
import { useRouter } from 'next/dist/client/router';
function Chat({ chat }) {
  const router = useRouter();

  const [user] = useAuthState(auth);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-full">
        <Screen chat={chat} />
      </div>
    </div>
  );
}

export default Chat;

export async function getServerSideProps(context) {
  const ref = db.ref('chats/' + `${context.query.id}`);
  const chatdata = [];
  ref
    .child('messages/')
    .orderByValue()
    .on('value', (snapshot) => {
      snapshot.forEach(function (childSnapshot) {
        chatdata.push(childSnapshot.val());
      });
    });

  return {
    props: {
      chat: chatdata,
    },
  };
}
