import axios from "axios";
import { useEffect, useState } from "react";

const ChatsPage = () => {
  const [chats, setChats] = useState([]);
  //here we will perform the fetching of data from backend
  const chatData = async () => {
    const { data } = await axios.get("/api/chat");
    //here we will first set the chats
    console.log(data);
    setChats(data);
  };
  useEffect(() => {
    chatData();
  }, []);
  return (
    <div >
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};
export default ChatsPage;
