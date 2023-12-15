import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <h1>Dragofly Enterprise</h1>
            <nav>
                <a href="/Home">
                    <li>Home</li>
                </a>

                <a href="/Gallery">
                    <li>Gallery</li>
                </a>

                <a href="/Contact">
                    <li>Contact</li>
                </a>
            </nav>
        </header>
    );
}