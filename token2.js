// 請幫我用react 寫token登入驗證及逾時設定
// 使用 React 開發應用程式時，可以使用第三方庫來實現 token 登入驗證和逾時設定。

// 範例:

// 使用 "react-token-auth" 庫：它提供了一組高階組件，可以輕鬆地在 React 應用程式中實現 token 驗證。

// 使用 "react-auth-kit" 庫：它提供了一組工具，可以幫助你在 React 應用程式中輕鬆地實現 token 驗證和逾時設定。

// 使用 "axios" 庫：axios 是一個基於Promise的HTTP client，可以輕鬆實現請求和驗證，並將驗證結果存儲在本地。

// 上面是三個第三方庫的範例，您可以選擇其中之一來實現token登入驗證及逾時設定。



// 可以用React 實作 token 登入驗證及 token 逾時設定的範例
// 好的，以下是使用 React 實現 token 登入驗證及 token 逾時設定的範例。

// 安裝必要的第三方庫
// Copy code
// npm install jsonwebtoken axios react - cookie
// 在你的組件中引入庫
// Copy code
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { useCookies } from 'react-cookie';
// 登入時使用 axios 向伺服器發送請求，並在成功時設定 token 至 cookie 中
// Copy code
const [cookies, setCookie] = useCookies(['token']);

const handleLogin = async (username, password) => {
  try {
    const response = await axios.post('/login', { username, password });
    setCookie('token', response.data.token, { path: '/' });
  } catch (error) {
    console.error(error);
  }
};

// 驗證 token 是否有效，並在逾時時重新登入
// Copy code
const checkToken = () => {
  const token = cookies.token;
  if (!token) {
    return false;
  }
  try {
    const decoded = jwt.verify(token, 'secret');
    if (decoded.exp < Date.now() / 1000) {
      setCookie('token', '', { path: '/' });
      return false;
    }
    return true;
  } catch (error) {
    setCookie('token', '', { path: '/' });
    return false;
  }
};
// 使用 checkToken 來判斷用戶是否已登入，並對應顯示不同內容
// Copy code
const isAuthenticated = checkToken();
return (
  <div>
    {isAuthenticated ? (
      <p>Welcome, you are logged in</p>
    ) : (
      <p>Please login to continue</p>
    )}
  </div>
);
// 這只是一個簡單的範例，實際應用中還需要考慮到更多的安全性問題，例如加密，跨站腳本攻擊等等。



