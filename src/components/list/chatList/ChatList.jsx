import React, { useState, useEffect } from 'react';
import './ChatList.css';
import axios from 'axios';

const ChatList = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4040/contacts');
        console.log('Response data:', response.data); // Debug log

        const { Time, users, chated } = response.data;
        setCurrentUser({ username: "Current User", avatar: "/src/assets/avatar.jpg" }); // Dummy current user

        // Convert bytea images to Base64
        const usersWithImages = users.map(user => {
          let imgSrc = '/src/assets/man.png'; // Default placeholder or fallback image path
          if (user.img) {
            imgSrc = user.img; // Assuming user.img already has 'data:image/jpeg;base64,' prefix
          }
          return { ...user, img: imgSrc };
        });

        setUsers(usersWithImages);
        setChats(chated);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchUserData();
  }, []);

  const getLastChatMessage = (username) => {
    const lastChat = chats.find(chat => chat.sender === username || chat.receiver === username);
    return lastChat ? lastChat.message : '';
  };

  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchbar">
          <img src='/src/assets/search.png' alt="search" />
          <input type="text" placeholder='search' />
        </div>
      </div>

      {currentUser && (
        <div className="current-user">
          <img src={currentUser.avatar} alt="avatar" />
          <div className="text">
            <span>{currentUser.username}</span>
          </div>
        </div>
      )}

      {users.map(user => (
        <div className="item" key={user.username}>
          {user.img ? (
            <img src={user.img} alt="avatar" />
          ) : (
            <img src="/src/assets/default-avatar.png" alt="default avatar" />
          )}
          <div className="text">
            <span>{user.username}</span>
            <p>{getLastChatMessage(user.username)}</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default ChatList;
