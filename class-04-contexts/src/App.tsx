import { UserCard } from "./components/UserCard";
import { Button } from "./components/Button";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

export function App() {
    const [name, setName] = useState("JPSS");

    return(
        <UserContext.Provider value={{ name, setName}}>
            <h1>Class 04 Context</h1>
            <UserCard/>
            <Button/>
        </UserContext.Provider>
    );
}