import React from 'react'

export default function Register() {
  return (
    <>
    <div className="container">
 <div className="row justify-content-center mt-5">
   <div className="col-lg-4 col-md-6 col-sm-6">
     <div className="card shadow">
       <div className="card-title text-center border-bottom">
         <h2 className="p-3">Register</h2>
       </div>
       <div className="card-body">
         <form>
           <div className="mb-4">
             <label for="username" className="form-label">Username/Email</label>
             <input type="text" className="form-control" id="username" />
           </div>
           <div className="mb-4">
             <label for="password" className="form-label">Password</label>
             <input type="password" className="form-control" id="password" />
           </div>
           <div className="mb-4">
             <label for="password" className="form-label">Re-Password</label>
             <input type="password" className="form-control" id="password" />
           </div>
           <div className="mb-4">
             <input type="checkbox" className="form-check-input" id="remember" />
             <label for="remember" className="form-label">&nbsp; I've accepted all your terms and conditions.</label>
           </div>
           <div className="d-grid">
             <button type="submit" className="btn text-light main-bg buton">Sign up</button>
           </div>
         </form>
       </div>
     </div>
   </div>
 </div>
</div>
   
</>
  )
}
