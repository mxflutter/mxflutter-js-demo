/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListTile,
  ListView,
  Container,
  Colors,
  EdgeInsets,
  Padding,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExamplePadding();
  }
}

class PageExamplePadding extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('Padding') }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('padding: EdgeInsets.all(20.0)') }),
          new Container({
            height: 240.0,
            color: Colors.blue,
            child: new Padding({
              padding: EdgeInsets.all(20.0),
              child: new Container({ color: Colors.green }),
            }),
          }),
          new ListTile({ title: new Text('padding: EdgeInsets.symmetric({ vertical: 10.0, horizontal: 40.0 })') }),
          new Container({
            height: 240.0,
            color: Colors.blue,
            child: new Padding({
              padding: EdgeInsets.symmetric({ vertical: 10.0, horizontal: 40.0 }),
              child: new Container({ color: Colors.yellow }),
            }),
          }),
          new ListTile({ title: new Text('padding: EdgeInsets.fromLTRB(10, 20, 30, 40)') }),
          new Container({
            height: 240.0,
            color: Colors.blue,
            child: new Padding({
              padding: EdgeInsets.fromLTRB(10, 20, 30, 40),
              child: new Container({ color: Colors.red }),
            }),
          }),
          new ListTile({ title: new Text('margin: EdgeInsets.only({bottom: 20})') }),
          new Container({
            height: 240.0,
            color: Colors.blue,
            child: new Padding({
              padding: EdgeInsets.only({ bottom: 20 }),
              child: new Container({ color: Colors.purple }),
            }),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
