import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import Programme  from "./pages/Programme";
import ArtistCard  from "./pages/ArtistCard";
import { Planning } from "./pages/Planning";
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
                <Route path="/artist/:id" element={<ArtistCard/>}/>
                <Route path="/passeport" element={<Passeport/>}/>
                </Routes>
              </>
              
                

    );
};
export default App;