---
layout: page
title: "Task Separation in Language Models"
permalink: /projects/task-separation/
description: "Studying task separability, cross-layer geometry, and inter-model agreement in Llama, Qwen, and SmolLM, with exploratory comparisons to TRIBEv2 predictions."
importance: 4
period: "January – May 2026"
status: "Neural networks project"
---

## Research question

Where and how do language models separate mathematical reasoning, riddles, and emotional dialogue in their internal representations? Do different architectures organize these task categories similarly, and what can comparisons with a brain-encoding model tell us about that organization?

## Approach

We curated 450 prompts: 150 each from GSM8K, RiddleSense, and Empathetic Dialogues, restricted to 25–45 words to reduce prompt-length confounding. We extracted mean-pooled representations from Llama-3.2-3B, Qwen2.5-3B, and SmolLM3-3B, alongside TRIBEv2's predicted brain-response representations.

For final-layer geometry, a nearest-centroid cosine classifier used 100 training prompts and 50 held-out prompts per category. We also compared a frozen final-layer linear probe with probes trained separately at each layer and cross-layer transfer matrices. TRIBEv2's cumulative-timestep analysis used a separate 70%/30% train/test split.

Additional analyses included PCA and classification margins, representational similarity analysis of pairwise cosine-distance matrices, and SVCCA after reducing each representation space to 20 principal components. Activation-norm comparisons and dynamic time warping explored relationships between transformer depth and the temporal progression of TRIBEv2 predictions.

## My contribution

I worked on inter-model analyses of task-boundary decay, exploratory activation-based effort comparisons, and alignment of TRIBEv2's temporal predictions with LLM layer-depth profiles. I also contributed to ideation, literature review, manuscript writing, and review with Azeem Haider and Shehsawar Ali.

## Findings and interpretation

- Final-layer nearest-centroid task classification reached 97.3% for Llama, 98.0% for Qwen, and 97.3% for SmolLM on 150 held-out prompts. Emotional dialogue and riddles had the closest centroids in every model, while math was more distinct. Similar classification accuracy therefore did not imply identical geometric organization.
- Layer-specific probes recovered task-type signal from early layers. A frozen final-layer probe measures transfer to the final-layer geometry, not simply whether an earlier layer contains task information; cross-layer transfer matrices revealed changes in that organization.
- Qwen and SmolLM showed strong agreement in the relational geometry of the 450 prompts (Spearman correlation approximately 0.835). Llama's corresponding correlations were approximately 0.34–0.39. This is inter-model representational agreement, not a measured downstream-performance improvement.
- TRIBEv2 task classification reached a reported 82.9% at full timestep accumulation. Because this used a different probe and split from the centroid experiment, it is a separate result rather than a controlled ranking against the LLM accuracies.

In the SVCCA-aligned representation spaces, the leading canonical dimension primarily separated math from emotional dialogue, while additional dimensions distinguished riddles. The norm-based comparisons and temporal-to-depth alignments are exploratory analyses of model representations, not evidence of a shared biological processing mechanism.

## Scope and limitations

The reported accuracies measure classification of task types, not success at solving mathematical problems or riddles. Each category comes from a different dataset, and length control alone does not rule out dataset-specific language cues.

TRIBEv2 comparisons use model-predicted brain responses, not direct measurements of human cognition on these prompts. Activation magnitudes are exploratory effort proxies, not measured energy consumption or validated measures of metabolic load. The analyses do not establish that LLMs use statistical shortcuts, that particular layers are computationally idle, or that transformer depth corresponds to human processing time.

Future directions include finer-grained emotional categories and investigating the spatial organization of TRIBEv2 predictions.
