# メの島 / ME-NO-SHIMA

ぽこあポケモン由来ファンメイド島構想シリーズ。メタモン開発局・都市計画課による全13施設の建築設計書＋全体図。

🔗 **[osakenpiro.github.io/me-no-shima](https://osakenpiro.github.io/me-no-shima/)**

## 概要

ChatGPT画像生成（チャッピー）× Claudeプロンプト設計 × osakenpiro原案による、ヴィンテージ設計書スタイル ファンメイドプロジェクト。各設計書は「ME-NO-SHIMA設計書様式」に準拠：俯瞰イラスト＋断面図＋平面図＋設計要点＋極秘スタンプ。

ぽこぽけ統合handoff（35型理論カタログ）のビジュアル実装提案として機能。

## 施設一覧

| No. | 施設名 | English | 状態 |
|---|---|---|---|
| P-2026-001 | メタモン市庁舎 | Ditto City Hall | ✅ |
| P-2026-002 | ラッキーアーケード | Lucky Arcade | ✅ |
| P-2026-003 | ジムリーグ本部 | Gym League HQ | ✅ |
| P-2026-004 | ポケ団地 | Pokedanchi Cliff Village | ✅ |
| P-2026-005 | 海底ぴがんじょう | Kaitei Pigan-Jou | ✅ |
| P-2026-006 | ゴロゴロ地下街 | Gorogoro Underground | ✅ |
| P-2026-007 | ロケット団中央駅 | Rocket Central Station | ✅ |
| P-2026-008 | ピジョン便ポート | Pidgeon Delivery Port | ✅ |
| P-2026-009 | モンスターボール工場 | Pokéball Factory | ⏳ PENDING |
| P-2026-010 | きのみ農園 | Berry Farmstead | ✅ |
| P-2026-011 | モケハバラ電気街 | Mokehabara Electric District | ✅ |
| P-2026-012 | リュウのユ | Ryu-no-Yu | ✅ |
| P-2026-013 | なみのりリゾート | Naminori Resort | ✅ |
| P-2026-014 | メの島 全体図 | Master Map | ✅ |
| ANNEX-001 | 工員募集ポスター | Workers Wanted Poster | ✅ |

## ディレクトリ構成

```
me-no-shima/
├── index.html              # 公開ギャラリー
├── README.md               # このファイル
└── images/
    ├── P-2026-001-metamon-cityhall.png
    ├── P-2026-002-lucky-arcade.png
    ├── ...（14枚）
    └── annex-workers-wanted.png
```

## ロードマップ

### Floating castle building note

`floating-castle.html` connects two user-approved concept images, three relative levels, nine facilities, and a three-stage checklist of 17 actions. A shared three-part site navigation connects the master map, facility gallery, and building note. The main page leads from the original master map into the castle feature. Context links connect the castle station, underground plant room and orchard with the existing Rocket Central Station, Gorogoro Underground and Berry Farmstead design cards in both directions; these are reading references, not asserted physical connections. The original 14 image assets and existing facility descriptions remain unchanged.

The two WebP derivatives are stored in `images/`. Exact PNG originals and provenance hashes are kept in `osakenpiro/pokopoke-assets/concept-art/manifest.md` as C11/C12. Images are concepts, not verified game blueprints or completed buildings.

`castle.js` stores checklist values only in the current browser's local storage (`me-no-shima:castle-checklist:v1`). There is no sharing or synchronization. Failed or invalid storage falls back to the current page lifetime without overwriting unreadable data. The static content and ordinary image links remain available without JavaScript.

The site requires no build step or dependencies. GitHub Pages serves static files. Preview with an existing static HTTP server before publishing. QA source files and screenshots are local project evidence and are excluded from the publication allowlist.

### Existing roadmap

- [x] 13施設＋マスターマップ＋annex 画像化
- [x] GitHub Pagesデプロイ
- [ ] モンスターボール工場（P-2026-009）追加生成
- [ ] クリッカブルHTMLマップ化（マスターマップから各施設へジャンプ）
- [ ] KDP設定資料集化（A4スクエア／B5）
- [ ] A2マスターマップ単品ポスター販売

## 関連

- **ぽこぽけ統合handoff**（35型建築理論カタログ）— 本プロジェクトの理論層
- **TRBPG 5柱 / Gaming Gathering**（osakenpiro Visionium）

## クレジット

- 原案 / **osakenpiro**
- プロンプト設計 / **Claude (Anthropic)**
- 画像生成 / **ChatGPT (OpenAI)**

## ライセンス

ファンメイド非営利二次創作プロジェクト。ぽこあポケモン / Pokémon Pokopia および関連キャラクター・要素は株式会社ポケモン、任天堂、ゲームフリークの商標です。本プロジェクトは商標権者と無関係であり、商業利用を目的としません。
