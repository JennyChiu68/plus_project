# Jin10 Plus 内容规则与数据模型 v1

## 1. 这份文档解决什么问题

这份文档聚焦 3 件事：

1. 明确 `免费快讯 / Plus / 钻石VIP` 的内容边界和发布规则
2. 规定主站快讯流里 `Plus` 内容的标准插入模板
3. 反推 `Plus` 的前后台数据模型，方便产品、编辑、技术和 AI 协同

目标不是继续讨论“方向对不对”，而是把已经确认的方向收敛成能落地的规则。

---

## 2. 三层会员体系的内容边界

### 2.1 三层体系卖的是什么

| 层级 | 核心卖点 | 用户得到什么 | 不应该卖什么 |
| --- | --- | --- | --- |
| 免费快讯 | 覆盖广、知道发生了什么 | 基础 headline、常规更新、公共事件提醒 | 不能卖信息领先感 |
| Plus | 更早、更全、更连续 | 先发、专题追踪、核验、拆解、译讯、本地化影响路径 | 不直接卖点位、指标、工具 |
| 钻石VIP | 交易辅助和深度工具 | 指标、功能、研究、点位、策略、交易辅助 | 不应该退化成只多发几条快讯 |

### 2.2 单条内容的边界规则

| 维度 | 免费快讯 | Plus | 钻石VIP |
| --- | --- | --- | --- |
| 标题 | 可以完整展示 | 可以完整展示 | 可以完整展示 |
| 基础事实 | 可以展示 | 可以展示 | 可以展示 |
| 原始来源说明 | 简略 | 详细 | 详细 |
| 多源交叉确认 | 不要求 | 核心价值之一 | 可引用 Plus 结果 |
| 增量信息 | 只保留一层 | 完整展示 | 完整展示 |
| 影响资产 | 基础版 | 完整版 | 可延展到策略含义 |
| 下一观察点 | 通常不写 | 必须写 | 必须写 |
| 专题时间线 | 不做 | 关键能力 | 可引用专题结果 |
| 传闻核验过程 | 不完整公开 | 核心能力 | 可引用结论 |
| 点位 / 指标 / 策略 | 不给 | 不给 | 可以给 |
| 工具 / 功能 / 图表 | 不给 | 原则上不给 | 可以给 |

### 2.3 Plus 的允许内容

Plus 可以承载以下 5 类内容：

- `先发快讯`
- `专题追踪`
- `数据拆解`
- `传闻核验`
- `海外译讯 / 本地化重写`

Plus 每条内容至少要满足下面一项，否则不应进入 Plus：

- 比公开共识更早
- 比公开信息更完整
- 比普通快讯更连续
- 比普通快讯更适合中国用户理解和判断影响

### 2.4 Plus 的禁止内容

以下内容不应单独定义为 Plus 的核心卖点：

- 单纯把公开媒体稿换成中文
- 没有增量的二次整理
- 只有标题党、没有来源支撑
- 直接给交易点位、做多做空建议
- 用“锁内容”包装普通免费快讯

### 2.5 Plus 与免费快讯的发布关系

建议采用以下发布链路：

1. `Plus` 先发布完整版
2. 免费快讯随后发布简版
3. 若内容具备交易辅助价值，再向钻石VIP延展

建议的时间窗：

| 场景 | 免费下放建议 |
| --- | --- |
| 一般先发 | `10-30 分钟` 后下放简版 |
| 高热突发 | 可更快下放，但只下放 headline 与基础事实 |
| 传闻核验 | 免费只给状态，不给核验过程 |
| 专题追踪 | 免费给最新节点，完整时间线保留在 Plus |
| 数据拆解 | 免费给结果，结构拆解保留在 Plus |

### 2.6 从 Plus 向钻石VIP的升级规则

只有满足以下情况之一，才建议继续延展到钻石VIP：

- 需要点位、指标或图表辅助
- 需要交易节奏判断
- 需要工具和功能支撑
- 需要研究性结论沉淀

也就是说：

- `Plus` 负责信息优势
- `钻石VIP` 负责决策支持

---

## 3. 主站 Plus 插入模板

### 3.1 为什么必须标准化

主站快讯流是 `Plus` 最重要的曝光入口。  
如果主站里的 `Plus` 插入样式不标准，后续会出现：

- 每条样式都不一致
- 曝光强度不稳定
- 用户不知道 `Plus` 到底卖什么
- 运营无法评估哪种样式转化更高

因此建议把主站里的 `Plus` 内容固定为 3 种模板。

### 3.2 模板 A：Plus 先发

**用途**

- 展示“比公开共识更早一步”的内容

**出现条件**

- 有明确增量
- 已完成基础来源确认
- 适合在主站曝光但不宜全部公开

**主站展示字段**

- 时间
- `PLUS 先发` 标签
- 标题
- 1 段简摘要
- `影响资产`
- `是否并入专题`
- `仅展示摘要` 提示

**非付费用户可见**

- headline
- 一层摘要
- 影响资产
- 专题归属

