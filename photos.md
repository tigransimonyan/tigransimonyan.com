---
layout: page
title: Photos
permalink: /photos/
photos:
  - https://analog.am/storage/m/_v2/680041427420344321/4c90d8e69-c5a1c2/Nf0jAikGPN3v/WGVa6KlPzm6rq4O0YfctzZFT1kJUalrf5o1IV5gi.jpg
  - https://analog.am/storage/m/_v2/680041427420344321/4c90d8e69-c5a1c2/agqc2uRhZwD1/I0asrAtEEMaH5EstAotJppFM1y7nzSd1ZoCfXcJG.jpg
  - https://analog.am/storage/m/_v2/680041427420344321/31410d826-759a86/oMO5dy6NvZDX/1oD0J3NZzOpyjPifjHHxUdK91AriX3iQw77fR8ee.jpg
  - https://analog.am/storage/m/_v2/680041427420344321/31410d826-759a86/qmr4oZ8hanLe/1BMGe70PIL1t5cXrb0lduO4gnQYjGJYAOR9yutR2.jpg
  - https://analog.am/storage/m/_v2/680041427420344321/31410d826-759a86/hBZ874QBpXF5/lzv1usph31bszxsNyx2osVOf7vhX6EyDOuOfotDj.jpg
  - https://analog.am/storage/m/_v2/680041427420344321/0c2c69eb8-6377a8/SB3hRrJ1g4wZ/WLDDAy8LdHWd4g2Z9o6esfM4I9qOdpuJ1zcwr1Dh.jpg
  - https://analog.am/storage/m/_v2/680041427420344321/062ac74bd-fb82c6/GVTUOuLPsDWm/0b5BV8xOyyNSA67apTcfXy8X6Yf2jPCB0QYMHStu.jpg
  - https://analog.am/storage/m/_v2/680041427420344321/c6a394f69-21cf85/NitrZMMTsxA3/PW0Sqt3vzOj7FYpijFopY7zuFyiTTswzxEteedEF.jpg
  - https://analog.am/storage/m/_v2/680041427420344321/c6a394f69-21cf85/NTGF1dFatjGh/U5tH7t9HqJIFi2gBDT6tScPneqgABPsXgXiq8hoz.jpg
---

<h3 class="bar">&#9658; Photos</h3>

<p class="gallery-hint">
  Shot on film. Click a thumbnail to open the full-size picture in a new window.
</p>

<div class="gallery">
  {% for photo in page.photos %}
  <a class="gallery-item" href="{{ photo }}" target="_blank" rel="noopener">
    <img src="{{ photo }}" alt="Film photo {{ forloop.index }}" loading="lazy" />
  </a>
  {% endfor %}
</div>

<p class="view-all">
  <a class="button" href="https://analog.am/tigran" target="_blank" rel="noopener"
    >&#9654; View all photos on analog.am</a
  >
</p>
