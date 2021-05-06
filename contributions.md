---
layout: home
permalink: /contributions/
---

<div class="external">
  <div class="my-lg-6">
    <h3 class="text-bold provectus-title text-center text-uppercase">#OpenSource is Happening</h3>
    <h3 class="text-bold project-tagline provectus-title text-center text-uppercase">We are proudly contributors to the following OSS projects</h3>
  </div>
  <div class="featured-orgs text-center p-2">
    {% for org in site.contributions %}
      <a href="https://github.com/{{ org }}" class="animate-in">{% avatar user=org size=80 %}</a>
    {% endfor %}
  </div>
</div>

<div class="osspeople">
  <div class="my-lg-6">
    <h3 class="text-bold provectus-title text-center text-uppercase">Meet our #OSS heroes</h3>
    <h3 class="text-bold project-tagline provectus-title text-center text-uppercase">People who make things happen</h3>
  </div>
  <div class="featured-orgs text-center p-2">
    {% for org in site.contributors %}
      <a href="https://github.com/{{ org }}" class="animate-in">{% avatar user=org size=80 %}</a>
    {% endfor %}
  </div>
</div>