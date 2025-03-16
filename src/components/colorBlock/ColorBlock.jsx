import { useRef,} from 'react';
import './ColorBlock.css';
import audio from '../../import/src_notify.mp3';

export default function ColorBlock({color, name, soundState}){
    const audioRef = useRef(null);
    function handleClick(){
        navigator.clipboard.writeText(color);
        if(soundState === "on"){
            playSound();
        }
    }
    function playSound(){
        if(!audioRef.current){
            audioRef.current = new Audio(audio);
        }
        audioRef.current.play();
    }
    return(
        <div className="color-block" onClick={handleClick} style={{backgroundColor:color}}>
            <button className="copy-button">COPY</button>
            <div className="name">{name}</div>
        </div>
    );
}