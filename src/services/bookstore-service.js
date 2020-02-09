export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Learn JavaScript",
      author: "EasyUm",
      price: 15000,
      coverImage: "https://eloquentjavascript.net/img/cover.jpg"
    },
    {
      id: 2,
      title: "Learn React+Redux",
      author: "Udemy",
      price: 900,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg"
    }
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data)
      }, 700);
    });
  };
};
