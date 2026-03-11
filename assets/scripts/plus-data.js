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
        title: "美债标售与 CPI 同周",
        topicStatus: "tracking",
        latestConclusion: "北京时间 3 月 11 日晚 CPI、3 月 12 日凌晨 10Y 标售将连续落地，长端要同时消化通胀与供给两组压力。",
        nodeCount: 4,
        lastUpdatedAt: "2026-03-10T08:26:00+08:00",
        nextWatch: "北京时间 3 月 11 日 20:30 CPI，3 月 12 日 01:00 10Y 标售",
        impactAssets: ["美债10Y", "美元", "黄金"],
        sourceArchiveCount: 3,
        coverItemId: "content-auction-first"
      },
      {
        id: "topic-cpi",
        title: "2月非农后的 CPI 与 6 月路径",
        topicStatus: "analyzing",
        latestConclusion: "2 月非农偏弱、工资仍有韧性，1 月消费信贷折年率又只增 1.9%，宏观线索继续指向“需求放缓但通胀约束未退”，CPI 仍是决定 6 月路径的最后一跳。",
        nodeCount: 5,
        lastUpdatedAt: "2026-03-11T10:46:00+08:00",
        nextWatch: "北京时间 3 月 11 日 20:30 CPI",
        impactAssets: ["黄金", "美元", "纳指"],
        sourceArchiveCount: 4,
        coverItemId: "content-cpi-tracking"
      },
      {
        id: "topic-shipping",
        title: "能源供应冲击与储备响应",
        topicStatus: "verifying",
        latestConclusion: "官方口径仍停留在“必要时可动用库存”，但 EIA 3 月 STEO 已把布伦特未来两个月预期抬到 95 美元上方，说明油价高位不只是一条 rumor。",
        nodeCount: 5,
        lastUpdatedAt: "2026-03-11T11:12:00+08:00",
        nextWatch: "后续是否出现联合释储的正式决定",
        impactAssets: ["WTI", "布伦特", "黄金"],
        sourceArchiveCount: 4,
        coverItemId: "content-opec-verify"
      }
    ],
    contentItems: [
      {
        id: "content-auction-first",
        title: "美国财政部 10Y/30Y 标售与 2 月 CPI 同周落地，长端将同时消化供给与通胀压力。",
        summaryShort:
          "美国财政部季度再融资声明显示，10Y 标售在北京时间 3 月 12 日 01:00、30Y 在 3 月 13 日 01:00；BLS 日程显示 2 月 CPI 将于 3 月 11 日 20:30 公布。这意味着长端不能只交易供给，或只交易通胀。",
        summaryFull:
          "这条首发的核心增量不是“本周有标售”，而是 10Y、30Y 标售和 2 月 CPI 在同一窗口连续落地。对长端来说，供给与通胀预期将被压缩到一组连续时间点里定价。",
        contentType: "first",
        marketTags: ["bonds", "macro"],
        status: "published",
        verificationStatus: "confirmed",
        sourceCount: 3,
        impactAssets: ["美债10Y", "美元", "黄金"],
        incrementPoint: "CPI 与 10Y/30Y 标售在同周连续落地",
        whyImportant: "长端会同时消化供给与通胀两组压力，利率、美元和黄金更容易出现连续反应。",
        nextWatch: "北京时间 3 月 11 日 20:30 CPI，3 月 12 日 01:00 10Y 标售",
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
          chips: ["影响 美债10Y / 美元 / 黄金", "已并入专题", "仅展示摘要"],
          teaserNote: "Plus专享：开通后查看完整来源、时间线和影响路径"
        }
      },
      {
        id: "content-cpi-tracking",
        title: "2月非农转弱后，市场等待周三 CPI 给出 6 月路径答案。",
        summaryShort:
          "BLS 显示美国 2 月非农减少 9.2 万、失业率升至 4.4%，但平均时薪环比仍增 0.4%、同比增 4.2%。在 CPI 公布前，市场对 6 月更偏“增长放缓”还是“通胀黏性”重新分叉。",
        summaryFull:
          "这个专题现在最重要的不是单看一个 headline，而是把非农、时薪、失业率和即将到来的 CPI 放在一条线上。市场对 6 月路径的判断，正在从单边预期转回双向拉扯。",
        contentType: "tracking",
        marketTags: ["macro", "gold", "fx"],
        status: "published",
        verificationStatus: "none",
        sourceCount: 3,
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
        title: "G7 暂未宣布立即释储，但已表态必要时可动用库存。",
        summaryShort:
          "G7 财长与央行行长官方声明称，必要时准备采取行动，包括动用库存；但现阶段并未宣布立即释放战略储备。IEA 同时表示，紧急储备体系足以在相当长一段时间内补充供应，并准备在需要时采取行动。",
        summaryFull:
          "这条核验要解决的不是“有没有能源风险”，而是“有没有已经敲定的立即释储决定”。截至北京时间 3 月 11 日上午，官方文本支持“必要时可以行动”，不支持“已经决定马上释储”。",
        contentType: "verify",
        marketTags: ["oil", "gold"],
        status: "published",
        verificationStatus: "confirmed",
        sourceCount: 3,
        impactAssets: ["WTI", "布伦特", "黄金"],
        incrementPoint: "已核验官方文本，不支持“立即释储已决定”",
        whyImportant: "它直接影响油价对供应中断风险的定价强度，也决定避险资产是否继续放大波动。",
        nextWatch: "是否出现联合释储的正式决定或执行安排",
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
          chips: ["状态 已核验", "尚无立即释储决定", "已见 G7 / IEA 原文"],
          teaserNote: "Plus专享：开通后查看核验链路、官方原文与风险边界"
        }
      },
      {
        id: "content-nfp-data",
        title: "美国 2 月非农减少 9.2 万，失业率升至 4.4%，时薪同比仍增 4.2%。",
        summaryShort:
          "BLS 公布的 2 月就业报告显示，非农就业人数减少 9.2 万，失业率升至 4.4%；但平均时薪环比增 0.4%、同比增 4.2%，说明就业 headline 偏弱，工资端却没有同步快速降温。",
        summaryFull:
          "这条拆解最值得看的不是非农 headline 本身，而是就业走弱和工资仍有韧性同时存在。它会直接影响市场如何解读第二天的 CPI，以及 6 月路径是继续宽松还是重新受限。",
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
        title: "美国 1 月消费信贷折年率仅增 1.9%，循环信贷 4.3%，非循环信贷 1.1%。",
        summaryShort:
          "美联储 G.19 显示，1 月消费信贷按季调折年率仅增 1.9%；其中循环信贷增速为 4.3%，非循环信贷仅增 1.1%。这意味着居民信用扩张并不强，需求线索继续偏向放缓。",
        summaryFull:
          "这条拆解最值得看的不是总量本身，而是循环与非循环信贷都没有出现重新加速。它不能单独决定利率路径，但会把“增长放缓”这一侧的证据再补一条。",
        contentType: "data",
        marketTags: ["macro", "bonds", "fx"],
        status: "published",
        verificationStatus: "none",
        sourceCount: 1,
        impactAssets: ["美债", "美元", "黄金"],
        incrementPoint: "居民信用扩张节奏继续偏弱",
        whyImportant: "它和偏弱非农一起，补强了需求放缓线索，但还需要 CPI 去决定能否压过工资韧性。",
        nextWatch: "与 2 月 CPI 和利率期货定价合并观察",
        topicId: "topic-cpi",
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
          "EIA 3 月 STEO 写明，布伦特已在 3 月 9 日收于 94 美元/桶，并预计未来两个月仍高于 95 美元，随后在三季度回落至 80 美元下方。这把油价高位从地缘 headline 延伸成了官方短期路径。",
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
        sourceType: "official",
        sourceName: "G7 财长和央行行长官方声明",
        sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/03/g7-finance-ministers-and-central-bank-governors-statement-on-joint-action-plan-to-address-energy-market-disruptions-and-enhance-global-energy-security.html",
        language: "en",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "We remain ready to take all necessary measures, in line with our mandates, including the use of stockpiles where needed.",
        editorNote: "确认必要时可动用库存。"
      },
      {
        id: "source-opec-b",
        contentItemId: "content-opec-verify",
        sourceType: "official",
        sourceName: "国际能源署最新声明",
        sourceUrl: "https://www.iea.org/news/iea-statement-on-the-current-oil-market-situation",
        language: "en",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "The IEA emergency response system has sufficient stocks to supplement oil markets for a considerable period of time.",
        editorNote: "确认储备体系可在必要时补充供应。"
      },
      {
        id: "source-opec-c",
        contentItemId: "content-opec-verify",
        sourceType: "media",
        sourceName: "市场关于立即释储的流传版本",
        sourceUrl: "#",
        language: "en",
        isPrimary: false,
        isConfirmed: false,
        quoteExcerpt: "市场一度猜测 G7 将立即联合释储。",
        editorNote: "与官方原文核对后降级。"
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
        sourceName: "美联储 G.19 消费信贷",
        sourceUrl: "https://www.federalreserve.gov/releases/g19/current/default.htm",
        language: "en",
        isPrimary: true,
        isConfirmed: true,
        quoteExcerpt: "In January, consumer credit increased at a seasonally adjusted annual rate of 1.9 percent.",
        editorNote: "确认总消费信贷、循环信贷和非循环信贷同步放缓。"
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
        claimText: "G7 已经决定立即联合释放战略储备。",
        currentStatus: "confirmed",
        confirmedPoints: "官方文本确认必要时可动用库存，IEA 也确认紧急储备体系具备较长时间补充能力。",
        unconfirmedPoints: "截至北京时间 3 月 11 日上午，没有“立即释储已经决定”的官方执行安排或联合发布。",
        rejectedSources: ["市场二级转述版本", "把“ready to act”误读成“already releasing”的摘要稿"],
        pendingTargets: ["后续是否出现正式执行决定", "是否公布释放规模与时间"],
        riskNote: "可以引用“必要时可行动”，不能引用“已经决定立即释储”。",
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
