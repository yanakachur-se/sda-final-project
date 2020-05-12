package se.kth.sda.skeleton.posts;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

@SpringBootTest
public class PostTests {
    @Autowired
    PostController postController;

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
}
