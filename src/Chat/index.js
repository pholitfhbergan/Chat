import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  addDoc,
  collection,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../utils/firebase";
const Chat = ({ globalUsername }) => {
  const messageRef = collection(db, "messages");
  const queryRef = query(messageRef, orderBy("createdAt", "desc"), limit(10));
  const [messages] = useCollection(queryRef, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(globalUsername);
    const payLoad = {
      text: formValue,
      createdAt: serverTimestamp(),
      createdBy: globalUsername,
    };
    await addDoc(messageRef, payLoad);
    setFormValue("");
  };
  return (
    <div>
      <div>
        {messages &&
          messages.docs.map((message) => (
            <p key={message.id}>
              {message.data().createdBy}:{message.data().text}
            </p>
          ))}
      </div>
      <form>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button onClick={(e) => sendMessage(e)}>Send chat</button>
      </form>
    </div>
  );
};

export default Chat;
