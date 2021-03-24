/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  ButtonBar,
  FlatButton,
  EdgeInsets,
  Colors,
  CircleBorder,
  MainAxisAlignment,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleFlatButton();
  }
}

class PageExampleFlatButton extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('FlatButton'),
      }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('FlatButton的样式') }),
          new ButtonBar({
            alignment: MainAxisAlignment.spaceAround,
            children: [
              new FlatButton({
                child: new Text('build'),
                onPressed: function () {},
              }),
              new FlatButton({
                child: new Text('build'),
                color: Colors.yellow /*[100]*/,
                onPressed: function () {},
              }),
              new FlatButton({
                child: new Text('build'),
                color: Colors.red /*[100]*/,
                onPressed: function () {},
              }),
              new FlatButton({
                child: new Text('build'),
                disabledColor: Colors.grey /*[300]*/,
                disabledTextColor: Colors.white,
              }),
            ],
          }),
          new ButtonBar({
            alignment: MainAxisAlignment.spaceAround,
            children: [
              new FlatButton({
                child: new Text('build'),
                onPressed: function () {},
                color: Colors.white,
                textColor: Colors.blue,
                splashColor: Colors.blue,
              }),
              new FlatButton({
                child: new Text('build'),
                color: Colors.yellow /*[100]*/,
                padding: EdgeInsets.symmetric({ horizontal: 40.0 }),
                onPressed: function () {},
              }),
              new FlatButton({
                child: new Text('build'),
                color: Colors.yellow /*[100]*/,
                shape: new CircleBorder(),
                onPressed: function () {},
              }),
            ],
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
