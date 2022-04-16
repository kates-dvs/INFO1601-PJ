function review(){
var data = sessionStorage.getItem("isbn1");
  console.log(data);
let img = document.getElementById("img");
let img2 = document.getElementById("img2");
let html = '';

fetch('https://api.sheety.co/410689e92c0a078133922086ba8c16ad/info1601Api/details')
.then((response) => response.json())
.then(json => {
 for(let details of json.details){
   if(details.isbn == data){
     html += `<img src = "${details.imageUrll}">`;
     img.innerHTML += html;
    img2.innerHTML += html;
     console.log(details.isbn);
console.log(details.imageUrll);
     bookRatings(details.bookTitle);
    
   }
 }
});
}

async function uploadInfo(url, data){
  try{
     let response = await fetch(
       url, 
       {
            method: 'POST',
            body: JSON.stringify(data),
         headers: { 'Content-Type':'application/json' }
       },
     );
     console.log(JSON.stringify(data));
     let result = await response.text();
     console.log(result);
   
   }catch(error){
     console.log(error);
   }
}


function submit2(event){
 event.preventDefault();
var data1 = sessionStorage.getItem("isbn1");
var currentUser = sessionStorage.getItem("thisUser");
console.log(currentUser);
 const starForm = event.target;
 const reviewData = new FormData(starForm);
 const moreData = Object.fromEntries(reviewData);
 let body = {
   "rating": {
     "username": currentUser,
     "isbn": data1,
     "bookRating": moreData.star,
     "review": moreData.review
   }
 }

if(currentUser != null){  uploadInfo('https://api.sheety.co/410689e92c0a078133922086ba8c16ad/info1601Api/ratings', body);
}else{
  window.location.href = "login.html";
}
}

document.forms['starForm'].addEventListener("submit",submit2);

function bookRatings(title){
 
 let display = document.getElementById("tbody1");
var isbnData = sessionStorage.getItem("isbn1");
  console.log(isbnData);

fetch('https://api.sheety.co/410689e92c0a078133922086ba8c16ad/info1601Api/ratings')
.then((response2) => response2.json())
.then(json2 => {
 for(let ratings of json2.ratings){
  if(ratings.isbn == isbnData){
    display.innerHTML += `<tr>
      <td>${title}</td>
      <td>${ratings.username}</td>
      <td><div>${ratings.bookRating}</div><div>${ratings.review}</div></td>
    </tr>`
    }
  }
});

}  

//document.forms['starForm'].addEventListener("load",previous);