// Clickjacking defense-in-depth. GitHub Pages can't send X-Frame-Options or
// a real (non-<meta>) `frame-ancestors` CSP directive — see CLAUDE.md
// Security section — so this is the only enforcement available without
// fronting the domain with a CDN.
//
// Verified empirically (2026-08-05) against a real cross-origin iframe: the
// classic "navigate the top frame away" buster throws in current Chrome —
// `SecurityError: ... does not have permission to navigate the target
// frame` — because Chrome now blocks a cross-origin subframe from
// navigating an ancestor without a user gesture. It's still attempted below
// since other engines/older browsers do allow it, but it cannot be the only
// defense. The reliable fallback, which needs no special permission because
// it only touches this document, is to blank the page instead — nothing
// worth clickjacking stays visible even when the navigation attempt is
// blocked.
(function () {
  if (window.top === window.self) return;
  try {
    window.top.location.href = window.self.location.href;
  } catch (e) {
    // Expected in current Chrome — fall through to blanking the page.
  }
  document.documentElement.style.display = "none";
})();
