# Liao 的博客

这是基于 Astro 与 Fuwari 主题整理的个人博客，用来记录技术实践、学习笔记和日常思考。

## 技术栈

- Astro
- Tailwind CSS
- Svelte
- Pagefind
- Expressive Code

## 本地开发

```sh
pnpm install
pnpm dev
```

常用命令：

| 命令 | 作用 |
|:---|:---|
| `pnpm dev` | 启动本地开发服务 |
| `pnpm check` | 运行 Astro 检查 |
| `pnpm format` | 格式化 `src` |
| `pnpm lint` | 运行 Biome 检查并自动修复 |
| `pnpm build` | 构建站点并生成 Pagefind 搜索索引 |
| `pnpm new-post <filename>` | 新建文章 |

## 内容约定

文章位于 `src/content/posts/`，必填 frontmatter：

```yaml
---
title: 文章标题
published: 2026-06-09
---
```

常用可选字段：

```yaml
description: 文章摘要
image: ./cover.jpg
tags: [标签]
category: 分类
draft: false
lang: zh-CN
```

## 部署

当前按 Cloudflare Pages 与自定义域名配置：

- `site`: `https://zenst.cyou`
- `base`: `/`

Cloudflare Pages 构建设置：

| 配置项 | 值 |
|:---|:---|
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Node.js version | 20 或更高 |
