import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const fetchMessages = async () => {
    const res = await axios.get('http://localhost:5000/api/messages');
    setMessages(res.data);
  };

  useEffect(() => {
    if (!username) { navigate('/login'); return; }
    fetchMessages();
  }, [username, navigate]);

  const sendMessage = async () => {
    if (!text.trim()) return;
    await axios.post('http://localhost:5000/api/messages', { username, text });
    setText('');
    fetchMessages();
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <span>Chat App - Hello, {username}!</span>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="messages-box">
        {messages.map((msg) => (
          <div key={msg._id} className="message-item">
            <strong>{msg.username}</strong>
            <small> · {new Date(msg.createdAt).toLocaleTimeString()}</small>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="send-box">
        <input
          placeholder="Type a message..."
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
