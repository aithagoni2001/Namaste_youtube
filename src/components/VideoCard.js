import React from 'react';

const VideoCard = ({ info }) => {
  if (!info) {
    return <div>Loading...</div>; // Handle undefined info case
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='m-3 p-2 shadow-md w-60 h-[320px] cursor-pointer'>
      <img className='rounded-lg' src={thumbnails?.medium?.url} alt={title} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>({statistics?.viewCount}) views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
