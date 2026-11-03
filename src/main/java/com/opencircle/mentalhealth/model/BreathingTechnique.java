package com.opencircle.mentalhealth.model;

import java.util.List;

public class BreathingTechnique {
    private String id;
    private String name;
    private String description;
    private int totalCycleSeconds;
    private List<String> phaseInstructions;

    public BreathingTechnique() {}

    public BreathingTechnique(String id, String name, String description, int totalCycleSeconds, List<String> phaseInstructions) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.totalCycleSeconds = totalCycleSeconds;
        this.phaseInstructions = phaseInstructions;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getTotalCycleSeconds() {
        return totalCycleSeconds;
    }

    public void setTotalCycleSeconds(int totalCycleSeconds) {
        this.totalCycleSeconds = totalCycleSeconds;
    }

    public List<String> getPhaseInstructions() {
        return phaseInstructions;
    }

    public void setPhaseInstructions(List<String> phaseInstructions) {
        this.phaseInstructions = phaseInstructions;
    }
}
