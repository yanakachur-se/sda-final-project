package se.kth.sda.skeleton.posts;

public enum Status {
    ACTIVE ("active"), FULL("full"), ARCHIVED("archived");

    private String status;

    Status(String status) {
        this.status = status;
    }
}
