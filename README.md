# J.GAO Independent Report

J.GAO 獨立唯讀報表，版型與功能參考 Liaoliao 撩撩最新版。

## Data source

- Meta account ID: `2345685238995965`
- Public feed: `https://speedingscs.pages.dev/api/public/jgao`
- Shared logo storage: `https://speedingscs.pages.dev/api/public/logo?brand=jgao`

## Report behavior

- 每月報表預設全部展開
- 廣告分析、決策分析、投放成效、行銷活動分析預設展開
- 業配分析的當月明細預設展開
- 月報告使用規則式「自動判斷」，不需要 OpenAI / Team Key
- 公開唯讀，不暴露 Meta token 或團隊密碼

## Deployment

The repository includes a GitHub Pages workflow that validates the inline JSX with Babel before deployment.
