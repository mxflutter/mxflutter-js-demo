/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, AppBar, Text, Container, Column, Color } from '@mxflutter/mxflutter-widgets/material';

// Material应用的顶级组件 包含路由生成器、主题语言主页等属性
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleMaterialApp();
  }
}

class PageExampleMaterialApp extends MXJSWidgetState {
  constructor() {
    super();
  }
  build() {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('MaterialApp') }),
      body: new Column({
        children: [
          new Container({
            height: 100,
            color: new Color(0xffc5cae9),
          }),
          new Container({
            height: 100,
            color: new Color(0xff7986cb),
          }),
          new Container({
            height: 100,
            color: new Color(0xff3949ab),
          }),
          new Container({
            height: 100,
            color: new Color(0xff1a237e),
          }),
        ],
      }),
      // 主题相关
      // theme: new ThemeData({
      //   primaryColor: Colors.orange,
      // }),
    });
    return widget;
  }
}

export { ExampleWidget };
