# Cloudflare Wrangler 部署命令修复

## 目标

修复 Cloudflare 构建完成后执行 `npx wrangler deploy` 时报 `wrangler: not found` 的问题。

## 修改范围

- `package.json`
- `pnpm-lock.yaml`

## 核心实现

将 `wrangler@4.59.2` 声明为普通 `dependencies`，确保 Cloudflare 在 `NODE_ENV=production` 环境安装依赖时也会安装并链接 Wrangler CLI。

## 影响范围

部署阶段可以稳定解析 `wrangler` 命令；站点主题、页面渲染和内容构建逻辑不变。

## 验证方式

- `NODE_ENV=production pnpm install` 语义下确认 `wrangler` 作为 dependencies 安装
- `pnpm exec wrangler --version`
- `npx wrangler --version`
- `pnpm exec wrangler deploy --dry-run`
- `pnpm run build`

## 已知限制

本地 dry-run 不会真实发布到 Cloudflare；最终仍需以 Cloudflare 平台部署结果为准。
