import React from "react";
import "./App.css";
  
function App() {

    var jsonData = 5;
    var formData = new FormData();
    formData.append("json_data", JSON.stringify(jsonData))

    fetch("http://localhost/josphere/php/server.php",{
        method: "POST",
        body: formData
    })
        .then((response) => response.json())
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.log(error);
        })

    return (
      <div className="App">
      </div>
    );
  }
  
  export default App;