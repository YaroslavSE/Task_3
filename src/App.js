import { Route, Routes, useParams } from 'react-router';
import Header from './components/header/Header';
import PaletteList from './components/paletteList/PaletteList';
import palettes from './import/pallete.json';
import PalettePage from './components/palettePage/PalettePage';

function App() {
  return (
    <div className="App">  
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <PaletteList palettes={palettes}/>
          </>
          } />   
          <Route path='/palette/:id' element={<PaletteRoute />} />  
      </Routes>
  
    </div>
  );
}

function PaletteRoute(){
  const {id} = useParams();
  const pallete = palettes.find((p) => p.id === id);

  return <PalettePage palette={pallete} />;
}

export default App;
