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

function submit(event){
 event.preventDefault();
 const registerPart = event.target;
 const data = new FormData(registerPart);
 const moreData = Object.fromEntries(data);

var used = false;
fetch('https://api.sheety.co/05f3651d73aded3412cd607d3653df21/info1601Api/users')
.then((response) => response.json())
.then(json => {
  console.log(json.users);
  let data = json.users;
  for(let stuff of data){
   if(moreData.username == stuff.username){
     let part = document.getElementById("registerPart");
     part.innerHTML += `<p id = "reg">Username already in use.</p>`;
     used = true;
   }
  }

if(used == false){
 let body = {
   "user": {
     "username": moreData.username,
     "password": moreData.password
   }
 }
console.log("hello");
  uploadInfo('https://api.sheety.co/05f3651d73aded3412cd607d3653df21/info1601Api/users', body);

window.location.href = "library.html";
}
});
}

document.forms['registerPart'].addEventListener("submit", submit);