package com.opencircle.mentalhealth.model;

public class HelplineNumber {
    private String display;
    private String dial;
    private String type;

    public HelplineNumber() {}

    public HelplineNumber(String display, String dial, String type) {
        this.display = display;
        this.dial = dial;
        this.type = type;
    }

    public String getDisplay() {
        return display;
    }

    public void setDisplay(String display) {
        this.display = display;
    }

    public String getDial() {
        return dial;
    }

    public void setDial(String dial) {
        this.dial = dial;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
