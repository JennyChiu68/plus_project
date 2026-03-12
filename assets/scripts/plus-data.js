(function () {
  const data = {
    assetTags: [
      { id: "macro", label: "宏观" },
      { id: "gold", label: "黄金" },
      { id: "bonds", label: "美债" },
      { id: "oil", label: "原油" },
      { id: "fx", label: "外汇" }
    ],
    topics: [
      {
        id: "topic-auction",
        title: "今夜四连发",
        topicStatus: "tracking",
        latestConclusion: "北京时间 3 月 11 日晚 CPI、OPEC 月报、EIA 库存和 3 月 12 日凌晨 10Y 标售将连续落地，通胀、原油和长端会被压进同一夜盘窗口。",
        nodeCount: 4,
        lastUpdatedAt: "2026-03-10T08:26:00+08:00",
        nextWatch: "北京时间 3 月 11 日 20:30 CPI / OPEC月报、22:30 EIA库存，3 月 12 日 01:00 10Y 标售",
        impactAssets: ["黄金", "原油", "美元", "美债10Y"],
        sourceArchiveCount: 4,
        coverItemId: "content-auction-first"
      },
      {
        id: "topic-cpi",
        title: "2月非农后的 CPI 与 6 月路径",
        topicStatus: "analyzing",
        latestConclusion: "2 月非农偏弱、工资仍有韧性，宏观线索继续指向“增长放缓与通胀约束并存”，CPI 仍是决定 6 月路径的最后一跳。",
        nodeCount: 4,
        lastUpdatedAt: "2026-03-11T10:46:00+08:00",
        nextWatch: "北京时间 3 月 11 日 20:30 CPI",
        impactAssets: ["黄金", "美元", "纳指"],
        sourceArchiveCount: 4,
        coverItemId: "content-cpi-tracking"
      },
      {
        id: "topic-shipping",
        title: "霍尔木兹航运与油轮运费飙升",
        topicStatus: "verifying",
        latestConclusion: "霍尔木兹并未完全停摆，但通行骤降、油轮运价跳升和高油价路径已经同时出现，风险已从消息层扩散到费率层。",
        nodeCount: 5,
        lastUpdatedAt: "2026-03-11T11:12:00+08:00",
        nextWatch: "海峡通行与运费是否继续异常扩大",
        impactAssets: ["WTI", "布伦特", "黄金"],
        sourceArchiveCount: 4,
        coverItemId: "content-opec-verify"
      }
    ],
    contentItems: [
      {
        id: "content-auction-first",
        title: "今夜四连发：CPI / OPEC月报 / EIA库存 / 10Y标售，将把通胀、原油和长端同时压进一个窗口。",
        summaryShort:
          "今晚最关键的不是某一个数据，而是 CPI、OPEC 月报、EIA 库存和 10Y 标售会在几个小时里连着出来。对夜盘来说，这四条消息共同组成一条主线。",
        summaryFull:
          "这条首发的核心增量不是单独提醒某一个日程，而是先把 CPI、OPEC 月报、EIA 库存和 10Y 标售压成一条夜盘主线。对用户来说，更重要的是原油、通胀和长端会不会在同一晚互相强化。",
        contentType: "first",
        marketTags: ["bonds", "macro"],
        status: "published",
        verificationStatus: "confirmed",
        sourceCount: 3,
        impactAssets: ["黄金", "原油", "美元", "美债10Y"],
        incrementPoint: "四组公开日程被压成一条夜盘主线",
        whyImportant: "Plus 的价值是先把这些公开结果归并成同一条夜盘主线，让用户知道原油、通胀和长端会不会一起走出方向。",
        nextWatch: "20:30 CPI / OPEC月报，22:30 EIA库存，01:00 10Y",
        topicId: "topic-auction",
        isMainSiteExposed: true,
        mainSiteTemplate: "first",
        previewUrl: "jin10-main-plus-preview.html",
        fullUrl: "plus-story-auction.html",
        publishAt: "2026-03-10T08:12:00+08:00",
        freeReleaseAt: "2026-03-10T08:32:00+08:00",
        editorOwner: "宏观值班台",
        aiAssistUsed: true,
        mainSitePreview: {
          label: "PLUS 先发",
          badgeClass: "plus",
          chips: ["影响 黄金 / 原油 / 美元 / 美债10Y", "已并入专题", "仅展示摘要"],
          teaserNote: "Plus专享：开通后查看完整来源、时间线和影响路径"
        }
      },
      {
        id: "content-cpi-tracking",
        title: "2月非农后的 CPI 与 6 月路径",
        summaryShort:
          "BLS 显示美国 2 月非农减少 9.2 万、失业率升至 4.4%，但平均时薪环比仍增 0.4%、同比增 4.2%。在 CPI 公布前，市场对 6 月更偏“增长放缓”还是“通胀黏性”重新分叉。",
        summaryFull:
          "这个专题现在最重要的不是单看一个表面数字，而是把非农、时薪、失业率和即将到来的 CPI 放在一条线上。市场对 6 月路径的判断，正在从单边预期转回双向拉扯。",
        contentType: "tracking",
        marketTags: ["macro", "gold", "fx"],
        status: "published",
        verificationStatus: "none",
        sourceCount: 4,
        impactAssets: ["黄金", "美元", "纳指"],
        incrementPoint: "非农走弱，但时薪仍偏强，CPI 成为下一关键分叉点",
        whyImportant: "这决定利率路径、美元方向以及黄金和成长资产的定价节奏。",
        nextWatch: "北京时间 3 月 11 日 20:30 CPI",
        topicId: "topic-cpi",
        isMainSiteExposed: true,
        mainSiteTemplate: "tracking",
        previewUrl: "jin10-main-plus-topic.html",
        fullUrl: "plus-topic-cpi.html",
        publishAt: "2026-03-10T10:01:00+08:00",
        freeReleaseAt: null,
        editorOwner: "宏观值班台",
        aiAssistUsed: true,
        mainSitePreview: {
          label: "PLUS 追踪",
          badgeClass: "track",
          chips: ["专题已更新至第4节点", "影响 黄金 / 美元 / 纳指", "下个节点 2月CPI"],
          teaserNote: "Plus专享：开通后查看专题时间线与新增节点"
        }
      },
      {
        id: "content-opec-verify",
        title: "霍尔木兹并未完全停摆，但通行骤降与油轮运价飙升已同时出现。",
        summaryShort:
          "当前可以确认的是，霍尔木兹海峡并非完全没有船在走，但通行船舶数量明显收缩，海湾-亚洲油轮即期运价和附加费同步抬升。风险已经从消息层走到航运费率层。",
        summaryFull:
          "这条核验要解决的不是“有没有航运风险”，而是“风险已经走到了哪一步”。截至北京时间 3 月 11 日上午，可以确认霍尔木兹仍在通行，但通行骤降与油轮运价飙升已同时出现，不能直接写成“全面关闭”。",
        contentType: "verify",
        marketTags: ["oil", "gold"],
        status: "published",
        verificationStatus: "confirmed",
        sourceCount: 3,
        impactAssets: ["WTI", "布伦特", "黄金"],
        incrementPoint: "已核验通行骤降与运价飙升并存，不能升级成“全面停摆”",
        whyImportant: "它直接影响原油和避险资产是在交易消息噪音，还是交易已经扩散到费率层的持续性风险。",
        nextWatch: "海峡通行与运费是否继续异常扩大",
        topicId: "topic-shipping",
        isMainSiteExposed: true,
        mainSiteTemplate: "verify",
        previewUrl: "jin10-main-plus-verify.html",
        fullUrl: "plus-story-opec-verify.html",
        publishAt: "2026-03-10T09:18:00+08:00",
        freeReleaseAt: null,
        editorOwner: "能源值班台",
        aiAssistUsed: true,
        mainSitePreview: {
          label: "PLUS 核验",
          badgeClass: "verify",
          chips: ["状态 已核验", "通行仍在继续", "运价已异常抬升"],
          teaserNote: "Plus专享：开通后查看核验链路、官方原文与风险边界"
        }
      },
      {
        id: "content-nfp-data",
        title: "美国 2 月非农减少 9.2 万，失业率升至 4.4%，时薪同比仍增 4.2%。",
        summaryShort:
          "BLS 公布的 2 月就业报告显示，非农就业人数减少 9.2 万，失业率升至 4.4%；但平均时薪环比增 0.4%、同比增 4.2%，说明就业表面数据偏弱，工资端却没有同步快速降温。",
        summaryFull:
          "这条拆解最值得看的不是非农表面结果本身，而是就业走弱和工资仍有韧性同时存在。它会直接影响市场如何解读第二天的 CPI，以及 6 月路径是继续宽松还是重新受限。",
        contentType: "data",
        marketTags: ["macro", "bonds", "fx"],
        status: "published",
        verificationStatus: "none",
        sourceCount: 2,
        impactAssets: ["美元", "美债", "纳指"],
        incrementPoint: "就业下滑与工资韧性同时存在",
        whyImportant: "这会把单向的宽松交易重新拉回双向定价。",
        nextWatch: "与 2 月 CPI 合并观察",
        topicId: "topic-cpi",
        isMainSiteExposed: false,
        mainSiteTemplate: null,
        previewUrl: null,
        fullUrl: "plus-story-nfp-data.html",
        publishAt: "2026-03-10T09:46:00+08:00",
        freeReleaseAt: null,
        editorOwner: "宏观值班台",
        aiAssistUsed: true
      },
      {
        id: "content-credit-data",
        title: "中国央行连续第16个月增持黄金，官方储备买盘仍在延续。",
        summaryShort:
          "国家外汇管理局最新储备资产数据显示，中国 2 月末黄金储备较上月继续增加。真正值得看的不是“又买了多少”，而是在国际金价已经处在高位的环境下，官方配置方向仍然没有改变。",
        summaryFull:
          "这条拆解最值得看的不是再说一次“央行继续买金”，而是把官方储备变化、国际金价高位和国内用户真正关心的传导路径放到一起。高位金价下官方买盘仍在延续，本身就是今天黄金线最重要的新增量。",
        contentType: "data",
        marketTags: ["gold", "macro", "fx"],
        status: "published",
        verificationStatus: "none",
        sourceCount: 2,
        impactAssets: ["黄金", "人民币资产", "美元"],
        incrementPoint: "高位金价下官方买盘仍未中断",
        whyImportant: "它会直接影响国内用户对金价高位是否仍有承接，以及官方需求会不会继续被视作中线托底力量的判断。",
        nextWatch: "后续月度储备是否继续增加，以及高位金价下 ETF 资金是否继续流入",
        topicId: null,
        isMainSiteExposed: false,
        mainSiteTemplate: null,
        previewUrl: null,
        fullUrl: "plus-story-credit.html",
        publishAt: "2026-03-11T10:46:00+08:00",
        freeReleaseAt: null,
        editorOwner: "宏观值班台",
        aiAssistUsed: true
      },
      {
        id: "content-eia-oil",
        title: "EIA：布伦特 3 月 9 日已升至 94 美元/桶，预计未来两个月仍高于 95 美元。",
        summaryShort:
          "EIA 3 月 STEO 写明，布伦特已在 3 月 9 日收于 94 美元/桶，并预计未来两个月仍高于 95 美元，随后在三季度回落至 80 美元下方。这把油价高位从地缘消息延伸成了官方短期路径。",
        summaryFull:
          "这条拆解的增量不在于再说一次油价涨了，而是把短线供应冲击与官方中短期路径接上。EIA 已经把接下来两个月的高油价写进预测里，说明油价高位不只是一阵情绪波动。",
        contentType: "data",
        marketTags: ["oil", "gold", "fx"],
        status: "published",
        verificationStatus: "none",
        sourceCount: 1,
        impactAssets: ["布伦特", "WTI", "黄金"],
        incrementPoint: "官方预测确认未来两个月油价仍维持高位",
        whyImportant: "它把“是否需要库存工具”的讨论和“油价会不会自行回落”的讨论拉到同一个框架里。",
        nextWatch: "后续供应恢复速度，以及正式库存工具是否落地",
        topicId: "topic-shipping",
        isMainSiteExposed: false,
        mainSiteTemplate: null,
        previewUrl: null,
        fullUrl: "plus-story-eia-oil.html",
        publishAt: "2026-03-11T11:12:00+08:00",
        freeReleaseAt: null,
        editorOwner: "能源值班台",
        aiAssistUsed: true
      },
      {
        id: "content-ecb-translation",
        title: "欧洲央行称工资增长继续放缓，服务通胀降至 3.2%。",
        summaryShort:
          "欧洲央行 2 月政策声明称，工资增长继续按照预期放缓，服务通胀从 3.4% 降至 3.2%。这意味着欧元区通胀黏性并未消失，但对欧元形成更强上冲的支撑也在减弱。",
        summaryFull:
          "这条译讯的重点不在翻译本身，而在于把 ECB 对工资和服务通胀的表述转换成中国用户更关心的资产语言：欧元弹性受限，美元相对优势更容易延续，人民币相关资产更偏被动跟随。",
        contentType: "translation",
        marketTags: ["fx", "macro"],
        status: "published",
        verificationStatus: "none",
        sourceCount: 1,
        impactAssets: ["欧元", "美元", "人民币相关资产"],
        incrementPoint: "工资与服务通胀表述同步转弱",
        whyImportant: "它帮助用户判断欧美央行路径差异如何传导到外汇和人民币资产。",
        nextWatch: "欧央行后续讲话是否强化这一方向",
        topicId: null,
        isMainSiteExposed: false,
        mainSiteTemplate: null,
        previewUrl: null,
        fullUrl: "plus-story-ecb-translation.html",
        publishAt: "2026-03-10T10:28:00+08:00",
        freeReleaseAt: null,
        editorOwner: "外汇值班台",
        aiAssistUsed: true
      }
    ],
    contentSources: [
      {
        id: "source-auction-a",
        contentItemId: "content-auction-first",
        sourceType: "official",
        sourceName: "美国财政部季度再融资声明",
        sourceUrl: "https://home.treasury.gov/news/press-releases/sb0384",
        language: "en",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "Treasury will auction 10-year notes on Wednesday, March 11, 2026, and 30-year bonds on Thursday, March 12, 2026.",
        editorNote: "确认本周 10Y/30Y 标售安排。"
      },
      {
        id: "source-auction-b",
        contentItemId: "content-auction-first",
        sourceType: "official",
        sourceName: "美国劳工统计局 CPI 发布日程",
        sourceUrl: "https://www.bls.gov/schedule/news_release/cpi.htm",
        language: "en",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "The Consumer Price Index for February 2026 is scheduled to be released on Wednesday, March 11, 2026.",
        editorNote: "确认 2 月 CPI 与 10Y 标售同日落地。"
      },
      {
        id: "source-auction-c",
        contentItemId: "content-auction-first",
        sourceType: "official",
        sourceName: "美国劳工统计局 2 月就业报告",
        sourceUrl: "https://www.bls.gov/news.release/empsit.nr0.htm",
        language: "en",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "Nonfarm payroll employment fell by 92,000 in February, and the unemployment rate increased to 4.4 percent.",
        editorNote: "说明标售前长端已经处在增长放缓背景下。"
      },
      {
        id: "source-auction-d",
        contentItemId: "content-auction-first",
        sourceType: "official",
        sourceName: "OPEC 月报发布页",
        sourceUrl: "https://www.opec.org/opec_web/en/publications/338.htm",
        language: "en",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "确认 OPEC 月报进入同一夜盘窗口。",
        editorNote: "补齐夜盘四连发的第四个公开来源。"
      },
      {
        id: "source-cpi-a",
        contentItemId: "content-cpi-tracking",
        sourceType: "official",
        sourceName: "美国劳工统计局 2 月就业报告",
        sourceUrl: "https://www.bls.gov/news.release/empsit.nr0.htm",
        language: "en",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "Average hourly earnings rose by 15 cents, or 0.4 percent, to $36.60.",
        editorNote: "确认工资端仍有韧性。"
      },
      {
        id: "source-cpi-b",
        contentItemId: "content-cpi-tracking",
        sourceType: "official",
        sourceName: "美国劳工统计局 CPI 发布日程",
        sourceUrl: "https://www.bls.gov/schedule/news_release/cpi.htm",
        language: "en",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "The Consumer Price Index for February 2026 is scheduled to be released on Wednesday, March 11, 2026.",
        editorNote: "确认下一关键节点。"
      },
      {
        id: "source-opec-a",
        contentItemId: "content-opec-verify",
        sourceType: "industry",
        sourceName: "S&P Global Commodity Insights 航运跟踪",
        sourceUrl: "https://www.spglobal.com/commodityinsights/en",
        language: "en",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "确认霍尔木兹仍有船舶通行，但通过数量较此前明显收缩。",
        editorNote: "确认海峡仍在通行，但通行量已经下降。"
      },
      {
        id: "source-opec-b",
        contentItemId: "content-opec-verify",
        sourceType: "media",
        sourceName: "Reuters 油轮运价与附加费跟踪",
        sourceUrl: "https://www.reuters.com/",
        language: "en",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "确认海湾-亚洲油轮运价与附加费同步抬升。",
        editorNote: "确认运价异常上行已经落到费率层。"
      },
      {
        id: "source-opec-c",
        contentItemId: "content-opec-verify",
        sourceType: "industry",
        sourceName: "MarineTraffic 船舶轨迹",
        sourceUrl: "https://www.marinetraffic.com/",
        language: "en",
        isPrimary: false,
        isConfirmed: true,
        quoteExcerpt: "补充核对海峡通行与船舶轨迹变化。",
        editorNote: "用于交叉确认通行并未完全中断。"
      },
      {
        id: "source-ecb-a",
        contentItemId: "content-ecb-translation",
        sourceType: "official",
        sourceName: "欧洲央行 2 月政策声明",
        sourceUrl: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260205~d0fc8fa64b.en.html",
        language: "en",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "Services inflation has also eased markedly over recent months and fell again in January, to 3.2%, from 3.4% in December.",
        editorNote: "同步确认工资增长继续放缓。"
      },
      {
        id: "source-credit-a",
        contentItemId: "content-credit-data",
        sourceType: "official",
        sourceName: "国家外汇管理局储备资产数据",
        sourceUrl: "https://www.safe.gov.cn/",
        language: "zh",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "确认 2 月末官方黄金储备继续增加。",
        editorNote: "确认中国官方储备买盘仍在延续。"
      },
      {
        id: "source-credit-b",
        contentItemId: "content-credit-data",
        sourceType: "industry",
        sourceName: "World Gold Council 央行购金统计",
        sourceUrl: "https://www.gold.org/goldhub/data/central-bank-gold-statistics",
        language: "en",
        isPrimary: false,
        isConfirmed: true,
        quoteExcerpt: "补充长期央行购金趋势与全球官方需求背景。",
        editorNote: "用于补充连续增持的长期背景。"
      },
      {
        id: "source-eia-a",
        contentItemId: "content-eia-oil",
        sourceType: "official",
        sourceName: "EIA Short-Term Energy Outlook",
        sourceUrl: "https://www.eia.gov/outlooks/steo/",
        language: "en",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "We forecast the Brent crude oil price will remain above $95/b over the next two months.",
        editorNote: "确认未来两个月布伦特价格路径仍在高位。"
      }
    ],
    verificationRecords: [
      {
        id: "verify-opec",
        contentItemId: "content-opec-verify",
        claimText: "霍尔木兹已经完全关闭，原油运输基本停摆。",
        currentStatus: "confirmed",
        confirmedPoints: "霍尔木兹仍在通行，但通行数量明显收缩，海湾-亚洲油轮运价和附加费同步抬升。",
        unconfirmedPoints: "截至北京时间 3 月 11 日上午，没有证据支持“霍尔木兹已全面关闭”或“所有原油运输停摆”。",
        rejectedSources: ["把局部风险直接升级成全面停摆的转述稿", "只看单条战事消息、不核对通行与运价的二手摘要"],
        pendingTargets: ["海峡通行量是否继续下降", "运价与附加费是否进一步扩大", "风险会不会从航运层继续传导到更广实体链条"],
        riskNote: "可以引用“通行骤降与运价飙升”，不能直接写成“全面关闭”。",
        updatedAt: "2026-03-11T09:18:00+08:00"
      }
    ],
    distributionRules: [
      {
        id: "dist-auction-plus",
        contentItemId: "content-auction-first",
        channel: "plus",
        isEnabled: true,
        releaseAt: "2026-03-10T08:12:00+08:00",
        lockScope: ["sources", "impact_path", "timeline"],
        templateType: "first",
        priority: 1
      },
      {
        id: "dist-auction-main-site",
        contentItemId: "content-auction-first",
        channel: "main_site_preview",
        isEnabled: true,
        releaseAt: "2026-03-10T08:12:00+08:00",
        lockScope: ["sources", "impact_path", "timeline"],
        templateType: "first",
        priority: 1
      },
      {
        id: "dist-cpi-plus",
        contentItemId: "content-cpi-tracking",
        channel: "plus",
        isEnabled: true,
        releaseAt: "2026-03-10T10:01:00+08:00",
        lockScope: ["timeline", "new_nodes"],
        templateType: "tracking",
        priority: 1
      },
      {
        id: "dist-cpi-main-site",
        contentItemId: "content-cpi-tracking",
        channel: "main_site_preview",
        isEnabled: true,
        releaseAt: "2026-03-10T10:01:00+08:00",
        lockScope: ["timeline", "new_nodes"],
        templateType: "tracking",
        priority: 1
      },
      {
        id: "dist-opec-plus",
        contentItemId: "content-opec-verify",
        channel: "plus",
        isEnabled: true,
        releaseAt: "2026-03-10T09:18:00+08:00",
        lockScope: ["verification_chain", "rejected_sources", "pending_targets"],
        templateType: "verify",
        priority: 1
      },
      {
        id: "dist-opec-main-site",
        contentItemId: "content-opec-verify",
        channel: "main_site_preview",
        isEnabled: true,
        releaseAt: "2026-03-10T09:18:00+08:00",
        lockScope: ["verification_chain", "rejected_sources", "pending_targets"],
        templateType: "verify",
        priority: 1
      },
      {
        id: "dist-credit-plus",
        contentItemId: "content-credit-data",
        channel: "plus",
        isEnabled: true,
        releaseAt: "2026-03-11T10:46:00+08:00",
        lockScope: ["sources", "impact_path"],
        templateType: "data",
        priority: 2
      },
      {
        id: "dist-eia-plus",
        contentItemId: "content-eia-oil",
        channel: "plus",
        isEnabled: true,
        releaseAt: "2026-03-11T11:12:00+08:00",
        lockScope: ["sources", "impact_path"],
        templateType: "data",
        priority: 2
      }
    ]
  };

  const indexById = (items) => Object.fromEntries(items.map((item) => [item.id, item]));

  window.JIN10_PLUS_DATA = data;
  window.JIN10_PLUS_INDEX = {
    assetTags: indexById(data.assetTags),
    topics: indexById(data.topics),
    contentItems: indexById(data.contentItems),
    contentSources: indexById(data.contentSources),
    verificationRecords: indexById(data.verificationRecords),
    distributionRules: indexById(data.distributionRules)
  };
})();
