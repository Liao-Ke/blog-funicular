# 站点初始化收口

## 目标

将项目从 Fuwari 模板演示状态收口为 Liao 的个人博客，并初始化结构索引，便于后续维护。

## 修改范围

- 初始化 `.codegraph/`。
- 更新站点基础身份配置。
- 更新 Cloudflare Pages 自定义域名部署配置。
- 更新 README 与 About 页面。
- 隐藏模板示例文章。
- 新增中文示例草稿，作为后续写作和排版参考。
- 新增一篇欢迎文章，避免生产环境首页为空。
- 修复发布前类型检查暴露的组件类型问题。

## 核心实现

- `src/config.ts` 中将站点标题、副标题和作者简介改为个人博客信息。
- `astro.config.mjs` 中将 `site` 与 `base` 调整为 Cloudflare Pages 自定义域名配置。
- 将模板示例文章统一标记为 `draft: true`，保留文件作为后续写作参考。
- 新增中文示例稿并统一标记为 `draft: true`，避免进入生产页面、RSS 和搜索索引。
- 新增 `src/content/posts/welcome.md` 作为当前唯一公开文章。
- 将 `src/content/spec/about.md` 改写为个人博客介绍。
- 将归档页组件的分类类型与内容 schema 对齐，并让主题切换组件显式接收 Astro 客户端指令属性。
- 清理 Expressive Code 语言角标插件中的无效 `@ts-expect-error`。

## 影响范围

- 生产环境不再发布模板示例文章。
- 中文示例稿仅作为草稿保留，不参与生产发布。
- RSS、Sitemap、站内链接会基于 `https://zenst.cyou` 根路径生成。
- README 不再引用上游模板说明，而是描述当前项目。

## 验证方式

- 已执行 `pnpm check`，通过，0 errors / 0 warnings / 0 hints。
- 已执行 `pnpm format`，通过，Biome 修复 1 个格式文件。
- 已执行 `pnpm lint`，通过，无额外修复。
- 已执行 `pnpm run build`，通过，生成静态站点并完成 Pagefind 索引。

## 已知限制

- 当前站点 URL 暂按 `https://zenst.cyou` 配置；如果后续更换主域名，需要同步调整 `astro.config.mjs`。
- 头像仍使用模板图片，后续可替换为个人头像。
