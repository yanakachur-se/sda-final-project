package se.kth.sda.skeleton.comments;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.posts.Post;
import se.kth.sda.skeleton.posts.PostController;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;

import java.net.URI;
import java.net.URISyntaxException;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CommentTests {
    @Autowired
    TestRestTemplate testRestTemplate;

    @Autowired
    AuthService authService;

    @Autowired
    PostController postController;

    @Autowired
    UserService userService;

    @LocalServerPort
    int randomServerPort;

    User userMock = new User("test@test.com", "password123", "My Name");
    Post postMock = new Post();
    Comment commentMock = new Comment(1L, "aaa", postMock, userMock);

    private String getAuthHeader() {
        userService.register(userMock);
        return "Bearer " + authService.createAuthToken(userMock.getEmail());
    }

    public Post savePostIntoDB() throws URISyntaxException {
        postMock.setId(1L);
        postMock.setUser(userMock);
        final String baseUrl = "http://localhost:" + randomServerPort + "/posts";
        URI uri = new URI(baseUrl);

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-COM-PERSIST", "true");

        HttpEntity<Post> request = new HttpEntity<>(postMock, headers);

        ResponseEntity<String> result = this.testRestTemplate.postForEntity(uri, request, String.class);
        return postMock;
    }

    @Test
    public void testAddEmployeeSuccess() throws NoSuchBeanDefinitionException, URISyntaxException {
        Post savedPost = savePostIntoDB();

        final String baseUrl = "http://localhost:" + randomServerPort + "/posts/" + savedPost.getId() +
                "/comments/" + savedPost.getUser().getEmail();
        URI uri = new URI(baseUrl);

        HttpHeaders headers = new HttpHeaders();
        headers.set( getAuthHeader(),);

        HttpEntity<Comment> request = new HttpEntity<>(commentMock, headers);

        ResponseEntity<String> result = this.testRestTemplate.postForEntity(uri, request, String.class);

        //Verify request succeed
        Assertions.assertEquals(201, result.getStatusCodeValue());
    }
}