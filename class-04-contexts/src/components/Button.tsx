import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Button() {
    const {setName} = useContext(UserContext);
    
    return(
        <>
            <button onClick={() => setName("DOQUINHAAA")}>Change  Name</button>
        </>
    );
}