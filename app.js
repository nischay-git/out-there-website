const experiences = [
  {
    id: "ai-artists-studio-circle",
    title: "AI x Artists Studio Circle",
    city: "Bangalore",
    area: "Indiranagar",
    venue: "Neighbourhood Studio",
    theme: "AI",
    secondary: "Art",
    date: "Sat",
    time: "Evening",
    budget: "Mid",
    price: "Rs 800",
    format: "Small group",
    vibe: "hands-on",
    host: "Studio People",
    source: "Curated community seed",
    description:
      "A studio-format session where artists prototype with generative tools, critique outputs, and meet collaborators.",
    detail:
      "Bring a laptop, an idea, or just curiosity. The host guides a compact group through prompt experiments, image references, and quick peer critique so people leave with something tangible and a few new collaborators.",
    tags: ["AI", "Art", "Creators", "Workshop"],
    color: "#6d3fd1",
  },
  {
    id: "zine-first-time-creators",
    title: "Zine Making for First-Time Creators",
    city: "Bangalore",
    area: "Basavanagudi",
    venue: "Paper Crane Room",
    theme: "Art",
    secondary: "Communication",
    date: "Sun",
    time: "Morning",
    budget: "Low",
    price: "Rs 350",
    format: "Workshop",
    vibe: "gentle",
    host: "Small Press Bangalore",
    source: "Curated community seed",
    description:
      "Make a small print zine from a personal story, with prompts that turn lived experience into a shareable artifact.",
    detail:
      "A quiet making session for people who want to express something but do not know where to begin. Materials are included, and the final hour is for sharing pages in pairs.",
    tags: ["Art", "Writing", "Workshop"],
    color: "#6f5aa8",
  },
  {
    id: "creative-tech-salon",
    title: "Creative Tech Salon",
    city: "Bangalore",
    area: "Koramangala",
    venue: "Third Wave Lab",
    theme: "Meetup",
    secondary: "AI",
    date: "Thu",
    time: "Evening",
    budget: "Free",
    price: "Free RSVP",
    format: "Salon",
    vibe: "curious",
    host: "Creative Systems Club",
    source: "Curated community seed",
    description:
      "Short demos and open discussion for designers, builders, and artists experimenting with creative AI tools.",
    detail:
      "Expect three short demos, a moderated discussion, and open mingling. Good for people who want ideas, collaborators, or a low-pressure way into the local creative tech scene.",
    tags: ["AI", "Meetup", "Design", "Free"],
    color: "#37265f",
  },
  {
    id: "storytelling-for-strangers",
    title: "Storytelling for Strangers",
    city: "Delhi",
    area: "Hauz Khas",
    venue: "Courtyard Room",
    theme: "Communication",
    secondary: "Meetup",
    date: "Sun",
    time: "Afternoon",
    budget: "Low",
    price: "Rs 400",
    format: "Open circle",
    vibe: "social",
    host: "Delhi Listening Club",
    source: "Curated community seed",
    description:
      "A guided gathering for people who want to practice listening, speaking, and making new offline connections.",
    detail:
      "The format uses gentle prompts, rotating pairs, and a closing circle. You do not need to perform; the point is to make conversation feel easier and more intentional.",
    tags: ["Communication", "Meetup", "Beginner friendly"],
    color: "#5b4bb7",
  },
  {
    id: "urban-sketchers-sunday",
    title: "Urban Sketchers Sunday",
    city: "Delhi",
    area: "Lodhi Art District",
    venue: "Open-air meeting point",
    theme: "Art",
    secondary: "Meetup",
    date: "Sun",
    time: "Morning",
    budget: "Free",
    price: "Free",
    format: "Outdoor",
    vibe: "relaxed",
    host: "Sketch Delhi",
    source: "Curated community seed",
    description:
      "Bring a sketchbook and join a roaming outdoor group that draws the city, shares work, and talks over chai.",
    detail:
      "No skill gate, no formal class. People pick a corner, sketch for an hour, then gather to share what they noticed.",
    tags: ["Art", "Outdoor", "Free"],
    color: "#a47d2d",
  },
  {
    id: "delhi-ai-reading-room",
    title: "AI Reading Room",
    city: "Delhi",
    area: "Khan Market",
    venue: "Independent Book Cafe",
    theme: "AI",
    secondary: "Communication",
    date: "Wed",
    time: "Evening",
    budget: "Free",
    price: "Free with RSVP",
    format: "Reading group",
    vibe: "focused",
    host: "Applied AI Readers",
    source: "Curated community seed",
    description:
      "A discussion-led reading group for people who want to understand AI culture, tools, and tradeoffs without jargon.",
    detail:
      "The host sends a short reading before the session. The room is built for questions, examples, and disagreement without turning into a lecture.",
    tags: ["AI", "Reading", "Conversation", "Free"],
    color: "#6d3fd1",
  },
  {
    id: "founder-builder-ai-breakfast",
    title: "Founder and Builder AI Breakfast",
    city: "Haryana",
    area: "Gurugram",
    venue: "Cyber City Cafe",
    theme: "AI",
    secondary: "Meetup",
    date: "Wed",
    time: "Morning",
    budget: "Premium",
    price: "Rs 1800",
    format: "Roundtable",
    vibe: "focused",
    host: "Operator Table",
    source: "Curated community seed",
    description:
      "A compact breakfast roundtable for operators exploring applied AI, product experiments, and early customer signals.",
    detail:
      "Designed for people building with AI in real workflows. The host keeps the table small and steers the conversation toward concrete experiments, not panels.",
    tags: ["AI", "Founders", "Meetup"],
    color: "#37265f",
  },
  {
    id: "better-conversations-supper-club",
    title: "Better Conversations Supper Club",
    city: "Haryana",
    area: "Gurugram",
    venue: "Private dining room",
    theme: "Communication",
    secondary: "Meetup",
    date: "Sat",
    time: "Evening",
    budget: "Premium",
    price: "Rs 2200",
    format: "Dinner",
    vibe: "warm",
    host: "Table for Eight",
    source: "Curated community seed",
    description:
      "A hosted dinner built around thoughtful prompts, small groups, and people who want conversation to feel less transactional.",
    detail:
      "The evening starts with paired prompts and moves into a shared meal. Good for people who want a calmer alternative to networking events.",
    tags: ["Communication", "Dinner", "Community"],
    color: "#5b4bb7",
  },
  {
    id: "gurugram-art-after-work",
    title: "Art After Work",
    city: "Haryana",
    area: "Gurugram",
    venue: "Sector 29 Studio",
    theme: "Art",
    secondary: "Communication",
    date: "Fri",
    time: "Evening",
    budget: "Mid",
    price: "Rs 900",
    format: "Workshop",
    vibe: "relaxed",
    host: "After Hours Studio",
    source: "Curated community seed",
    description:
      "A casual painting and conversation room for people who want to make something after work without a class-like mood.",
    detail:
      "Materials, prompts, and music are handled by the host. The format gives people room to make, pause, and talk without needing prior art experience.",
    tags: ["Art", "Communication", "After work"],
    color: "#6f5aa8",
  },
  {
    id: "gallery-walk-coffee-debrief",
    title: "Gallery Walk and Coffee Debrief",
    city: "Mumbai",
    area: "Colaba",
    venue: "Kala Ghoda meeting point",
    theme: "Art",
    secondary: "Meetup",
    date: "Fri",
    time: "Evening",
    budget: "Free",
    price: "Free",
    format: "Walk",
    vibe: "curious",
    host: "South Mumbai Art Walks",
    source: "Curated community seed",
    description:
      "Visit two current exhibitions with a host, then regroup nearby for an easy conversation about what stayed with you.",
    detail:
      "The host sets context before each stop and keeps the debrief accessible. It is especially good if you like art but do not always know how to talk about it.",
    tags: ["Art", "Conversation", "Free"],
    color: "#a47d2d",
  },
  {
    id: "prompt-jam-everyday-work",
    title: "Prompt Jam: AI for Everyday Work",
    city: "Mumbai",
    area: "Bandra",
    venue: "Neighbourhood coworking studio",
    theme: "AI",
    secondary: "Communication",
    date: "Thu",
    time: "Evening",
    budget: "Mid",
    price: "Rs 750",
    format: "Lab",
    vibe: "practical",
    host: "Workflow Club",
    source: "Curated community seed",
    description:
      "A practical meetup where participants bring real tasks and leave with reusable prompts, workflows, and peer feedback.",
    detail:
      "Bring one real task from your work or creative life. The host helps people turn vague requests into reliable workflows and compare results in small groups.",
    tags: ["AI", "Productivity", "Peer learning"],
    color: "#6d3fd1",
  },
  {
    id: "mumbai-listening-lab",
    title: "The Listening Lab",
    city: "Mumbai",
    area: "Dadar",
    venue: "Community arts room",
    theme: "Communication",
    secondary: "Meetup",
    date: "Sun",
    time: "Afternoon",
    budget: "Low",
    price: "Rs 300",
    format: "Practice circle",
    vibe: "gentle",
    host: "Mumbai Conversation Project",
    source: "Curated community seed",
    description:
      "A facilitated practice circle for better listening, slower conversation, and meeting people outside your usual orbit.",
    detail:
      "The session uses short exercises, pairs, and small groups. It works for introverts, facilitators, founders, and anyone trying to get better at presence.",
    tags: ["Communication", "Meetup", "Practice"],
    color: "#5b4bb7",
  },
];

