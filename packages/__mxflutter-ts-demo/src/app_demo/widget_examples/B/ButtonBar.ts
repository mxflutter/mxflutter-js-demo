/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  ButtonBar,
  MainAxisAlignment,
  MainAxisSize,
  RaisedButton,
  EdgeInsets,
  VerticalDirection,
  ButtonTextTheme,
  ButtonBarLayoutBehavior,
  TextStyle,
  Colors,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleButtonBar();
  }
}

class PageExampleButtonBar extends MXJSWidgetState {
  constructor() {
    super();
  }

  _buttonList() {
    return [
      new RaisedButton({
        child: new Text('Button1'),
        onPressed: function () {},
      }),
      new RaisedButton({
        child: new Text('Button2'),
        onPressed: function () {},
      }),
      new RaisedButton({
        child: new Text('Button3'),
        onPressed: function () {},
      }),
    ];
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('ButtonBar') }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('ButtonBar.alignment') }),
          new ButtonBar({
            alignment: MainAxisAlignment.spaceAround,
            children: this._buttonList(),
          }),

          // 这个不知道怎么演示= =
          // new ListTile({ title: new Text('ButtonBar.mainAxisSize') }),
          // new ButtonBar({
          //     mainAxisSize: MainAxisSize.min,
          //     children: this._buttonList()
          // }),

          new ListTile({ title: new Text('ButtonBar.bottonHeight') }),
          new ButtonBar({
            alignment: MainAxisAlignment.center,
            buttonHeight: 20.0,
            children: this._buttonList(),
          }),

          new ListTile({ title: new Text('ButtonBar.bottonMinWidth') }),
          new ButtonBar({
            alignment: MainAxisAlignment.center,
            buttonMinWidth: 100.0,
            children: this._buttonList(),
          }),

          new ListTile({ title: new Text('ButtonBar.buttonPadding') }),
          new ButtonBar({
            alignment: MainAxisAlignment.center,
            buttonPadding: EdgeInsets.symmetric({ horizontal: 2.0 }),
            children: this._buttonList(),
          }),

          // 这个也不知道怎么演示=。=
          // new ListTile({ title: new Text('ButtonBar.layoutBehavior') }),
          // new ButtonBar({
          //     alignment: MainAxisAlignment.center,
          //     layoutBehavior: ButtonBarLayoutBehavior.constrained,
          //     children: this._buttonList(),
          // }),

          new ListTile({ title: new Text('ButtonBar.buttonTextTheme') }),
          new ButtonBar({
            alignment: MainAxisAlignment.center,
            buttonTextTheme: ButtonTextTheme.accent,
            children: this._buttonList(),
          }),

          new ListTile({ title: new Text('ButtonBar.overflowButtonSpacing') }),
          new ButtonBar({
            alignment: MainAxisAlignment.center,
            buttonHeight: 20.0,
            buttonMinWidth: 180.0,
            overflowButtonSpacing: 20.0,
            children: this._buttonList(),
          }),

          new ListTile({ title: new Text('ButtonBar.overflowButtonDirection') }),
          new ButtonBar({
            alignment: MainAxisAlignment.center,
            buttonHeight: 20.0,
            buttonMinWidth: 180.0,
            overflowDirection: VerticalDirection.up,
            children: this._buttonList(),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
