package com.works.controller;

import com.works.entities.User;
import com.works.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserRestController {

    final UserService userService;

    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/save")
    public ResponseEntity save(@Valid @RequestBody User user) {
        return userService.save(user);
    }

    @GetMapping("/list")
    public ResponseEntity list() {
        return userService.list();
    }
}
