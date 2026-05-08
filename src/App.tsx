import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import Programme from "./pages/Programme";
import { Planning } from "./pages/Planning";
import { ArtistDetail } from "./pages/ArtistDetail";
import { Passeport } from "./pages/Passeport";
import { Layout } from "./components/Layout";
import "./index.css"




function App(){

    return(
     <>
      < Layout/>
            <Routes>

                <Route path="" element={<Home />}/>
                <Route path="/programme" element={<Programme/>}/>
                <Route path="/planning" element={<Planning/>}/>
                <Route path="/artistDetail" element={<ArtistDetail/>}/>
                <Route path="/passeport" element={<Passeport/>}/>
                </Routes>
              </>
              
                

    );
};
export default App;