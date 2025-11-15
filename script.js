document.addEventListener('DOMContentLoaded', () => {

    // --- 1. OUR DRUG DATABASE (40+ ITEMS) ---
    const drugDatabase = [
        // (Database unchanged)
        // Antibiotics
        { name: "Amoxicillin", category: "Antibiotics", use: "Bacterial infections (e.g., ear infections, strep throat)", sideEffects: "Nausea, vomiting, diarrhea, rash" },
        { name: "Azithromycin", category: "Antibiotics", use: "Bacterial infections (e.g., pneumonia, sinus infections)", sideEffects: "Diarrhea, nausea, abdominal pain" },
        { name: "Ciprofloxacin", category: "Antibiotics", use: "Bacterial infections (e.g., UTI, skin infections)", sideEffects: "Nausea, diarrhea, headache, risk of tendon rupture (rare)" },
        { name: "Doxycycline", category: "Antibiotics", use: "Acne, skin infections, respiratory infections, lyme disease", sideEffects: "Photosensitivity, nausea, stomach upset" },
        { name: "Metronidazole", category: "Antibiotics", use: "Anaerobic bacterial and protozoal infections (e.g., C. diff)", sideEffects: "Metallic taste, nausea, headache, disulfiram-like reaction with alcohol" },
        { name: "Lisinopril", category: "Antihypertensives", use: "High blood pressure, heart failure", sideEffects: "Dry cough, dizziness, headache, fatigue" },
        { name: "Metoprolol", category: "Antihypertensives", use: "High blood pressure, angina, heart failure", sideEffects: "Fatigue, dizziness, shortness of breath, slow heart rate" },
        { name: "Amlodipine", category: "Antihypertensives", use: "High blood pressure, angina", sideEffects: "Swelling (edema) in ankles/feet, dizziness, flushing" },
        { name: "Losartan", category: "Antihypertensives", use: "High blood pressure, diabetic kidney disease", sideEffects: "Dizziness, high potassium levels, back pain" },
        { name: "Hydrochlorothiazide (HCTZ)", category: "Antihypertensives", use: "High blood pressure, fluid retention (edema)", sideEffects: "Dizziness, low potassium, muscle cramps, increased urination" },
        { name: "Ibuprofen", category: "Analgesics (NSAID)", use: "Pain, fever, inflammation", sideEffects: "Stomach upset, heartburn, nausea, risk of GI bleeding" },
        { name: "Paracetamol (Acetaminophen)", category: "Analgesics", use: "Pain, fever", sideEffects: "Generally well-tolerated; liver damage in overdose" },
        { name: "Naproxen", category: "Analgesics (NSAID)", use: "Pain, inflammation (e.g., arthritis)", sideEffects: "Stomach upset, risk of GI bleeding, headache" },
        { name: "Aspirin", category: "Analgesics (NSAID)", use: "Pain, fever, inflammation, antiplatelet (prevent clots)", sideEffects: "Stomach upset, GI bleeding, Reye's syndrome in children" },
        { name: "Tramadol", category: "Analgesics", use: "Moderate to severe pain", sideEffects: "Dizziness, nausea, constipation, risk of serotonin syndrome" },
        { name: "Metformin", category: "Diabetes Drugs", use: "Type 2 diabetes", sideEffects: "Diarrhea, nausea, upset stomach, metallic taste" },
        { name: "Insulin Glargine", category: "Diabetes Drugs", use: "Type 1 and Type 2 diabetes", sideEffects: "Hypoglycemia (low blood sugar), weight gain, injection site reactions" },
        { name: "Gliclazide", category: "Diabetes Drugs", use: "Type 2 diabetes", sideEffects: "Hypoglycemia, weight gain, nausea" },
        { name: "Sitagliptin", category: "Diabetes Drugs", use: "Type 2 diabetes", sideEffects: "Headache, cold-like symptoms, potential for pancreatitis" },
        { name: "Omeprazole", category: "Proton Pump Inhibitors", use: "Acid reflux (GERD), stomach ulcers", sideEffects: "Headache, stomach pain, nausea, diarrhea" },
        { name: "Ranitidine", category: "H2 Blockers", use: "Acid reflux (GERD), stomach ulcers", sideEffects: "Headache, constipation, diarrhea (Note: largely recalled)" },
        { name: "Loperamide", category: "Antidiarrheals", use: "Diarrhea", sideEffects: "Constipation, dizziness, abdominal cramps" },
        { name: "Salbutamol (Albuterol)", category: "Bronchodilators", use: "Asthma, COPD", sideEffects: "Tremor, nervousness, fast heart rate" },
        { name: "Fluticasone", category: "Corticosteroids", use: "Asthma (inhaler), allergies (nasal spray)", sideEffects: "Hoarseness, oral thrush (inhaler), nosebleeds (spray)" },
        { name: "Cetirizine", category: "Antihistamines", use: "Allergies (hay fever)", sideEffects: "Drowsiness (less than others), dry mouth, headache" },
        { name: "Sertraline", category: "Antidepressants (SSRI)", use: "Depression, anxiety, OCD", sideEffects: "Nausea, insomnia, dizziness, sweating" },
        { name: "Diazepam", category: "Benzodiazepines", use: "Anxiety, seizures, muscle spasms, alcohol withdrawal", sideEffects: "Drowsiness, dependence, impaired coordination" },
        { name: "Gabapentin", category: "Anticonvulsants", use: "Seizures, nerve pain", sideEffects: "Dizziness, drowsiness, fatigue" },
        { name: "Atorvastatin", category: "Statins", use: "High blood pressure", sideEffects: "Muscle pain, liver problems (rare), nausea" },
        { name: "Warfarin", category: "Anticoagulants", use: "Prevent blood clots", sideEffects: "Bleeding, bruising, needs regular blood monitoring (INR)" },
        { name: "Furosemide", category: "Diuretics", use: "Fluid retention (edema), high blood pressure", sideEffects: "Dehydration, electrolyte imbalance, dizziness" },
        { name: "Prednisone", category: "Corticosteroids", use: "Inflammation, allergies, asthma", sideEffects: "Weight gain, mood changes, insomnia, high blood sugar" },
        { name: "Clopidogrel", category: "Antiplatelets", use: "Prevent heart attack and stroke", sideEffects: "Bleeding, bruising, stomach upset" },
        { name: "Clark's Rule (Pediatric)", category: "Pharma Formulas", use: "Calculating child's dose based on weight", sideEffects: "Formula: (Weight of child in lbs / 150 lbs) x Adult Dose" },
        { name: "Young's Rule (Pediatric)", category: "Pharma Formulas", use: "Calculating child's dose based on age (1-12 yrs)", sideEffects: "Formula: (Age in years / (Age in years + 12)) x Adult Dose" },
        { name: "Body Surface Area (BSA)", category: "Pharma Formulas", use: "Most accurate dosing, especially for chemo", sideEffects: "Formula: (BSA of child / 1.73 m²) x Adult Dose" },
        { name: "IV Drip Rate (gtt/min)", category: "Pharma Formulas", use: "Calculating flow rate for IV infusions", sideEffects: "Formula: (Total volume in mL / Time in min) x Drop factor" },
        { name: "PO", category: "Medical Abbreviations", use: "Per Os (By mouth)", sideEffects: "Example: 'Take 1 tab PO daily'" },
        { name: "BID", category: "Medical Abbreviations", use: "Bis in die (Twice a day)", sideEffects: "Example: 'Take 1 tab PO BID'" },
        { name: "QID", category: "Medical Abbreviations", use: "Quater in die (Four times a day)", sideEffects: "Example: 'Take 1 tab PO QID'" },
        { name: "PRN", category: "Medical Abbreviations", use: "Pro re nata (As needed)", sideEffects: "Example: 'Take 1-2 tabs PO q4-6h PRN pain'" },
        { name: "STAT", category: "Medical Abbreviations", use: "Statim (Immediately)", sideEffects: "Example: 'Give 500mg IV STAT'" }
    ];

    // --- Motivational Quotes ---
    const motivationalQuotes = [
        "Small steps every day lead to big results.",
        "One drug at a time — you’ve got this.",
        "Strive for progress, not perfection.",
        "The expert in anything was once a beginner.",
        "You don't have to be great to start, but you have to start to be great.",
        "Success is the sum of small efforts, repeated day in and day out.",
        "Keep going. Everything you need will come to you at the perfect time."
    ];

    // --- 2. STATE VARIABLES ---
    let currentCardIndex = 0;
    let currentFilter = 'all';
    let filteredDrugs = [...drugDatabase];
    let isFlipped = false;
    let mastery = JSON.parse(localStorage.getItem('masteryStatus')) || {}; 
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || { important: [], favorite: [], hard: [] };
    let quizQuestions = [];
    let currentQuizQuestionIndex = 0;
    let quizScore = 0;
    let wrongAnswers = [];
    let quizTimerInterval;
    let quizTimeLeft = 30;


    // --- 3. DOM ELEMENT SELECTORS ---
    const navButtons = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view-container');
    const themeToggle = document.getElementById('theme-toggle');
    const motivationalQuoteEl = document.getElementById('motivational-quote');
    const flashcard = document.getElementById('flashcard');
    
    // --- MODIFIED: Point to the new H2 *above* the card ---
    const cardQuestionTitle = document.getElementById('card-question-title'); 
    
    const cardBookmarkIcon = document.getElementById('card-bookmark-icon');
    const drugClass = document.getElementById('drug-class');
    const drugUse = document.getElementById('drug-use');
    const drugEffects = document.getElementById('drug-effects');
    const cardCounter = document.getElementById('card-counter');
    const categoryFiltersContainer = document.getElementById('category-filters');
    const flipButton = document.getElementById('flip-card');
    const nextButton = document.getElementById('next-card');
    const prevButton = document.getElementById('prev-card');
    const markKnownButton = document.getElementById('mark-known');
    const markReviewButton = document.getElementById('mark-review');
    const bookmarkControls = document.querySelector('.bookmark-controls');
    const bookmarkBtns = document.querySelectorAll('.bookmark-btn');
    const progressBar = document.getElementById('progress-bar-inner');
    const progressPercentage = document.getElementById('progress-percentage');
    const progressText = document.getElementById('progress-text');
    const quizStartScreen = document.getElementById('quiz-start-screen');
    const quizQuestionScreen = document.getElementById('quiz-question-screen');
    const quizScoreScreen = document.getElementById('quiz-score-screen');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const startSmartQuizBtn = document.getElementById('start-smart-quiz-btn'); 
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const questionNumber = document.getElementById('question-number');
    const totalQuestions = document.getElementById('total-questions');
    const quizTimer = document.getElementById('quiz-timer');
    const quizScoreEl = document.getElementById('quiz-score');
    const reviewList = document.getElementById('review-list');
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results-container');


    // --- 4. CORE APP FUNCTIONS ---
    // (Unchanged)
    function init() {
        initTheme();
        showRandomQuote();
        addEventListeners();
        createCategoryButtons();
        updateFilteredDrugs();
        updateProgress();
        showCard(0);
    }

    function addEventListeners() {
        themeToggle.addEventListener('change', handleThemeToggle);
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => switchView(btn.dataset.view));
        });
        flipButton.addEventListener('click', flipCard);
        nextButton.addEventListener('click', nextCard);
        prevButton.addEventListener('click', prevCard);
        categoryFiltersContainer.addEventListener('click', handleCategoryClick);
        markKnownButton.addEventListener('click', () => setMasteryStatus('known'));
        markReviewButton.addEventListener('click', () => setMasteryStatus('review'));
        bookmarkControls.addEventListener('click', handleBookmarkClick);
        startQuizBtn.addEventListener('click', () => startQuiz('all'));
        startSmartQuizBtn.addEventListener('click', () => startQuiz('smart'));
        restartQuizBtn.addEventListener('click', () => startQuiz('all'));
        searchInput.addEventListener('input', handleSearch);
    }

    function switchView(viewName) {
        views.forEach(view => view.classList.add('hidden'));
        navButtons.forEach(btn => btn.classList.remove('active'));
        document.getElementById(`${viewName}-view`).classList.remove('hidden');
        document.querySelector(`.nav-btn[data-view="${viewName}"]`).classList.add('active');
    }

    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
        motivationalQuoteEl.textContent = `"${motivationalQuotes[randomIndex]}"`;
    }

    // --- 5. THEME (DARK MODE) FUNCTIONS ---
    // (Unchanged)
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        themeToggle.checked = (savedTheme === 'dark');
    }

    function handleThemeToggle(e) {
        const newTheme = e.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
    }

    function setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }


    // --- 6. STUDY VIEW FUNCTIONS (Flashcards, Progress, Bookmarks) ---

    function createCategoryButtons() {
        // (Unchanged)
        const smartFilters = ['all', '⭐ Important', '❤️ Favorite', '❗ Hard'];
        const dynamicCategories = [...new Set(drugDatabase.map(drug => drug.category))];
        const categories = [...smartFilters, ...dynamicCategories.sort()];
        
        categoryFiltersContainer.innerHTML = '';
        categories.forEach(category => {
            const btn = document.createElement('button');
            btn.className = 'category-btn';
            btn.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            btn.dataset.category = category;
            
            if (category === currentFilter) {
                btn.classList.add('active');
            }
            if (category === 'all') {
                btn.classList.add('category-btn-all');
            }
            categoryFiltersContainer.appendChild(btn);
        });
    }

    function handleCategoryClick(e) {
        // (Unchanged)
        if (e.target.classList.contains('category-btn')) {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.category;
            updateFilteredDrugs();
            showCard(0);
        }
    }

    function updateFilteredDrugs() {
        // (Unchanged)
        switch (currentFilter) {
            case 'all':
                filteredDrugs = [...drugDatabase];
                break;
            case '⭐ Important':
                filteredDrugs = drugDatabase.filter(drug => bookmarks.important.includes(drug.name));
                break;
            case '❤️ Favorite':
                filteredDrugs = drugDatabase.filter(drug => bookmarks.favorite.includes(drug.name));
                break;
            case '❗ Hard':
                filteredDrugs = drugDatabase.filter(drug => bookmarks.hard.includes(drug.name));
                break;
            default:
                filteredDrugs = drugDatabase.filter(drug => drug.category === currentFilter);
        }
        currentCardIndex = 0;
    }

    function showCard(index) {
        if (filteredDrugs.length === 0) {
            // --- MODIFIED: Update the new H2 tag ---
            cardQuestionTitle.textContent = "No cards in this category!";
            
            drugClass.textContent = "-";
            drugUse.textContent = "-";
            drugEffects.textContent = "-";
            cardCounter.textContent = "0 / 0";
            flashcard.classList.remove('known', 'review');
            cardBookmarkIcon.textContent = '';
            updateBookmarkButtonStyles(null);
            return;
        }

        currentCardIndex = (index + filteredDrugs.length) % filteredDrugs.length;
        const drug = filteredDrugs[currentCardIndex];
        const drugName = drug.name;

        // --- MODIFIED: Update the new H2 tag ---
        cardQuestionTitle.textContent = drugName;
        
        drugClass.textContent = drug.category;
        drugUse.textContent = drug.use;
        drugEffects.textContent = drug.sideEffects;
        cardCounter.textContent = `Card ${currentCardIndex + 1} / ${filteredDrugs.length}`;

        if (isFlipped) {
            flipCard();
        }

        flashcard.classList.remove('known', 'review');
        if (mastery[drugName] === 'known') {
            flashcard.classList.add('known');
        } else if (mastery[drugName] === 'review') {
            flashcard.classList.add('review');
        }

        updateBookmarkButtonStyles(drugName);
        updateCardBookmarkIcon(drugName);
    }

    function flipCard() {
        // (Unchanged)
        flashcard.classList.toggle('flipped');
        isFlipped = !isFlipped;
    }

    function nextCard() {
        // (Unchanged)
        showCard(currentCardIndex + 1);
    }

    function prevCard() {
        // (Unchanged)
        showCard(currentCardIndex - 1);
    }

    function setMasteryStatus(status) { 
        // (Unchanged)
        const drugName = filteredDrugs[currentCardIndex].name;
        if (mastery[drugName] === status) {
            delete mastery[drugName];
        } else {
            mastery[drugName] = status;
        }
        localStorage.setItem('masteryStatus', JSON.stringify(mastery));
        updateProgress();
        flashcard.classList.remove('known', 'review');
        if (mastery[drugName] === 'known') {
            flashcard.classList.add('known');
        } else if (mastery[drugName] === 'review') {
            flashcard.classList.add('review');
        }
        setTimeout(nextCard, 300);
    }

    function updateProgress() {
        // (Unchanged)
        const knownCount = Object.values(mastery).filter(s => s === 'known').length;
        const totalCount = drugDatabase.length;
        const percentage = totalCount > 0 ? Math.round((knownCount / totalCount) * 100) : 0;
        
        progressBar.style.width = `${percentage}%`;
        progressPercentage.textContent = `${percentage}%`;
        progressText.textContent = `${knownCount} / ${totalCount} Mastered`;
    }

    function handleBookmarkClick(e) {
        // (Unchanged)
        if (e.target.classList.contains('bookmark-btn')) {
            const type = e.target.dataset.bookmark; 
            const drugName = filteredDrugs[currentCardIndex].name;
            toggleBookmark(type, drugName);
        }
    }

    function toggleBookmark(type, drugName) {
        // (Unchanged)
        const list = bookmarks[type];
        const index = list.indexOf(drugName);
        if (index > -1) {
            list.splice(index, 1); 
        } else {
            list.push(drugName); 
        }
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        updateBookmarkButtonStyles(drugName);
        updateCardBookmarkIcon(drugName);
    }

    function updateBookmarkButtonStyles(drugName) {
        // (Unchanged)
        bookmarkBtns.forEach(btn => {
            const type = btn.dataset.bookmark;
            if (drugName && bookmarks[type].includes(drugName)) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    function updateCardBookmarkIcon(drugName) {
        // (Unchanged)
        if (bookmarks.important.includes(drugName)) {
            cardBookmarkIcon.textContent = '⭐';
        } else if (bookmarks.favorite.includes(drugName)) {
            cardBookmarkIcon.textContent = '❤️';
        } else if (bookmarks.hard.includes(drugName)) {
            cardBookmarkIcon.textContent = '❗';
        } else {
            cardBookmarkIcon.textContent = '';
        }
    }


    // --- 7. QUIZ VIEW FUNCTIONS ---
    // (Unchanged)
    function startQuiz(mode = 'all') {
        quizQuestions = generateQuizQuestions(10, mode);
        
        if (quizQuestions.length === 0) {
            alert("You don't have any cards marked as 'Hard' or 'Review' yet! Study more to unlock the Smart Quiz.");
            return;
        }

        currentQuizQuestionIndex = 0;
        quizScore = 0;
        wrongAnswers = [];
        quizStartScreen.classList.add('hidden');
        quizScoreScreen.classList.add('hidden');
        quizQuestionScreen.classList.remove('hidden');
        totalQuestions.textContent = quizQuestions.length;
        loadQuizQuestion();
    }

    function generateQuizQuestions(numQuestions, mode = 'all') {
        let quizDataSource;

        const allDrivableDrugs = drugDatabase.filter(d => 
            d.category !== "Pharma Formulas" && d.category !== "Medical Abbreviations"
        );

        if (mode === 'smart') {
            const hardCards = bookmarks.hard || [];
            const reviewCards = Object.keys(mastery).filter(key => mastery[key] === 'review');
            const smartSet = new Set([...hardCards, ...reviewCards]);

            if (smartSet.size > 0) {
                quizDataSource = allDrivableDrugs.filter(d => smartSet.has(d.name));
            } else {
                return []; 
            }
        } else {
            quizDataSource = [...allDrivableDrugs];
        }

        const shuffledDrugs = [...quizDataSource].sort(() => 0.5 - Math.random());
        const questions = [];
        
        const numToGenerate = Math.min(numQuestions, shuffledDrugs.length);

        for (let i = 0; i < numToGenerate; i++) {
            const correctDrug = shuffledDrugs[i];
            
            const otherOptions = allDrivableDrugs
                .filter(d => d.name !== correctDrug.name) 
                .sort(() => 0.5 - Math.random()) 
                .slice(0, 3) 
                .map(d => d.name);
                
            const options = [correctDrug.name, ...otherOptions].sort(() => 0.5 - Math.random());
            
            questions.push({
                question: `Which drug is used for: "${correctDrug.use}"?`,
                options: options,
                answer: correctDrug.name,
                correctDrug: correctDrug
            });
        }
        return questions;
    }

    function loadQuizQuestion() {
        if (currentQuizQuestionIndex >= quizQuestions.length) {
            endQuiz();
            return;
        }

        clearInterval(quizTimerInterval);
        quizTimeLeft = 30;
        quizTimer.textContent = `00:${quizTimeLeft < 10 ? '0' : ''}${quizTimeLeft}`;
        quizTimer.style.color = 'var(--warn-color)';
        quizTimerInterval = setInterval(updateQuizTimer, 1000);

        const q = quizQuestions[currentQuizQuestionIndex];
        quizQuestion.textContent = q.question;
        questionNumber.textContent = currentQuizQuestionIndex + 1;

        quizOptions.innerHTML = '';
        q.options.forEach(option => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'quiz-option';
            optionBtn.textContent = option;
            optionBtn.dataset.answer = option;
            optionBtn.addEventListener('click', selectQuizAnswer);
            quizOptions.appendChild(optionBtn);
        });
    }

    function updateQuizTimer() {
        quizTimeLeft--;
        quizTimer.textContent = `00:${quizTimeLeft < 10 ? '0' : ''}${quizTimeLeft}`;
        if (quizTimeLeft <= 10) {
            quizTimer.style.color = 'var(--danger-color)';
        }
        if (quizTimeLeft <= 0) {
            clearInterval(quizTimerInterval);
            handleTimeUp();
        }
    }

    function handleTimeUp() {
        const correctAnswer = quizQuestions[currentQuizQuestionIndex].answer;
        document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.answer === correctAnswer) {
                btn.classList.add('correct');
            }
        });
        wrongAnswers.push(quizQuestions[currentQuizQuestionIndex]);
        setTimeout(() => {
            currentQuizQuestionIndex++;
            loadQuizQuestion();
        }, 1500);
    }

    function selectQuizAnswer(e) {
        clearInterval(quizTimerInterval);
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset.answer;
        const correctAnswer = quizQuestions[currentQuizQuestionIndex].answer;
        document.querySelectorAll('.quiz-option').forEach(btn => btn.disabled = true);

        if (selectedAnswer === correctAnswer) {
            selectedOption.classList.add('correct');
            quizScore++;
        } else {
            selectedOption.classList.add('wrong');
            document.querySelector(`.quiz-option[data-answer="${correctAnswer}"]`).classList.add('correct');
            wrongAnswers.push(quizQuestions[currentQuizQuestionIndex]);
        }
        setTimeout(() => {
            currentQuizQuestionIndex++;
            loadQuizQuestion();
        }, 1500);
    }

    function endQuiz() {
        clearInterval(quizTimerInterval);
        quizQuestionScreen.classList.add('hidden');
        quizScoreScreen.classList.remove('hidden');
        quizScoreEl.textContent = `${quizScore} / ${quizQuestions.length}`;
        reviewList.innerHTML = '';
        if (wrongAnswers.length > 0) {
            reviewList.innerHTML = '';
            wrongAnswers.forEach(q => {
                const li = document.createElement('li');
                li.innerHTML = `Question: "${q.question}"<br>
                              <strong>Your Pick: (Wrong or Timed Out)</strong><br>
                              Correct Answer: <span>${q.answer}</span>`;
                reviewList.appendChild(li);
            });
        } else {
            reviewList.innerHTML = '<li>Congratulations, you got 100%!</li>';
        }
    }


    // --- 8. SEARCH VIEW FUNCTIONS ---
    // (Unchanged)
    function handleSearch() {
        const query = searchInput.value.toLowerCase().trim();
        searchResultsContainer.innerHTML = '';

        if (query.length < 2) {
            searchResultsContainer.innerHTML = `<p style="color: var(--text-color-light);">Keep typing to see results...</p>`;
            return;
        }

        const results = drugDatabase.filter(drug => 
            drug.name.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            searchResultsContainer.innerHTML = '<p style="color: var(--text-color-light);">No drugs found matching your search.</p>';
        } else {
            results.forEach(drug => {
                const resultEl = document.createElement('div');
                resultEl.className = 'search-result-item';
                resultEl.innerHTML = `
                    <h3>${drug.name}</h3>
                    <p><strong>Category:</strong> ${drug.category}</p>
                    <p><strong>Use:</strong> ${drug.use}</p>
                    <p><strong>Side Effects:</strong> ${drug.sideEffects}</p>
                `;
                searchResultsContainer.appendChild(resultEl);
            });
        }
    }


    // --- GO! ---
    init(); // Start the app
});