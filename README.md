# Open Circle — Mental Health Awareness & Resource Platform

An open, calm, and human-centered mental health awareness platform developed as a college project and real-world demonstration. Grounded in evidence-based guidance from the World Health Organization (WHO), National Health Service (NHS England), National Institute of Mental Health (NIMH), and India's Tele-MANAS initiative.

Converted from Next.js/TypeScript to a pure **Java 21, Spring Boot, Maven, and Thymeleaf** web application using **pure HTML and CSS for the frontend without client-side JavaScript**.

---

## Key Features

1. **Evidence-Based Learning Library**
   - 6 thoroughly researched psychoeducational guides covering Understanding Mental Health, Stress & Anxiety, Depression, 5 Steps to Wellbeing, Supporting Others, and Professional Care.
   - Grounded in citations from WHO, NHS, and NIMH with direct links to official publications.
   - Dedicated guide reader view (`/articles/{slug}`) with key takeaways and practical micro-habits.
   - Server-side category filtering and real-time query search.

2. **Verified Support Resource Directory**
   - Curated directory of 12 legitimate organizations across peer support, clinical care, helplines, family support, and student care.
   - Clearly distinguishes peer emotional support from licensed clinical care.
   - Filter by category and search by organization name, region, or audience.

3. **Private In-Browser Mood Check-in**
   - Non-diagnostic reflection on 5 feelings: *Rough*, *Anxious*, *Okay*, *Good*, and *Hopeful*.
   - 100% private: selections are purely for self-reflection and are never stored, tracked, or transmitted.
   - Immediate gentle reflection, small coping suggestions, and a single-click reset.

4. **Guided Breathing Space (Pure CSS — No JavaScript)**
   - 3 breathing techniques: Box Breathing (4-4-4-4), Calming Breath (4-7-8), and Equal Breathing (4-4).
   - Organic visual breathing circle animated using pure CSS keyframes (`@keyframes breathingBox`, `@keyframes breathing478`, `@keyframes breathingEqual`).
   - Pure CSS interactive pause/resume control utilizing an accessible checkbox state mechanism.

5. **24/7 Urgent Crisis Support**
   - Country switcher for India, United States & Canada, United Kingdom, and International directory.
   - Verified toll-free numbers:
     - **India (Tele-MANAS)**: `14416` or `1800-891-4416`
     - **USA & Canada**: `988`
     - **UK**: `111` (Mental health option) or `116 123` (Samaritans)
     - **International**: Direct link to FindAHelpline.com (130+ countries)
   - Prominent high-contrast disclaimer clarifying that this website is an educational resource and not an emergency service.

6. **Accessibility & Editorial Design System**
   - Calm green color palette: Warm cream (`#F8F6EF`), Sage green (`#315C50`), Muted olive (`#78917B`), Soft green (`#E4EEE6`), Charcoal (`#24352F`), and Warm beige (`#E8CDA2`).
   - Accessible typography (*Newsreader* serif and *Plus Jakarta Sans*).
   - System and manual reduced-motion support via `@media (prefers-reduced-motion)`.
   - Semantic HTML5 structure with accessible skip links and keyboard navigation.

7. **Contact & Academic Inquiries**
   - Server-side Spring Boot Bean Validation (`@NotBlank`, `@Email`, `@Size`).
   - Clear feedback messaging with distinct college demonstration notice.

---

## Technology Stack

- **Backend**: Java 21 LTS, Spring Boot 3.3.5 (Spring MVC, Spring Boot Starter Validation)
- **Build Tool**: Apache Maven 3.x
- **Template Engine**: Thymeleaf 3
- **Frontend**: Pure Semantic HTML5 & Modern Vanilla CSS (Zero client-side JavaScript)
- **Testing**: JUnit 5, AssertJ, Spring MockMvc

---

## Project Structure

```text
D:\mental-health-backup
├── pom.xml                                        # Maven Project Object Model
├── README.md                                      # Documentation & college project details
├── src
│   ├── main
│   │   ├── java/com/opencircle/mentalhealth
│   │   │   ├── OpenCircleApplication.java         # Spring Boot application entry point
│   │   │   ├── controller
│   │   │   │   ├── HomeController.java            # Main endpoints, filtering, mood, contact POST
│   │   │   │   └── ArticleController.java         # Full article reader view
│   │   │   ├── model
│   │   │   │   ├── Article.java                   # Article data model
│   │   │   │   ├── ArticleSection.java            # Article section model
│   │   │   │   ├── BreathingTechnique.java        # Breathing technique model
│   │   │   │   ├── ContactForm.java               # Validated contact form bean
│   │   │   │   ├── DirectoryResource.java         # Support directory resource model
│   │   │   │   ├── HelplineItem.java              # National helpline data model
│   │   │   │   ├── HelplineNumber.java            # Dialable numbers model
│   │   │   │   ├── MoodOption.java                # Mood check-in data model
│   │   │   │   ├── MoodSuggestion.java            # Gentle suggestions model
│   │   │   │   ├── PracticalStep.java             # Practical micro-habit model
│   │   │   │   └── VerifiedSource.java            # Institutional source citation model
│   │   │   └── service
│   │   │       └── MentalHealthService.java       # In-memory service with all verified resources
│   │   └── resources
│   │       ├── application.properties             # Spring Boot server configuration
│   │       ├── static
│   │       │   ├── css/style.css                  # Pure CSS stylesheet & animations
│   │       │   └── favicon.ico                    # Platform favicon
│   │       └── templates
│   │           ├── index.html                     # Primary Thymeleaf template (all 8 sections)
│   │           └── article-detail.html            # Detailed educational guide reader
│   └── test
│       └── java/com/opencircle/mentalhealth
│           └── OpenCircleApplicationTests.java    # 13 comprehensive integration and unit tests
```

---

## Getting Started

### Prerequisites
- **Java 21 LTS** installed (`java -version`).
- **Apache Maven 3.6+** installed (`mvn -version`).

### Building and Running Tests
To compile and execute the test suite:
```bash
mvn clean test
```

### Running the Application Locally
Run the Spring Boot application using Maven:
```bash
mvn spring-boot:run
```
Alternatively, package the JAR and run it with Java directly:
```bash
mvn clean package
java -jar target/mental-health-platform-1.0.0.jar
```

Open your browser and navigate to:
```
http://localhost:8081
```

---

## Privacy & Safety Disclaimers

- **Zero Telemetry**: No personal health data, mood selections, or contact inputs are logged, tracked, or shared.
- **Educational Only**: Content is for educational awareness and does not constitute clinical evaluation, diagnosis, or personalized treatment.
- **Crisis Response**: If in acute distress or medical danger, please contact local emergency authorities (`112` / `911` / `999`) or verified 24/7 helplines (Tele-MANAS `14416` / Lifeline `988`).

---

## College Project Demonstration Context
Developed as an academic demonstration for college evaluation to illustrate how a mental health awareness platform can be built with enterprise-grade Java and Spring Boot, utilizing server-side rendering with Thymeleaf and pure CSS animations without relying on client-side JavaScript.
