import { useState } from 'react';
import { Link } from 'react-router-dom';
import profilepic from '../assets/five.jpg';
import { connect } from 'react-redux';
import { editUserData, testStore } from '../store/index';

const Profile = ({ userData }) => {
  const[name, setName] = useState(userData.name);
  const[email, setEmail] = useState(userData.email);

  const updateUserData = (e) => {
    const userData = {
      name,
      email
    }
    e.preventDefault(); // Prevent the default form submission behavior
    editUserData(userData); // Dispatch the action to update user data in the store
    testStore(); // Subscribe to store updates and log user data changes
  }
  return (
    <div>
        <Link to="/homepage">Back to Homepage</Link>
        <h1>Profile Page</h1>
        <p>Welcome to your profile!</p>

        <div>
            <img src={profilepic} alt="Profile" height={30} width={30}/>
            <span>{userData.name || "Guest"}</span>
        </div>

        <form onSubmit={updateUserData}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">Update Profile</button>
        </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData || {}
  }
}
export default connect(mapStateToProps)(Profile);