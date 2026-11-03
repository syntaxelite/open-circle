package com.opencircle.mentalhealth.model;

import java.util.List;

public class MoodOption {
    private String id;
    private String label;
    private String subtitle;
    private String hint;
    private String toneDescription;
    private String reflectionPrompt;
    private List<MoodSuggestion> gentleSuggestions;
    private String groundingReminder;

    public MoodOption() {}

    public MoodOption(String id, String label, String subtitle, String hint,
                      String toneDescription, String reflectionPrompt,
                      List<MoodSuggestion> gentleSuggestions, String groundingReminder) {
        this.id = id;
        this.label = label;
        this.subtitle = subtitle;
        this.hint = hint;
        this.toneDescription = toneDescription;
        this.reflectionPrompt = reflectionPrompt;
        this.gentleSuggestions = gentleSuggestions;
        this.groundingReminder = groundingReminder;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public String getHint() {
        return hint;
    }

    public void setHint(String hint) {
        this.hint = hint;
    }

    public String getToneDescription() {
        return toneDescription;
    }

    public void setToneDescription(String toneDescription) {
        this.toneDescription = toneDescription;
    }

    public String getReflectionPrompt() {
        return reflectionPrompt;
    }

    public void setReflectionPrompt(String reflectionPrompt) {
        this.reflectionPrompt = reflectionPrompt;
    }

    public List<MoodSuggestion> getGentleSuggestions() {
        return gentleSuggestions;
    }

    public void setGentleSuggestions(List<MoodSuggestion> gentleSuggestions) {
        this.gentleSuggestions = gentleSuggestions;
    }

    public String getGroundingReminder() {
        return groundingReminder;
    }

    public void setGroundingReminder(String groundingReminder) {
        this.groundingReminder = groundingReminder;
    }
}
