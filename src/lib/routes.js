export const LOGIN = "/login";
export const ROOT = "/";

export const PUBLIC_ROUTES = [
  "/login",
  "/register",
  "/tasks/all",
  

  "/api/auth/callback/google",
  "/api/auth/callback/github",
  "/api/register",
  "/api/tasks",
];

export const PROTECTED_SUB_ROUTES = ["/checktask","/tasks/add"];
