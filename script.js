const pages = [...document.querySelectorAll("main > .page")];
const navigationLinks = [...document.querySelectorAll(".nav-link")];
const imageRevealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" })
  : null;

function observePageImages(page) {
  if (!imageRevealObserver) {
    return;
  }

  for (const image of page.querySelectorAll(".project-image, .detail-image, .detail-gallery")) {
    image.classList.add("scroll-reveal");
    imageRevealObserver.observe(image);
  }
}

function showPage(route) {
  const selectedWorkId = route.startsWith("work-") ? route : null;
  const pageId = selectedWorkId ? "works" : route;
  const activePage = pages.find((page) => page.id === pageId) ?? pages[0];

  for (const page of pages) {
    page.hidden = page !== activePage;
  }

  observePageImages(activePage);

  if (activePage.id === "works") {
    for (const detail of activePage.querySelectorAll(".work-detail")) {
      detail.hidden = selectedWorkId !== null && detail.id !== selectedWorkId;
    }
  }

  for (const link of navigationLinks) {
    if (link.hash === `#${activePage.id}`) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("hashchange", () => {
  showPage(window.location.hash.slice(1) || "home");
});

showPage(window.location.hash.slice(1) || "home");