const state = {
  route: "home",
  query: "",
  city: "all",
  theme: "all",
  budget: "all",
  time: "all",
  preferences: {},
  selectedId: experiences[0].id,
};

const screens = {
  home: document.querySelector("#screen-home"),
  ask: document.querySelector("#screen-ask"),
  results: document.querySelector("#screen-results"),
  detail: document.querySelector("#screen-detail"),
};

const screenTitle = document.querySelector("#screenTitle");
const cityGrid = document.querySelector("#cityGrid");
const featuredGrid = document.querySelector("#featuredGrid");
const experienceGrid = document.querySelector("#experienceGrid");
const detailMount = document.querySelector("#detailMount");
const matchCount = document.querySelector("#matchCount");
const sourceCount = document.querySelector("#sourceCount");
const resultTitle = document.querySelector("#resultTitle");
const chatLog = document.querySelector("#chatLog");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const cityFilter = document.querySelector("#cityFilter");
const themeFilter = document.querySelector("#themeFilter");
const budgetFilter = document.querySelector("#budgetFilter");
const timeFilter = document.querySelector("#timeFilter");
const clearFilters = document.querySelector("#clearFilters");
const template = document.querySelector("#experienceCardTemplate");

const briefFields = {
  city: document.querySelector("#briefCity"),
  theme: document.querySelector("#briefTheme"),
  budget: document.querySelector("#briefBudget"),
  timing: document.querySelector("#briefTiming"),
};

