import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: result.user.displayName,
          email: result.user.email,
          googlePhotoURL: result.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }

      // dispatch(signInSuccess(data));
      // navigate("/");
    } catch (error) {
      console.error("❌ Google sign-in error:", error.message);
    }
  };

  return (
    <button className="OAuthBtn" onClick={handleGoogleClick}>
      <FcGoogle size={22} style={{ marginRight: "8px" }} />
      Continue With Google
    </button>
  );
}

// import React from "react";
// import { FcGoogle } from "react-icons/fc";
// import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

// export default function OAuth() {
//   const handleGoogleclick = async () => {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();

//     provider.setCustomParameters({ prompt: "select_account" });
//     try {
//       const resresultFromGoogleult = await signInWithPopup(auth, provider);
//       console.log(resresultFromGoogleult);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <button className="OAuthBtn" onClick={handleGoogleclick}>
//       <FcGoogle size={22} style={{ marginRight: "8px" }} />
//       Continue With Google
//     </button>
//   );
// }
