/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Text, ListView, ListTile, Color, Colors } from '@mxflutter/mxflutter-widgets/material';
import { CupertinoPageScaffold, CupertinoNavigationBar } from '@mxflutter/mxflutter-widgets/cupertino';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleCupertinoPageScaffole();
  }
}

class PageExampleCupertinoPageScaffole extends MXJSWidgetState {
  private _backgroundColor: any;
  constructor() {
    super();
    this._backgroundColor = Colors.white;
  }

  _changeColorListTile(text, color) {
    return new ListTile({
      title: new Text(text),
      onTap: function () {
        this.setState(
          function () {
            this._backgroundColor = color;
          }.bind(this),
        );
      }.bind(this),
    });
  }

  build(context) {
    let widget = new CupertinoPageScaffold({
      navigationBar: new CupertinoNavigationBar({
        middle: new Text('CupertinoPageScaffold'),
      }),
      child: new Scaffold({
        backgroundColor: new Color(0x00000000),
        body: new ListView({
          children: [
            this._changeColorListTile('背景颜色：白', Colors.white),
            this._changeColorListTile('背景颜色：黄', Colors.yellow /*[200]*/),
            this._changeColorListTile('背景颜色：绿', Colors.green /*[200]*/),
            this._changeColorListTile('背景颜色：蓝', Colors.blue /*[200]*/),
            this._changeColorListTile('背景颜色：粉', Colors.pink /*[200]*/),
          ],
        }),
      }),
      backgroundColor: this._backgroundColor,
    });
    return widget;
  }
}

export { ExampleWidget };
