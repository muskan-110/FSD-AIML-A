function Book({book}){
    return(
        <div>
            <img src={book.image} width = "200" height = "200"  alt="book image"/>
            <h3>Title: {book.title}</h3>
            <h4>Price: {book.price}</h4>
        </div>
    )
}   

export default Book;