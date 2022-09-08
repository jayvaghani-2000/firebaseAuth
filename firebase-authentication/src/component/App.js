import SignUp from "./signUp";
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from "../context/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./LogIn";
import Dashboard from "./dashboard";

function App() {

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<LogIn/>}/>
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </Container>
  );
}

export default App;
