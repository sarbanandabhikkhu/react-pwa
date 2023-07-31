function useAuth() {
  const auth = localStorage.getItem("auth") || false;

  if (auth) {
    return auth;
  }
}

export default useAuth;
