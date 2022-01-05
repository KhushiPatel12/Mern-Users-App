import React from 'react';
import {Link} from 'react-router-dom';

function navigation(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div id="navMainMenu" className="navbar-collapse collapse">
        <div className="navbar-nav ml-auto">
            <Link to='/' className="nav-item nav-link active">Home</Link>
            <Link to='/Registration' className="nav-item nav-link">Registration</Link>
            <Link to='/User' className="nav-item nav-link">UserDetails</Link>
            <Link to='/Delete' className="nav-item nav-link">DeleteUser</Link>
        </div>
    </div>
</nav>
  );
}

export default navigation;