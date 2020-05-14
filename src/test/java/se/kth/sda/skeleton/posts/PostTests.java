package se.kth.sda.skeleton.posts;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import se.kth.sda.skeleton.auth.AuthController;
import se.kth.sda.skeleton.auth.AuthRequest;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class PostTests {
    @Autowired
    PostController postController;

    @Autowired
    UserService userService;

    @Autowired
    AuthController authController;

    @MockBean
    PostService postService;

    @Test
    public void getById() {
        // Arrange
        Post post = new Post();
        post.setId(1L);
        post.setName("Test name");
        post.setDate("2020");
        Mockito.when(postService.getByID(Mockito.eq(1L)))
                .thenReturn(Optional.of(post));
        // Act
        Post got = postController.getById(1L);
        // Assert
        Assertions.assertEquals(post.getName(), got.getName());
    }

    @Test
    public void getAllTest() {
        // Arrange
        Post post1 = new Post();
        Post post2 = new Post();
        Post post3 = new Post();
        List<Post> postList = new ArrayList<Post>();
        postList.add(post1);
        postList.add(post2);
        postList.add(post3);
        Mockito.when(postService.getAll())
                .thenReturn(postList);
        // Act
        List<Post> mockedList = postService.getAll();
        // Assert
        Assertions.assertEquals(postList, mockedList);
    }

//    @Test
//    public void updatePostWithAttendeeInfoTest() throws Exception {
//        // Arrange
//        Post post = new Post();
//        post.setId(1L);
//
//        User attendee = new User("test@exmaple.com", "pass123123", "John");
//        post.setUser(attendee);
////        postController.savePost(post);
//        userService.register(attendee);
//        authController.authenticate(new AuthRequest(attendee.getEmail(),attendee.getPassword()));
//
//
//        Mockito.when(postService.updatePostWithAttendeeInfo(Mockito.eq(post), Mockito.eq(attendee)))
//                .thenReturn(post);
//        // Act
//        Post mockedUser = postController.updatePostWithAttendeeInfo(1L);
//        // Assert
//        Assertions.assertEquals(post.getName(), mockedUser.getName());
//    }
}
