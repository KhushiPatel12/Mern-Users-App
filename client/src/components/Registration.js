import axios from 'axios';
function Registration(){
    const user = {
        username:"",
        password:"",
        name:"",
        age:0,
    }

    const registerUser = () =>{
      axios.post('/api/registration',user).then(res => console.log(res.data));
    };
    return(
        <div className="container-fuild"><br/>
            <h1>Registration Page</h1><br/>
            <label>UserName </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input placeholder="Enter UserName" onChange={(e) =>(user.username = e.target.value)}/><br/>
            <label>Password </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input placeholder="Enter Password" onChange={(e) =>(user.password = e.target.value)}/><br/>
            <label>Name </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input placeholder="Enter Name" onChange={(e) => (user.name = e.target.value)}/><br/>
            <label>Age </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input placeholder="Enter Age" onChange={(e) => (user.age = e.target.value)}/><br/>
            &nbsp;&nbsp; <button onClick={registerUser} li>Registration</button>
        </div>
    );
}

export default Registration;