import { ChangeEvent, useEffect, useState } from "react";

type UserData = {
  name : string;
  avatar_url : string;
  bio : string;
};

export function App(){
  const [count, setCount] = useState(0);
  const [name, setName] = useState("João-Pedro-de-Souza-dos-Santos");
  const [data, setData] = useState<UserData>({} as UserData);
  
  function  addCount(){
    //closures
    setCount((prevState) => prevState + 1); 
  }
  
  function handleChangeName(event : ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    
  }

  useEffect(() => {
    //hook
    //console.log("useEffect");
    fetch(`https://api.github.com/users/${$name}`)
    .then((response) => response.json())
    .then((data) => setData(data));
  }, [name]);

  console.log(count);

  return( 
    <>
    <h1>Class_03 States</h1>
    <p>Name: {name}</p>
    <p>Count: {count}</p>
    <button onClick={addCount}>Hello Baby</button>
    <input type="text" onChange={handleChangeName}/>

    {data && (
    <section>
      <h2>{data.name}</h2>
      <img src={data.avatar_url} alt=""/>
      <p>{data.bio}</p>
    </section>)}
    </>);
}