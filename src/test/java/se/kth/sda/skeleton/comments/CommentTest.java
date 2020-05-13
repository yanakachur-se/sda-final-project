package se.kth.sda.skeleton.comments;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.posts.Post;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;

import java.util.Optional;

@SpringBootTest
class CommentTests {
    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    AuthService authService;

    @MockBean
    CommentService commentService;

    User userMock = new User();
    Post postMock = new Post();



    Comment comment = new Comment(1L,"aaa",postMock,userMock);

    private String getAuthHeader() {
        commentService.create(comment);
        return "Bearer " + authService.createAuthToken("test@exmaple.com");
    }

    @Test
    public void getAll() {
        // Arrange
        // Add tasks
        Mockito.when(commentService.create(Mockito.eq(comment)))
                .thenReturn(comment);
        // Act
        // Send an http request to /tasks
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.AUTHORIZATION, getAuthHeader());
        HttpEntity<String> request = new HttpEntity<>("", headers);

        String body = testRestTemplate.exchange(
                "/tasks",
                HttpMethod.GET,
                request,
                String.class
        ).getBody();

        // Assert
        Assertions.assertEquals("[]", body);
    }

    @Test
    public void getAll1() {
        // Arrange
        // Add tasks

        // Act
        // Send an http request to /tasks
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.AUTHORIZATION, getAuthHeader());
        HttpEntity<String> request = new HttpEntity<>("", headers);

        String body = testRestTemplate.exchange(
                "/tasks",
                HttpMethod.GET,
                request,
                String.class
        ).getBody();

        // Assert
        Assertions.assertEquals("[]", body);
    }

}