const { spawn } = require("child_process");

const runCode = (code) => {
  return new Promise((resolve) => {
    const child = spawn("python", ["-c", code]);

    let result = "";
    child.stdout.on("data", (data) => {
      result += data.toString();
    });

    child.stderr.on("data", (data) => {
      result += data.toString();
    });

    child.on("close", () => {
      resolve(result);
    });
  });
};

module.exports = runCode;
