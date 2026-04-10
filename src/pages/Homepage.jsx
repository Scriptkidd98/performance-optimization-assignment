import profilepic from '../assets/five.jpg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Homepage = ({ userData }) => {
  return (
    <div>
        <button onClick={() => firebase.auth().signOut()}>Logout</button>
        <nav>
            <Link to="/profile">
                <div>
                    <img src={profilepic} alt="Profile" height={30} width={30}/>
                    <span>{userData.name || "Guest"}</span>
                </div>
            </Link>
        </nav>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData || {}
    }
}

export default connect(mapStateToProps)(Homepage);