const screenTitles = {
  home: "Offline experiences for curious people",
  ask: "Tell Out There what you are looking for",
  results: "Matched offline experiences",
  detail: "Experience detail",
};

const assistantOpeners = [
  "Tell me what you want to do offline. I can narrow by city, mood, theme, budget, and timing.",
  "Try: AI meetup in Bangalore this weekend, art walk in Mumbai, or a conversation circle in Delhi.",
];

function normalizeRoute() {
  const raw = window.location.hash.replace("#", "") || "home";
  if (raw.startsWith("detail/")) {
    const id = raw.split("/")[1];
    if (experiences.some((experience) => experience.id === id)) {
      state.selectedId = id;
      return "detail";
    }
    return "results";
  }
  return ["home", "ask", "results"].includes(raw) ? raw : "home";
}

function setRoute(route) {
  state.route = route;
  Object.entries(screens).forEach(([name, screen]) => {
    screen.classList.toggle("is-active", name === route);
  });
  document.querySelectorAll("[data-route-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.routeLink === route);
  });
  screenTitle.textContent = screenTitles[route];
  render();
}

function navigateTo(route) {
  window.location.hash = route;
}

function addMessage(role, text, replies = []) {
  const message = document.createElement("div");
  message.className = `message ${role}`;
  message.textContent = text;
  chatLog.appendChild(message);

  if (replies.length) {
    const replyWrap = document.createElement("div");
    replyWrap.className = "quick-replies";
    replies.forEach((reply) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = reply;
      button.addEventListener("click", () => {
        chatInput.value = reply;
        chatForm.requestSubmit();
      });
      replyWrap.appendChild(button);
    });
    chatLog.appendChild(replyWrap);
  }

  chatLog.scrollTop = chatLog.scrollHeight;
}

