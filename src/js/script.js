{
    

  const bookList = document.querySelector('.books-list');
  const templates = {
    bookProduct: Handlebars.compile(document.querySelector('#template-book').innerHTML),

  };
  const filters = [];

  const filtersForms = document.querySelectorAll('.filters form label input');

  

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
   
      bookList.addEventListener('dblclick', function(event){
        
          if(!event.target.offsetParent.classList.contains('favorite')){ 
            event.preventDefault();
            event.target.offsetParent.classList.add('favorite');
            const bookId = event.target.offsetParent.getAttribute('data-id');
                      
            favoriteBooks.push(bookId);
          }else if(event.target.offsetParent.classList.contains('favorite')){
              
            const bookId = event.target.offsetParent.getAttribute('data-id');  
            event.target.offsetParent.classList.remove('favorite');
            favoriteBooks.pop(bookId);
          }
        
      });
      for(let filtersForm of filtersForms){
        filtersForm.addEventListener('click', function(){
          if(filtersForms.tagName = 'input'){
            
            if(filtersForm.checked){
            
              const values = filtersForm.getAttribute("value");
              filters.push(values);
            }
            else if(!filtersForm.checked){

              const values = filtersForm.getAttribute("value");
              filters.pop(values);
            }
            
            
          }
          filterBooks();
        });
        
      }
      
  }
  function filterBooks(){
    for(let book of dataSource.books){

      let shouldBeHidden = false;
      for(const filter of filters) {
        if(!book.details[filter]) {
          shouldBeHidden = true;
          break;
        }
        if(shouldBeHidden){
          const booksImage = document.querySelectorAll('.book__image');
          for(let bookImage of booksImage){
          bookImage.classList.add('hidden');
          }
        }else if(!shouldBeHidden){
          const booksImage = document.querySelectorAll('.book__image');
          for(let bookImage of booksImage){
          bookImage.classList.add('hidden');
          }
        }
      }

    }
  }
  console.log('asdasda', favoriteBooks);
  console.log('filtr', filters);



    
}