// (function () {
//     //设置服务器地址
//     proxy.env.setServerContextUrl("http://192.168.1.112:8080/anti-base/");
//     proxy.login({
//         name: "admin",
//         pwd: "202cb962ac59075b964b07152d234b70"
//     }).then(function (ur) {
//         console.log(ur);
//         var conf = {
//             beanName: "dna.helloService",  //服务名
//             method: "sayHi"   //方法名
//         };
//         doPost = proxy.bindServiceMethod(conf);
//         return doPost("zsl");
//     }).then(function (json) { //返回服务结果
//   console.log(json);
//
// }).fail(function (e) {
//   console.error(e);
// });
// /*    proxy.bindServiceMethod({
//         beanName: "helloService",  //服务名
//         method: "sayHi"   //方法名
//     })("zsl").then(function (json) { //返回服务结果
//         console.log(json);
//     }).fail(function (e) { //登陆失败或调用服务失败均到此函数。参见Promise模式。
//         console.error(e);
//     });*/
// }.call(this));
//
