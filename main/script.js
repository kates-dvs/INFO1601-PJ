let url = 'https://api.sheety.co/410689e92c0a078133922086ba8c16ad/info1601Api/details';

fetch(url)
.then((response) => response.json())
.then(json => {
  romance(json.details);
  horror(json.details);
  scienceFic(json.details);
  youngAd(json.details);
  comedy(json.details);
  action(json.details);
  fantasy(json.details);
  nonFic(json.details);
});

function romance(data){
  let doc = document.getElementById("romance");
  
  let html = '';
  for(let details of data){
    if(details.id >= 2 && details.id <= 4){
      html += ` <div class="row" >
      <div class="column">
<h3>${details.bookTitle}</h3>
        <div class="book-container">        
          <a onclick = "rating(${details.isbn})" href = "reviewpage.html"><img src="${details.imageUrll}"></a>
        </div>
      </div>
    </div>`
    }
  }
  doc.innerHTML += html;
}

function horror(data){
  let doc = document.getElementById("horror");
 
  let html = '';
  for(let details of data){
    if(details.id >= 5 && details.id <= 7){
      html += ` <div class="row" >
      <div class="column">
<h3>${details.bookTitle}</h3>
        <div class="book-container">        
          <a onclick = "rating(${details.isbn})" href = "reviewpage.html"><img src="${details.imageUrll}"></a>
        </div>
      </div>
    </div>`
    }
  }
  doc.innerHTML += html;
}

function scienceFic(data){
  let doc = document.getElementById("sci-fi");
  
  let html = '';
  for(let details of data){
    if(details.id >= 8 && details.id <= 10){
      html += ` <div class="row" >
      <div class="column">
<h3>${details.bookTitle}</h3>
        <div class="book-container">        
          <a onclick = "rating(${details.isbn})" href = "reviewpage.html"><img src="${details.imageUrll}"></a>
        </div>
      </div>
    </div>`
    }
  }
  doc.innerHTML += html;
}

function youngAd(data){
  let doc = document.getElementById("young-adult");
  
  let html = '';
  for(let details of data){
    if(details.id >= 11 && details.id <= 13){
      html += ` <div class="row" >
      <div class="column">
<h3>${details.bookTitle}</h3>
        <div class="book-container">        
          <a onclick = "rating(${details.isbn})" href = "reviewpage.html"><img src="${details.imageUrll}"></a>
        </div>
      </div>
    </div>`
    }
  }
  doc.innerHTML += html;
}

function comedy(data){
  let doc = document.getElementById("comedy");
  
  let html = '';
  for(let details of data){
    if(details.id >= 14 && details.id <= 16){
      html += ` <div class="row" >
      <div class="column">
<h3>${details.bookTitle}</h3>
        <div class="book-container">        
          <a onclick = "rating(${details.isbn})" href = "reviewpage.html"><img src="${details.imageUrll}"></a>
        </div>
      </div>
    </div>`
    }
  }
  doc.innerHTML += html;
}

function action(data){
  let doc = document.getElementById("action");
 
  let html = '';
  for(let details of data){
    if(details.id >= 17 && details.id <= 19){
      html += ` <div class="row" >
      <div class="column">
<h3>${details.bookTitle}</h3>
        <div class="book-container">        
          <a onclick = "rating(${details.isbn})" href = "reviewpage.html"><img src="${details.imageUrll}"></a>
        </div>
      </div>
    </div>`
    }
  }
  doc.innerHTML += html;
}

function fantasy(data){
  let doc = document.getElementById("fantasy");
 
  let html = '';
  for(let details of data){
    if(details.id >= 20 && details.id <= 22){
      html += ` <div class="row" >
      <div class="column">
<h3>${details.bookTitle}</h3>
        <div class="book-container">        
          <a onclick = "rating(${details.isbn})" href = "reviewpage.html"><img src="${details.imageUrll}"></a>
        </div>
      </div>
    </div>`
    }
  }
  doc.innerHTML += html;
}

function nonFic(data){
  let doc = document.getElementById("non-fiction");
  let html = '';
  
  for(let details of data){
    if(details.id >= 23 && details.id <= 25){
      html += ` <div class="row" >
      <div class="column">
<h3>${details.bookTitle}</h3>
        <div class="book-container">        
          <a onclick = "rating(${details.isbn})" href = "reviewpage.html"><img src="${details.imageUrll}"></a>
        </div>
      </div>
    </div>`;
     
    }
  }
  doc.innerHTML += html;
  
}

function rating(isbn){
  var someInfo = isbn;
sessionStorage.setItem("isbn1", someInfo);
}

function clear(){
  sessionStorage.removeItem("thisUser");
}
/*
user = sessionStorage.getItem("userLog");
var id = document.getElementById("log");
if(user != null){
  id +=   `<p>Not logged in</p>`
}else{
  id +=  `<p>User logged in</p>`
}
*/

