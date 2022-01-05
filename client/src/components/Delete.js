import axios from 'axios';

function Delete(){
    const user = {
        username:"",
        password:"",
        name:"",
        age:0,
    }
    const deleteUser = () =>{
        axios.delete("/api/deleteuser",user).then((res) => {console.log(res.data);});
    };
  return(
    <div className='container-fuild'>
    <h1> Delete UserData</h1><br/>
      <label>UserName</label>
      <input placeholder='Enter User Name' onChange={(e) => user.username = e.target.value}/><br/>
      <button onClick={deleteUser} li>Delete</button>
  </div>
  );
}

export default Delete;