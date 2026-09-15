---
layout: page
title: Blog
permalink: /blog/
---

<h3 class="bar">&#9658; Blog &mdash; Members Only</h3>

<div class="gate">
  <div class="gate-icon">&#128274;</div>
  <p class="gate-text">
    This area is <b>PASSWORD PROTECTED</b>.<br />
    Authorized visitors only. Enter the secret password to continue.
  </p>

  <form class="gate-form" id="gate-form" action="#" onsubmit="return false;" autocomplete="off">
    <label for="gate-password">Password:</label>
    <input type="password" id="gate-password" name="password" size="20" />
    <button type="submit" class="button">Enter</button>
  </form>

  <div class="gate-error" id="gate-error" hidden>
    <span class="blink">&#9888; ACCESS DENIED &#9888;</span><br />
    Wrong password. Attempts remaining: <span id="gate-attempts">3</span>
  </div>

  <p class="gate-note">
    Forgot your password? Too bad. This page is monitored by the webmaster.
  </p>
</div>

<script>
  (function () {
    var form = document.getElementById("gate-form");
    var input = document.getElementById("gate-password");
    var error = document.getElementById("gate-error");
    var attempts = document.getElementById("gate-attempts");
    var left = 3;
    function deny() {
      left = left > 0 ? left - 1 : 0;
      attempts.textContent = left;
      error.hidden = false;
      input.value = "";
      input.focus();
      if (left === 0) {
        attempts.textContent = "0 (just kidding, try again)";
        left = 3;
      }
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      deny();
      return false;
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        deny();
      }
    });
  })();
</script>
