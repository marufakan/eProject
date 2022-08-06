package com.works.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Data
@Table(name="Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Empty Name Error")
    private String name;
    @NotBlank(message = "Empty Surname Error")
    private String surname;
    @NotBlank(message = "Empty Blood TypeError")
    private String bloodType;
    @NotBlank(message = "Empty Phone Error")
    private String phone;
    @NotBlank(message = "Empty Address Error")
    private String address;
}
