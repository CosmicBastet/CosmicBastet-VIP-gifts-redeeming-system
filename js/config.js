/*
 * 猫神会员礼系统 · 站点配置
 * ------------------------------------------------------------
 * 用途：代多个主播统一登记房管的会员礼收件信息与证明截图。
 * 这是 GitHub Pages 上所有访客看到的公开配置。
 * 可以在 admin.html 中修改标题/活动/示例图，然后「导出 config.js」
 * 覆盖本文件并重新部署，即可让所有访客看到新的内容。
 */
window.CATHEN_CONFIG = {
  version: "2026-10-21T20:00:00+08:00",
  siteTitle: "猫神会员礼系统",
  heroTitle: "替主播，把每一份|会员礼登记清楚。",
  heroSubtitle: "这里统一收集各主播会员礼的收件信息与两张证明截图。请选择对应的主播 / 会员礼，填写房管的收货资料。",
  publicNotice: "本页面仅用于会员礼发放登记。请确认主播和会员礼类型，避免填错；两张证明截图都必须清晰完整。",
  campaigns: [
    {
      id: "quarterly-autumn-2026",
      type: "季度会员礼",
      title: "星野的季度房管会员礼",
      honoree: "星野",
      description: "星野直播间季度房管会员礼登记。请提供钻石消费记录和会员截止日期两张截图。",
      deadline: "2026-11-15",
      active: true,
      tallyUrl: "",
      allowOffline: false,
      exampleDiamond: "assets/example-diamond.svg",
      exampleExpiry: "assets/example-expiry.svg"
    },
    {
      id: "monthly-oct-2026",
      type: "月度会员礼",
      title: "阿青的月度房管会员礼",
      honoree: "阿青",
      description: "阿青直播间 2026 年 10 月房管会员礼登记。两张证明截图都需要清晰完整。",
      deadline: "",
      active: true,
      tallyUrl: "",
      allowOffline: false,
      exampleDiamond: "assets/example-diamond.svg",
      exampleExpiry: "assets/example-expiry.svg"
    }
  ]
};
