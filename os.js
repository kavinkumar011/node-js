const os = require("os");
console.log("what os used :", os.version());

console.log("free memory:",os.freemem());
// it show it in bytes....

console.log("total memory:",os.totalmem());
// it is shown in bytes..

console.log("CPU", os.cpus());

console.log("release",os.release());
console.log("platform",os.platform());
console.log("type",os.type());
console.log("uptime",os.uptime());
console.log("userinfo",os.userInfo());
console.log("hostname",os.hostname());
console.log("load",os.loadavg());
