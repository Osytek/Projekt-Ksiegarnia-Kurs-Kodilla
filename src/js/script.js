{
    

  const bookList = document.querySelector('.books-list');
  
  const templates = {
    bookProduct: Handlebars.compile(document.querySelector('#template-book').innerHTML),

  };
  const filters = [];

  const filtersForms = document.querySelectorAll('.filters form label input');
  
  

  

  function render(){

    for(let book of dataSource.books){

      const ratingBgc = determineRatingBgc();
      const ratingWidth = book.rating * 10;

      book.ratingBgc = ratingBgc;
      book.ratingWidth = ratingWidth;

      const generatedHTML = templates.bookProduct(book);
      
      

      const generatedDOM = utils.createDOMFromHTML(generatedHTML);

      
      
      bookList.appendChild(generatedDOM);
      
      

            
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
      filtersForm.addEventListener('click', function(event){
        
        
        if(event.target.checked){
          
          filters.push(event.target.value);
        }
        else{
          filters.splice(filters.indexOf(event.target.value));
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
      }
      if(shouldBeHidden){

        const hide = document.querySelector('.book__image[data-id="' + book.id + '"]');
        hide.classList.add('hidden');
  
      }else if(!shouldBeHidden){

        const uncover = document.querySelector('.book__image[data-id="' + book.id + '"]');
        uncover.classList.remove('hidden');
        
       
        
      }
    

    }
  }
  function determineRatingBgc(rating){
    for(let book in dataSource.books){
      let background;
      if(rating < 6){
        
        background == 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)';
        
      }
      else if(rating > 6 && rating <= 8){
        
        background == 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
        
      }
      else if(rating > 8 && rating <= 9){
        
        background == 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
      
      }
      else if(rating > 9){
        
        background == 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
      
      }
      return background;
      
    } 
    
  }
  
  console.log('favoriteBooks', favoriteBooks);
  console.log('filters', filters);



    
}