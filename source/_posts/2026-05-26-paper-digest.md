---
title: AI 论文速递 · 2026 年 5 月 26 日
date: 2026-05-26 16:00:00
updated: 2026-05-26 16:00:00
categories: 论文速递
tags:
  - 学术论文
  - AI 研究
  - 图灵测试
  - 扩散模型
  - 2026-05
cover: https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80
---

# AI 论文速递 · 2026-05-26

> 精选今日 AI 领域值得关注的学术论文与研究动态。

---

## 头条

**1. 图灵测试 76 年后首现 AI 通过实证：GPT-4.5 以 73% 判定率超越真人**

加州大学圣地亚哥分校研究首次实证现代 AI 可通过图灵测试。在获得特定提示后，GPT-4.5 在 5 至 15 分钟的对话中被误认为人类的概率高达 73%，显著超过真人参与者（被判定为人类的概率仅 67%）。这是图灵测试提出 76 年来，AI 首次在严格实证中跨越这一里程碑。

[IT之家](https://www.ithome.com/0/953/705.htm)

---

## 模型与推理

**2. 奖励倾斜分布匹配：强化少步生成器的新框架**

本文提出 RTDMD（奖励倾斜分布匹配蒸馏），一个将分布匹配蒸馏与奖励引导强化学习统一应用于少步流生成器的两阶段框架。通过最小化到奖励倾斜教师分布的 KL 散度，在图像和视频生成任务上实现了更优的质量与效率平衡。

[arXiv](https://arxiv.org/abs/2605.26108)

**3. Nemotron-Labs 扩散语言模型：光速级文本生成**

NVIDIA 发布 Nemotron-Labs 扩散语言模型研究，通过扩散语言模型架构大幅提升文本生成速度，可实现"光速级"的文本输出。该工作已在 Hugging Face 上公开技术细节。

[Hugging Face Blog](https://huggingface.co/blog/nvidia/nemotron-labs-diffusion)

**4. 从推理链到可验证子问题：课程强化学习实现 LLM 推理的信用分配**

针对基于结果的强化学习在处理困难推理问题时因正确样本稀少而效率低下的问题，本文提出子问题课程强化学习框架。该框架从参考推理链中提取可验证子问题，逐步训练模型掌握复杂推理能力。

[arXiv](https://arxiv.org/abs/2605.22074)

---

## 系统与架构

**5. ZCube：超大规模大模型推理的网络优化**

智谱 AI 发布 ZCube 网络架构研究，针对超大规模大模型推理场景，通过取消 Spine 层、将 Leaf 交换机分组并全互联等创新设计，有效解决推理网络的拥塞问题。实测实现了显著的性能提升。

[智谱 AI 研究](https://www.zhipuai.cn/zh/research/160)

**6. RiT：在表示空间中使用原生扩散变换器已足够**

本研究探讨预训练表示空间在流匹配学习中的优势。比较像素、SD-VAE 与 DINOv2 特征后发现，使用 DINOv2 表示空间的扩散变换器在生成质量和计算效率上均表现优越。

[arXiv](https://arxiv.org/abs/2605.21981)

---

## 安全与评估

**7. 微软 Copilot Cowork 存在文件泄露问题**

安全研究团队发现微软 Copilot Cowork 功能存在文件泄露风险，可导致敏感文件被提取。企业用户需关注相关安全配置并及时评估风险。

[PromptArmor](https://www.promptarmor.com/resources/microsoft-copilot-cowork-exfiltrates-files)

**8. VSAS-Bench：视觉流式辅助模型的实时评估基准**

Apple 研究团队提出 VSAS-Bench，一个专为实时视觉助手设计的评估基准。现有框架主要在离线场景下评估，但流式模型还需考量响应时效性（主动性）和随时间推移的响应稳定性（一致性）等额外指标。

[Apple Research](https://machinelearning.apple.com/research/vsas-bench-streaming-assistant)

---

## 硬件突破

**9. 华为何庭波"韬定律"：逻辑折叠技术提升芯片性能**

华为何庭波在 ISCAS 2026 上提出"韬定律"，介绍逻辑折叠技术。通过三维空间拓扑重组，不依赖新光刻工艺即可提升芯片性能。在麒麟 2026 测试中，晶体管密度提升至 238 MTr/mm²，能效提高 41%，最大时钟频率提升近 13%。升腾 990 计划 2030 年左右引入该技术。

[IT之家](https://www.ithome.com/0/954/778.htm)

---

*数据来源：AI HOT (aihot.virxact.com) | 编辑：AI 无涯*
