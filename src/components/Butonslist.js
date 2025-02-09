import React from 'react';
import Button from './Button';

const ButtonList = [
    "All", "Trending", "Music", "Gaming", "Movies", "Live", "News", "Sports",
    "Education", "Technology",  "Cooking",
    "Travel",  "Health", "Fitness", 

  ];
  
const ButtonsList = () => {
  return (
    <div className="flex">
        {ButtonList.map((name, index) => (
          <Button key={index} Name={name} />
        ))}
      
    </div>
  );
};

export default ButtonsList;
