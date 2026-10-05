---
layout: page
title: "Temporally Invertible World Models"
permalink: /projects/invertible-world-models/
description: "Liouville- and Jacobian-regularized rectified-flow world models for stable long-horizon rollouts and trajectory invertibility."
importance: 3
period: "January – May 2026"
status: "Generative AI project"
---

## Research question

Can geometric regularization make learned world models more stable and reversible over long rollout horizons?

## Approach

Our team studied action-conditioned rectified-flow dynamics on DMControl Walker-Walk using a shared, frozen 32-dimensional encoder. We compared unregularized JEPA-Flow and a cycle-consistency baseline with Liouville-only and combined Liouville/Jacobian-Frobenius regularization. Hutchinson estimation lets the geometric penalties share a Jacobian-vector product.

The experiments separately evaluate latent rollout fidelity, observation-space reconstruction, reverse-trajectory equivariance, and vector-field geometry. This distinction matters: a stable latent rollout does not necessarily reconstruct the physical state accurately.

## Results and limitations

Both Liouville variants kept latent rollout MSE below 1 through a horizon of 128, while unregularized JEPA-Flow exceeded 10<sup>17</sup>. The Liouville term stabilized forward rollouts; the additional Jacobian-Frobenius penalty improved reverse-trajectory equivariance. Solver-tolerance sweeps supported the report's critique that cycle consistency alone does not meaningfully constrain the learned vector-field geometry.

The comparison is exploratory: each flow variant used one seed, and the DreamerV3 run completed approximately 4,574 environment steps rather than a full training budget. At horizon 16, the partial DreamerV3 run retained observation-space R² of about 0.9, compared with about 0.55 for the regularized flow variants. The results motivate combining geometric regularization with a higher-capacity encoder; they do not establish an overall advantage over DreamerV3.
