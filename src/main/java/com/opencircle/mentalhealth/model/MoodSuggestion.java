package com.opencircle.mentalhealth.model;

public class MoodSuggestion {
    private String title;
    private String description;
    private String actionLabel;
    private String actionTarget;

    public MoodSuggestion() {}

    public MoodSuggestion(String title, String description) {
        this(title, description, null, null);
    }

    public MoodSuggestion(String title, String description, String actionLabel, String actionTarget) {
        this.title = title;
        this.description = description;
        this.actionLabel = actionLabel;
        this.actionTarget = actionTarget;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getActionLabel() {
        return actionLabel;
    }

    public void setActionLabel(String actionLabel) {
        this.actionLabel = actionLabel;
    }

    public String getActionTarget() {
        return actionTarget;
    }

    public void setActionTarget(String actionTarget) {
        this.actionTarget = actionTarget;
    }
}
