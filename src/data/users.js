const users = [
  {
    email: "moemad191@email.com",
    password: "password",
  },
  {
    email: "ali@email.com",
    password: "password",
  },
  {
    email: "yesser@email.com",
    password: "password",
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