function inferPreferences(text) {
  const normalized = text.toLowerCase();
  const next = {};

  for (const city of ["bangalore", "delhi", "haryana", "mumbai", "gurugram"]) {
    if (normalized.includes(city)) {
      next.city = city === "gurugram" ? "Haryana" : toTitle(city);
    }
  }

  const themeMap = {
    art: "Art",
    artist: "Art",
    gallery: "Art",
    sketch: "Art",
    zine: "Art",
    ai: "AI",
    "artificial intelligence": "AI",
    prompt: "AI",
    meetup: "Meetup",
    meetups: "Meetup",
    people: "Meetup",
    social: "Meetup",
    communication: "Communication",
    conversation: "Communication",
    storytelling: "Communication",
    listening: "Communication",
  };

  Object.entries(themeMap).forEach(([word, theme]) => {
    if (normalized.includes(word)) next.theme = theme;
  });

  if (normalized.includes("free")) next.budget = "Free";
  if (normalized.includes("cheap") || normalized.includes("under 500")) next.budget = "Low";
  if (normalized.includes("500 to 1500") || normalized.includes("mid")) next.budget = "Mid";
  if (normalized.includes("premium") || normalized.includes("dinner")) next.budget = "Premium";

  if (normalized.includes("weekend") || normalized.includes("saturday") || normalized.includes("sunday")) {
    next.when = "weekend";
  }
  if (normalized.includes("evening")) next.time = "Evening";
  if (normalized.includes("afternoon")) next.time = "Afternoon";
  if (normalized.includes("morning")) next.time = "Morning";
  if (normalized.includes("hands-on") || normalized.includes("workshop")) next.vibe = "hands-on";
  if (normalized.includes("calm") || normalized.includes("gentle")) next.vibe = "gentle";
  if (normalized.includes("focused") || normalized.includes("practical")) next.vibe = "focused";

  return next;
}

