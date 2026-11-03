package com.opencircle.mentalhealth.model;

import java.util.List;

public class DirectoryResource {
    private String id;
    private String name;
    private String organization;
    private String category;
    private String supportType;
    private String cost;
    private String accessMode;
    private String region;
    private String audience;
    private String phone;
    private String url;
    private String shortDescription;
    private List<String> verifiedDetails;
    private String availabilityNotice;

    public DirectoryResource() {}

    public DirectoryResource(String id, String name, String organization, String category,
                             String supportType, String cost, String accessMode, String region,
                             String audience, String phone, String url, String shortDescription,
                             List<String> verifiedDetails, String availabilityNotice) {
        this.id = id;
        this.name = name;
        this.organization = organization;
        this.category = category;
        this.supportType = supportType;
        this.cost = cost;
        this.accessMode = accessMode;
        this.region = region;
        this.audience = audience;
        this.phone = phone;
        this.url = url;
        this.shortDescription = shortDescription;
        this.verifiedDetails = verifiedDetails;
        this.availabilityNotice = availabilityNotice;
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

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSupportType() {
        return supportType;
    }

    public void setSupportType(String supportType) {
        this.supportType = supportType;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    public String getAccessMode() {
        return accessMode;
    }

    public void setAccessMode(String accessMode) {
        this.accessMode = accessMode;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getAudience() {
        return audience;
    }

    public void setAudience(String audience) {
        this.audience = audience;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public List<String> getVerifiedDetails() {
        return verifiedDetails;
    }

    public void setVerifiedDetails(List<String> verifiedDetails) {
        this.verifiedDetails = verifiedDetails;
    }

    public String getAvailabilityNotice() {
        return availabilityNotice;
    }

    public void setAvailabilityNotice(String availabilityNotice) {
        this.availabilityNotice = availabilityNotice;
    }
}
