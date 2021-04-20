{
    

  const bookList = document.querySelector('.books-list');
  const templates = {
    bookProduct: Handlebars.compile(document.querySelector('#template-book').innerHTML),
  };
  function render(){

    for(let book of dataSource.books){
      const generatedHTML = templates.bookProduct(book);

      this.element = utils.createDOMFromHTML(generatedHTML);

      bookList.appendChild(this.element);

            
    }

  }

  render();
  initActions();

  const favoriteBooks = [];

  function initActions(){
    const bookImages = bookList.querySelector('.book__image');
    
    

            
    bookImages.addEventListener('dblclick', function(event){
      if(event.target.offsetParent.classList.contains('.book__image')){
        if(!event.target.offsetParent.classList.contains('favorite')){ 
          event.preventDefault();
          event.target.classList.add('favorite');
          const bookId = event.target.getAttribute('data-id');
                    
          favoriteBooks.push(bookId);
        }else if(event.target.offsetParent.classList.contains('favorite')){
            
          const bookId = event.target.getAttribute('data-id');  
          event.target.classList.remove('favorite');
          favoriteBooks.pop(bookId);
        }
      }
    });
      
    
  }
  console.log('asdasda', favoriteBooks);
    
}