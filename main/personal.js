function previous(){
var final = sessionStorage.getItem("thisUser");
  console.log("hello");
if(final != null){ fetch('https://api.sheety.co/410689e92c0a078133922086ba8c16ad/info1601Api/ratings')
.then((response2) => response2.json())
.then(json2 => {
 for(let ratings of json2.ratings){
   if(ratings.username == final){
     console.log(ratings.isbn);
     display(ratings.isbn, final);
   }
}
});
}else{console.log("meh")};}

function display(isbn, name){
let doc = document.getElementById("personal");
let use = document.getElementById("userHead");
fetch('https://api.sheety.co/410689e92c0a078133922086ba8c16ad/info1601Api/details')
.then((response4) => response4.json())
.then(json4 => {
    for(let dets of json4.details){
      if(dets.isbn == isbn){
        console.log(dets.bookTitle);
       doc.innerHTML +=  ` <item>
      <a onclick = "rating(${dets.isbn})" href = "reviewpage.html"><img src = "${dets.imageUrll}"><div>${dets.bookTitle}</div></a>
    </item>`
        use.innerHTML += `<h1>${name} is logged in</h1>`
      }
    }
});
}

function rating(isbn){
  var someInfo = isbn;
sessionStorage.setItem("isbn1", someInfo);
}