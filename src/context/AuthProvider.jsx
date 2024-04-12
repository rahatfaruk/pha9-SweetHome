import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { authRef } from "../../firebaseConfig";

export const AuthContext = createContext(null)

function AuthProvider({children}) {
  const [user, setUser] = useState(null)

  const createUserWithEP = (email, password) => {
    return createUserWithEmailAndPassword(authRef, email, password)
  }
  
  const signInWithEP = (email, password) => {
    return signInWithEmailAndPassword(authRef, email, password)
  }

  const logout = () => {
    return signOut(authRef)
  }

  const updateProfileInfo = (displayName, photoURL) => {
    return updateProfile(user, {displayName, photoURL})
  }

  // update user onload && observe user
  useEffect(() => {
    const unsub = onAuthStateChanged(authRef, currUser => {
      if (currUser) {
        setUser(currUser)
      } else {
        setUser(null)
      }
    })

    // cleanup
    return () => {
      unsub()
    }
  }, [])

  return (  
    <AuthContext.Provider value={ {user, setUser, createUserWithEP, logout, signInWithEP, updateProfileInfo} }>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;