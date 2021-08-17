import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
function Message({ message, user, timestamp }) {
  //   console.log(message, user, timestamp);
  const [usermain] = useAuthState(auth);
  //   console.log(message);
  if (message.length > 0) {
    return (
      <div className="m-r-0 h-6 relative rounded m-6 font-xl border-2 border-solid  ">
        {user === usermain.email ? (
          <h1 className="text-right bg-green-100">{message}</h1>
        ) : (
          <h1 className="text-left bg-white">{message}</h1>
        )}
      </div>
    );
  } else return null;
}

export default Message;
