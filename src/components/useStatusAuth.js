import { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useStatusAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setChekingStatus] = useState(true);
  const _isMounted = useRef(true);

  useEffect(() => {
    if (_isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) setLoggedIn(true);
        setChekingStatus(false);
      });
    }

    return () => {
      _isMounted.current = false;
    };
  }, [_isMounted]);
  return { loggedIn, checkingStatus };
};
