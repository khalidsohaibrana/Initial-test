import './App.css';
import { BrowserRouter , NavLink, Route, Routes} from 'react-router-dom';

import Login from './components/Login';
import Tasks from './components/Tasks';
function App() {
  
  return (
    <div className="App">
          <BrowserRouter>
            <div className='col-md-12'>
              <div className='row' style={{height:"40px"}}>
                <div className='col-md-6'>
                  <NavLink
                        to="/"
                        style={({ isActive, isPending }) => {
                          return {
                            justifyContent:'center',
                            alignItems:'center',
                            height:'100%',
                            display:'flex',
                            fontWeight: isActive ? "bold" : "",
                            background: isActive ? "dodgerblue" : "white",
                            color: isPending ? "dodgerblue" : "black",
                          };
                        }}
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        SignIn
                  </NavLink>
                </div>
                <div className='col-md-6'>
                  <NavLink
                      to="/tasks"
                      style={({ isActive, isPending }) => {
                        return {
                          alignItems:'center',
                          justifyContent:'center',
                          height:'100%',
                          display:'flex',
                          fontWeight: isActive ? "bold" : "",
                          background: isActive ? "dodgerblue" : "white",
                          color: isPending ? "dodgerblue" : "black",
                        };
                      }}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                  >
                      Tasks
                  </NavLink>
                </div>
              </div>
            </div>
            
            
                <Routes>
                    <Route exact path='/' element={<Login/>} />
                    <Route path='/tasks' element={<Tasks/>} />
                </Routes>        
          </BrowserRouter>
    </div>
  );
}

export default App;
