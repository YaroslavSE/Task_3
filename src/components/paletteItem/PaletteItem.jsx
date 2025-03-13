import './PaletteItem.css';

export default function PaletteItem({colors, emoji, name}){ 
    return(
        <div className='palette'>
            <div className="palette__color-grid">
                {colors.map((item, index) => (
                    <div className="color" key={index} style={{backgroundColor:item.color }}></div>
                ))}
                
            </div>
            <div className="palette__footer">
                <p className='palette__name'>{name}</p>
                <div className="palette__emoji">{emoji}</div>
            </div>
        </div>
    );
}