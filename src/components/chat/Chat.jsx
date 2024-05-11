
import { useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {

  const [open ,setOpen] =useState(false)
  const [Text,setText]= useState('')

const handleEmoji = e => {
     setText((prev) => prev + e.emoji)
     setOpen(false)
}

  return (
    <div className='chat'>


      {/* ------------------------------------top section---------------------------------------------- */}
      <div className="top">
        <div className="user">
          <img src="/src/assests/avatar.jpg" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="icons">
            <img src="/src/assests/phone.png" alt="" />
            <img src="/src/assests/video.png" alt="" />
            <img src="/src/assests/info.png" alt="" />
          </div>
        </div>
      </div>




      {/* -----------------------------chat section--------------------------------------- */}
      <div className="center">
        <div className="message">
          <img src="/src/assests/avatar.jpg" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente est enim harum rerum, saepe fugit, eius illo fugiat quos magnam qui. Nobis ullam inventore recusandae molestiae assumenda odio repudiandae voluptas.
            </p>
            <span>1 min age</span>
          </div>
        </div>
        <div className="message own">
         
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente est enim harum rerum, saepe fugit, eius illo fugiat quos magnam qui. Nobis ullam inventore recusandae molestiae assumenda odio repudiandae voluptas.
            </p>
            <span>1 min age</span>
          </div>
        </div>
        <div className="message">
          <img src="/src/assests/avatar.jpg" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente est enim harum rerum, saepe fugit, eius illo fugiat quos magnam qui. Nobis ullam inventore recusandae molestiae assumenda odio repudiandae voluptas.
            </p>
            <span>1 min age</span>
          </div>
        </div>
        <div className="message own">
        
          <div className="texts">
          <img src="https://images.pexels.com/photos/22302785/pexels-photo-22302785/free-photo-of-bighorn-sheep-in-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente est enim harum rerum, saepe fugit, eius illo fugiat quos magnam qui. Nobis ullam inventore recusandae molestiae assumenda odio repudiandae voluptas.
            </p>
            <span>1 min age</span>
          </div>
        </div>
        <div className="message ">
          <img src="/src/assests/avatar.jpg" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente est enim harum rerum, saepe fugit, eius illo fugiat quos magnam qui. Nobis ullam inventore recusandae molestiae assumenda odio repudiandae voluptas.
            </p>
            <span>1 min age</span>
          </div>
        </div>
      </div>

















































      {/* -----------------------bottom section --------------------------------------------------- */}
      <div className="bottom">
        <div className="icons">
          <img src="/src/assests/img.png" alt="" />
          <img src="/src/assests/camera.png" alt="" />
          <img src="/src/assests/mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message ...' value={Text} onChange={(e) => setText(e.target.value)}/>
        <div className="emoji">
          <img src="/src/assests/emoji.png" alt="" onClick={ () => setOpen((prev) => !prev)}/>
          <div className="emoji-picker">
          <EmojiPicker open= {open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <buttton className="sendButton">Send</buttton>
      </div>
    </div>
  )
}

export default Chat