/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  ListTile,
  AppBar,
  Text,
  Icon,
  Colors,
  IconButton,
  TextStyle,
  ListView,
  Icons,
  Size,
  PreferredSize,
  Container,
  Center,
  BorderRadius,
  RoundedRectangleBorder,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAppBar();
  }
}

class PageExampleAppBar extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('带有底部栏的AppBar'),
        bottom: new PreferredSize({
          preferredSize: new Size(0.0, 24.0),
          child: new Container({
            color: Colors.orange /*[300]*/,
            child: new Center({ child: new Text('底部栏') }),
          }),
        }),
      }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('最简单的AppBar') }),
          new AppBar({ title: new Text('NormalAppBar') }),

          new ListTile({ title: new Text('标题换色') }),
          new AppBar({
            title: new Text('NormalAppBar', {
              style: new TextStyle({ color: Colors.white }),
            }),
          }),

          new ListTile({ title: new Text('背景换色') }),
          new AppBar({
            backgroundColor: Colors.blue,
            title: new Text('NormalAppBar', {
              style: new TextStyle({ color: Colors.white }),
            }),
          }),

          new ListTile({ title: new Text('设置leading') }),
          new AppBar({
            leading: new IconButton({ icon: new Icon(Icons.add) }),
            title: new Text('AppBar'),
          }),

          new ListTile({ title: new Text('隐藏leading') }),
          new AppBar({
            automaticallyImplyLeading: false,
            title: new Text('AppBar'),
          }),

          new ListTile({ title: new Text('设置action') }),
          new AppBar({
            actions: [new IconButton({ icon: new Icon(Icons.camera) })],
            title: new Text('AppBar'),
          }),

          new ListTile({ title: new Text('设置多个action') }),
          new AppBar({
            actions: [
              new IconButton({ icon: new Icon(Icons.camera) }),
              new IconButton({ icon: new Icon(Icons.print) }),
            ],
            title: new Text('AppBar'),
          }),

          new ListTile({ title: new Text('更改AppBar内容的透明度') }),
          new AppBar({
            title: new Text('AppBar'),
            toolbarOpacity: 0.5,
          }),

          new ListTile({ title: new Text('个性化AppBar形状') }),
          new AppBar({
            title: new Text('AppBar'),
            shape: new RoundedRectangleBorder({ borderRadius: BorderRadius.circular(20.0) }),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
