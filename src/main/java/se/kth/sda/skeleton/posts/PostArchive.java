package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Configuration
@EnableScheduling
public class PostArchive {

    @Autowired
    PostService postService;

    @Scheduled(fixedDelay = 30 * 1000)
    public void archivePastPosts() throws ParseException {
        List<Post> databasePosts = postService.getAll();
        LocalDateTime currentDateTime = LocalDateTime.now();

        for(Post post : databasePosts) {

            if(post.getStatus() != Status.ARCHIVED) {
                //date needs to be cut, since it contains also default (incorrect) value for time
                String postDate = post.getDate().substring(0, 10);
                LocalDate postDatePart = LocalDate.parse(postDate);

                //time needs to be cut, since there is from-to information in database. Using just from value.
                String completePostTime = post.getTime();
                int hyphenIndex = completePostTime.indexOf("-");
                String postTime = completePostTime.substring(0, hyphenIndex);

//                postTime = postTime.replace("am", "AM").replace("pm","PM");

                DateTimeFormatter parser = DateTimeFormatter.ofPattern("h[:mm]a");
                LocalTime postTimePart = LocalTime.parse(postTime, parser);

                LocalDateTime postDateTime = LocalDateTime.of(postDatePart, postTimePart);
                //fixing the wrong value of date in database - it is stored one day earlier, because of wrong timezone
                //postDateTime = postDateTime.plusDays(1);

                if (currentDateTime.isAfter(postDateTime)) {
                    post.setStatus(Status.ARCHIVED);
                    postService.save(post);
                }
            }
        }
    }
}
