package com.works.services;

import com.works.entities.User;
import com.works.repostories.userRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
    final userRepository userRepository;

    public UserService(com.works.repostories.userRepository userRepository) {
        this.userRepository = userRepository;
    }


    public ResponseEntity save(User user) {
        Optional<User> oExp=userRepository.findByProvinceEqualsIgnoreCaseAndDistrictEqualsIgnoreCase(user.getProvince(), user.getDistrict());
        Map<String, Object> hm = new LinkedHashMap<>();
        if(!oExp.isPresent()){
            hm.put("status", true);
            hm.put("result", userRepository.save(user) );
            return new ResponseEntity<>(hm, HttpStatus.OK);
        }
        else{
            hm.put("status", false);
            return new ResponseEntity<>(hm, HttpStatus.NOT_ACCEPTABLE);
        }

    }

    public ResponseEntity list() {
        Map<String, Object> hm = new LinkedHashMap<>();
        hm.put("status", true);
        hm.put("result", userRepository.findAll() );
        return new ResponseEntity(hm, HttpStatus.OK);
    }




}
