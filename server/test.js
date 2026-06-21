import mongoose from "mongoose";
// import dns from "node:dns";

// dns.setServers(["8.8.8.8", "8.8.4.4"]);
const uri = "mongodb+srv://tusharnwd2003_db_user:qHiox3sFgQH63nXh@cluster0.weaslq7.mongodb.net/fullstack-ems";
console.log(uri);
try {
  await mongoose.connect(uri);
  console.log("Connected!");
} catch (err) {
  console.error(err);
}