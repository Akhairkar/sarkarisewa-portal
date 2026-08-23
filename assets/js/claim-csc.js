// claim-csc.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('csc-claim-form');
  const btnNext = document.getElementById('btn-next');
  const btnPrev = document.getElementById('btn-prev');
  const btnSubmit = document.getElementById('btn-submit');
  const wizardFooter = document.getElementById('wizard-footer');
  const progressFill = document.getElementById('progress-fill');
  const steps = document.querySelectorAll('.form-step');
  const indicators = document.querySelectorAll('.step-indicator');
  const btnAutoLocate = document.getElementById('btn-auto-locate');
  const locationStatus = document.getElementById('location-status');
  
  let currentStep = 1;
  const totalSteps = 8;
  
  // Populate Working Hours Grid
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const hoursContainer = document.getElementById('hours-container');
  if (hoursContainer) {
      days.forEach(day => {
          const div = document.createElement('div');
          div.className = 'hours-grid';
          div.innerHTML = `
              <div style="font-weight: 600;">${day}</div>
              <div>
                <select name="status_${day}" class="input-field" style="padding: 6px; width: 100%;">
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                </select>
              </div>
              <div style="display:flex; gap: 4px; align-items:center;">
                  <input type="time" name="open_${day}" class="input-field" style="padding: 4px; flex:1;" value="09:00">
                  <span>-</span>
                  <input type="time" name="close_${day}" class="input-field" style="padding: 4px; flex:1;" value="18:00">
              </div>
          `;
          hoursContainer.appendChild(div);
          
          // Disable times if closed
          const select = div.querySelector(`select[name="status_${day}"]`);
          const times = div.querySelectorAll('input[type="time"]');
          select.addEventListener('change', (e) => {
              if (e.target.value === 'Closed') {
                  times.forEach(t => { t.disabled = true; t.value = ''; });
              } else {
                  times.forEach(t => { t.disabled = false; });
                  times[0].value = '09:00';
                  times[1].value = '18:00';
              }
          });
      });
  }

  // Update UI based on Step
  function updateUI() {
      // Show/Hide steps
      steps.forEach(step => {
          if (step.id === `step-${currentStep}` || (currentStep === 9 && step.id === 'step-success')) {
              step.classList.add('active');
          } else {
              step.classList.remove('active');
          }
      });
      
      if (currentStep > totalSteps) {
          wizardFooter.style.display = 'none';
          document.querySelector('.progress-bar').style.display = 'none';
          return;
      }
      
      // Update Progress Bar
      const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
      progressFill.style.width = `${percentage}%`;
      
      // Update Indicators
      indicators.forEach(ind => {
          const s = parseInt(ind.dataset.step);
          ind.classList.remove('active', 'completed');
          if (s < currentStep) {
              ind.classList.add('completed');
          } else if (s === currentStep) {
              ind.classList.add('active');
          }
      });
      
      // Buttons
      btnPrev.style.visibility = currentStep === 1 ? 'hidden' : 'visible';
      
      if (currentStep === totalSteps) {
          btnNext.style.display = 'none';
          btnSubmit.style.display = 'inline-flex';
          generateReviewSummary();
      } else {
          btnNext.style.display = 'inline-flex';
          btnSubmit.style.display = 'none';
      }
      
      // Scroll to top
      window.scrollTo({ top: document.querySelector('.wizard-container').offsetTop - 20, behavior: 'smooth' });
  }

  // Validate current step fields
  function validateStep() {
      const currentStepEl = document.getElementById(`step-${currentStep}`);
      const inputs = currentStepEl.querySelectorAll('input[required], select[required], textarea[required]');
      let isValid = true;
      inputs.forEach(input => {
          if (!input.checkValidity()) {
              input.reportValidity();
              isValid = false;
          }
      });
      return isValid;
  }

  btnNext.addEventListener('click', () => {
      if (validateStep()) {
          currentStep++;
          updateUI();
      }
  });

  btnPrev.addEventListener('click', () => {
      currentStep--;
      updateUI();
  });

  // Generate Review Summary (Step 8)
  function generateReviewSummary() {
      const formData = new FormData(form);
      const reviewDiv = document.getElementById('review-content');
      
      const getVal = (name) => formData.get(name) || 'N/A';
      
      const onlineServices = formData.getAll('online_services').join(', ') || 'None';
      const offlineServices = formData.getAll('offline_services').join(', ') || 'None';
      const customServices = getVal('custom_services') || 'None';

      reviewDiv.innerHTML = `
          <div class="summary-card">
              <h4>Owner Information</h4>
              <div class="summary-row"><span class="summary-label">Name:</span><span class="summary-value">${getVal('owner_name')}</span></div>
              <div class="summary-row"><span class="summary-label">Mobile:</span><span class="summary-value">${getVal('owner_mobile')}</span></div>
              <div class="summary-row"><span class="summary-label">Email:</span><span class="summary-value">${getVal('owner_email')}</span></div>
          </div>
          
          <div class="summary-card">
              <h4>CSC Information</h4>
              <div class="summary-row"><span class="summary-label">Centre Name:</span><span class="summary-value">${getVal('centre_name')}</span></div>
              <div class="summary-row"><span class="summary-label">CSC ID:</span><span class="summary-value">${getVal('csc_id')}</span></div>
              <div class="summary-row"><span class="summary-label">Type:</span><span class="summary-value">${getVal('centre_type')}</span></div>
          </div>
          
          <div class="summary-card">
              <h4>Address</h4>
              <div class="summary-row"><span class="summary-label">State:</span><span class="summary-value">${getVal('state')}</span></div>
              <div class="summary-row"><span class="summary-label">District:</span><span class="summary-value">${getVal('district')}</span></div>
              <div class="summary-row"><span class="summary-label">City:</span><span class="summary-value">${getVal('city')}</span></div>
              <div class="summary-row"><span class="summary-label">PIN:</span><span class="summary-value">${getVal('pincode')}</span></div>
              <div class="summary-row"><span class="summary-label">Full Address:</span><span class="summary-value">${getVal('full_address')}</span></div>
          </div>
          
          <div class="summary-card">
              <h4>Services</h4>
              <div class="summary-row"><span class="summary-label">Online:</span><span class="summary-value">${onlineServices}</span></div>
              <div class="summary-row"><span class="summary-label">Offline:</span><span class="summary-value">${offlineServices}</span></div>
              <div class="summary-row"><span class="summary-label">Custom:</span><span class="summary-value">${customServices}</span></div>
          </div>
      `;
  }

  // Auto Locate
  if (btnAutoLocate) {
      btnAutoLocate.addEventListener('click', () => {
          if (!navigator.geolocation) {
              alert("Geolocation not supported.");
              return;
          }
          btnAutoLocate.innerText = "⏳ Locating...";
          
          navigator.geolocation.getCurrentPosition(
              async (pos) => {
                  const lat = pos.coords.latitude;
                  const lon = pos.coords.longitude;
                  
                  document.getElementById('lat-input').value = lat;
                  document.getElementById('lng-input').value = lon;
                  
                  try {
                      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
                      const data = await res.json();
                      if (data && data.address) {
                          if(data.address.state) document.querySelector('[name="state"]').value = data.address.state;
                          if(data.address.state_district || data.address.county) document.querySelector('[name="district"]').value = data.address.state_district || data.address.county;
                          if(data.address.city || data.address.town || data.address.village) document.querySelector('[name="city"]').value = data.address.city || data.address.town || data.address.village;
                          if(data.address.postcode) document.querySelector('[name="pincode"]').value = data.address.postcode;
                          if(data.address.suburb) document.querySelector('[name="locality"]').value = data.address.suburb;
                          
                          locationStatus.style.display = 'block';
                      }
                  } catch (e) {
                      console.error(e);
                  } finally {
                      btnAutoLocate.innerText = "📍 Use My Location to Auto-fill Address";
                  }
              },
              (err) => {
                  alert("Location access denied.");
                  btnAutoLocate.innerText = "📍 Use My Location to Auto-fill Address";
              }
          );
      });
  }

  // Handle privacy checkbox toggles
  document.querySelector('[name="public_show_mobile"]').addEventListener('change', (e) => {
      document.getElementById('public-phone-input').style.display = e.target.checked ? 'block' : 'none';
  });
  document.querySelector('[name="public_show_whatsapp"]').addEventListener('change', (e) => {
      document.getElementById('public-wa-input').style.display = e.target.checked ? 'block' : 'none';
  });
  document.querySelector('[name="public_show_email"]').addEventListener('change', (e) => {
      document.getElementById('public-email-input').style.display = e.target.checked ? 'block' : 'none';
  });

  // Submit to Supabase
  form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const consent = document.getElementById('consent-check');
      if (!consent.checked) {
          alert("Please agree to the declaration in Step 7.");
          return;
      }

      btnSubmit.disabled = true;
      btnSubmit.innerText = "Submitting...";
      const errorDiv = document.getElementById('submit-error');
      errorDiv.style.display = 'none';

      try {
          const SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co";
          const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I";
          
          if (!window.supabase) {
              throw new Error("Supabase library not loaded.");
          }
          const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
          
          const fd = new FormData(form);
          
          // Construct working hours JSON
          let workingHours = {};
          days.forEach(day => {
              workingHours[day] = {
                  status: fd.get(`status_${day}`),
                  open: fd.get(`open_${day}`),
                  close: fd.get(`close_${day}`)
              };
          });

          // Custom services processing
          let customServicesArr = [];
          if (fd.get('custom_services')) {
              customServicesArr = fd.get('custom_services').split(',').map(s => s.trim()).filter(s => s);
          }

          // Generate a random App ID
          const appId = "CSC-" + new Date().getFullYear() + "-" + Math.floor(100000 + Math.random() * 900000);

          const payload = {
              application_id: appId,
              owner_name: fd.get('owner_name'),
              owner_mobile: fd.get('owner_mobile'),
              owner_email: fd.get('owner_email'),
              alternate_contact: fd.get('alternate_contact') || null,
              
              centre_name: fd.get('centre_name'),
              csc_id: fd.get('csc_id') || null,
              centre_type: fd.get('centre_type'),
              existing_profile_url: fd.get('existing_profile_url') || null,
              years_of_operation: fd.get('years_of_operation') ? parseInt(fd.get('years_of_operation')) : null,
              
              full_address: fd.get('full_address'),
              building_shop: fd.get('building_shop') || null,
              locality: fd.get('locality'),
              city: fd.get('city'),
              district: fd.get('district'),
              state: fd.get('state'),
              pincode: fd.get('pincode'),
              latitude: fd.get('latitude') ? parseFloat(fd.get('latitude')) : null,
              longitude: fd.get('longitude') ? parseFloat(fd.get('longitude')) : null,
              
              online_services: fd.getAll('online_services'),
              offline_services: fd.getAll('offline_services'),
              custom_services: customServicesArr,
              
              working_hours: workingHours,
              home_visit: fd.get('home_visit') === 'true',
              appointment_required: fd.get('appointment_required') === 'true',
              
              public_phone: fd.get('public_show_mobile') ? (fd.get('public_phone') || fd.get('owner_mobile')) : null,
              public_whatsapp: fd.get('public_show_whatsapp') ? fd.get('public_whatsapp') : null,
              public_email: fd.get('public_show_email') ? fd.get('public_email') : null,
              show_hours: fd.get('show_hours') === 'on',
              show_address: fd.get('show_address') === 'on',
              
              consent_given: true,
              status: 'pending'
          };

          const { error } = await supabase.from('csc_claims').insert([payload]);

          if (error) {
              throw error;
          }

          // Show Success
          document.getElementById('ref-id-display').innerText = appId;
          currentStep = 9; // Show step-success
          updateUI();
          
      } catch (err) {
          console.error("Submission error", err);
          errorDiv.innerText = "Error submitting application: " + err.message;
          errorDiv.style.display = 'block';
          btnSubmit.disabled = false;
          btnSubmit.innerText = "Submit Claim";
      }
  });

});
