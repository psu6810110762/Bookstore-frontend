import "./App.css"
import BookList from "./components/BookList";

function App() {
  const bookData = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling", description: "Orphan Harry learns he is a wizard",
price: 15.70, isbn: "978-1408825945", stock: 10 },
    { id: 2, title: "Sapiens", author: "Yuval Noah Harari", description: "A brief history of humankind", price:
22.99, isbn: "978-0062316097", stock: 50 },
  ] 
  const summary = () => {
    const bookCount = bookData.reduce( (total, book) => total += book.stock, 0);
    if (bookCount > 50) {
      return <p style={{ 'color': 'green' }}>Wow you have so many book - {bookCount} books</p>;
    }
    else {
      return <p style={{ 'color': 'red' }}>Boss low on stock... - {bookCount} books</p>
    }
  }
  return (
    <>
      <h3>Book List</h3>
      {summary()}
      <BookList data={bookData}/>
    </>
  );
}
export default App