**非付费用户不可见**

- 完整原始源说明
- 多源确认细节
- 完整影响路径
- 下一观察点的完整展开

**点击去向**

- 优先进入 `Plus 预览页`
- 再由预览页承接到完整 Plus

**推荐文案格式**

- 标签：`PLUS 先发`
- 底部提示：`Plus专享：开通后查看完整来源、影响路径和专题时间线`

### 3.3 模板 B：Plus 追踪

**用途**

- 展示“这不是单条快讯，而是持续更新的一件事”

**出现条件**

- 事件已进入专题
- 有 2 个及以上节点
- 后续仍会持续补充

**主站展示字段**

- 时间
- `PLUS 追踪` 标签
- 标题
- 当前最新结论
- `节点数`
- `最后更新时间`
- `下一个观察点`

**非付费用户可见**

- 最新结论
- 节点数
- 最后更新时间

**非付费用户不可见**

- 全时间线
- 原始源归档
- 专题内核验说明

**点击去向**

- 优先进入 `专题预览页`
- 从预览页进入完整专题页

### 3.4 模板 C：Plus 核验

**用途**

- 展示 `Plus` 的真实性过滤能力

**出现条件**

- 市场 rumor 或截图型消息开始扩散
- 核验尚未结束，或已形成结论

**主站展示字段**

- 时间
- `PLUS 核验` 标签
- 标题
- 当前核验状态
- 已排除来源数或待确认对象

**推荐状态**

- `待核实`
- `部分属实`
- `已证实`
- `误传`

**非付费用户可见**

- 当前状态
- 核验对象
- 风险提示

**非付费用户不可见**

- 完整核验链路
- 已排除来源清单
- 证据对比过程

**点击去向**

- 优先进入 `核验预览页`
- 再进入完整核验详情页

### 3.5 主站插入规则

| 规则项 | 建议 |
| --- | --- |
| 每 20-30 条普通快讯中插入 1 条 Plus | 避免过密影响主站体验 |
| 高峰时段允许连续出现 2 条不同类型 Plus | 但不建议 2 条相同模板连发 |
| 优先插入 `先发` 和 `追踪` | 这两类最容易形成价值感 |
| `核验` 适合在 rumor 高频日加大露出 | 地缘、OPEC、央行 rumor 日尤其适合 |
| 主站样式仍保持金十原生风格 | `Plus` 只作为内容标签，不另起皮肤 |

### 3.6 模板字段规范

| 字段 | 是否必填 | 说明 |
| --- | --- | --- |
| `template_type` | 是 | `first / tracking / verify` |
| `title` | 是 | 主标题 |
| `summary_short` | 是 | 主站快讯流摘要 |
| `teaser_note` | 是 | `Plus专享` 提示 |
| `impact_assets` | 先发必填 | 影响资产列表 |
| `topic_ref` | 追踪优先填 | 对应专题 |
| `node_count` | 追踪必填 | 当前专题节点数 |
| `verification_status` | 核验必填 | 当前核验状态 |
| `locked_fields` | 是 | 哪些信息在预览页后锁住 |

---

## 4. Plus 数据模型

### 4.1 核心实体

建议把 `Plus` 拆成 6 个核心实体。

| 实体 | 作用 |
| --- | --- |
| `content_item` | 单条 Plus 内容主表 |
| `topic` | 专题主表 |
| `content_source` | 来源表 |
| `asset_tag` | 资产和市场方向标签 |
| `verification_record` | 核验过程表 |
| `distribution_rule` | 分发和露出规则表 |

### 4.2 content_item

这是最核心的实体，一条 `Plus` 内容不管是先发、追踪、拆解还是核验，都应归到 `content_item`。

**建议字段**

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | string | 内容唯一 ID |
| `title` | string | 标题 |
| `summary_short` | text | 主站简摘要 |
| `summary_full` | text | Plus 完整摘要 |
| `content_type` | enum | `first / tracking / data / verify / translation` |
| `market_tags` | array | `macro / gold / bonds / oil / fx / metals` |
| `status` | enum | `draft / reviewing / published / archived` |
| `verification_status` | enum | `none / pending / partial / confirmed / false` |
| `source_count` | int | 当前来源数 |
| `impact_assets` | array | 影响资产 |
| `increment_point` | text | 增量信息 |
| `why_important` | text | 为什么重要 |
| `next_watch` | text | 下一观察点 |
| `topic_id` | string nullable | 所属专题 |
| `is_main_site_exposed` | boolean | 是否已在主站曝光 |
| `main_site_template` | enum nullable | 主站模板类型 |
| `preview_url` | string | 预览页地址 |
| `full_url` | string | 完整 Plus 页地址 |
| `publish_at` | datetime | 发布时间 |
| `free_release_at` | datetime nullable | 免费下放时间 |
| `editor_owner` | string | 责任编辑 |
| `ai_assist_used` | boolean | 是否有 AI 辅助 |

### 4.3 topic

一个专题由多个 `content_item` 构成。

