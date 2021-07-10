 const popup = document.querySelector(".modal");
      const link = document.querySelector(".contacts-button");
      const closing = document.querySelector(".modal-close");
      const name = popup.querySelector("#name-field");
      const email = popup.querySelector("#email-field");
      const form = popup.querySelector("form");
      const namestorage = localStorage.getItem("name");
      const emailstorage = localStorage.getItem("email");
      const textarea = popup.querySelector("textarea");

      let isStorageSupport = true;
      let storagecheckname = "";
      let storagecheckemail= "";

      try {
        storagecheckname = localStorage.getItem("name");
        storagecheckemail = localStorage.getItem("name");
      } catch (err) {
        isStorageSupport = false;
      }

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");

        if (namestorage) {
          name.value = namestorage;
          textarea.focus();
        } else {
          name.focus();
        }

        if (emailstorage) {
          email.value = emailstorage;
        }
      });

      closing.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.key === "Esc" || evt.key === "Escape") {
          if(popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
          }
        }
      });

      form.addEventListener("submit", function (evt) {
        if (!name.value || !email.value) {
          evt.preventDefault();
          console.log("Нужно ввести ваши данные");
        } else {
          if (isStorageSupport) {
          localStorage.setItem("name", name.value);
          localStorage.setItem("email", email.value);
          }
        }
      });
