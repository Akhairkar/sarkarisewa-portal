// pan-aadhaar-resolver.js

document.addEventListener("DOMContentLoaded", () => {
  const step1 = document.getElementById("step-1");
  const step2 = document.getElementById("step-2");
  const resultBox = document.getElementById("result-box");
  const resultContent = document.getElementById("dynamic-result-content");

  let issueType = null;
  let correctDoc = null;

  // Step 1 buttons
  const issueBtns = step1.querySelectorAll(".option-btn");
  issueBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Clear selections
      issueBtns.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      issueType = btn.getAttribute("data-issue");

      // Logic routing
      if (issueType === "payment") {
        showPaymentStuckResult();
      } else {
        goToStep(2);
      }
    });
  });

  // Step 2 buttons
  const correctBtns = step2.querySelectorAll(".option-btn");
  correctBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      correctBtns.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      correctDoc = btn.getAttribute("data-correct");
      
      showMismatchResult();
    });
  });

  window.goToStep = (stepNumber) => {
    step1.classList.remove("active");
    step2.classList.remove("active");
    resultBox.classList.remove("active");

    if (stepNumber === 1) {
      step1.classList.add("active");
      issueType = null;
      correctDoc = null;
      issueBtns.forEach(b => b.classList.remove("selected"));
      correctBtns.forEach(b => b.classList.remove("selected"));
    } else if (stepNumber === 2) {
      step2.classList.add("active");
    }
  };

  function showPaymentStuckResult() {
    step1.classList.remove("active");
    step2.classList.remove("active");
    resultBox.classList.add("active");

    resultContent.innerHTML = `
      <div class="result-step">
        <h4>${window.t ? window.t({en:"1. Wait 4-5 Working Days", hi:"1. 4-5 दिन इंतज़ार करें"}) : "1. Wait 4-5 Working Days"}</h4>
        <p>${window.t ? window.t({en:"If you have paid the ₹1000 penalty on the e-Filing portal via e-Pay Tax, it usually takes 4-5 working days for the payment to reflect against your PAN. Do not pay again immediately.", hi:"यदि आपने e-Pay Tax के माध्यम से ₹1000 पेनल्टी का भुगतान किया है, तो उसे आपके पैन से लिंक होने में 4-5 दिन लग सकते हैं। कृपया दोबारा तुरंत भुगतान न करें।"}) : "If you have paid the ₹1000 penalty on the e-Filing portal via e-Pay Tax, it usually takes 4-5 working days for the payment to reflect against your PAN. Do not pay again immediately."}</p>
      </div>
      <div class="result-step">
        <h4>${window.t ? window.t({en:"2. Verify Payment Details", hi:"2. पेमेंट की जानकारी चेक करें"}) : "2. Verify Payment Details"}</h4>
        <p>${window.t ? window.t({en:"Check your Challan 280 receipt. The payment MUST be made under <strong>Major Head 0021 (Income Taxes)</strong> and <strong>Minor Head 500 (Other Receipts)</strong>. If you selected the wrong heads, the payment will not be considered valid for linking.", hi:"अपनी Challan 280 रसीद चेक करें। पेमेंट हमेशा <strong>Major Head 0021 (Income Taxes)</strong> और <strong>Minor Head 500 (Other Receipts)</strong> के तहत होनी चाहिए। गलत विकल्प चुनने पर पेमेंट अमान्य हो जाएगी।"}) : "Check your Challan 280 receipt. The payment MUST be made under <strong>Major Head 0021 (Income Taxes)</strong> and <strong>Minor Head 500 (Other Receipts)</strong>. If you selected the wrong heads, the payment will not be considered valid for linking."}</p>
      </div>
      <div class="result-step">
        <h4>${window.t ? window.t({en:"3. Submit Linking Request", hi:"3. लिंकिंग की रिक्वेस्ट दोबारा भेजें"}) : "3. Submit Linking Request"}</h4>
        <p>${window.t ? window.t({en:"Once 4-5 days have passed, go back to the e-Filing portal, click 'Link Aadhaar', and enter your details. The portal should now automatically detect your challan and allow you to submit the final linking request to UIDAI.", hi:"4-5 दिन बीत जाने के बाद ई-फाइलिंग पोर्टल पर 'Link Aadhaar' पर क्लिक करें। अब पोर्टल आपका चालान खुद-ब-खुद डिटेक्ट कर लेगा और आप रिक्वेस्ट भेज पाएंगे।"}) : "Once 4-5 days have passed, go back to the e-Filing portal, click 'Link Aadhaar', and enter your details. The portal should now automatically detect your challan and allow you to submit the final linking request to UIDAI."}</p>
        <a href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar" target="_blank" class="official-link">${window.t ? window.t({en:"Go to e-Filing Portal ⭷", hi:"ई-फाइलिंग पोर्टल पर जाएँ ⭷"}) : "Go to e-Filing Portal ⭷"}</a>
      </div>
    `;
  }

  function showMismatchResult() {
    step1.classList.remove("active");
    step2.classList.remove("active");
    resultBox.classList.add("active");

    let issueTextEn = "Details";
    let issueTextHi = "जानकारी";
    
    if (issueType === "name") { issueTextEn = "Name"; issueTextHi = "नाम"; }
    if (issueType === "dob") { issueTextEn = "Date of Birth"; issueTextHi = "जन्म तिथि"; }
    if (issueType === "gender") { issueTextEn = "Gender"; issueTextHi = "लिंग"; }

    if (correctDoc === "aadhaar") {
      resultContent.innerHTML = `
        <div class="result-step">
          <h4>${window.t ? window.t({en:"1. Update your PAN Card online", hi:"1. अपना पैन कार्ड ऑनलाइन अपडेट करें"}) : "1. Update your PAN Card online"}</h4>
          <p>${window.t ? window.t({
            en: `Since your Aadhaar has the correct ${issueTextEn}, you must update your PAN to match your Aadhaar. You can do this online easily because Aadhaar e-KYC can be used as proof for the PAN update.`,
            hi: `चूंकि आपके आधार कार्ड में ${issueTextHi} सही है, इसलिए आपको अपना पैन कार्ड आधार के अनुसार अपडेट करवाना होगा। आप आधार e-KYC की मदद से यह घर बैठे ऑनलाइन कर सकते हैं।`
          }) : `Since your Aadhaar has the correct ${issueTextEn}, you must update your PAN to match your Aadhaar. You can do this online easily because Aadhaar e-KYC can be used as proof for the PAN update.`}</p>
          <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" class="official-link">${window.t ? window.t({en:"Apply for PAN Correction (NSDL) ⭷", hi:"पैन कार्ड अपडेट के लिए अप्लाई करें (NSDL) ⭷"}) : "Apply for PAN Correction (NSDL) ⭷"}</a>
        </div>
        <div class="result-step">
          <h4>${window.t ? window.t({en:"2. Wait for the New PAN Card", hi:"2. नए पैन कार्ड का इंतज़ार करें"}) : "2. Wait for the New PAN Card"}</h4>
          <p>${window.t ? window.t({en:"It typically takes 7-15 days for the updated PAN details to reflect in the Income Tax database. Wait until you receive confirmation.", hi:"इनकम टैक्स डेटाबेस में नई जानकारी अपडेट होने में आमतौर पर 7-15 दिन लगते हैं। कन्फर्मेशन का इंतज़ार करें।"}) : "It typically takes 7-15 days for the updated PAN details to reflect in the Income Tax database. Wait until you receive confirmation."}</p>
        </div>
        <div class="result-step">
          <h4>${window.t ? window.t({en:"3. Retry Linking", hi:"3. दोबारा लिंक करने की कोशिश करें"}) : "3. Retry Linking"}</h4>
          <p>${window.t ? window.t({en:"Once updated, return to the Income Tax e-Filing portal and try linking again. Your mismatch error will be resolved.", hi:"अपडेट होने के बाद ई-फाइलिंग पोर्टल पर वापस जाएँ और फिर से लिंक करें। अब आपका मिसमैच एरर खत्म हो जाएगा।"}) : "Once updated, return to the Income Tax e-Filing portal and try linking again. Your mismatch error will be resolved."}</p>
          <a href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar" target="_blank" class="official-link">${window.t ? window.t({en:"Go to e-Filing Portal ⭷", hi:"ई-फाइलिंग पोर्टल पर जाएँ ⭷"}) : "Go to e-Filing Portal ⭷"}</a>
        </div>
      `;
    } else if (correctDoc === "pan") {
      resultContent.innerHTML = `
        <div class="result-step">
          <h4>${window.t ? window.t({en:"1. Update your Aadhaar details", hi:"1. अपनी आधार जानकारी अपडेट करें"}) : "1. Update your Aadhaar details"}</h4>
          <p>${window.t ? window.t({
            en: `Since your PAN has the correct ${issueTextEn}, you must update your Aadhaar. For Name or Gender updates, you can apply online if your mobile number is linked. For Date of Birth updates, you may need to visit an Aadhaar Enrollment Center.`,
            hi: `चूंकि आपके पैन कार्ड में ${issueTextHi} सही है, इसलिए आपको अपना आधार कार्ड अपडेट करवाना होगा। नाम या लिंग के लिए आप ऑनलाइन अप्लाई कर सकते हैं (अगर मोबाइल लिंक है)। जन्म तिथि बदलने के लिए आपको नज़दीकी आधार केंद्र जाना पड़ सकता है।`
          }) : `Since your PAN has the correct ${issueTextEn}, you must update your Aadhaar. For Name or Gender updates, you can apply online if your mobile number is linked. For Date of Birth updates, you may need to visit an Aadhaar Enrollment Center.`}</p>
          <a href="https://myaadhaar.uidai.gov.in/" target="_blank" class="official-link">${window.t ? window.t({en:"Update Aadhaar Online (UIDAI) ⭷", hi:"आधार कार्ड ऑनलाइन अपडेट करें (UIDAI) ⭷"}) : "Update Aadhaar Online (UIDAI) ⭷"}</a>
        </div>
        <div class="result-step">
          <h4>${window.t ? window.t({en:"2. Wait for Aadhaar Generation", hi:"2. नया आधार जनरेट होने का इंतज़ार करें"}) : "2. Wait for Aadhaar Generation"}</h4>
          <p>${window.t ? window.t({en:"Aadhaar updates generally take 3-15 days. Check the status online using your URN. Do not attempt linking until the new details are visible in your downloaded e-Aadhaar.", hi:"आधार अपडेट में 3-15 दिन लगते हैं। अपना URN इस्तेमाल करके स्टेटस चेक करते रहें। जब तक नया ई-आधार डाउनलोड न हो जाए, लिंक करने की कोशिश न करें।"}) : "Aadhaar updates generally take 3-15 days. Check the status online using your URN. Do not attempt linking until the new details are visible in your downloaded e-Aadhaar."}</p>
        </div>
        <div class="result-step">
          <h4>${window.t ? window.t({en:"3. Retry Linking", hi:"3. दोबारा लिंक करने की कोशिश करें"}) : "3. Retry Linking"}</h4>
          <p>${window.t ? window.t({en:"Once updated, return to the Income Tax e-Filing portal and try linking again.", hi:"अपडेट होने के बाद ई-फाइलिंग पोर्टल पर वापस जाएँ और फिर से लिंक करें।"}) : "Once updated, return to the Income Tax e-Filing portal and try linking again."}</p>
          <a href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar" target="_blank" class="official-link">${window.t ? window.t({en:"Go to e-Filing Portal ⭷", hi:"ई-फाइलिंग पोर्टल पर जाएँ ⭷"}) : "Go to e-Filing Portal ⭷"}</a>
        </div>
      `;
    } else {
      resultContent.innerHTML = `
        <div class="result-step">
          <h4>${window.t ? window.t({en:"1. Update Aadhaar First", hi:"1. सबसे पहले आधार अपडेट करें"}) : "1. Update Aadhaar First"}</h4>
          <p>${window.t ? window.t({
            en: `Always update your Aadhaar first using your 10th marksheet or birth certificate. Aadhaar takes time and is the foundation for e-KYC.`,
            hi: `हमेशा अपनी 10वीं की मार्कशीट या जन्म प्रमाण पत्र की मदद से सबसे पहले अपना आधार अपडेट करवाएं। आधार ही e-KYC की बुनियाद है।`
          }) : `Always update your Aadhaar first using your 10th marksheet or birth certificate. Aadhaar takes time and is the foundation for e-KYC.`}</p>
          <a href="https://myaadhaar.uidai.gov.in/" target="_blank" class="official-link">${window.t ? window.t({en:"Update Aadhaar (UIDAI) ⭷", hi:"आधार कार्ड अपडेट करें (UIDAI) ⭷"}) : "Update Aadhaar (UIDAI) ⭷"}</a>
        </div>
        <div class="result-step">
          <h4>${window.t ? window.t({en:"2. Update PAN using new Aadhaar", hi:"2. नए आधार की मदद से पैन अपडेट करें"}) : "2. Update PAN using new Aadhaar"}</h4>
          <p>${window.t ? window.t({
            en: `Once your Aadhaar is corrected, use the new Aadhaar details as proof to update your PAN card online.`,
            hi: `एक बार आधार सही हो जाए, तो उसी नए आधार को प्रूफ के तौर पर लगाकर ऑनलाइन अपना पैन कार्ड अपडेट करें।`
          }) : `Once your Aadhaar is corrected, use the new Aadhaar details as proof to update your PAN card online.`}</p>
          <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" class="official-link">${window.t ? window.t({en:"Apply for PAN Correction ⭷", hi:"पैन कार्ड अपडेट के लिए अप्लाई करें ⭷"}) : "Apply for PAN Correction ⭷"}</a>
        </div>
        <div class="result-step">
          <h4>${window.t ? window.t({en:"3. Final Linking", hi:"3. अंतिम लिंकिंग"}) : "3. Final Linking"}</h4>
          <p>${window.t ? window.t({
            en: `Once both documents reflect the exact same ${issueTextEn}, log into the Income Tax portal and link them.`,
            hi: `जब दोनों डॉक्यूमेंट्स में आपका ${issueTextHi} बिल्कुल एक जैसा हो जाए, तो इनकम टैक्स पोर्टल पर जाकर उन्हें लिंक कर दें।`
          }) : `Once both documents reflect the exact same ${issueTextEn}, log into the Income Tax portal and link them.`}</p>
        </div>
      `;
    }
  }
  
  // Listen for language changes to re-render the result block if it's visible
  document.addEventListener("ss:language-changed", () => {
    if (resultBox.classList.contains("active")) {
      if (issueType === "payment") {
        showPaymentStuckResult();
      } else {
        showMismatchResult();
      }
    }
  });
});
