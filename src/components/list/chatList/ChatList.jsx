import { useState } from 'react';
import './ChatList.css';

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchbar">
          <img src='/src/assests/search.png' alt="" /> 
          <input type="text" placeholder='search' />
        </div>
        <img src={addMode ? '/src/assests/plus.png' : '/src/assests/minus.png'} alt="plus" className='add' onClick={() => setAddMode((prev) => !prev)} />
      </div>

      <div className="item">
        <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
        <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
      <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
      <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
      <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
      <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
      <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
      <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
      <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
      <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
      <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
      <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
      <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
      <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
      <div className="item">
      <img src='/src/assests/avatar.jpg' alt="" /> 
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello for</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
