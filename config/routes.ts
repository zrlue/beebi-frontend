export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' },
      { name: '注册', path: '/user/register', component: './User/Register' },
    ],
  },
  { path: '/', redirect: '/add_chart' },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  { name: '智能分析', path: '/add_chart', component: './AddChart' },
  { name: '智能分析(异步)', path: '/add_chart_async', component: './AddChartAsync' },
  { name:'我的图表',path: '/my_chart', icon: 'smile', component: './MyChart' },
  { name:'图片分析',path: '/image_analysis', icon: 'smile', component: './AddImage' },
  { name:'文字分析',path: '/text_analysis', icon: 'smile', component: './TextAnalysis' },

  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
