# 全部文章转为草稿

## 目标

将当前文章全部设为草稿，发布时暂不公开任何文章内容。

## 修改范围

- 更新 `src/content/posts/welcome.md` 的 frontmatter。

## 核心实现

- 将当前唯一公开文章 `welcome.md` 的 `draft` 字段从 `false` 改为 `true`。
- 其他文章已经是草稿状态，未修改代码块中的示例 frontmatter。

## 影响范围

- 生产环境不再生成文章详情页。
- 首页、归档页、RSS 与 Pagefind 搜索索引不会包含文章内容。

## 验证方式

- 已执行 `pnpm check`，通过，0 errors / 0 warnings / 0 hints。
- 已执行 `pnpm format`，通过，无文件改动。
- 已执行 `pnpm lint`，通过，无文件改动。
- 已执行 `pnpm run build`，通过；构建结果为 3 个静态页面，不再生成文章详情页。

## 已知限制

- 全部文章为草稿时，站点会处于无公开文章状态；发布前如果需要展示内容，需要至少将一篇文章改回 `draft: false`。
