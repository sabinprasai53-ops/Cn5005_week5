import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 
import './index.css' 
import ClickCounter from './Counter' 
import EmojiCounter from './EmojiCounter' 
createRoot(document.getElementById('root')).render( 
<StrictMode> 
<ClickCounter/> 
<EmojiCounter pic='Love'/> 
<EmojiCounter pic='sad'/> 
<EmojiCounter pic='like'/> 
</StrictMode>, 
) 