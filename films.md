---
layout: page
title: Films
permalink: /films/
videos:
  - 8dNHnxIPLWQ
  - aiSJrFa0YqE
---

<h3 class="bar">&#9658; Films</h3>

<p class="gallery-hint">
  Short films and video work. Press play, or open a video on YouTube.
</p>

{% for id in page.videos %}
<div class="video">
  <div class="video-frame">
    <iframe
      src="https://www.youtube-nocookie.com/embed/{{ id }}"
      title="YouTube video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
  <div class="video-link">
    <a href="https://www.youtube.com/watch?v={{ id }}" target="_blank" rel="noopener"
      >&#9654; Watch on YouTube</a
    >
  </div>
</div>
{% endfor %}

<p class="view-all">
  <a class="button" href="https://www.youtube.com/@s.tigran" target="_blank" rel="noopener"
    >&#9654; View all videos on YouTube</a
  >
</p>
