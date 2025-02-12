import { useCallback, useEffect, useState, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useCallback is used to prevent the function from being created again and again
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_[]{}~`+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length); // Fixed index selection
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    // passwordRef.current?.select();
    // passwordRef.current?.selectionRange(0,12)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect is used to run the function when the component is mounted or updated
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  // useRef hook is used to get the reference of the element
  const passwordRef = useRef(null);

  return (
    <>
      <div style={{ width: "100%", backgroundColor: "lightblue", textAlign: "center" }}>
        <h2 style={{ textAlign: 'center', color: "black" }}>Password Generator</h2> 

        <div>
          <input type="text" value={password} placeholder="password" readOnly ref={passwordRef} />
          <button style={{ backgroundColor: "black", color: "white" }} onClick={copyPasswordToClipboard}>Copy</button>
        </div>

        <div>
          <input type="range" min={6} max={20} style={{ cursor: "pointer" }} value={length}
            onChange={(e) => setLength(Number(e.target.value))} />  
          <label>Length: {length}</label>

          <div>
            <input type="checkbox" checked={numAllowed} id="numberInput" onChange={() => setNumAllowed(prev => !prev)} /> 
            <label htmlFor="numberInput">Numbers</label> 
          </div>

          <div>
            <input type="checkbox" checked={charAllowed} id="charInput" onChange={() => setCharAllowed(prev => !prev)} /> 
            <label htmlFor="charInput">Characters</label> 
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
