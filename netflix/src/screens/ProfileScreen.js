import React from "react";
import Nav from "../Nav";
import PlanScreen from "./PlanScreen";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
 import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

const ProfileScreen = () => {
    const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />

          <div className="profileScreen__details">
          <h2>{user.email}</h2>
          <div className="profileScreen__plans">
            <h3>Plans</h3>

             {/* <PlanScreen /> */}
              <button
              onClick={() => auth.signOut()}
                className="profileScreen__signOut">
                Sign Out
              </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;

//  <div className="profileScreen__body">
// //         <h1>Edit Profile</h1>
// //         <div className="profileScreen__info">
// //           <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />

// //           <div className="profileScreen__details">
// //             <h2>{}</h2>
// //             <div className="profileScreen__plans">
// //               <h3>Plans</h3>

// //               <PlanScreen />
// //               <button
// //                 onClick={() => auth.signOut()}
// //                 className="profileScreen__signOut"
// //               >
// //                 Sign Out
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
