---
layout: about
title: about
permalink: /
subtitle: University of Massachusetts Amherst
profile:
  align: right
  image: bharat-govil.jpg
  image_circular: false
  more_info: >
    <p>Amherst, Massachusetts</p>
selected_papers: false
social: true
announcements:
  enabled: false
latest_posts:
  enabled: false
---

I am an M.S. student in Computer Science at [UMass Amherst](https://www.cics.umass.edu/) and a graduate researcher in the [Human-Centered Robotics Lab](https://hcr.cs.umass.edu/). 

My research interests include **robot learning, multimodal policies, world models, and language-conditioned robotic control**. I am interested in how robots can combine perception and information over time to learn policies that transfer to real environments.

Previously, I earned a B.S.E. in Computer Science from Princeton University, with certificates in Robotics, Linguistics, and Cognitive Science. My senior thesis explored language-conditioned meta-learning for tool manipulation and led to a CoRL publication. I also worked as a software engineer at Amazon Robotics and a data scientist at Genpact.

[Email](mailto:bharat.govil@gmail.com) · [CV]({{ '/assets/pdf/Bharat_Govil_CV.pdf' | relative_url }}) · [GitHub](https://github.com/bgovil) · [LinkedIn](https://www.linkedin.com/in/bharat-govil)

<div style="clear: both;"></div>

<section id="publications" aria-labelledby="publications-heading">
<h2 id="publications-heading">Publications</h2>
<div class="publications">
{% bibliography --query @*[selected=true] %}
</div>
</section>

<section id="experience" aria-labelledby="experience-heading">
<h2 id="experience-heading">Experience</h2>
{% for item in site.data.experience %}
<article style="margin-bottom: 1.6rem;">
  <h3 style="font-size: 1.05rem; margin-bottom: 0.25rem;">{{ item.role }} · {% if item.url %}<a href="{{ item.url }}">{{ item.organization }}</a>{% else %}{{ item.organization }}{% endif %}</h3>
  <p style="margin-bottom: 0.4rem; opacity: 0.75;">{{ item.dates }} · {{ item.location }}</p>
  <p>{{ item.summary }}</p>
</article>
{% endfor %}
</section>

<section id="education" aria-labelledby="education-heading">
<h2 id="education-heading">Education</h2>
<p><strong>University of Massachusetts Amherst</strong><br>
M.S. in Computer Science · Expected 2027 · GPA: 4.0/4.0</p>
<p><strong>Princeton University</strong><br>
B.S.E. in Computer Science · 2022<br>
Certificates in Robotics, Linguistics, and Cognitive Science</p>
</section>

<section id="projects" aria-labelledby="projects-heading">
<h2 id="projects-heading">Projects</h2>
{% assign sorted_projects = site.projects | sort: "importance" %}
{% for project in sorted_projects %}
<article style="margin-bottom: 1.75rem;">
  <h3 style="font-size: 1.08rem; margin-bottom: 0.25rem;"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
  <p style="margin-bottom: 0.4rem; opacity: 0.75;">{{ project.period }} · {{ project.status }}</p>
  <p>{{ project.description }}</p>
</article>
{% endfor %}
</section>
