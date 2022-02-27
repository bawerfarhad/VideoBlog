import { Route, Routes, useNavigate, usNavigate } from "react-router-dom";
import Login from "./Container/Login";
import Home from "./Container/Home";
import { useEffect, useState } from "react";
import { fetchUser, userAccessToken } from "./utilities/FetchUser";

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const AccessToken = userAccessToken();
    if (!AccessToken) {
      navigate("/login", { replace: true });
    } else {
      const [userInfo] = fetchUser();
      setUser(userInfo);
    }
  }, []);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home user={user} />} />
    </Routes>
  );
};

export default App;
