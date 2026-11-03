package com.opencircle.mentalhealth.controller;

import com.opencircle.mentalhealth.model.ContactForm;
import com.opencircle.mentalhealth.model.MoodOption;
import com.opencircle.mentalhealth.service.MentalHealthService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {

    private final MentalHealthService mentalHealthService;

    public HomeController(MentalHealthService mentalHealthService) {
        this.mentalHealthService = mentalHealthService;
    }

    @GetMapping("/")
    public String index(
            @RequestParam(name = "category", defaultValue = "All") String category,
            @RequestParam(name = "search", defaultValue = "") String search,
            @RequestParam(name = "dirCategory", defaultValue = "All") String dirCategory,
            @RequestParam(name = "dirSupportType", defaultValue = "All") String dirSupportType,
            @RequestParam(name = "dirSearch", defaultValue = "") String dirSearch,
            @RequestParam(name = "mood", required = false) String mood,
            @RequestParam(name = "country", defaultValue = "india") String country,
            @RequestParam(name = "technique", defaultValue = "box") String technique,
            Model model
    ) {
        populatePageModel(model, category, search, dirCategory, dirSupportType, dirSearch, mood, country, technique);
        if (!model.containsAttribute("contactForm")) {
            model.addAttribute("contactForm", new ContactForm());
        }
        return "index";
    }

    @PostMapping("/contact")
    public String handleContact(
            @Valid @ModelAttribute("contactForm") ContactForm contactForm,
            BindingResult bindingResult,
            @RequestParam(name = "category", defaultValue = "All") String category,
            @RequestParam(name = "search", defaultValue = "") String search,
            @RequestParam(name = "dirCategory", defaultValue = "All") String dirCategory,
            @RequestParam(name = "dirSupportType", defaultValue = "All") String dirSupportType,
            @RequestParam(name = "dirSearch", defaultValue = "") String dirSearch,
            @RequestParam(name = "mood", required = false) String mood,
            @RequestParam(name = "country", defaultValue = "india") String country,
            @RequestParam(name = "technique", defaultValue = "box") String technique,
            Model model
    ) {
        populatePageModel(model, category, search, dirCategory, dirSupportType, dirSearch, mood, country, technique);

        if (bindingResult.hasErrors()) {
            model.addAttribute("contactErrors", true);
            return "index";
        }

        model.addAttribute("contactSubmitted", true);
        model.addAttribute("contactSuccessName", contactForm.getName());
        model.addAttribute("contactForm", new ContactForm());
        return "index";
    }

    private void populatePageModel(
            Model model,
            String category,
            String search,
            String dirCategory,
            String dirSupportType,
            String dirSearch,
            String mood,
            String country,
            String technique
    ) {
        // Articles & Filter
        model.addAttribute("articles", mentalHealthService.filterArticles(category, search));
        model.addAttribute("articleCategories", mentalHealthService.getAllCategories());
        model.addAttribute("selectedCategory", category);
        model.addAttribute("search", search);

        // Directory & Filter
        model.addAttribute("directoryResources", mentalHealthService.filterDirectory(dirCategory, dirSupportType, dirSearch));
        model.addAttribute("dirCategories", mentalHealthService.getAllDirectoryCategories());
        model.addAttribute("dirSupportTypes", mentalHealthService.getAllDirectorySupportTypes());
        model.addAttribute("selectedDirCategory", dirCategory);
        model.addAttribute("selectedDirSupportType", dirSupportType);
        model.addAttribute("dirSearch", dirSearch);

        // Mood Check-in
        model.addAttribute("moods", mentalHealthService.getAllMoods());
        model.addAttribute("selectedMood", mood);
        if (mood != null && !mood.isBlank()) {
            mentalHealthService.getMoodById(mood).ifPresent(option -> model.addAttribute("currentMoodOption", option));
        }

        // Helplines & Country
        model.addAttribute("helplines", mentalHealthService.getAllHelplines());
        model.addAttribute("selectedCountry", country);
        model.addAttribute("currentHelpline", mentalHealthService.getHelplineById(country)
                .orElse(mentalHealthService.getHelplineById("india").orElse(null)));

        // Breathing Techniques
        model.addAttribute("breathingTechniques", mentalHealthService.getAllBreathingTechniques());
        model.addAttribute("selectedTechnique", technique);
        model.addAttribute("currentTechnique", mentalHealthService.getBreathingTechniqueById(technique)
                .orElse(mentalHealthService.getBreathingTechniqueById("box").orElse(null)));
    }
}
