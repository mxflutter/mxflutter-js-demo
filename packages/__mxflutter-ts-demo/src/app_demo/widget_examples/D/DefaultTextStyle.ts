/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  TextStyle,
  Container,
  Alignment,
  Colors,
  ListView,
  ListTile,
  DefaultTextStyle,
  TextDecoration,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleDefaultTextStyle();
  }
}

class PageExampleDefaultTextStyle extends MXJSWidgetState {
  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('DefaultTextStyle'),
      }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('默认文本') }),
          new Container({
            alignment: Alignment.center,
            child: new DefaultTextStyle({
              style: new TextStyle({
                color: Colors.black,
              }),
              child: new Text('Text'),
            }),
          }),

          new ListTile({ title: new Text('自定义style文本') }),
          new Container({
            alignment: Alignment.center,
            child: new DefaultTextStyle({
              style: new TextStyle({
                color: Colors.red,
                fontSize: 20,
                decoration: TextDecoration.underline,
              }),
              child: new Text('Text'),
            }),
          }),

          new ListTile({ title: new Text('softWrap: false') }),
          new Container({
            width: 20,
            alignment: Alignment.center,
            child: new DefaultTextStyle({
              style: new TextStyle({
                fontSize: 18,
                color: Colors.orange,
              }),
              softWrap: false,
              child: new Text('Very Very Very Very Very Very Very Very Long Text'),
            }),
          }),

          new ListTile({ title: new Text('softWrap: true') }),
          new Container({
            width: 80,
            alignment: Alignment.center,
            child: new DefaultTextStyle({
              style: new TextStyle({
                fontSize: 18,
                color: Colors.orange,
              }),
              softWrap: true,
              child: new Text('Very Very Very Very Very Very Very Very Long Text'),
            }),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
