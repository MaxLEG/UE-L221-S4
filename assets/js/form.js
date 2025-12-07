// AS: script for week 3 & 4, reworked to be cleaner and more robust
document.addEventListener("DOMContentLoaded", () => {
  // AS: part 1 - video interaction logic
  const container = document.getElementById("video-interface-container");
  
  if (container) {
      // MF: creating the main trigger button dynamically
      const btnShow = document.createElement("button");
      btnShow.textContent = "Découvrez nos services";
      // AS: using bootstrap classes but keeping it simple, no heavy shadows
      btnShow.className = "btn btn-info btn-lg text-white transition-all";
      
      // AS: creating the wrapper for the video content
      const videoWrapper = document.createElement("div");
      // MF: using ratio-16x9 for proper video sizing, removed shadow-lg for a flatter look
      videoWrapper.className = "ratio ratio-16x9 mt-4 rounded overflow-hidden";
      videoWrapper.style.display = "none"; // AS: hidden by default

      // AS: creating the iframe element
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/2wz_DS5lZGI?si=q2sEwCXKAdfgUAPp";
      iframe.title = "YouTube video player";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      
      videoWrapper.appendChild(iframe);

      // AS: creating the hide button
      const btnHide = document.createElement("button");
      btnHide.textContent = "Masquer la vidéo";
      btnHide.className = "btn btn-secondary btn-lg mt-3";
      btnHide.style.display = "none"; // AS: hidden by default

      // AS: injecting elements into the dom
      container.appendChild(btnShow);
      container.appendChild(videoWrapper);
      container.appendChild(btnHide);

      // MF: interaction logic using jquery for smooth sliding effects
      
      $(btnShow).on("click", function() {
        // hide the trigger button
        $(this).hide();
        
        // slide the video down smoothly
        $(videoWrapper).slideDown(800, "swing");
        
        // show the hide button
        $(btnHide).fadeIn();
      });

      $(btnHide).on("click", function() {
        // AS: hide the close button
        $(this).hide();
        
        // slide the video up
        $(videoWrapper).slideUp(800, "swing", function() {
            // MF: once animation is done, bring back the trigger button
            $(btnShow).fadeIn();
        });
      });
  }

  // AS: part 2 - form validation logic
  const form = document.querySelector(".devis-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // AS: basic security check to prevent script injection
      const allInputs = form.querySelectorAll("input, select");
      let hasScript = false;
      const regex = /<script>/i;

      allInputs.forEach((input) => {
        if (regex.test(input.value)) {
          hasScript = true;
        }
      });

      if (hasScript) {
        alert("Tentative de script détectée !");
        return;
      }

      //checking required fields
      const inputs = form.querySelectorAll("input[required], select[required]");
      let valid = true;
      inputs.forEach((input) => {
        if (!input.value) {
          valid = false;
        }
      });

      if (valid) {
        alert("Demande envoyée !");
        form.reset();
      } else {
        alert("Veuillez remplir les champs obligatoires.");
      }
    });
  }
});
