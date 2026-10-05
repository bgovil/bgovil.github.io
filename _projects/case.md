---
layout: page
title: "CASE: Conflict-Aware Synthesis of Evidence"
permalink: /projects/case/
description: "A DSPy-based multi-agent retrieval pipeline that tests competing legal hypotheses and resolves evidence through a persona-based jury."
importance: 5
period: "August – December 2025"
status: "Information retrieval project"
---

## Research question

Can retrieval systems reason more reliably by explicitly constructing and arbitrating between competing hypotheses?

## Approach

CASE models legal question answering as three stages: hypothesis generation, advocate retrieval, and arbiter synthesis. Advocates gather evidence for competing answers using BM25, query-likelihood, dense retrieval, and web search. A jury samples three personas from a pool of five legal viewpoints and selects an answer by majority vote.

We implemented the pipeline in DSPy with a Llama 70B-family model and evaluated it on the Bar Exam QA validation set of 124 questions. Baselines included LLM-only prompting, sparse and dense single-path RAG, Self-RAG, and L-MARS.

## My contribution

I implemented the CASE pipeline, its evaluation metrics, and the confidence analysis. This was a six-person team project; retrieval tools, indexing, baselines, and other components were shared across collaborators.

## Results and limitations

The full BM25/dense/web/QLM variant reached **68.5% answer accuracy**. CASE with BM25 and dense retrieval reached 66.9%, while adding web search without QLM reached 65.3%; more retrieval tools did not consistently improve performance.

For decisions with a two-to-one jury split, accuracy was 62.50% with the full toolset versus 53.06% with BM25 and dense retrieval. These are different model-specific subsets, not a matched-question improvement estimate. Unanimous decisions defined the high-confidence group. Jury agreement is not a calibrated probability of correctness.

The small validation set and low retrieval recall limit broader conclusions. We report the observed accuracies rather than claiming a uniform improvement over all RAG baselines or validated legal reliability.

[Code](https://github.com/muhammadazeemhaider/CASE-Conflict-Aware-Synthesis-of-Evidence)
