export const useAuth = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};