---
layout: page
title: "Task Separation in Language Models"
permalink: /projects/task-separation/
description: "Separating task information from layer-specific geometry in Llama, Qwen, and SmolLM, with comparisons to the TRIBEv2 brain-encoding model."
importance: 4
period: "January – May 2026"
status: "Neural networks project"
---

## Research question

Where and how do language models separate qualitatively different tasks in their internal representations?

## Approach

We curated 450 prompts: 150 each from GSM8K, RiddleSense, and Empathetic Dialogues, restricted to 25–45 words to reduce prompt-length confounding. We extracted representations from Llama-3.2-3B, Qwen2.5-3B, SmolLM3-3B, and TRIBEv2, a model trained to predict brain responses.

We compared a frozen final-layer probe with probes trained separately at each layer and cross-layer transfer matrices. Additional analyses used PCA, SVCCA, activation-norm proxies, and dynamic time warping to compare transformer depth with the temporal progression of TRIBEv2 predictions.


## Findings and interpretation

The central finding is that task-type information is available from early layers, even when a classifier trained on the final layer performs near chance there. Fresh layer-specific probes recover the signal; cross-layer transfer reveals changes in its geometric organization.

The report places final-layer LLM task classification around 96–98% and TRIBEv2 classification at 82.9% after full timestep accumulation. Math separates earlier and riddles later in both analyses. These are comparisons with a brain-encoding model, not direct measurements of human cognition. Activation magnitudes are effort proxies, not measured energy consumption.
