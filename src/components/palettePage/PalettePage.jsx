import { Link } from 'react-router';
import './PalettePage.css'
import ColorBlock from '../colorBlock/ColorBlock';
import { useState } from 'react';

export default function PalettePage({palette}){
    const [soundState, setSoundState] = useState("on");
    return(
        <div className='page-wrapper'>
            <div className="palette-panel">
                <Link to={'/'}>
                    <svg className="palette-arrow" width="25" height="12" viewBox="0 0 25 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" />
                    </svg> 
                    <span>Back</span>
                </Link>
                <div className="sound" onClick={() => soundState === "on"? setSoundState("off") : setSoundState("on")}>Sound {soundState} 🔊</div>
            </div>
            <div className='grid-palette'>
                {palette.colors.map((item, index) => (
                    <>
                        <ColorBlock key={index} color={item.color} name={item.name} soundState={soundState}/>
                    </>
                ))}
                
            </div>
        </div>
    );
}