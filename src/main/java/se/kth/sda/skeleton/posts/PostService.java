package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda.skeleton.user.User;

import java.util.List;
import java.util.Optional;

/*
    @TODO Autowire the PostRepository and use it to implement all the service methods.
 */
@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public List<Post> getAll() {
        return postRepository.findAll();
    }

    public Optional<Post> getByID(Long id) {
        // @TODO get a post by ID if it exists
        return postRepository.findById(id);
    }

    public Post save(Post post) {
        // @TODO save the post to DB and return the saved post
        return postRepository.save(post);
    }

    public Post update(Long id,Post postRequest) throws Exception {
        return postRepository.findById(id).map(post -> {
            post.setAttendeesLimit(postRequest.getAttendeesLimit());
            post.setDescription(postRequest.getDescription());
            return postRepository.save(post);
        }).orElseThrow(() -> new Exception("PostId " + id + " not found"));
    }

    public void deleteById(Long id) {
        // @TODO delete the post by id
        postRepository.deleteById(id);
    }

    public Post savePostWithAttendeeInfo(Post post, User attendee)  {
            List<User> attendees = post.getAttendees();
            attendees.add(attendee);
            post.setAttendees(attendees);
            return postRepository.save(post);

    }
}
