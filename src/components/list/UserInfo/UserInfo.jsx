
import './Userinfo.css'

const UserInfo = () => {
  return (
    <div className='userInfo'>
        <div className="user">
            <img src="/src/assests/avatar.jpg" alt="avatar" />
            <h2>John doe</h2>
        </div>
        <div className="icons">
            <img src="/src/assests/more.png" alt="more" />
            <img src="/src/assests/video.png" alt="video" />
            <img src="/src/assests/edit.png" alt="edit" />
        </div>
    </div>
  )
}

export default UserInfo