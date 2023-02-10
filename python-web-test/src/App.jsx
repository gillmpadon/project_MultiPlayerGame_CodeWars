import { useState, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import reactLogo from "./assets/react.svg";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import axios from "axios";

import { python } from "@codemirror/lang-python";

function App() {
  const [count, setCount] = useState(0);
  const [viewCode, setViewCode] = useState("print('Hello World')");
  const [codeResult, setCodeResult] = useState("");

  const onChange = useCallback((value, viewUpdate) => {
    console.log("value:", value);
    setViewCode(value);
  }, []);

  const onSubmit = async (code) => {
    const res = await axios.post("http://localhost:3001/", { code });
    console.log(res.data.result);
    setCodeResult(res.data.result);
  };
  return (
    <div>
      <CodeMirror
        value="print('Hello World')"
        height="200px"
        extensions={[python()]}
        theme={okaidia}
        onChange={onChange}
      />
      <button onClick={() => onSubmit(viewCode)}>Submit</button>
      <p>Result:</p>
      <p>{codeResult}</p>
    </div>
  );
}

export default App;
