let token;
let user;
let creation;
var dt = new Date();

async function register()
{
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(first_name);
    console.log(last_name);
    console.log(username);
    console.log(email);
    // console.log(first_name);
  await fetch('http://165.22.219.85/api/auth/register' , {
      method: 'POST' ,
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'application/json' 
      },
      body:JSON.stringify({
        first_name : first_name,
        last_name : last_name,  
        username:username,
        email:email,
        password:password
      })
    })  
    .then((res) =>res.json())
    .then((data) => {        
        creation = data.creation;
        console.log(data.creation);
    })
    .catch((error) => {
      console.error('Error:',error);
    })
    if (creation === undefined)
    {
      throw alert("Not logged in");
    }
    else
    {
      alert(`${creation}`);
      // sessionStorage.setItem("AuthenticationState", "login");
      // sessionStorage.setItem("AuthenticationExpires",  (dt.getHours() + 1 ));
      // sessionStorage.setItem("token", JSON.stringify(token));
      // sessionStorage.setItem("user", JSON.stringify(user));
      window.open('./login-page.html','_self');
    }
}

async function login()
{
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

  await fetch('http://165.22.219.85/api/auth/login' , {
      method: 'POST' ,
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'application/json' 
      },
      body:JSON.stringify({
        username:username,
        password:password
      })
    })  
    .then((res) =>res.json())
    .then((data) => {        
        token=data.token;
        user=data.user;
        
    })
    .catch((error) => {
      console.error('Error:',error);
    })
    if (token === undefined)
    {
      throw alert("Not logged in");
    }
    else
    {
      sessionStorage.setItem("AuthenticationState", "Authenticated");
      sessionStorage.setItem("AuthenticationExpires",  (dt.getHours() + 1 ));
      sessionStorage.setItem("token", JSON.stringify(token));
      sessionStorage.setItem("user", JSON.stringify(user));   
      window.open('./logged/dashboard.html','_self');
    }
}

/*
Anurag@123
*/
