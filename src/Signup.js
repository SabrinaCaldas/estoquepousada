import React from "react";
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="Signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form-container p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="name">First Name</label>
            <input type="text" placeholder="Enter First Name" className="form-control" />
          </div>
          {/* ... other fields ... */}
          <div className="d-grid">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <p className="text-end mt-2">
            Already Registered <Link to="/signup" className="ms-2">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;