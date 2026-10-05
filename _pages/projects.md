---
layout: page
title: projects
permalink: /projects/
nav: true
nav_order: 3
---

{% assign sorted_projects = site.projects | sort: "importance" %}
{% for project in sorted_projects %}

<article style="margin-bottom: 2rem;">
  <h2 style="font-size: 1.35rem;"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
  <p>{{ project.period }} · {{ project.status }}</p>
  <p>{{ project.description }}</p>
</article>
{% endfor %}
