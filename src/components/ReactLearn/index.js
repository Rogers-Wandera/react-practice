import React from 'react';
import image from '../images/man.jpg';

const books = [
  { 
    id: 1,
    author: 'Rogers Wandera',
    title: 'This is Roger the man who is a developer',
    image: image
  },
  { 
    id: 2,
    author: 'Rogers Wandera',
    title: 'This is Roger the man',
    image: image
  }
]

function BookList() {
    return (
      <section  className='booklist'>
        {/* <div> */}
          {
            books.map((book) => {
              return <Book {...book} key={book.id} />
            })
          }
        {/* </div> */}
      </section>
    )
  }
  
const Book = (props) => {
  const {title , author, children, image} = props
  
  const clickHandler = () => {
    alert(title)
  }
    return (
      <article className='book' >
        <img src={image} alt='roger' style={{width:'50%'}} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <p>{children}</p>
        <button type='button' onClick={clickHandler}>Reference</button>
      </article>
    )
}
export default BookList;