package com.opencircle.mentalhealth;

import com.opencircle.mentalhealth.model.Article;
import com.opencircle.mentalhealth.model.DirectoryResource;
import com.opencircle.mentalhealth.model.HelplineItem;
import com.opencircle.mentalhealth.model.MoodOption;
import com.opencircle.mentalhealth.service.MentalHealthService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class OpenCircleApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private MentalHealthService service;

    @org.springframework.beans.factory.annotation.Value("${server.port}")
    private int serverPort;

    @Test
    @DisplayName("Context Loads")
    void contextLoads() {
        assertThat(service).isNotNull();
        assertThat(serverPort).isEqualTo(8081);
    }

    @Test
    @DisplayName("Service loads all 6 educational articles")
    void testArticlesLoaded() {
        List<Article> articles = service.getAllArticles();
        assertThat(articles).hasSize(6);

        Optional<Article> article = service.getArticleBySlug("understanding-mental-health");
        assertThat(article).isPresent();
        assertThat(article.get().getTitle()).contains("Understanding Mental Health");
        assertThat(article.get().getVerifiedSource().getPublisher()).contains("WHO");
    }

    @Test
    @DisplayName("Service loads all 12 support directory resources")
    void testDirectoryResources() {
        List<DirectoryResource> resources = service.getAllDirectoryResources();
        assertThat(resources).hasSize(12);

        List<DirectoryResource> filtered = service.filterDirectory("Professional Care", "All", "");
        assertThat(filtered).isNotEmpty();
    }

    @Test
    @DisplayName("Service loads all 4 regional emergency helplines")
    void testHelplines() {
        List<HelplineItem> helplines = service.getAllHelplines();
        assertThat(helplines).hasSize(4);

        Optional<HelplineItem> india = service.getHelplineById("india");
        assertThat(india).isPresent();
        assertThat(india.get().getNumbers()).anyMatch(n -> n.getDisplay().equals("14416"));
    }

    @Test
    @DisplayName("Service loads all 5 mood reflection profiles")
    void testMoodOptions() {
        assertThat(service.getAllMoods()).containsKeys("rough", "anxious", "okay", "good", "hopeful");
        Optional<MoodOption> rough = service.getMoodById("rough");
        assertThat(rough).isPresent();
        assertThat(rough.get().getGentleSuggestions()).isNotEmpty();
    }

    @Test
    @DisplayName("Service loads all 3 breathing techniques")
    void testBreathingTechniques() {
        assertThat(service.getAllBreathingTechniques()).hasSize(3);
    }

    @Test
    @DisplayName("GET / returns 200 with index view and core model attributes")
    void testHomePage() throws Exception {
        mockMvc.perform(get("/"))
                .andExpect(status().isOk())
                .andExpect(view().name("index"))
                .andExpect(model().attributeExists("articles", "directoryResources", "moods", "helplines", "breathingTechniques"));
    }

    @Test
    @DisplayName("GET / with mood parameter populates currentMoodOption")
    void testMoodSelection() throws Exception {
        mockMvc.perform(get("/").param("mood", "rough"))
                .andExpect(status().isOk())
                .andExpect(model().attributeExists("currentMoodOption"))
                .andExpect(model().attribute("selectedMood", "rough"));
    }

    @Test
    @DisplayName("GET / with country parameter populates selected helpline")
    void testCountrySelection() throws Exception {
        mockMvc.perform(get("/").param("country", "usa-canada"))
                .andExpect(status().isOk())
                .andExpect(model().attributeExists("currentHelpline"))
                .andExpect(model().attribute("selectedCountry", "usa-canada"));
    }

    @Test
    @DisplayName("GET /articles/{slug} returns 200 with article model")
    void testArticleDetail() throws Exception {
        mockMvc.perform(get("/articles/understanding-mental-health"))
                .andExpect(status().isOk())
                .andExpect(view().name("article-detail"))
                .andExpect(model().attributeExists("article", "recentArticles"));
    }

    @Test
    @DisplayName("GET /articles/{invalid} redirects to library")
    void testArticleNotFound() throws Exception {
        mockMvc.perform(get("/articles/unknown-slug"))
                .andExpect(status().is3xxRedirection())
                .andExpect(redirectedUrl("/#learning-library"));
    }

    @Test
    @DisplayName("POST /contact with valid form succeeds and sets contactSubmitted")
    void testContactSuccess() throws Exception {
        mockMvc.perform(post("/contact")
                        .param("name", "Jane Doe")
                        .param("email", "jane@example.com")
                        .param("topic", "general")
                        .param("message", "This is an academic evaluation test message with sufficient length."))
                .andExpect(status().isOk())
                .andExpect(view().name("index"))
                .andExpect(model().attribute("contactSubmitted", true))
                .andExpect(model().attribute("contactSuccessName", "Jane Doe"));
    }

    @Test
    @DisplayName("POST /contact with invalid form fails validation")
    void testContactValidationFailure() throws Exception {
        mockMvc.perform(post("/contact")
                        .param("name", "")
                        .param("email", "invalid-email")
                        .param("topic", "general")
                        .param("message", "short"))
                .andExpect(status().isOk())
                .andExpect(view().name("index"))
                .andExpect(model().attribute("contactErrors", true));
    }
}
