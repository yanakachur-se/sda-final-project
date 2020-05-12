package se.kth.sda.skeleton.comments;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;

@SpringBootTest
class ControllerTests {
//    @Autowired
//    TestRestTemplate testRestTemplate;
//
//    @Autowired
//    AuthService authService;
//
//    @Autowired
//    UserService userService;
//
//    private String getAuthHeader() {
//        userService.register(new User("test@exmaple.com", "pass123123", "John"));
//        return "Bearer " + authService.createAuthToken("test@exmaple.com");
//    }
//
//    @Test
//    public void getAll() {
//        // Arrange
//        // Add tasks
//
//        // Act
//        // Send an http request to /tasks
//        HttpHeaders headers = new HttpHeaders();
//        headers.add(HttpHeaders.AUTHORIZATION, getAuthHeader());
//        HttpEntity<String> request = new HttpEntity<>("", headers);
//
//        String body = testRestTemplate.exchange(
//                "/tasks",
//                HttpMethod.GET,
//                request,
//                String.class
//        ).getBody();
//
//        // Assert
//        Assertions.assertEquals("[]", body);
//    }
//
//    @Test
//    public void getAll1() {
//        // Arrange
//        // Add tasks
//
//        // Act
//        // Send an http request to /tasks
//        HttpHeaders headers = new HttpHeaders();
//        headers.add(HttpHeaders.AUTHORIZATION, getAuthHeader());
//        HttpEntity<String> request = new HttpEntity<>("", headers);
//
//        String body = testRestTemplate.exchange(
//                "/tasks",
//                HttpMethod.GET,
//                request,
//                String.class
//        ).getBody();
//
//        // Assert
//        Assertions.assertEquals("[]", body);
//    }

}