import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [length, setLength] = useState(8);// initial password length is 8
  const [length, setLength] = useState(8);

  // const [numberAllowed, setNumberAllowed] = useState(false) // it determines if the number is allowed in the password or not
  const [numberAllowed, setNumberAllowed] = useState(false);

  // const [charAllowed, setCharAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false);

  // const [password, setPassword] = useState('') // it means that the password initially should be empty
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  // useCallback() is the general form of memoization , where we also give the parameters which we want to store
  //it is in the form of callback function which firstly takes the logic and then secondly the parameters where we do want to perform the memoization

  // const generatePassword = useCallback(() => {
  //   let pass = "";
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  //   if (numberAllowed) str += "0123456789";
  //   if (charAllowed) str += "!@#$%^&*()_+";

  //   for (let i = 1; i <= length; i++) {
  //     const char = Math.floor(Math.random() * str.length + 1);
  //     pass += str.charAt(char);
  //   }

  //   setPassword(pass);
  // }, [length, numberAllowed, charAllowed]);

  const generatePassword = useCallback(() => {
    let password = "";
    let str = "abadfajfadjfasldASDKFASDKASDKaddfsadfsdAFLDJALDJALJLAJDLAJDLJASLDASDSLKDASD";
    if(numberAllowed) str += "1234567890";
    if(charAllowed) str += "!@#$%^&*()_+";

    for(let i = 0 ;i < length ; i++){
      const ch = Math.floor(Math.random()* str.length + 1);
      password += str.charAt(ch);
    }

    setPassword(password);
  },[length , numberAllowed , charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  // useEffect(() => { // as soon as the value changes of the length or numberAllowed or charAllowed , then we call the generatePassword method
  //   generatePassword();
  // }, [length, numberAllowed, charAllowed]);

  // useEffect(() => {
  //   generatePassword();
  // },[length , numberAllowed , charAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value= {password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
    </div>
  );
}

export default App;
