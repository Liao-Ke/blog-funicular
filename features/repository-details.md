# 设置 repository details

## 目标
为 GitHub 仓库 blog-funicular 设置详细的描述信息和话题标签。

## 修改范围
仅涉及 GitHub 仓库元数据，无代码变更。

## 核心实现
使用 `gh repo edit` 命令设置：
- 描述：基于 Fuwari 模板的个人博客，使用 Astro 5 + Svelte 5 + Tailwind CSS 构建
- 话题标签：blog, astro, svelte, tailwind-css, personal-blog, static-site
- 可见性：PUBLIC（保持不变）

## 影响范围
无代码影响，仅更新 GitHub 仓库元数据。

## 验证方式
```bash
gh repo view --json name,description,url,visibility,repositoryTopics
```

## 已知限制
首页 URL 尚未设置，待 Vercel 部署后可补充。
