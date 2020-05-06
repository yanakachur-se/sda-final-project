package se.kth.sda.skeleton.posts;

public enum Status {
    ACTIVE ("active"), FULL("full");
    private String status;

    Status(String status) {
        this.status = status;
    }
}
