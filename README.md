版本最低要求：nodejs v4.2.2<br/>
<br/>
npm install<br/>
gulp<br/>
打开build -> index.html<br/>
<br/>
若需调试页面<br/>
1. -> 前往输出目录-build目录中开启browser-sync监控文件变化自动刷新页面：<br/>
browser-sync start --server --files "*.html,css/*.css,js/*.js"<br/>
2.再-> gulp-webpack-Example根目录中执行 gulp watch监控文件并自动输出<br/>
<br/>
如有问题请联系本人Q：896231585 :)
