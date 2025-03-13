import PaletteItem from '../paletteItem/PaletteItem';
import './PaletteList.css';
import { Link } from 'react-router';


export default function PaletteList({palettes}){
    
    return(
        <div className="container">
            <ul className='palette-list'>
                {palettes.map((item, index)=>(
                    <li key={index}>   
                        <Link to={`/palette/${item.id}`}>
                            <PaletteItem colors={item.colors} emoji={item.emoji} name={item.paletteName}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>   
    );
}