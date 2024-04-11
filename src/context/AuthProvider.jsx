import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { authRef } from "../../firebaseConfig";

export const AuthContext = createContext(null)

function AuthProvider({children}) {
  const [user, setUser] = useState(null)

  const createUserWithEP = (email, password) => {
    return createUserWithEmailAndPassword(authRef, email, password)
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
    <AuthContext.Provider value={ {user, setUser, createUserWithEP} }>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;