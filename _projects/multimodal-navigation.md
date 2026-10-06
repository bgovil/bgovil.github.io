---
layout: page
title: "Multimodal Flow-Matching Navigation for a Quadruped Robot"
permalink: /projects/multimodal-navigation/
description: "Learning a Unitree Go2 navigation policy from visual, inertial, and goal histories, with flow matching and conservative or faster demonstration-style conditioning."
importance: 1
period: "May 2026 – Present"
status: "Ongoing research · UMass HCR Lab"
---

## Research question

How can a quadruped combine recent visual, inertial, and goal information to generate navigation commands, and how does conditioning on different demonstration styles affect its behavior?

This ongoing research is based in the Human-Centered Robotics Lab at UMass Amherst under Prof. Hao Zhang.

## Approach

The policy encodes RGB images, IMU measurements, and goal-conditioned GPS features, fuses their histories with a temporal transformer, and uses rectified flow matching to generate short sequences of forward, lateral, and turning commands. Auxiliary classifiers support guidance toward 'safer' or 'faster' demonstration styles, allowing us to study how observation context and requested behavior influence generated trajectories.

I causally align 15 Hz RGB, 100 Hz IMU, and 5 Hz GPS streams into 5 Hz policy contexts, preserving only the information available at each decision time. The data pipeline constructs observation histories and rejects incomplete action targets.

## My contribution

I built the PyTorch data and training pipelines through ~180 recordings of real-world training data and contributed to the multimodal policy's flow-matching training and inference workflow.

I have integrated components of the ROS 2 deployment stack for checkpoint inference and guarded robot control. This work includes distributed encoders, bounded observation buffers, stale-data detection, command validation, and autonomy handoff; full robot deployment integration remains in progress.

## Current status

Offline training and evaluation and robot deployment integration are ongoing. "Safe" and "Fast" labels describe recording styles and navigational intent, not independently verified collision safety. 

[Human-Centered Robotics Lab](https://hcr.cs.umass.edu/)
