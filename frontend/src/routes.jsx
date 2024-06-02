import { Route, Routes } from "react-router-dom";
// import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
// import Cadastro from "./pages/Cadastro";
// import Aluno from "./pages/Aluno"
// import Cadastro_aluno from "./pages/Cadastro_aluno";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/home" element={<Homepage />} />
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/aluno" element={<Aluno/>}/>
      <Route path="/cadastro-aluno" element={<Cadastro_aluno/>}/> */}
    </Routes>
  );
}

export default MainRoutes;
