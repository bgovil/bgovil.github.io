---
layout: page
title: "Concreteness and Semantic Variation in BERT"
permalink: /projects/bert-semantic-variation/
description: "Reproducing and extending multi-prototype BERT analyses to study how lexical concreteness, part of speech, and cluster structure interact across layers."
importance: 6
period: "Graduate coursework"
status: "NLP reproduction and extension · COMPSCI 602"
---

## Research question

How does a word's abstractness relate to variation in its contextual representations, and does that relationship change across transformer layers?

## Approach

I reproduced and extended the multi-prototype BERT framework of Chronis and Erk. The study analyzes 1,028 unique word types from SimLex-999 using USF concreteness norms, contextual token embeddings, and k-means sense prototypes.

I measured inter-token distance, within-cluster variance, and inter-cluster structure across layers, then stratified the analysis by nouns, verbs, and adjectives. AvgSim and MaxSim aggregation tested how layer choice and prototype count affect agreement with human similarity judgments.

## Findings and limitations

The relationship between concreteness and overall token dispersion reverses across layers: abstract words are more dispersed early, while concrete words become more dispersed later. Within-cluster variance follows an opposing pattern. Lexical category and prototype count modulate both effects, showing why a single dispersion measure or layer can obscure the underlying structure.

AvgSim similarity performance peaked around layers 3–4, while MaxSim peaked around layers 5–7. These are exploratory findings for one BERT-base model and an English lexical benchmark; the concreteness analyses used a reported significance threshold of p < 0.1 and should not be treated as universal properties of language models.
