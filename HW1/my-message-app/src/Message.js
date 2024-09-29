// src/Message.js
import React from 'react';
import './Message.css';  // Подключаем стили

const Message = (props) => {
  return (
    <div className="message-box">
      <p>{props.text}</p>
    </div>
  );
};

export default Message;
