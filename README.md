# next-easeout
> Easeout for next

## install:
```bash
npm install -S afeiship/next-easeout --registry=https://registry.npm.taobao.org
```

## polyfill if need:
```js
// polyfill:
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function (inCallback) {
    window.setTimeout(inCallback, 17);
  };
}
```

## resources:
+ https://www.zhangxinxu.com/wordpress/2017/01/share-a-animation-algorithm-js/
