import Logo from "../../logo.png";
import {api} from '../../axios'
import React, { useState } from 'react'

export const Main = () => {
    const [helloWorld, setHelloWorld] = useState("Hello World From Front!")
    api.get('/hello-world').then((helloWorldResponse) =>{
        setHelloWorld(helloWorldResponse.data)
    })

    return (

        <main>
            <div className="card">
                <h1>{helloWorld}</h1>
                <img src={Logo} />
                <a
                    className="App-link"
                    href="https://github.com/GustavoSTZ/electron-react-java-springboot-template"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn More about this template
                </a>
            </div>
        </main>
    );
};
