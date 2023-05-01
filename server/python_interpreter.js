const { spawn } = require("child_process");

const runCode = (code, callback) => {
  const child = spawn("python", ["-c", code]);

  let result = "";
  child.stdout.on("data", (data) => {
    result += data.toString();
  });

  child.stderr.on("data", (data) => {
    result += data.toString();
  });

  child.on("close", () => {
    callback(result);
  });

  return result;
};

module.exports = runCode;
