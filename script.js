/* ================= REGISTER ================= */
const form = document.querySelector(".register__form");

if (form) {
  const passwords = form.querySelectorAll('input[type="password"]');

  function validatePasswords() {
    const [p1, p2] = passwords;

    passwords.forEach((i) =>
      i.classList.remove("input-error", "input-success")
    );

    if (!p1.value || !p2.value) return;

    if (p1.value === p2.value) {
      passwords.forEach((i) => i.classList.add("input-success"));
    } else {
      passwords.forEach((i) => i.classList.add("input-error"));
    }
  }

  passwords.forEach((i) => i.addEventListener("input", validatePasswords));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (passwords[0].value !== passwords[1].value) return;

    alert("Registrace proběhla úspěšně");
    form.reset();

    passwords.forEach((i) => i.classList.remove("input-success"));
  });
}

/* ================= MOVIES ================= */
const container = document.getElementById("moviesContainer");
const select = document.getElementById("searchSelect");

if (container && select) {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || "girl";
  select.value = query;

  async function loadMovies(q) {
    container.innerHTML = "";
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${q}`);
    const data = await res.json();

    data.forEach((item) => {
      if (!item.show.image) return;
      const img = document.createElement("img");
      img.src = item.show.image.medium;
      img.className = "movie";
      container.appendChild(img);
    });
  }

  select.addEventListener("change", () => {
    const q = select.value;
    const url = new URL(window.location);
    url.searchParams.set("q", q);
    window.history.pushState({}, "", url);
    loadMovies(q);
  });

  loadMovies(query);
}

/* ================= SCROLL TO TOP (INDEX ONLY) ================= */
const scrollTopBtn = document.querySelector(".scroll-top-btn");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
