package se.kth.sda.skeleton.ImageUpload;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ImageController {

    private static final Logger logger = LoggerFactory.getLogger(ImageController.class);

    @Autowired
    private ImageService imageService;

    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;


    @PostMapping("/uploadFile")
    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file) {

        User user = userService.findUserByEmail(authService.getLoggedInUserEmail());
        //ImageModel imageModel = user.getImageModel();
        //private byte[] imagefile = imageModel.getData();

        ImageModel imageFile = imageService.storeFile(file);
        imageFile.setUser(user);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(imageFile.getId())
                .toUriString();

        return new UploadFileResponse(imageFile.getFileName(), fileDownloadUri,
                file.getContentType(), file.getSize());
    }

    @PostMapping("/uploadMultipleFiles")
    public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
        return Arrays.asList(files)
                .stream()
                .map(file -> uploadFile(file))
                .collect(Collectors.toList());
    }

    @GetMapping("/downloadFile")
    public ResponseEntity<Resource> downloadFile() {

        User user = userService.findUserByEmail(authService.getLoggedInUserEmail());
        ImageModel imageModel = user.getImageModel();
        ImageModel imageFile = null;

        if (user.equals((imageModel.getUser()))) {
            String fileId = imageModel.getId();

            // Load file from database
            imageFile = imageService.getFile(fileId);
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(imageFile.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + imageFile.getFileName() + "\"")
                .body(new ByteArrayResource(imageFile.getData()));
    }

}
