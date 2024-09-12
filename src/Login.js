import React from "react";
import { Link } from 'react-router-dom'
import './style.css'
import './index.js'
import './hooks/useFetchData.js'



function Login() {
    return (
        <div className="login template d-flex justify-content-center align-items-center vh- 100 "
            style={{
                backgroundImage: "url('https://images.pexels.com/photos/713664/pexels-photo-713664.jpeg?cs=srgb&dl=pexels-minan1398-713664.jpg&fm=jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
            }}>
            <div className="form_container p-5 rounded bg-white ">
                <form>
                    <h3 className="text-center">Sign In 📦 📊 🗂️</h3>
                    <div className="mb-2 ">
                        <label htmlFor="email">Login</label> 
                        <input type="email" placeholder="Enter Email" className="form-control" /> 
                    </div>


                    <div className="Passaword">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control" />
                    </div>
                    <div>
                        <input type="checkbox" className="custom-control custom-checkbox" id="check" />
                        <label htmlFor="check" className="custom-input-label">
                            Remember me
                        </label>
                    </div>
                    <div className="d-grid">
                        <button Link to="/Signup" className="btn btn-outline-primary">Sign in</button>
                    </div>
                    <p className="text-end mt-2">
                        Forgot <a href="Recover Password">Password?</a>😭
                    </p>


                    {/* ... parte que tem que mudar, é uma area pra somente fazer a tela de menu ... */}

                    <Link to="/Signup" className='ms-2'>Home</Link> 
                    

                </form>
            </div>
        </div>
    )
}





export default Login