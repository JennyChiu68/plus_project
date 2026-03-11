# Jin10 Plus 页面流转图

## 页面关系

```mermaid
flowchart LR
    A["金十主站快讯流<br/>jin10-main-plus-feed.html"]
    B["Plus 先发预览页<br/>jin10-main-plus-preview.html"]
    C["Plus 追踪预览页<br/>jin10-main-plus-topic.html"]

    D["Plus 首页 / 情报台<br/>plus-prototype.html"]
    E["栏目台<br/>plus-library.html"]
    F["专题库<br/>plus-topics.html"]
    G["市场席位 / 我的关注<br/>plus-market-desk.html"]

    H["单条详情页<br/>plus-story-auction.html"]
    I["专题详情页<br/>plus-topic-auction.html"]
    J["专题详情页<br/>plus-topic-cpi.html"]
    K["专题详情页<br/>plus-topic-shipping.html"]
    L["单条详情页<br/>plus-story-opec-verify.html"]
    M["单条详情页<br/>plus-story-nfp-data.html"]
    N["单条详情页<br/>plus-story-ecb-translation.html"]
    O["单条详情页<br/>plus-story-lme-nickel.html"]

    A -->|"点击 Plus 先发条"| B
    A -->|"点击 Plus 追踪条"| C
    A -->|"进入 Plus"| D

    B -->|"进入完整 Plus"| H
    B -->|"进入专题"| I
    B -->|"情报台展开"| D

    C -->|"进入完整专题"| J
    C -->|"情报台展开"| D

    D -->|"左侧 内容类型"| E
    D -->|"顶部 今日首发 / 核验中"| E
    D -->|"左侧 市场方向"| G
    D -->|"左侧 我的主题"| I
    D -->|"底部 进行中的专题"| F
    D -->|"底部 我的关注"| G

    D -->|"实时流 先发行"| H
    D -->|"实时流 专题追踪行"| J
    D -->|"实时流 传闻核验行"| L
    D -->|"实时流 数据拆解行"| M
    D -->|"实时流 海外译讯行"| N
    D -->|"实时流 金属首发行"| O

    E -->|"首发"| H
    E -->|"专题追踪"| I
    E -->|"数据拆解"| M
    E -->|"传闻核验"| L
    E -->|"海外译讯"| N

    F -->|"美债拍卖结构跟踪"| I
    F -->|"CPI 与利率路径"| J
    F -->|"中东航运风险"| K

    G -->|"美债方向"| I
    G -->|"宏观方向"| J
    G -->|"原油方向"| K
    G -->|"外汇方向"| N
    G -->|"金属方向"| O
```

## 核心说明

- `栏目台` 的主要入口在 `Plus 首页` 左侧 `内容类型`。
- `栏目台` 的次级入口在 `Plus 首页` 顶部统计卡，比如 `今日首发`、`核验中`。
- `专题库` 是从首页底部 `进行中的专题` 进入。
- `市场席位 / 我的关注` 是从首页左侧 `市场方向`、底部 `我的关注` 进入。
- `主站快讯流` 里的 `Plus` 条目是曝光入口，不替代 `Plus 首页`。
