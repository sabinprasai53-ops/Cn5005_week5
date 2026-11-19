import { useState, useEffect } from "react"; 
import Love from "./Love.png"; 
import sad from "./sad.png"; 
import like from "./like.png";

function EmojiCounter({ pic: selectedEmoji }) { 
  const [image, setImage] = useState(Love); 
  const [count, setCount] = useState(0); 
 
  useEffect(() => { 
    const emojiImages = { 
      Love, 
      like, 
      sad, 
    }; 
 
    setImage(emojiImages[selectedEmoji] || Love); 
  }, [selectedEmoji]); 
 
  const handleClick = () => { 
    setCount((prevCount) => prevCount + 1); 
  }; 
 
  return ( 
    <div className="App">  
      <p> 
        {selectedEmoji} 
        <button type="button" onClick={handleClick}> 
          {count} 
          <img src={image} alt={selectedEmoji} /> 
        </button> 
      </p> 
 
  <p>&nbsp;</p> 
    </div> 
  ); 
} 
 
export default EmojiCounter; 