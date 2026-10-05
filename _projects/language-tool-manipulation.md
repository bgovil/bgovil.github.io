---
layout: page
title: "Language-Conditioned Tool Manipulation"
permalink: /projects/language-tool-manipulation/
description: "ATLA combines tool descriptions with meta-learning to accelerate adaptation to unseen tools in pushing, lifting, sweeping, and hammering."
importance: 2
period: "CoRL 2022 · Proceedings published 2023"
status: "Published research · Princeton senior thesis"
---

## Research question

Can descriptions of a tool's geometry and affordances help a robot learn to use an unfamiliar tool more quickly?

## Approach

ATLA—Accelerated Learning of Tool Manipulation with Language—uses language models to generate tool descriptions and encode their features. These representations condition a Reptile-style meta-learning procedure with Soft Actor-Critic updates, allowing the policy to adapt using both language and interactions with a new tool.

The experiments use a simulated Franka Panda arm in PyBullet, with 27 training tools and 9 held-out tools across pushing, lifting, sweeping, and hammering. Comparisons separate the effects of language conditioning, meta-learning, language-encoder size, and network capacity.

## Contribution and findings

This research formed my Princeton senior thesis, advised by Prof. Karthik Narasimhan, and became a coauthored CoRL 2022 paper with Allen Z. Ren, Tsung-Yen Yang, Karthik Narasimhan, and Anirudha Majumdar.

The team found faster adaptation and higher post-adaptation rewards for most held-out tools, with particularly clear benefits on sweeping and hammering. Results were averaged over three seeds per test tool. These are simulation results; they do not claim physical-robot validation or improvement for every tool and task.

[Paper](https://proceedings.mlr.press/v205/ren23a.html) · [Project page](https://irom-lab.princeton.edu/ATLA/)
