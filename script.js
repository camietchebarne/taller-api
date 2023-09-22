const quantity = document.getElementById("search");
const btonQuantity = document.getElementById("button");
const showBook = document.getElementById("showBooks");
var url = 'https://fakerapi.it/api/v1/books?_quantity='; 


btonQuantity.addEventListener('click', function(event){
    event.preventDefault()
getBooks()
});

async function getBooks() {
    url += quantity.value;
    const response = await fetch(url);
    const books = await response.json();
    showBook.innerHTML+= `<table class="table"><thead><tr><th class="col">Título</th><th class="col">Autor</th><th class="col">Género</th><th class="col">Descripción</th></tr></thead> ${processBooks(books.data)}`
}
function processBooks(books){
    var infoBooks='';
   for(i=0 ;i < books.length; i++ ){
        infoBooks+= `<tbody><td>${books[i].title}</td>
        <td>${books[i].author}</td>
        <td>${books[i].genre}</td>
        <td>${books[i].description}</td>`      
    }
   infoBooks+= "</tbody></table>";
   return infoBooks;

}
