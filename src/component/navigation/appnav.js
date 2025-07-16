import React, { useContext, useEffect, useState } from "react";
import Appstack from "./appstack";
import Authstack from "./authstack";
import { AuthContext } from "../context/authocontext";

const Appnav = () => {
  const { userloggeduid, loadUid } = useContext(AuthContext);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await loadUid();          // load UID from AsyncStorage
      setReady(true);           // show UI after we know the value
    })();
  }, []);

  if (!ready) return null;      // 👈 or return a splash component

  return userloggeduid ? <Appstack /> : <Authstack />;
};

export default Appnav;
