const nouser = {
  name: "name",
  age: 34,
};
type User = {
  name: string;
  email: string;
  isActive: boolean;
};
function createUser(): {name: string; isPaid: boolean} {
  return {name: "ewwef", isPaid: false};
}

createUser();

function getUserDetails(user: User): User {
  return user;
}
