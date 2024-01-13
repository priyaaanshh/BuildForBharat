import { useState } from "react";
import "./Chat.css";
import ScrollToBottom from "react-scroll-to-bottom";
const Chat = () => {
  const aiName = "AI Assistant";
  const messages = [
    {
      author: aiName,
      message: "Hey, How can I help you?",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "I want help in this product",
      time: "1m ago",
    },
    {
      author: aiName,
      message: "Yeah sure, what you want to know",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "What is the price of this product?",
      time: "1m ago",
    },
    {
      author: aiName,
      message: "Hey, How can I help you?",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "I want help in this product",
      time: "1m ago",
    },
    {
      author: aiName,
      message: "Yeah sure, what you want to know",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "What is the price of this product?",
      time: "1m ago",
    },
    {
      author: aiName,
      message: "Hey, How can I help you?",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "I want help in this product",
      time: "1m ago",
    },
    {
      author: aiName,
      message: "Yeah sure, what you want to know",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "What is the price of this product?",
      time: "1m ago",
    },
    {
      author: aiName,
      message: "Hey, How can I help you?",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "I want help in this product",
      time: "1m ago",
    },
    {
      author: aiName,
      message: "Yeah sure, what you want to know",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "What is the price of this product?",
      time: "1m ago",
    },
    {
      author: aiName,
      message: "Hey, How can I help you?",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "I want help in this product",
      time: "1m ago",
    },
    {
      author: aiName,
      message: "Yeah sure, what you want to know",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "What is the price of this product?",
      time: "1m ago",
    },
    {
      author: aiName,
      message: "Hey, How can I help you?",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "I want help in this product",
      time: "1m ago",
    },
    {
      author: aiName,
      message: "Yeah sure, what you want to know",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "What is the price of this product?",
      time: "1m ago",
    },
    {
      author: aiName,
      message: "Hey, How can I help you?",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "I want help in this product",
      time: "1m ago",
    },
    {
      author: aiName,
      message: "Yeah sure, what you want to know",
      time: "1m ago",
    },
    {
      author: "vbn",
      message: "What is the price of this product?",
      time: "1m ago",
    },
  ];

  const [currentMessage, setCurrentMessage] = useState("");
  
  const sendMessage = async () => {
    };
  return (
    <div className="Chat">
      <div className="chat-users-container-nav msg-box-nav">
        <div className="chat-users-display-image">
          <img
            src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/nesuuhyyzmjip7zg0kg4"
            alt=""
            className="chat-users-display-image"
          />
        </div>
        <div className="chat-users-msg-column">
          <div className="username">{aiName}</div>
          <div className="active-status">Online</div>
        </div>
      </div>
      <ScrollToBottom className="chat-msg-box">
        {messages?.map((message, i) => {
          return (
            <div
              className={` msg-tile ${
                message?.author === aiName ? "left" : "right"
              }`}
              key={i}
            >
              <div
                className={`msg ${
                  message?.author === aiName
                    ? "left-side-msg"
                    : "right-side-msg"
                }`}
              >
                <p className="msg-author">
                  {message?.author === aiName ? message?.author : "You"}
                </p>
                <p className="msg-text">{message?.message}</p>
                <p className="msg-time">{message?.time}</p>
              </div>
            </div>
          );
        })}
      </ScrollToBottom>
      <div className="chat-bottom">
        <input
          type="text"
          id="chatInput"
          value={currentMessage}
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
          className="chat-input"
          placeholder="Send message..."
        />
        <button onClick={() => sendMessage()} className="send-btn">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
