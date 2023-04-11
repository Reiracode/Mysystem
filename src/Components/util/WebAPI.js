// 身分驗證
import { getAuthToken } from "./utils";

// 身分驗證
export const getMe = () => {
  // 從 localStorage 讀取 token
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
};