let container = document.getElementById("container");

    let data = fetch("https://reqres.in/api/users?page=2")  //fetch data
      .then(function (res) {// 1st then convert promise into json format
        return res.json();
      })
      .then(function (res) {   //2nd then create object into reusable array
        
        console.log(res);// now promise resolve

       res.data.forEach((user) => {
         
          let userDiv = document.createElement("div"); // here create dynamic div 

          // the div with user data
          
          userDiv.innerHTML = `
        
          <p><strong>ID:</strong> ${user.id}</p>
        
          <p><strong>Email:</strong> ${user.email}</p>
        
          <p><strong>First Name:</strong> ${user.first_name}</p>
       
          <p><strong>Last Name:</strong> ${user.last_name}</p>
        
          <img src="${user.avatar}" alt="Avatar">`;   

          container.appendChild(userDiv); //append details on webpage with dom manipulation
        });
      });
     