function toTitle(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function applyPreferences(prefs) {
  state.preferences = { ...state.preferences, ...prefs };
  if (prefs.city) state.city = prefs.city;
  if (prefs.theme && ["Art", "AI", "Meetup", "Communication"].includes(prefs.theme)) state.theme = prefs.theme;
  if (prefs.budget) state.budget = prefs.budget;
  if (prefs.time) state.time = prefs.time;
  if (prefs.when === "weekend") state.time = "weekend";
  syncFilters();
}

function scoreExperience(experience) {
  let score = 0;
  const prefs = state.preferences;
  const query = state.query.toLowerCase();

  if (state.city !== "all" && experience.city !== state.city) return -1;
  if (state.theme !== "all" && ![experience.theme, experience.secondary].includes(state.theme)) return -1;
  if (state.budget !== "all" && experience.budget !== state.budget) return -1;
  if (state.time !== "all") {
    if (state.time === "weekend" && !["Sat", "Sun"].includes(experience.date)) return -1;
    if (state.time !== "weekend" && experience.time !== state.time) return -1;
  }

  if (prefs.city === experience.city) score += 35;
  if ([experience.theme, experience.secondary].includes(prefs.theme)) score += 30;
  if (prefs.budget === experience.budget) score += 14;
  if (prefs.time === experience.time) score += 8;
  if (prefs.vibe && (prefs.vibe === experience.vibe || experience.format.toLowerCase().includes(prefs.vibe))) {
    score += 8;
  }
  if (prefs.when === "weekend" && ["Sat", "Sun"].includes(experience.date)) score += 10;

  experience.tags.concat([experience.title, experience.description, experience.area]).forEach((value) => {
    if (query && query.includes(value.toLowerCase())) score += 4;
  });

  return score;
}

function getMatches() {
  return experiences
    .map((experience) => ({ ...experience, score: scoreExperience(experience) }))
    .filter((experience) => experience.score >= 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}

function nextClarifyingQuestion() {
  const prefs = state.preferences;
  if (!prefs.city) {
    return {
      text: "Which city should I prioritize?",
      replies: ["Bangalore", "Delhi", "Haryana", "Mumbai"],
    };
  }
  if (!prefs.theme) {
    return {
      text: "What should be the main flavor of the experience?",
      replies: ["Art", "AI", "Meetups", "Communication"],
    };
  }
  if (!prefs.when && !prefs.time) {
    return {
      text: "When would you like to go?",
      replies: ["This weekend", "Evening", "Morning", "Afternoon"],
    };
  }
  if (!prefs.budget) {
    return {
      text: "Any budget preference?",
      replies: ["Free", "Under 500", "500 to 1500", "Premium is okay"],
    };
  }
  return null;
}

function assistantReply() {
  const question = nextClarifyingQuestion();
  const matches = getMatches().slice(0, 3);

  if (question) {
    addMessage("assistant", question.text, question.replies);
    return;
  }

  if (!matches.length) {
    addMessage(
      "assistant",
      "I do not have a strong match yet. Open up one filter and I will look across nearby themes and formats."
    );
    navigateTo("results");
    return;
  }

  addMessage(
    "assistant",
    `I found ${matches.length} strong options. Start with ${matches.map((match) => match.title).join(", ")}.`
  );
  navigateTo("results");
}

function render() {
  sourceCount.textContent = `${experiences.length} seeds`;
  renderBrief();
  renderHome();
  renderResults();
  renderDetail();
}

function renderBrief() {
  briefFields.city.textContent = state.city === "all" ? "Any focus city" : state.city;
  briefFields.theme.textContent = state.theme === "all" ? "Any theme" : state.theme;
  briefFields.budget.textContent = state.budget === "all" ? "Any budget" : labelBudget(state.budget);
  briefFields.timing.textContent = state.time === "all" ? "Flexible" : labelTime(state.time);
}

function renderHome() {
  const cityNames = ["Bangalore", "Delhi", "Haryana", "Mumbai"];
  cityGrid.innerHTML = "";
  cityNames.forEach((city) => {
    const cityExperiences = experiences.filter((experience) => experience.city === city);
    const themes = [...new Set(cityExperiences.flatMap((experience) => [experience.theme, experience.secondary]))];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "city-card";
    card.innerHTML = `<span>${city}</span><strong>${cityExperiences.length} experiences</strong><p>${themes.join(" · ")}</p>`;
    card.addEventListener("click", () => {
      state.city = city;
      syncFilters();
      navigateTo("results");
    });
    cityGrid.appendChild(card);
  });

  featuredGrid.innerHTML = "";
  experiences.slice(0, 4).forEach((experience) => featuredGrid.appendChild(createExperienceCard(experience)));
}

function renderResults() {
  const matches = getMatches();
  experienceGrid.innerHTML = "";
  matchCount.textContent = `${matches.length} ${matches.length === 1 ? "match" : "matches"}`;
  resultTitle.textContent = state.query ? "Matches for your request" : "Best matches right now";

  if (!matches.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent =
      "No matches for this exact combination yet. Try opening up the city, theme, budget, or timing while the experience engine collects more inventory.";
    experienceGrid.appendChild(empty);
    return;
  }

  matches.forEach((experience) => experienceGrid.appendChild(createExperienceCard(experience)));
}

function renderDetail() {
  const selected = experiences.find((experience) => experience.id === state.selectedId) || getMatches()[0] || experiences[0];
  const related = experiences
    .filter(
      (experience) =>
        experience.id !== selected.id &&
        (experience.city === selected.city ||
          experience.theme === selected.theme ||
          experience.secondary === selected.theme ||
          selected.tags.some((tag) => experience.tags.includes(tag)))
    )
    .slice(0, 3);

  detailMount.innerHTML = `
    <article class="detail-view">
      <a class="back-link" href="#results">Back to results</a>
      <div class="detail-hero" style="--media-color: ${selected.color}">
        <span class="theme-badge">${selected.theme}</span>
      </div>
      <div class="detail-body">
        <div>
          <p class="eyebrow">${selected.city} · ${selected.area}</p>
          <h2>${selected.title}</h2>
          <p>${selected.detail}</p>
        </div>
        <aside class="detail-panel">
          <dl class="detail-meta">
            <div><dt>When</dt><dd>${selected.date}, ${selected.time}</dd></div>
            <div><dt>Where</dt><dd>${selected.venue}</dd></div>
            <div><dt>Price</dt><dd>${selected.price}</dd></div>
            <div><dt>Format</dt><dd>${selected.format}</dd></div>
            <div><dt>Host</dt><dd>${selected.host}</dd></div>
            <div><dt>Source</dt><dd>${selected.source}</dd></div>
          </dl>
        </aside>
      </div>
      <div class="tag-row">${selected.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <section class="related-block">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Related</p>
            <h2>Keep exploring</h2>
          </div>
        </div>
        <div class="experience-grid">${related.map((experience) => createExperienceCardHTML(experience)).join("")}</div>
      </section>
    </article>
  `;
}

function createExperienceCard(experience) {
  const card = template.content.firstElementChild.cloneNode(true);
  const link = card.querySelector(".card-link");
  link.href = `#detail/${experience.id}`;
  link.addEventListener("click", () => {
    state.selectedId = experience.id;
  });
  hydrateExperienceCard(card, experience);
  return card;
}

function createExperienceCardHTML(experience) {
  return `
    <article class="experience-card">
      <a class="card-link" href="#detail/${experience.id}" onclick="window.outThereSelect('${experience.id}')">
        <div class="card-media" style="--media-color: ${experience.color}">
          <span class="theme-badge">${experience.theme}</span>
        </div>
        <div class="card-body">
          <div class="card-meta">${experience.city} · ${experience.area} · ${experience.date} ${experience.time}</div>
          <h3>${experience.title}</h3>
          <p>${experience.description}</p>
          <div class="card-footer">
            <span>${labelBudget(experience.budget)}</span>
            <span>${experience.format}</span>
            <span>${experience.secondary}</span>
          </div>
        </div>
      </a>
    </article>
  `;
}

function hydrateExperienceCard(card, experience) {
  card.querySelector(".card-media").style.setProperty("--media-color", experience.color);
  card.querySelector(".theme-badge").textContent = experience.theme;
  card.querySelector(".card-meta").textContent = `${experience.city} · ${experience.area} · ${experience.date} ${experience.time}`;
  card.querySelector("h3").textContent = experience.title;
  card.querySelector("p").textContent = experience.description;

  const footer = card.querySelector(".card-footer");
  footer.innerHTML = "";
  [labelBudget(experience.budget), experience.format, experience.secondary].forEach((item) => {
    const tag = document.createElement("span");
    tag.textContent = item;
    footer.appendChild(tag);
  });
}

function labelBudget(value) {
  return {
    Free: "Free",
    Low: "Under Rs 500",
    Mid: "Rs 500 to Rs 1500",
    Premium: "Rs 1500+",
  }[value] || value;
}

function labelTime(value) {
  return value === "weekend" ? "Weekend" : value;
}

function syncFilters() {
  cityFilter.value = state.city;
  themeFilter.value = state.theme;
  budgetFilter.value = state.budget;
  timeFilter.value = state.time;
}

function resetBrief() {
  state.query = "";
  state.city = "all";
  state.theme = "all";
  state.budget = "all";
  state.time = "all";
  state.preferences = {};
  syncFilters();
  render();
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  state.query = `${state.query} ${text}`.trim();
  addMessage("user", text);
  applyPreferences(inferPreferences(text));
  render();
  chatInput.value = "";
  window.setTimeout(assistantReply, 220);
});

document.querySelectorAll(".prompt-chip").forEach((button) => {
  button.addEventListener("click", () => {
    chatInput.value = button.textContent;
    chatForm.requestSubmit();
  });
});

[cityFilter, themeFilter, budgetFilter, timeFilter].forEach((filter) => {
  filter.addEventListener("change", () => {
    state.city = cityFilter.value;
    state.theme = themeFilter.value;
    state.budget = budgetFilter.value;
    state.time = timeFilter.value;
    render();
  });
});

clearFilters.addEventListener("click", resetBrief);

window.addEventListener("hashchange", () => setRoute(normalizeRoute()));

window.outThereSelect = (id) => {
  state.selectedId = id;
};

assistantOpeners.forEach((line) => addMessage("assistant", line));
syncFilters();
setRoute(normalizeRoute());
