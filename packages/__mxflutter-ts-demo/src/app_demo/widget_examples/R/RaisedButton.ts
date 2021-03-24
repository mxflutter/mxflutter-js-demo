/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  ButtonBar,
  EdgeInsets,
  Colors,
  CircleBorder,
  MainAxisAlignment,
  RaisedButton,
  Container,
  BoxDecoration,
  LinearGradient,
  Color,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleRaisedButton();
  }
}

class PageExampleRaisedButton extends MXJSWidgetState {
  private _text: string;
  constructor() {
    super();
    this._text = 'RasiedButton';
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('RaisedButton'),
      }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('RaisedButton的样式') }),
          new ButtonBar({
            alignment: MainAxisAlignment.spaceAround,
            children: [
              new RaisedButton({
                child: new Text('build'),
                onPressed: function () {},
              }),
              new RaisedButton({
                child: new Text('build'),
                color: Colors.yellow /*[100]*/,
                onPressed: function () {},
              }),
              new RaisedButton({
                child: new Text('build'),
                color: Colors.red /*[100]*/,
                onPressed: function () {},
              }),
              new RaisedButton({
                child: new Text('build'),
                disabledColor: Colors.grey /*[300]*/,
                disabledTextColor: Colors.white,
              }),
            ],
          }),
          new ButtonBar({
            alignment: MainAxisAlignment.spaceAround,
            children: [
              new RaisedButton({
                child: new Text('build'),
                onPressed: function () {},
                color: Colors.white,
                textColor: Colors.blue,
                splashColor: Colors.blue,
              }),
              new RaisedButton({
                child: new Text('build'),
                color: Colors.yellow /*[100]*/,
                padding: EdgeInsets.symmetric({ horizontal: 40.0 }),
                onPressed: function () {},
              }),
              new RaisedButton({
                child: new Text('build'),
                color: Colors.yellow /*[100]*/,
                shape: new CircleBorder(),
                onPressed: function () {},
              }),
            ],
          }),
          new ListTile({ title: new Text('RaisedButton支持点击和长按') }),
          new ButtonBar({
            alignment: MainAxisAlignment.spaceAround,
            children: [
              new RaisedButton({
                padding: EdgeInsets.all(0.0),
                textColor: Colors.white,
                onPressed: function () {
                  this.setState(
                    function () {
                      this._text = 'onPressed';
                    }.bind(this),
                  );
                }.bind(this),
                onLongPress: function () {
                  this.setState(
                    function () {
                      this._text = 'onLongPress';
                    }.bind(this),
                  );
                }.bind(this),
                child: new Container({
                  child: new Text(this._text),
                  padding: EdgeInsets.all(10.0),
                  decoration: new BoxDecoration({
                    gradient: new LinearGradient({
                      colors: [new Color(0xff0d47a1), new Color(0xff1976d2), new Color(0xff42a5f5)],
                    }),
                  }),
                }),
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
