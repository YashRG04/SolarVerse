import React, { Fragment, useEffect } from "react";
import "./Profile.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { TokenService } from "../../service/TokenService";
import { useDispatch } from "react-redux";
import { logout } from "../../service/actions/userAction";
import { useAlert } from "react-alert";
import profileicon from "../../assets/images/profileicon.png";
import { Helmet } from "react-helmet";

const Profile = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { first_name, email, phone_number } = props.data.User.User.user;

  const handleLogout = () => {
    dispatch(logout(navigate));
    // after duration odf 2.5 seconds, show alert
    setTimeout(() => {
      alert.success("Logged out successfully");
    }, 500);

    // reload page to clear redux store
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      // No access token found, redirect the user to the login page
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Fragment>
      <Helmet>
        <title>Hello User</title>
        <meta name="description" content="Profile" />
      </Helmet>
      <div className="ProfileContainer" id="top">
        <div className="Cushion"></div>
        <h1 className="ProfileHeading">
          Welcome <span>{first_name}</span>
        </h1>
        <div className="ProfileMainContainer">
          <div className="LeftProfile">
            <img src={profileicon} alt="Profile" className="ProfileImage" />
            <div className="ProfileDetails">
              <h3 className="ProfileName">{first_name}</h3>
              <h3 className="ProfileEmail">{email}</h3>
              <h3 className="ProfilePhone">{phone_number}</h3>
            </div>
          </div>
          <div className="Partition"></div>
          <div className="RightProfile">
            {/* <Link to="/forgot" className="ForgotPassword">
              Reset Password
            </Link> */}
            <button onClick={handleLogout} className="LogOut">
              Logout
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
