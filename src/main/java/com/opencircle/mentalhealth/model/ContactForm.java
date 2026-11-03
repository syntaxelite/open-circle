package com.opencircle.mentalhealth.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ContactForm {

    @NotBlank(message = "Please provide your name or how you wish to be addressed.")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters.")
    private String name;

    @NotBlank(message = "Please provide an email address.")
    @Email(message = "Please enter a valid email format (e.g. name@example.com).")
    private String email;

    private String topic = "general";

    @NotBlank(message = "Please write your message.")
    @Size(min = 15, max = 2000, message = "Please provide at least 15 characters so we can understand your inquiry.")
    private String message;

    public ContactForm() {}

    public ContactForm(String name, String email, String topic, String message) {
        this.name = name;
        this.email = email;
        this.topic = topic;
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
