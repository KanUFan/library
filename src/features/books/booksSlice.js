import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";

const initialState = {
    books: [],
    status: "idle",
    error: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
    const response = await getDownloadURL(
        ref(storage, "gs://novel-4303a.appspot.com/nocover.jpg")
    );
    return response;
});

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = "fulfilled";
                console.log(typeof action.payload);
                state.books.push(action.payload);
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message;
            });
    },
});

export const selectAllBooks = state => state.books.books

export default booksSlice.reducer;
