import React from 'react'

export default function Register() {
  return (
    <div>
        <div className="row p-5 bg-dark">
                <div className="container login-form bg-light">
                    <form>

                        <div className="form-outline mb-4">
                            <label className="form-label text-bold" for="form2Example1">Email address</label>
                            <input type="email" id="form2Example1" className="form-control" placeholder='Email address' required/>

                        </div>



                        <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example2">New Password</label>
                            <input type="password" id="form2Example2" className="form-control" placeholder='New Password' required/>

                        </div>

                        
                        <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example2">Re-enter Password</label>
                            <input type="password" id="form2Example2" className="form-control" placeholder='Re-enter Password' required/>

                        </div>


                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                                    <label className="form-check-label me-3" for="form2Example31"> I've accepted all your terms and conditions. </label>
            
                                </div>
                            </div>



                        </div>


                        <div className="text-center">
                            <button type="button" className="btn btn-outline-dark btn-block mb-4 px-5 py-2"> Register </button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}
