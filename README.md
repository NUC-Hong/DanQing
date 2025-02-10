# 丹青智现 - 中国古画处理与创意生成小程序

![Header Image](https://via.placeholder.com/800x200?text=丹青智现+小程序) <!-- 请替换为实际的图片链接 -->

## 简介

“丹青智现”是一款融合了先进的人工智能技术和深厚的中国文化底蕴的小程序，旨在推动文化传承与创新的发展。该项目不仅致力于保护和复原中国古画艺术，还通过智能科技实现文化创作的突破与升华。

### AI顾问功能（新增）
通过调用豆包大模型家族的 **Doubao-vision-pro 32k** 模型，实现了古画的赏析、查询作者信息和古画名等功能。该AI顾问支持连续问答，帮助用户深入了解古画背后的故事和价值。

---

## 主要功能

- **古画裂痕修复**
- **古画清晰度增强**
- **古画上色**
- **根据诗词生成画作**
- **根据画作生成诗词**
- **古画AI延展、动起来**
- **多种风格切换**
- **图像水墨画创作**
- **古代人物动漫化、动起来**
- **国风海报生成**
- **视频清晰度增强**
- **黑白视频AI上色**
- **图片创意换脸**
- **视频换脸**

---

## 技术方案

### 系统架构

#### 前端架构
- **微信小程序框架**：WXML, WXSS, JavaScript
  - WXML：用于构建小程序的页面结构。
  - WXSS：用于页面样式的定义和布局设计。
  - JavaScript：用于实现页面交互逻辑。
- **界面设计**：简洁直观，包含主页、图像处理页和用户页等功能页面。

#### 后端架构
- **Flask框架**：Python语言开发，处理前端请求、图片和视频数据的接收与处理。
- **Nginx**：反向代理服务器，提升系统的并发处理能力和安全性。
- **分布式架构**：部署在高性能云端服务器集群上，确保服务高可用性和低延迟响应。

#### 关键技术
- **Diffusion Transformer (DiT)**：基于3D变分自编码器（3D VAEs）的视频压缩模块。
- **CycleGAN对抗神经网络训练原理**：用于图像风格转换和修复。
- **First Order Motion Model**：用于古代人物动画化。
- **超分辨率中的像素解洗操作**：用于提高图像质量。

---

## 创新点

1. **图像处理技术在古画保护与创作中的应用**：提升了古画修复的技术水平，促进了新作品的艺术创作。
2. **生成式大模型与中国传统文化的融合**：如古诗生成古画、古画内容动态化等，实现了传统文化艺术的数字化创新与传承。
3. **微信小程序平台的应用**：借助微信庞大的用户群体，让更多用户轻松便捷地体验我们的服务。

---

## 商业价值

“丹青智现”致力于打破专业工具与普通用户之间的壁垒，让古画艺术变得既可敬又可亲。通过引入互动性和趣味性元素，吸引更多人关注并参与到中国古画文化的保护与传播中来。

当前市场上虽有一些专注于古画修复与科研的专业工具，但它们多由国家级文物研究机构研发，主要服务于特定领域的专家，产品多偏向于修复结果的呈现和知识解读（如云游敦煌小程序），对于普通用户来说颇为枯燥。我们立志打造一款桥梁之作，连接中国古画文化与现代科技、专业人士与普罗大众。

---

## 开发团队

| 角色              | 成员          | 主要工作及收获                                                                 |
|-------------------|---------------|--------------------------------------------------------------------------------|
| 项目负责人        | 李庆宏        | 全面负责项目的规划、管理和协调工作，主导技术选型和技术路线的制定。             |
| 前端开发          | 赵欣瑜        | 负责前端界面的设计与实现，利用微信小程序框架完成简洁直观的用户界面。           |
| 后端开发          | 赵康          | 专注于后端架构的设计与实现，包括Flask框架的应用和Nginx的配置。                 |
| 图像处理算法      | 张婕          | 主要负责图像处理算法的研发，特别是在图像修复、超分辨率等方面做出了重要贡献。   |
| 视频处理模块      | 赵进超        | 负责视频处理模块的开发，特别是视频上色和帧处理算法。                           |

---

## 如何体验

欢迎您扫描下方二维码或直接搜索“丹青智现”体验我们的小程序：

![QR Code](此处插入二维码图片链接) <!-- 请替换为实际的二维码图片链接 -->

若有任何疑问，请点击小程序内的“我的-在线客服”，与我们联系。

---

## 参考文献

- [PaddlePaddle/PaddleGAN](https://github.com/PaddlePaddle/PaddleGAN)
- Qwen-VL: A Versatile Vision-Language Model for Understanding, Localization, Text Reading, and Beyond
- Real-Time User-Guided Image Colorization with Learned Deep Priors
- Motion Representations for Articulated Animation
- U-GAT-IT: Unsupervised Generative Attentional Networks with Adaptive Layer Instance Normalization for Image-to-Image Translation
- Real-ESRGAN: Training Real-World Blind Super-Resolution with Pure Synthetic Data
- Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks

---

## 后续发展方向

- 持续改进图像处理算法，提高修复质量和生成图像的真实感。
- 定期更新模型，集成最新的研究成果，以保持技术领先。
- 对小程序前端进行优化，开发更加美观的UI。
- 建立用户社区，鼓励用户分享自己的作品和创作故事，增强用户粘性。
- 增加教育板块，通过互动方式普及中国古画的历史背景和艺术价值。
- 与博物馆、美术馆等文化机构合作，共同举办线上展览，推广古画艺术。


我们的代码因为体积过大，无法全部上传至GitHub。完整的代码请在下方百度网盘链接中阅览：

### 后端代码
- **第一部分**：[guHuaPartOne](https://pan.baidu.com/s/1RyHKyip8yPSQs-QxocvimQ?pwd=45mu) ，提取码: 45mu 
- **第二部分**：[finalGuHuaChuLi](https://pan.baidu.com/s/1UPwLMg6dKFUenogIx67nxQ?pwd=5utr) ，提取码: 5utr 
- **第三部分**：[guhualinmo](https://pan.baidu.com/s/1Ha6t7B_Z5ZK3WA4lSkI1dA?pwd=vrme) ，提取码: vrme 
