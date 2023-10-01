import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import EditForm from "./EditForm";

const Library: React.FC = (): JSX.Element => {
  const books = useSelector((state:RootState)=> state.books.books) 
    return (
        <div>
            <h1>Library</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.isbn}>
                        <p>{book.title}</p>
                        <p>{book.year}</p>
                        <p>{book.author}</p>
                        <EditForm bookId={book.isbn} />
                        <button type="button">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Library;
