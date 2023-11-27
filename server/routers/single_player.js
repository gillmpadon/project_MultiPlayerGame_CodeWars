const { exec } = require('child_process');
const singleRouter = require("express").Router();
const bodyParser = require('body-parser');
const fs = require('fs');

singleRouter.use(bodyParser.json());
singleRouter.post('/', (req, res) => {
    const { code } = req.body;
    if (!code) {
      return res.status(400).send({ message: 'Code not provided' });
    }
  
    // Write the code to a temporary Python file
    const filePath = 'temp.py';
    fs.writeFileSync(filePath, code);
  
    const command = `python ${filePath}`;
  
    const pythonProcess = exec(command, (error, stdout, stderr) => {
      fs.unlinkSync(filePath);
      if (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).send({ message: 'Internal server error' });
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return res.status(500).send({ message: 'Internal server error' });
      }
      return res.status(200).send({ message: stdout });
    });
  });

module.exports = singleRouter;
