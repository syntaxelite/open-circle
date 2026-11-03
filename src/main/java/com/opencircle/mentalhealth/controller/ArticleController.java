package com.opencircle.mentalhealth.controller;

import com.opencircle.mentalhealth.model.Article;
import com.opencircle.mentalhealth.service.MentalHealthService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Optional;

@Controller
public class ArticleController {

    private final MentalHealthService mentalHealthService;

    public ArticleController(MentalHealthService mentalHealthService) {
        this.mentalHealthService = mentalHealthService;
    }

    @GetMapping("/articles/{slug}")
    public String viewArticle(@PathVariable("slug") String slug, Model model) {
        Optional<Article> articleOpt = mentalHealthService.getArticleBySlug(slug);
        if (articleOpt.isEmpty()) {
            return "redirect:/#learning-library";
        }

        model.addAttribute("article", articleOpt.get());
        model.addAttribute("recentArticles", mentalHealthService.getAllArticles().stream()
                .filter(a -> !a.getSlug().equalsIgnoreCase(slug))
                .limit(3)
                .toList());
        return "article-detail";
    }
}
