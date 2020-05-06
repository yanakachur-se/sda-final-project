package se.kth.sda.skeleton.user;


import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
public class UserTests {
    @Test
    void creationAndSetup(){
        User user = new User();
        user.setEmail("test@test.com");
        user.setName("Ada Lovelace");
        user.setPassword("jabuticaba");

        assertEquals(user.getEmail() ,"test@test.com");
        assertEquals(user.getPassword() ,"jabuticaba");
        assertEquals(user.getName() ,"Ada Lovelace");
    }

}
