package com.gustavostz.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController()
public class HelloWorldController {

    @CrossOrigin("http://localhost:3000")
    @GetMapping("/hello-world")
    @ResponseStatus(HttpStatus.OK)
    public String helloWorld() {
        return "Hello World 🌎 coming from the backend! 😁";
    }
}
