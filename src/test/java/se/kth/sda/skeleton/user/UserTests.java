package se.kth.sda.skeleton.user;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.client.AutoConfigureMockRestServiceServer;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.*;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
@AutoConfigureMockRestServiceServer
public class UserTests {

    @Autowired
    private UserRepository userRepository;

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


