import profilepic from '../assets/five.jpg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Homepage = ({ userData }) => {
  return (
    <div>
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