package com.opencircle.mentalhealth.model;

import java.util.List;

public class HelplineItem {
    private String id;
    private String country;
    private String serviceName;
    private String governingBody;
    private List<HelplineNumber> numbers;
    private String hours;
    private String languages;
    private String cost;
    private String officialUrl;
    private String description;
    private List<String> immediateActions;

    public HelplineItem() {}

    public HelplineItem(String id, String country, String serviceName, String governingBody,
                        List<HelplineNumber> numbers, String hours, String languages,
                        String cost, String officialUrl, String description,
                        List<String> immediateActions) {
        this.id = id;
        this.country = country;
        this.serviceName = serviceName;
        this.governingBody = governingBody;
        this.numbers = numbers;
        this.hours = hours;
        this.languages = languages;
        this.cost = cost;
        this.officialUrl = officialUrl;
        this.description = description;
        this.immediateActions = immediateActions;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getGoverningBody() {
        return governingBody;
    }

    public void setGoverningBody(String governingBody) {
        this.governingBody = governingBody;
    }

    public List<HelplineNumber> getNumbers() {
        return numbers;
    }

    public void setNumbers(List<HelplineNumber> numbers) {
        this.numbers = numbers;
    }

    public String getHours() {
        return hours;
    }

    public void setHours(String hours) {
        this.hours = hours;
    }

    public String getLanguages() {
        return languages;
    }

    public void setLanguages(String languages) {
        this.languages = languages;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    public String getOfficialUrl() {
        return officialUrl;
    }

    public void setOfficialUrl(String officialUrl) {
        this.officialUrl = officialUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getImmediateActions() {
        return immediateActions;
    }

    public void setImmediateActions(List<String> immediateActions) {
        this.immediateActions = immediateActions;
    }
}
