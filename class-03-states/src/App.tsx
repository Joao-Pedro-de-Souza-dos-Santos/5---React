import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { UserCard } from "./components/UserCards";

type UserData = {
  name: string;
  avatar_url: string;
  bio: string;
};

export function App() {
  const [count, setCount] = useState(0);
  const [inputName, setInputName] = useState("");
  const [auxName, setAuxName] = useState("Joao-Pedro-de-Souza-dos-Santos");
  const [userName, setUserName] = useState("Joao-Pedro-de-Souza-dos-Santos");
  const [userData, setUserData] = useState<UserData>({} as UserData);

  function addCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function squareCount() {
    setCount((prevCount) => prevCount*2);
  }

  function handleChangeUserName(event: ChangeEvent<HTMLInputElement>) {
    let a = setInputName(event.target.value);
    console.log(a);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log("Effect");
    setAuxName(inputName);
  }

  useEffect(() => {
    if (auxName) {
      fetch(`https://api.github.com/users/${auxName}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error(error));
    }else{
      <><img src="./images/Mordor.jpg" width={240}/></>
    }
  }, [auxName]);

  console.log(userData);
  

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Class States</h1>

      <section>
        <p>Nome: {inputName}</p>
        <p>Count: {count}</p>

        <button onClick={squareCount} style={{background:"white"}}>Square</button>
        <button onClick={addCount} style={{background:"white"}}>Add</button>
      </section>

      <form onSubmit={handleSubmit} style={{textAlign: "center", marginTop: 24}}>
        <input type="text" placeholder="Nome do usuário" onChange={handleChangeUserName}/>
        <button type="submit" style={{background:"white"}}>Pesquisar</button>
      </form>

      {userData && <UserCard 
        name={userData.name} 
        avatar_url ={userData.avatar_url} 
        bio={userData.bio}/>}

    <img src=".components/images/Mordor.jpg" width={240}/>
    </div>
  );

}