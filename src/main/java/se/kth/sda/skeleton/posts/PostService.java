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
        return postRepository.findById(id);
    }

    public Post save(Post post) {
        if (post.getStatus() != Status.ARCHIVED) {
            post.setStatus(Status.ACTIVE);
        }
        return postRepository.save(post);
    }

    public Post update(Long id, Post postRequest) throws Exception {
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

    public Post updatePostWithAttendeeInfo(Post post, User attendee) {
        if (post.getStatus() == Status.ACTIVE) {
            List<User> attendees = post.getAttendees();
            attendees.add(attendee);
            post.setAttendees(attendees);
            updateStatus(post);
        }
        return postRepository.save(post);
    }

    public User updateUserWithBookedService(User user, Post post) {
        if (post.getStatus() == Status.ACTIVE) {
            List<Post> services = user.getBookedServices();
            services.add(post);
            user.setBookedServices(services);
        }
        return user;
    }

    public void updateStatus(Post post) {
        if (post.getAttendees().size() == post.getAttendeesLimit()) {
            post.setStatus(Status.FULL);
        }
    }

}
