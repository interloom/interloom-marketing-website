---
layout: base.njk
title: Seed Round Announcement
---

<style>
  main { background: #0a0a0a; }

  .video-container {
    max-width: 72rem;
    margin: 0 auto;
    padding: 3rem 1rem;
  }
  .video-container video {
    display: block;
    width: 100%;
    max-height: 80vh;
    border-radius: 0.5rem;
    background: #000;
  }
  .video-title {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  .video-subtitle {
    color: rgba(255,255,255,0.5);
    font-size: 0.9375rem;
    margin-bottom: 2rem;
  }
</style>

<div class="video-container">
  <h1 class="video-title">Seed Round Announcement</h1>
  <p class="video-subtitle">Interloom raises $16.5m from DN Capital, BEK Ventures and Air Street Capital to redefine business process automation.</p>
  <video src="{{ '/videos/seed-round.mp4' | url }}" controls playsinline preload="metadata"></video>
</div>
