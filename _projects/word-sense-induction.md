---
layout: page
title: "Word Sense Induction with BERT"
permalink: /projects/word-sense-induction/
description: "Unsupervised sense induction with BERT substitution sampling, including the challenges of polysemous adjectives and graded sense assignments."
importance: 7
period: "August – December 2020"
status: "Princeton junior thesis"
---

## Research question

Can contextual substitutions from a masked language model improve unsupervised word-sense discovery?

## Approach

I adapted the LSDP substitution-based sense-induction pipeline from ELMo to BERT. Repeated masking and substitution sampling produce contextual representatives, which are lemmatized, TF-IDF weighted, and agglomeratively clustered into senses. I also tested a threshold-based alternative to fixed-size sense assignments.

Evaluation used SemEval-2013 Task 13: roughly 5,000 sentence instances covering 20 nouns, 20 verbs, and 10 adjectives. Its graded, overlapping labels require fuzzy metrics rather than ordinary classification accuracy.

## Results and interpretation

The BERT variant without the clustering modification achieved Fuzzy B-Cubed of 21.96, Fuzzy Normalized Mutual Information of 64.31, and the report's combined AVG score of 37.58, compared with 25.43 for the ELMo baseline. These are benchmark scores, not answer-accuracy percentages.

The threshold-based clustering modification scored 36.61 on AVG, so it did not improve on the unmodified BERT pipeline. The adjective analysis highlighted a distinction between assigning fine-grained WordNet senses and capturing generative adjective meanings; stronger benchmark performance did not resolve that conceptual limitation.

This was my Princeton junior independent-work project, advised by Prof. Christiane Fellbaum.
