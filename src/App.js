import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
  
class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            postId: null
        };
    }    

    componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('http://localhost/josphere/php/server.php', requestOptions)
            .then(response => response.text(), requestOptions)
            .then(text => {
                console.log(text)
            });
    }

    render(){

        // const { postId } = this.state;

        return (
            <div>
                {/* Test post id: {postId} */}
            </div>
        );
  }}
  
export default App;
