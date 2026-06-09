---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: 了解更多 Fuwari 的 Markdown 功能
image: ''
tags: [示例, 示例, Markdown, Fuwari]
category: 示例
draft: true
lang: zh-CN
---

## GitHub 仓库卡片

你可以添加链接到 GitHub 仓库的动态卡片，页面加载时会从 GitHub API 获取仓库信息。

::github{repo="Fabrizz/MMM-OnSpotify"}

用代码 `::github{repo="<owner>/<repo>"}` 创建 GitHub 仓库卡片。

```markdown
::github{repo="saicaca/fuwari"}
```

## 警告框

支持以下类型的警告框：`note` `tip` `important` `warning` `caution`

:::note
强调用户应该注意的信息，即使在快速浏览时也要看看。
:::

:::tip
帮助用户成功的可选信息。
:::

:::important
用户成功所必需的关键信息。
:::

:::warning
需要立即引起注意的关键内容，因为可能有风险。
:::

:::caution
某个行为的负面潜在后果。
:::

### 基本语法

```markdown
:::note
强调用户应该注意的信息，即使在快速浏览时也要看看。
:::

:::tip
帮助用户成功的可选信息。
:::
```

### 自定义标题

警告框的标题可以自定义。

:::note[自定义标题]
这是一个带自定义标题的 note。
:::

```markdown
:::note[自定义标题]
这是一个带自定义标题的 note。
:::
```

### GitHub 语法

> [!TIP]
> [GitHub 语法](https://github.com/orgs/community/discussions/16925) 也被支持。

```markdown
> [!NOTE]
> GitHub 语法也被支持。

> [!TIP]
> GitHub 语法也被支持。
```

### 剧透

你可以给文字加剧透。内容也支持 **Markdown** 语法。

内容 :spoiler[被隐藏 **了**]！

```markdown
内容 :spoiler[被隐藏 **了**]！

```
