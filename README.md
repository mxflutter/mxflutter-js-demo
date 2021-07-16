### MXFlutter TS/JS Demo

包含5个MXFlutter的demo 工程

#### 编译输出JS Bundle

先切换到刚新建的 TS 工程 mxflutter-homepage 为当前目录，使用 npm install 安装依赖。

```bash
npm install #安装依赖
```

```bash
npm run bootstrap #配置依赖关系
```
如果有错误发生，可以根据错误提示排除错误，如果安装成功，解下来就可以使用 npm run build 命令构建 JS Bundle

```bash
npm run build
```

如果一切顺利，在 release 可以看到生成的bundle文件

可以用 [awesome_mxflutter](https://github.com/mxflutter/awesome_mxflutter) 运行生成的js bundle 文件

## 运行截图
![](http://pub.idqqimg.com/pc/misc/files/20210324/8b19a1e423934686ad1681f69bcd1353.jpg)

### 动态资源引入

假设index.ts的相对路径结构如下

```bash
├── index.ts
├── images
│   ├── menuset.png
│   ├── video.png
│   ├── idea.png
```

相对路径资源require引入示例

```javascript
Image.file(require('./images/menuset.png'), { width: 20, height: 20 })
Image.file(require('./images/video.png'))
Image.file(require('./images/idea.png'))
```

运行效果

<img src="http://pub.idqqimg.com/pc/misc/files/20210707/771f12d793254b9a970e80d57a757a25.png" width="375" />

<img src="http://pub.idqqimg.com/pc/misc/files/20210707/b28432e7ffd142808ff2e3fa99015b1a.png" width="375" />


