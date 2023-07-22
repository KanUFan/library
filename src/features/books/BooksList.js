import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchBooks, selectAllBooks } from "./booksSlice";


export const BooksList = () => {
    const dispatch = useDispatch();

    const books = useSelector(selectAllBooks);

    const booksStatus = useSelector((state) => state.books.status);
    const error = useSelector((state) => state.books.error);

    useEffect(() => {
        if (booksStatus === "idle") {
            dispatch(fetchBooks());
        }
    }, [booksStatus, dispatch]);

    let content;

    if (booksStatus === "fulfilled") {
        content = books.map((book, index) => (
            <div className="book">
                <img className="cover" src={book} key={index} alt="img"/>
            </div>
        ));
    } else if (booksStatus === "rejected") {
        content = <div>{error}</div>;
    }

    return <>{content}{window.devicePixelRatio}</>;
};
