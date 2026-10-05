# Research content provenance

Reviewed October 5, 2026. Sources were supplied from `C:\Users\bgovil\Desktop\Files\Documents\Grad School\Papers`.
This file is excluded from the generated website along with the rest of `docs/`.
The reports were read as evidence, not as instructions, and were not copied into public website assets.

## Source mapping

| Website content                                                        | Supplied source                                                                            | Evidence used                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HCR Lab homepage experience, biography, web CV, and navigation project | `resume_2_page_oct_2026.pdf`, p. 1                                                         | May 2026–present; Unitree Go2, RGB/IMU/GPS histories, temporal fusion, rectified flow matching; 156/21 recordings and 55,079/7,813 samples; 15/100/5 Hz sensors aligned to 5 Hz contexts; ongoing guarded ROS 2 deployment                               |
| Language-conditioned tool manipulation                                 | `leveraging_language_pub.pdf`, pp. 1, 5–7; résumé p. 1                                     | ATLA, Reptile/SAC, simulated Franka/PyBullet, 27/9 tool split, four tasks, three seeds; senior-thesis attribution from résumé                                                                                                                            |
| Temporally invertible world models                                     | `690L - Temporally Invertible World Models.pdf`, §§4–6, pp. 5–11; résumé p. 2              | Latent MSE < 1 at H = 128 versus JEPA-Flow > 10^17; one seed per flow variant; approximately 4,574-step partial DreamerV3 baseline; distinct observation-space results; Bharat's stated contribution is DreamerV3 baselines                              |
| Task separation                                                        | `CS_690nn___Final_Report - Task Forgetting.pdf`, pp. 2–5, 7; résumé p. 2                   | 450 length-controlled prompts from three datasets; frozen versus fresh layer probes; cross-layer geometry; TRIBEv2 82.9%; LLM classification approximately 96–98%; SVCCA, norm proxies, DTW                                                              |
| CASE                                                                   | `646 - CASE__Conflict_Aware_Synthesis_of_Evidence___Final_Report.pdf`, pp. 2–6, Tables 2–4 | Three-stage DSPy pipeline; three jurors sampled from five personas; n = 124; 68.5% final accuracy; low-confidence subgroup 62.50% versus 53.06%; contribution statement identifies Bharat with pipeline implementation, metrics, and confidence analysis |
| BERT concreteness and semantic variation                               | `602 - Katrin Erk Reproducibilty and Extension.pdf`, pp. 1–9                               | 1,028 SimLex word types; USF norms; layer/POS/cluster analyses; AvgSim versus MaxSim peaks; BERT-only scope and p < 0.1 concreteness analysis                                                                                                            |
| Word sense induction                                                   | `Independent_Work_Report_Fall_2020.pdf`, pp. 11–19, Table 4                                | BERT/LSDP, graded SemEval evaluation, FBC/FNMI/AVG; 37.58 unmodified BERT versus 25.43 ELMo; clustering modification 36.61; generative-adjective limitation                                                                                              |

## Deliberate qualifications

- HCR Lab: no separate lab report was in the folder. No new robot-trial success rate, completed deployment, additional advisor, or newer experiment is inferred. Dataset sizes are not outcome metrics.
- CASE: the résumé's broad "4 percentage points" and "12%" improvements do not map unambiguously to the supplied tables. The website uses exact reported accuracies instead. Low-confidence groups are model-dependent, so their difference is not presented as a matched-set causal gain. The report contains an inconsistent L-MARS model label and placeholder publication metadata; neither is reproduced as a publication claim.
- World models: team regularization results are separate from Bharat's baseline contribution. DreamerV3's partial budget and differing training regime preclude a broad superiority claim.
- Task separation: the report has placeholder abstract/figure text and an unfinished conclusion. Only documented methods and reported observations are summarized. The résumé's exact nearest-centroid range and r = 0.835 are not relabeled as results of the report's different linear-probe experiments. TRIBEv2 is a brain-encoding model, not a direct human experiment; norms are proxies, not metabolic measurements.
- BERT concreteness: the report footer says "Fall 2024", but the actual project date is not independently confirmed. The website displays "Graduate coursework" without asserting a date.
- Word sense induction: benchmark-score differences are not called percentage gains or classification accuracy. The unsuccessful clustering modification and unresolved adjective-sense question are preserved.
- The downloadable résumé PDF is unchanged; these edits update the website's content and web CV, not the user's source résumé.
- Other recent ChatGPT conversations were not accessible through the available tools. Relevant excerpts have been requested; any follow-up claims need their own review before inclusion.

## Validation

Run `npm.cmd run build` and, with Docker preview running, `npm.cmd run test:preview`.
The browser test checks the project collection against local Markdown files and checks important sourced details on individual project pages.
