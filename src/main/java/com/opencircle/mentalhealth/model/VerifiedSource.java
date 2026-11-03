package com.opencircle.mentalhealth.model;

public class VerifiedSource {
    private String name;
    private String publisher;
    private String url;
    private String reviewDate;

    public VerifiedSource() {}

    public VerifiedSource(String name, String publisher, String url, String reviewDate) {
        this.name = name;
        this.publisher = publisher;
        this.url = url;
        this.reviewDate = reviewDate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(String reviewDate) {
        this.reviewDate = reviewDate;
    }
}
