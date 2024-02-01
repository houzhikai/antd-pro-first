/* 这里只能引入静态 js 文件 */

self.onmessage = function (e) {
  console.log('子进程接受', e);
  self.postMessage(JSON.stringify(123));
  console.log('子进程发送');
};
