package com.opencircle.mentalhealth.model;

import java.util.List;

public class Article {
    private String id;
    private String slug;
    private String title;
    private String category;
    private String readTime;
    private String summary;
    private VerifiedSource verifiedSource;
    private List<String> keyTakeaways;
    private List<ArticleSection> sections;
    private PracticalStep practicalStep;

    public Article() {}

    public Article(String id, String slug, String title, String category, String readTime,
                   String summary, VerifiedSource verifiedSource, List<String> keyTakeaways,
                   List<ArticleSection> sections, PracticalStep practicalStep) {
        this.id = id;
        this.slug = slug;
        this.title = title;
        this.category = category;
        this.readTime = readTime;
        this.summary = summary;
        this.verifiedSource = verifiedSource;
        this.keyTakeaways = keyTakeaways;
        this.sections = sections;
        this.practicalStep = practicalStep;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getReadTime() {
        return readTime;
    }

    public void setReadTime(String readTime) {
        this.readTime = readTime;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public VerifiedSource getVerifiedSource() {
        return verifiedSource;
    }

    public void setVerifiedSource(VerifiedSource verifiedSource) {
        this.verifiedSource = verifiedSource;
    }

    public List<String> getKeyTakeaways() {
        return keyTakeaways;
    }

    public void setKeyTakeaways(List<String> keyTakeaways) {
        this.keyTakeaways = keyTakeaways;
    }

    public List<ArticleSection> getSections() {
        return sections;
    }

    public void setSections(List<ArticleSection> sections) {
        this.sections = sections;
    }

    public PracticalStep getPracticalStep() {
        return practicalStep;
    }

    public void setPracticalStep(PracticalStep practicalStep) {
        this.practicalStep = practicalStep;
    }
}
