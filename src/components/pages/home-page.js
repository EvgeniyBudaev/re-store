import React from "react";
import BookList from '../book-list';

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: "Learn React",
      author: "EasyUm"
    },
    {
      id: 2,
      title: "Learn Redux",
      author: "Udemy"
    }
  ];

  return (
    <BookList books={books} />
  )
};

export default HomePage;
