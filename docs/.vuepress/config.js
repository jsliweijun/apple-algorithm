module.exports = {
  home: true,
  title: "小六算法",
  description: "Just playing around",
  displayAllHeaders: true,
  base:'/little-six-algorithm/',
  themeConfig: {
    // /代表的是 public 下面的资源
    logo: "/logo.png",
    //顶部导航栏
    nav: [
      { text: "首页", link: "/" },
      {
        text: "Github",
        link: "https://github.com/jsliweijun/little-six-algorithm",
      },
    ],
    // 侧边栏
    sidebar: [
      {
        title: "前言", // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          {
            title: "介绍",
            path: "/01_preface/",
          },
        ],
      },
      {
        title: "数据结构",
        collapsable: true,
        children: [
          {
            title: "介绍",
            path: "/02_datastructure/",
          },
          {
            title: "稀疏数组",
            path: "/02_datastructure/sparseArray",
          },
        ]
      },
      {
        title: "算法",
        children: [
          {
            title: "介绍",
            path: "/03_algorithm/",
          },
          {
            title: "数组",
            path: "/03_algorithm/test2",
          },
        ]
      },
    ],
  },
};
