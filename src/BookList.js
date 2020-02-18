import React, { Component } from "react";
import { observer } from "mobx-react";
import axios from "axios";

// Components
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

// Store
import bookStore from "./stores/bookStore";

// const instance = axios.create({
//   baseURL: "https://the-index-api.herokuapp.com"
// });

class BookList extends Component {
  render() {
    const bookColor = this.props.match.params.bookColor;
    let books = bookStore.filteredBooks;

    if (bookColor) {
      books = bookStore.filterBooksByColor(bookColor);
    }

    return bookStore.loading ? (
      <Loading />
    ) : (
      <div>
        <h3>Books</h3>
        <SearchBar store={bookStore} />
        <BookTable books={books} />
      </div>
    );
  }
}

export default observer(BookList);
