import Index from './pages/Index';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Rutas from './pages/movilidad/rutas';
import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/rutas" element={<Rutas />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;