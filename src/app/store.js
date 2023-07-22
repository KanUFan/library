import { configureStore } from "@reduxjs/toolkit";
import { BooksReducer } from "@features";

export default configureStore({
    reducer: {
        books: BooksReducer,
    },
});
