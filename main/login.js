let url = 'https://api.sheety.co/410689e92c0a078133922086ba8c16ad/info1601Api/users';


function log(event){
event.preventDefault();
let found = false;
 const loginPart = event.target;
 const loginData = new FormData(loginPart);
 const someData = Object.fromEntries(loginData);

fetch(url)
.then((response) => response.json())
.then(json => {
  console.log(json.users);
  let data = json.users;
  for(let stuff of data){
   if(someData.username == stuff.username && someData.password == stuff.password){
     window.location.href = "library.html";
     found = true;
     var userLog = someData.username;
     sessionStorage.setItem("thisUser", userLog);
   }
 }
  if(found == false){
    let wrong = document.getElementById("loginDiv");
    wrong.innerHTML += `<h3> Incorrect username or password </h3>`;
    console.log("hello");
  }  
});
}
document.forms['loginPart'].addEventListener('submit', log);