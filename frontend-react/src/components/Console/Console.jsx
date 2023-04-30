import React, { useEffect, useState } from "react";

export default function Console (){
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Override console.log to capture logs
    const originalLog = console.log;
    console.log = (...args) => {
      setLogs((prevLogs) => [...prevLogs, args]);
      originalLog(...args);
    };

    // Restore console.log on component unmount
    return () => {
      console.log = originalLog;
    };
  }, []);

  return (
    <div>
      <pre>
        {logs.map((log, index) => (
          <div key={index}>{JSON.stringify(log)}</div>
        ))}
      </pre>
    </div>
  );
};
