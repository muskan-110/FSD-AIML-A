import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./Book";       

const Books=[{image:"https://m.media-amazon.com/images/I/41+8b1d2J6L.jpg"},
    {image:"https://m.media-amazon.com/images/I/41+8b1d2J6L.jpg"},
    {image:"https://m.media-amazon.com/images/I/41+8b1d2J6L.jpg"}
]

function App(){
    return (
        <div className="book-list">
            {Books.map((book, index) => (
                <Book key={index} book={book} />
            ))}
        </div>
    )
}

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App/>);