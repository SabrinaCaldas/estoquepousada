import React from "react";
import { Link } from 'react-router-dom'
import './style.css'
import './index.js'


function Login() {
    return (
        <div className="login template d-flex justify-content-center align-items-center vh- 100 "
            style={{
                backgroundImage: "url('https://ocl.com.br/wordpress/wp-content/uploads/2019/07/TEMA-11-CONTROLE-DE-ESTOQUE.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div style={{ backgroundImage: "url('https://ocl.com.br/wordpress/wp-content/uploads/2019/07/TEMA-11-CONTROLE-DE-ESTOQUE.jpg?v=1')" }}></div>
            <div className=" form_container p-5 rounded bg-white">
                <form>
                    <h3 className="text-center">Sign In</h3>
                    <div className="mb-2 ">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control" />
                    </div>


                    <div>
                        <label htmlFor="password">password</label>
                        <input type="password" placeholder="Enter Password" className="form-control" />
                    </div>
                    <div>
                        <input type="checkbox" className="custom-control custom-checkbox" id="check" />
                        <label htmlFor="check" className="custom-input-label">
                            Remember me
                        </label>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary">Sign in</button>
                    </div>
                    <p className="text-end mt-2">
                        Forgot <a href="">Password?</a><Link to="/signup" className='ms-2'>Sign up</Link>
                    </p>

                    
                    <div className="container d-flex flex-column h-100">
                        <section id="image" className="w-0 lg:w-7/12 bg-cover rounded-r-3xl shadow-lg opacity-100">

                            <style scoped>
                                #image: (
                                    background - image: url('./img/bgforestmid.jpg'));
        
                            </style>
                        </section>

                        <template id="dialog-forget">
                        </template>
                    </div>

                </form>
            </div>
        </div>
    )
}





export default Login