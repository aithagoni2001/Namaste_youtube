import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex shadow-sm'>
        <img
          className="h-8 cursor-pointer pr-2"
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
          alt="profile-icon"
        /> <span>
            <span className='font-semibold pr-2'>{name}</span>
            <span>{message}</span>
        </span>
        

    </div>
  )
}

export default ChatMessage