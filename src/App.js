import "./App.css";
import React from "react";
import { BooksList } from "./features/books/BooksList";

function App() {
    return (
        <main className="main">
            <BooksList />
        </main>
    );
}

export default App;
