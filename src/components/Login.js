import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Link } from "react-router-dom";
function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitData = (e) => {
    e.preventDefault();

    console.log(email, password)
   }
   const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: '#fff'
  };

  return (
    <>
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100  ">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="card shadow-lg mt-5 ">
                <div className="card-body p-5 ">
                    <div className="text-center my-5 bg-dark rounded">
                        <img
                        src="https://codeazatechnologies.com/assets/final-logo-v1.png"
                        alt="logo"
                        width="100"
                        />
                    </div>
                  <h1 className="fs-4 card-title fw-bold mb-4 ">Signin</h1>
                  <form
                    onSubmit={(e) => submitData(e)}
                  >
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example1"
                        placeholder="Email Address"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example2"
                        placeholder="Password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      <Link to={'tasks'} style={linkStyle}>Sign in</Link>
                    </button>
                    
                    <div className="text-center">
                      <p>
                        Don't have an account? <a href="/">Sign Up</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  
  );
}
export default Login;
