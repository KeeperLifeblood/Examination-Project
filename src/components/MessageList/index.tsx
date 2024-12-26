import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MessageList.css";
import { Theme } from "@chakra-ui/react";

interface Message {
  id: number;
  message_text: string;
  bot_sender: number;
}

<Theme appearance="dark">
  <div />
</Theme>;

const MessageList: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    axios
      .get("/api/messages_json")
      .then((response) => {
        console.log(response.data); // Verificar los datos obtenidos
        setMessages(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.bot_sender === 1 ? "ai" : "user"}`}
          >
            <div className="message-content">
              <p>{message.message_text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
