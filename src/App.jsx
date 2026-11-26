import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../src/pages/login'
import Projects from "./pages/projects";
import Tasks from "./pages/tasks";
import Team from "./pages/Team";
import Client from "./pages/client";
import Dashboard from "./pages/dashboard";
import Calendar from "./pages/calendar";
import Settings from "./pages/settings";  
import Register from "./pages/register";  
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/" element={<Team/>} />
      <Route path="/client" element={<Client/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/calendar" element={<Calendar/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/register" element={<Register/>} />
     </Routes>
    </BrowserRouter>
   
  );
}

export default App;