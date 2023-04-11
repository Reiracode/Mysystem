// 以下是一個使用 React 實作 token 登入驗證及 token 逾時設定的範例:
// 使用 React hooks 建立一個登入狀態管理的 context：
// Copy code
const AuthContext = React.createContext();

function AuthProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [expiration, setExpiration] = useState(null);

  function login(response) {
    setIsAuthenticated(true);
    setToken(response.token);
    setExpiration(response.expiration);
    localStorage.setItem("token", response.token);
    localStorage.setItem("expiration", response.expiration);
  }

  function logout() {
    setIsAuthenticated(false);
    setToken(null);
    setExpiration(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedExpiration = localStorage.getItem("expiration");
    if (storedToken && storedExpiration) {
      const expirationDate = new Date(storedExpiration);
      if (expirationDate > new Date()) {
        setIsAuthenticated(true);
        setToken(storedToken);
        setExpiration(storedExpiration);
      } else {
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, login, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// 使用 context 在登入表單中實作登入功能：
function LoginForm() {
  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("/login", {
      username: event.target.username.value,
      password: event.target.password.value,
    });
    login(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
