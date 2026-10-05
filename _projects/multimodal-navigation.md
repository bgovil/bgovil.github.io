---
layout: page
title: "Multimodal Navigation for Quadruped Robots"
permalink: /projects/multimodal-navigation/
description: "Learning a goal-conditioned Unitree Go2 policy from asynchronous RGB, IMU, and GPS histories, with temporal transformer fusion and a guarded ROS 2 deployment stack."
importance: 1
period: "May 2026 – Present"
status: "Ongoing research · UMass HCR Lab"
---

## Research question

How can a legged robot combine visual, inertial, and sparse global-position information over time to navigate in real environments?

## Approach

The policy combines RGB observations, inertial measurements, and goal-conditioned GPS histories. I causally align 15 Hz RGB, 100 Hz IMU, and 5 Hz GPS streams into 5 Hz contexts, preserving the information available at each decision time. Transformer-based temporal fusion combines these histories for a rectified-flow action policy.

## My contribution

I built the PyTorch data and training pipelines over 156 training recordings (55,079 samples) and 21 validation recordings (7,813 samples). This work connects asynchronous sensor processing, temporal representation learning, and action-policy training.

I am also integrating the policy into a 5 Hz ROS 2 deployment stack. The integration includes distributed encoders, bounded buffers, stale-data detection, command validation, guarded autonomy handoff, and logging for real-robot trials.

## Current status

Policy development and deployment integration are ongoing. The recording and sample counts describe the training and validation pipeline; they are not a reported navigation-success result.

[Human-Centered Robotics Lab](https://hcr.cs.umass.edu/)
