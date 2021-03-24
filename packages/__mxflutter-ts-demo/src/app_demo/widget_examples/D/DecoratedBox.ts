/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Container,
  Alignment,
  Colors,
  ListView,
  DecoratedBox,
  BoxDecoration,
  BoxShape,
  BoxShadow,
  Radius,
  BorderRadius,
  ListTile,
  EdgeInsets,
  Offset,
  Border,
  TextStyle,
} from '@mxflutter/mxflutter-widgets/material';

// 装饰类组件
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleDecoratedBox();
  }
}

class PageExampleDecoratedBox extends MXJSWidgetState {
  constructor() {
    super();
  }
  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('DecoratedBox'),
      }),
      body: new ListView({
        children: [
          new ListTile({
            title: new Text('基本类型DecoratedBox'),
          }),
          new Container({
            child: new DecoratedBox({
              decoration: new BoxDecoration({
                shape: BoxShape.circle,
                color: Colors.blue,
              }),
              child: new Container({
                width: 100,
                height: 100,
              }),
            }),
            alignment: Alignment.center,
            margin: EdgeInsets.all(10),
          }),
          new ListTile({
            title: new Text('圆角矩形DecoratedBox'),
          }),
          new Container({
            child: new DecoratedBox({
              decoration: new BoxDecoration({
                borderRadius: BorderRadius.all(Radius.circular(16.0)),
                color: Colors.green,
              }),
              child: new Text('DecoratedBox', { style: new TextStyle({ fontSize: 30 }) }),
            }),
            alignment: Alignment.center,
            margin: EdgeInsets.all(10),
          }),
          new ListTile({
            title: new Text('带有边框的DecoratedBox'),
          }),
          new Container({
            child: new DecoratedBox({
              decoration: new BoxDecoration({
                color: Colors.green,
                border: Border.all({
                  color: Colors.red,
                  width: 2.0,
                }),
              }),
              child: new Text('DecoratedBox', { style: new TextStyle({ fontSize: 30 }) }),
            }),
            alignment: Alignment.center,
            margin: EdgeInsets.all(10),
          }),
          new ListTile({
            title: new Text('带有阴影的DecoratedBox'),
          }),
          new Container({
            child: new DecoratedBox({
              decoration: new BoxDecoration({
                shape: BoxShape.circle,
                color: Colors.blue,
                boxShadow: [
                  new BoxShadow({
                    color: Colors.black54,
                    offset: new Offset(5.0, 5.0),
                    blurRadius: 5.0,
                  }),
                ],
              }),
              child: new Container({
                width: 100,
                height: 100,
              }),
            }),
            alignment: Alignment.center,
            margin: EdgeInsets.all(10),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
