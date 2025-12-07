// script pour la semaine 3
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("video-interface-container");
  if (!container) return;
  /* -----------
  suppresion de code de creation des boutons et de container video car desormais il est inutile
  ------------- */
  /*
  const btnOne = document.createElement("button");
  btnOne.textContent = "Regardez la vidéo de promotion";
  btnOne.classList.add("button-js-element", "btn-show");

  const videoContainer = document.createElement("div");
  videoContainer.classList.add("video-js-element");

  const btnTwo = document.createElement("button");
  btnTwo.textContent = "Masquer la vidéo";
  btnTwo.classList.add("button-js-element", "btn-hide");

  container.appendChild(btnOne);
  container.appendChild(videoContainer);
  container.appendChild(btnTwo);

  const showVideo = () => {
    videoContainer.innerHTML = `
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/2wz_DS5lZGI?si=q2sEwCXKAdfgUAPp"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
    `;
    btnOne.classList.add("is-hidden");
    videoContainer.classList.add("is-visible");
    btnTwo.classList.remove("is-hidden");
    btnTwo.classList.add("is-visible");
  };

  const hideVideo = () => {
    videoContainer.classList.remove("is-visible");
    btnTwo.classList.remove("is-visible");
    btnTwo.classList.add("is-hidden");
    btnOne.classList.remove("is-hidden");
    videoContainer.innerHTML = "";
  };

  btnOne.addEventListener("click", showVideo);
  btnTwo.addEventListener("click", hideVideo);

  // AS: initial state
  btnTwo.classList.add("is-hidden");
*/
  /* ------ je garde la logique de validation de formulaire ------------*/
  const form = document.querySelector(".devis-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // AS: for the sakes of it, client-side checking for script
      const allInputs = form.querySelectorAll("input, select");
      let hasScript = false;
      const regex = /<script>/i;

      allInputs.forEach((input) => {
        if (regex.test(input.value)) {
          hasScript = true;
        }
      });

      if (hasScript) {
        alert("HAHAHAHAH GOOD TRY");
        return;
      }

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

$(document).ready(function () {
  const $videoCollapse = $("#videoCollapse");
  const $formContainer = $(".form_UE_L221");
  $videoCollapse.on("show.bs.collapse", function () {
    $formContainer.addClass("is-expanded");
  });
  $videoCollapse.on("hide.bs.collapse", function () {
    $formContainer.removeClass("is-expanded");
  });
});
