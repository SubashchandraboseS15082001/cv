import React from 'react'

export default function Login() {
    return (
        <div >
            <div className="row p-5 bg-dark">
                <div className="container login-form bg-light">
                    <form>

                        <div className="form-outline mb-4">
                            <label className="form-label text-bold" for="form2Example1">Email address</label>
                            <input type="email" id="form2Example1" className="form-control" placeholder='Email address' required/>

                        </div>


                        <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example2">Password</label>
                            <input type="password" id="form2Example2" className="form-control" placeholder='Password' required/>

                        </div>


                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                                    <label className="form-check-label me-3" for="form2Example31"> Remember me </label>
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>



                        </div>


                        <div className="text-center">
                            <button type="button" className="btn btn-outline-dark btn-block mb-4 px-5 py-2">Sign in</button>
                        </div>


                        <div className="text-center">
                            <p>Not a member? Go ahead and Register</p>
                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-link btn-dark btn-floating mx-1">
                                <i className="fa fa-facebook-f text-light"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-dark btn-floating mx-1">
                                <i className="fa fa-google text-light"></i>
                            </button>



                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
