/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  Row,
  MainAxisAlignment,
  Colors,
  BorderRadius,
  Radius,
  EdgeInsets,
} from '@mxflutter/mxflutter-widgets/material';
import { CupertinoButton } from '@mxflutter/mxflutter-widgets/cupertino';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleCupertinoButton();
  }
}

class PageExampleCupertinoButton extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('CupertinoButton') }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('CupertinoTappableButton') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              new CupertinoButton({
                padding: EdgeInsets.symmetric({ horizontal: 10.0 }),
                color: Colors.orange /*[300]*/,
                disabledColor: Colors.grey /*[300]*/,
                child: new Text('Untappable Button'),
              }),
              new CupertinoButton({
                padding: EdgeInsets.symmetric({ horizontal: 10.0 }),
                color: Colors.orange /*[300]*/,
                child: new Text('Tappable Button'),
                onPressed: function () {},
              }),
            ],
          }),
          new ListTile({ title: new Text('CupertinoButton.borderRadius') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              new CupertinoButton({
                color: Colors.orange /*[300]*/,
                child: new Text('Button'),
                onPressed: function () {},
              }),
              new CupertinoButton({
                color: Colors.orange /*[300]*/,
                borderRadius: BorderRadius.all(Radius.circular(24.0)),
                child: new Text('Button'),
                onPressed: function () {},
              }),
            ],
          }),
          new ListTile({ title: new Text('padding and opactiry') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              new CupertinoButton({
                color: Colors.orange /*[300]*/,
                padding: EdgeInsets.symmetric({ horizontal: 10.0 }),
                child: new Text('Button'),
                onPressed: function () {},
              }),
              new CupertinoButton({
                color: Colors.orange /*[300]*/,
                pressedOpacity: 0.75,
                child: new Text('Button'),
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
