import React, { useEffect } from "react";
import HomeScreen from "./component/HomeScreen";
import "./NetflixApp.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Signup from "./component/Signup/Signup";
import db, { auth } from "./firebase";
import { loginUser, logoutUser } from "./redux/users/UserActions";
import { useDispatch, useSelector } from "react-redux";
import Login from "./component/Login/Login";
import Profile from "./component/Profile/Profile";
import PrivateRoute from "./component/PrivateRoute";
import Successful from "./component/Signup/Successful";

const NetflixApp = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.User.user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user Logged In
        db.collection("users")
          .doc(authUser.email)
          .get()
          .then((doc) => {
            if (doc.exists) {
              //Email already inside the collection
            } else {
              //No docs found in collection
              db.collection("users")
                .doc(authUser.email)
                .set({
                  uid: authUser.uid,
                  email: authUser.email,
                  displayName: authUser.displayName
                    ? authUser.displayName
                    : localStorage.getItem("username"),
                });
            }
          })
          .catch((err) => console.log(err.message));
        dispatch(
          loginUser({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
              ? authUser.displayName
              : localStorage.getItem("username"),
          })
        );
      } else {
        //logout user
        dispatch(logoutUser());
      }
    });
    return () => {
      //perform some cleanup
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="netflixApp">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/signup/:email/:page">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/successful">
            <Successful />
          </Route>
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/netflix" component={HomeScreen} />
        </Switch>
      </Router>
    </div>
  );
};

export default NetflixApp;
