// typing-test.js

document.addEventListener('DOMContentLoaded', () => {
  const textDisplay = document.getElementById('text-display');
  const typeInput = document.getElementById('type-input');
  const timerDisplay = document.getElementById('type-timer');
  const btnRestart = document.getElementById('btn-restart');
  const langSelect = document.getElementById('type-lang');
  const timeSelect = document.getElementById('type-time');
  const statsPanel = document.getElementById('stats-panel');
  
  const statWPM = document.getElementById('stat-wpm');
  const statAcc = document.getElementById('stat-acc');
  const statErr = document.getElementById('stat-err');
  const statCPM = document.getElementById('stat-cpm');

  const TEXTS = {
    en: [
      "The Union Public Service Commission is India's premier central recruitment agency for the recruitment of all the Group A officers under Government of India. It is responsible for appointments to and examinations for all of the Group A posts of the central government establishments which also includes the central public sector undertakings and the central autonomous bodies. The commission is headquartered at Dholpur House, in New Delhi and functions through its own secretariat.",
      "The Constitution of India provides for the establishment of a Public Service Commission for the Union and a Public Service Commission for each State. The Union Public Service Commission has been established under Article 315 of the Constitution. The Commission consists of a Chairman and other Members appointed by the President of India. The terms and conditions of service of Chairman and Members of the Commission are governed by the Union Public Service Commission Regulations.",
      "Information and Communication Technology has brought about a paradigm shift in the functioning of the Government. It has become an essential tool for delivering public services in an efficient, transparent and accountable manner. The Digital India programme is a flagship programme of the Government of India with a vision to transform India into a digitally empowered society and knowledge economy."
    ],
    hi: [
      "संघ लोक सेवा आयोग भारत सरकार के अधीन सभी ग्रुप ए अधिकारियों की भर्ती के लिए भारत की प्रमुख केंद्रीय भर्ती एजेंसी है। यह केंद्र सरकार के प्रतिष्ठानों के सभी ग्रुप ए पदों के लिए नियुक्तियों और परीक्षाओं के लिए जिम्मेदार है, जिसमें केंद्रीय सार्वजनिक क्षेत्र के उपक्रम और केंद्रीय स्वायत्त निकाय भी शामिल हैं। आयोग का मुख्यालय नई दिल्ली में धौलपुर हाउस में है और यह अपने स्वयं के सचिवालय के माध्यम से कार्य करता है।",
      "भारत का संविधान संघ के लिए एक लोक सेवा आयोग और प्रत्येक राज्य के लिए एक लोक सेवा आयोग की स्थापना का प्रावधान करता है। संघ लोक सेवा आयोग की स्थापना संविधान के अनुच्छेद 315 के तहत की गई है। आयोग में भारत के राष्ट्रपति द्वारा नियुक्त एक अध्यक्ष और अन्य सदस्य होते हैं। आयोग के अध्यक्ष और सदस्यों की सेवा की शर्तें और नियम संघ लोक सेवा आयोग विनियमों द्वारा शासित होते हैं।",
      "सूचना और संचार प्रौद्योगिकी ने सरकार के कामकाज में एक आदर्श बदलाव लाया है। यह पारदर्शी और जवाबदेह तरीके से सार्वजनिक सेवाएं प्रदान करने के लिए एक आवश्यक उपकरण बन गया है। डिजिटल इंडिया कार्यक्रम भारत सरकार का एक प्रमुख कार्यक्रम है जिसका दृष्टिकोण भारत को डिजिटल रूप से सशक्त समाज और ज्ञान अर्थव्यवस्था में बदलना है।"
    ]
  };

  let currentLang = 'en';
  let maxTime = 60;
  let timeLeft = 60;
  let timer = null;
  let isTesting = false;
  
  let targetWords = [];
  let typedWords = [];
  
  // Initialize Test
  function initTest() {
    clearInterval(timer);
    isTesting = false;
    currentLang = langSelect.value;
    maxTime = parseInt(timeSelect.value);
    timeLeft = maxTime;
    
    updateTimerDisplay();
    typeInput.value = '';
    typeInput.disabled = false;
    
    // Pick random text and repeat it to ensure enough length
    let baseText = TEXTS[currentLang][Math.floor(Math.random() * TEXTS[currentLang].length)];
    let fullText = baseText + " " + baseText + " " + baseText;
    
    targetWords = fullText.split(/\s+/).filter(w => w.length > 0);
    typedWords = [];
    
    renderText();
    
    statsPanel.style.display = 'none';
  }
  
  function renderText() {
    textDisplay.innerHTML = '';
    targetWords.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.id = `word-${index}`;
      if (index === 0) span.classList.add('word-current');
      textDisplay.appendChild(span);
    });
    // Scroll to top
    textDisplay.scrollTop = 0;
  }
  
  function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const secs = (timeLeft % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${mins}:${secs}`;
  }
  
  function startTimer() {
    if (isTesting) return;
    isTesting = true;
    statsPanel.style.display = 'grid';
    
    timer = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      calculateStats();
      
      if (timeLeft <= 0) {
        endTest();
      }
    }, 1000);
  }
  
  function endTest() {
    clearInterval(timer);
    isTesting = false;
    typeInput.disabled = true;
    calculateStats(true); // final calculation
  }
  
  function calculateStats(isFinal = false) {
    const timeElapsed = maxTime - timeLeft;
    if (timeElapsed === 0) return;
    
    let totalCharsTyped = 0;
    let errorCount = 0;
    let correctChars = 0;
    
    const wordsInput = typeInput.value.trim().split(/\s+/);
    if (wordsInput.length === 1 && wordsInput[0] === '') wordsInput.pop();
    
    wordsInput.forEach((word, index) => {
      if (index >= targetWords.length) return;
      
      const targetWord = targetWords[index];
      totalCharsTyped += word.length + 1; // +1 for space
      
      if (word === targetWord) {
        correctChars += word.length + 1;
      } else {
        errorCount++;
      }
    });
    
    // Exam Formula (1 word = 5 chars)
    const minutesElapsed = timeElapsed / 60;
    const grossWPM = (totalCharsTyped / 5) / minutesElapsed;
    const netWPM = Math.max(0, grossWPM - (errorCount / minutesElapsed));
    const cpm = totalCharsTyped / minutesElapsed;
    
    const accuracy = totalCharsTyped > 0 ? (correctChars / totalCharsTyped) * 100 : 0;
    
    statWPM.textContent = Math.round(netWPM);
    statCPM.textContent = Math.round(cpm);
    statErr.textContent = errorCount;
    statAcc.textContent = Math.round(accuracy) + '%';
  }
  
  // Handle Input
  typeInput.addEventListener('input', (e) => {
    startTimer();
    
    const inputText = typeInput.value;
    const wordsInput = inputText.split(/\s+/);
    
    // Remove last empty word if ending with space
    const isEndingSpace = inputText.endsWith(' ') || inputText.endsWith('\n');
    let currentWordIndex = isEndingSpace ? wordsInput.length - 1 : wordsInput.length - 1;
    if (currentWordIndex < 0) currentWordIndex = 0;
    
    // Update highlights
    targetWords.forEach((word, index) => {
      const span = document.getElementById(`word-${index}`);
      if (!span) return;
      
      span.className = '';
      
      if (index < currentWordIndex || (index === currentWordIndex && isEndingSpace)) {
        // Word is submitted
        const typedWord = wordsInput[index];
        if (typedWord === targetWords[index]) {
          span.classList.add('word-correct');
        } else {
          span.classList.add('word-incorrect');
        }
      } else if (index === currentWordIndex && !isEndingSpace) {
        // Currently typing
        span.classList.add('word-current');
      }
    });
    
    // Auto-scroll logic
    const currentSpan = document.getElementById(`word-${currentWordIndex}`);
    if (currentSpan) {
      const spanTop = currentSpan.offsetTop;
      const containerScrollTop = textDisplay.scrollTop;
      const containerHeight = textDisplay.clientHeight;
      
      // If the word goes past the middle of the container, scroll so it stays near the middle
      if (spanTop > containerScrollTop + (containerHeight / 2)) {
        textDisplay.scrollTop = spanTop - (containerHeight / 3);
      } else if (spanTop < containerScrollTop) {
        textDisplay.scrollTop = spanTop - 20;
      }
    }
    
    // Prevent pasting
    if (e.inputType === 'insertFromPaste') {
      typeInput.value = '';
      alert('Pasting is not allowed in a typing test!');
    }
  });

  // Event Listeners
  btnRestart.addEventListener('click', initTest);
  langSelect.addEventListener('change', initTest);
  timeSelect.addEventListener('change', initTest);

  // Init on load
  initTest();
});
