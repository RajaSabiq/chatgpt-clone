import React, { useState } from 'react';
import './Chat.css';
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { giveResponse } from '../../services/chat';

const Chat = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);

  return (
    <div className='chatContainer'>
      <div className='chatNav'>
        <div className='left'>
          <FiEdit />
          <span>ChatGPT</span>
        </div>
        <button
          onClick={() => {
            navigate('/');
          }}
          className='loginBtn'
        >
          Logout
        </button>
      </div>
      {messages.length > 0 && (
        <div className='chatMessages'>
          {messages.map(({ role, content }) => {
            return (
              <div
                key={content}
                className={role === 'user' ? 'userMessage' : 'botMessage'}
              >
                <p>{content}</p>
              </div>
            );
          })}
        </div>
      )}
      <div className='content'>
        <h2>What can I help with?</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const chat = e.target['chat']['value'];
            setMessages((prevMessages) => [
              ...prevMessages,
              {
                role: 'user',
                content: chat,
              },
            ]);
            const response = await giveResponse(chat);
            setMessages((prevMessages) => [
              ...prevMessages,
              {
                role: response.role,
                content: response.content,
              },
            ]);
          }}
          className='textField'
        >
          <input
            required
            name='chat'
            type='text'
            placeholder='Type a message...'
            className='inputField'
          />
        </form>
      </div>

      <footer>
        <span>ChatGPT can make mistakes. Check important info.</span>
      </footer>
    </div>
  );
};

export default Chat;
