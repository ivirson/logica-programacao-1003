let user;
// user = {
//   name: "João",
// };
user = {
  name: "",
};
// let username = user?.name ? user.name : "Usuário sem nome";

let username = user?.name || "Usuário sem nome";
console.log("username: ||", username);
username = user?.name ?? "Usuário sem nome";
console.log("username ??:", username);