**建议字段**

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | string | 专题 ID |
| `title` | string | 专题标题 |
| `topic_status` | enum | `tracking / analyzing / verifying / closed` |
| `latest_conclusion` | text | 当前最新结论 |
| `node_count` | int | 节点数 |
| `last_updated_at` | datetime | 最后更新时间 |
| `next_watch` | text | 下一观察点 |
| `impact_assets` | array | 影响资产 |
| `source_archive_count` | int | 已归档来源数 |
| `cover_item_id` | string | 专题封面内容 |

### 4.4 content_source

一条 Plus 内容的竞争力，很大部分来自来源管理，所以来源需要结构化。

**建议字段**

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | string | 来源 ID |
| `content_item_id` | string | 关联内容 |
| `source_type` | enum | `official / regulator / exchange / company / media / social / local_media / research` |
| `source_name` | string | 来源名 |
| `source_url` | string | 链接 |
| `language` | enum | `zh / en / ar / jp / fr / other` |
| `is_primary` | boolean | 是否一手源 |
| `is_confirmed` | boolean | 是否已确认有效 |
| `quote_excerpt` | text | 原文摘录 |
| `editor_note` | text | 编辑说明 |

### 4.5 verification_record

这个表是 `传闻核验` 的关键。

**建议字段**

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | string | 核验记录 ID |
| `content_item_id` | string | 对应内容 |
| `claim_text` | text | 待核验说法 |
| `current_status` | enum | `pending / partial / confirmed / false` |
| `confirmed_points` | text | 已确认内容 |
| `unconfirmed_points` | text | 未确认内容 |
| `rejected_sources` | array | 已排除来源 |
| `pending_targets` | array | 待确认对象 |
| `risk_note` | text | 风险提示 |
| `updated_at` | datetime | 最近更新时间 |

### 4.6 distribution_rule

这张表用来决定内容怎么分发到免费、Plus、主站、钻石VIP。

**建议字段**

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | string | 规则 ID |
| `content_item_id` | string | 关联内容 |
| `channel` | enum | `free / plus / diamond / main_site_preview` |
| `is_enabled` | boolean | 是否启用 |
| `release_at` | datetime | 发布时间 |
| `lock_scope` | json | 哪些字段锁定 |
| `template_type` | enum nullable | 主站插入模板 |
| `priority` | int | 露出优先级 |

---

## 5. 建议的枚举值

### 5.1 content_type

- `first`
- `tracking`
- `data`
- `verify`
- `translation`

### 5.2 market_tags

- `macro`
- `gold`
- `bonds`
- `oil`
- `fx`
- `metals`

### 5.3 verification_status

- `none`
- `pending`
- `partial`
- `confirmed`
- `false`

### 5.4 topic_status

- `tracking`
- `analyzing`
- `verifying`
- `closed`

---

## 6. 前端展示与数据字段的映射关系

### 6.1 主站 Plus 插入条

| 页面字段 | 数据来源 |
| --- | --- |
| 标签 | `main_site_template` |
| 标题 | `title` |
| 摘要 | `summary_short` |
| 影响资产 | `impact_assets` |
| 专题状态 | `topic_id + node_count` |
| 核验状态 | `verification_status` |

### 6.2 Plus 首页实时流

| 页面字段 | 数据来源 |
| --- | --- |
| 内容类型标签 | `content_type` |
| 市场标签 | `market_tags` |
| 时间 | `publish_at` |
| 增量 | `increment_point` |
| 影响 | `impact_assets` |
| 下一看点 | `next_watch` |

### 6.3 专题页

| 页面字段 | 数据来源 |
| --- | --- |
| 专题标题 | `topic.title` |
| 当前状态 | `topic.topic_status` |
| 最新结论 | `topic.latest_conclusion` |
| 节点数 | `topic.node_count` |
| 时间线 | `content_item` 列表 |
| 原始源 | `content_source` |

---

## 7. 编辑后台最少需要支持什么

如果后续做后台，建议至少支持下面这些动作：

- 新建一条 `content_item`
- 选择 `content_type`
- 绑定 `market_tags`
- 填写 `summary_short / summary_full / increment_point / next_watch`
- 录入多个 `content_source`
- 设置 `verification_status`
- 决定是否并入 `topic`
- 选择是否进入 `main_site_preview`
- 选择主站模板类型
- 设置免费下放时间

如果没有这些基础能力，前端页面即使设计好了，也很难稳定运营。

---

## 8. 当前阶段最值得先做的产品动作

如果只推进一轮产品落地，我建议按下面顺序：

1. 先把 `内容边界规则表` 固定下来
2. 再把 `主站 3 种插入模板` 固定下来
3. 最后按这份文档回推后台字段

这样可以保证：

- 前台展示不乱
- 编辑生产不乱
- 技术实现不返工

---

## 9. 一句话结论

`Plus` 不是多一个会员价格带，而是多一套以“信息优势”为核心的内容生产和分发系统。  
要把它做起来，最关键的不是页面数量，而是：

- 边界清楚
- 模板固定
- 字段先行
