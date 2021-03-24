/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  Container,
  ListTile,
  AppBar,
  Text,
  Colors,
  RaisedButton,
  Column,
  Stack,
  AnimatedPositioned,
  Alignment,
  Curves,
  Expanded,
  Duration
} from '@mxflutter/mxflutter-widgets/material';

import { CupertinoSwitch } from '@mxflutter/mxflutter-widgets/cupertino';
import { SectionTitle } from '../../component/section_title';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAnimatedPositionedState();
  }
}

/// 让子组件进行定位动画，可指定时长和曲线，只能用于Stack中
class PageExampleAnimatedPositionedState extends MXJSWidgetState {
  private _selected: boolean;
  private _left: number;
  private _top: number;
  private _onShow: boolean;
  private _curve: boolean;
  constructor() {
    super();
    this._selected = false;
    this._left = 100;
    this._top = 100;
    this._onShow = false;
    this._curve = false;
  }

  _changeSwitch() {
    this.setState(
      function () {
        this._selected = !this._selected;
      }.bind(this),
    );
  }

  _changeButton() {
    this.setState(
      function () {
        this._left = this._left == 100 ? this._left + 200 : 100;
        this._top = this._top == 100 ? this._top + 200 : 100;
      }.bind(this),
    );
  }

  _changeCurve() {
    this.setState(
      function () {
        this._curve = !this._curve;
      }.bind(this),
    );
  }

  build() {
    let widgets = new Scaffold({
      appBar: new AppBar({
        title: new Text('AnimatedPositioned'),
      }),
      body: new Column({
        children: [
          new SectionTitle('AnimatedPositioned事例'),
          new Expanded({
            child: new Container({
              height: 500,
              alignment: Alignment.center,
              child: new Stack({
                children: [
                  new AnimatedPositioned({
                    top: this._top,
                    left: this._left,
                    child: new Container({
                      color: Colors.green,
                      width: 50,
                      height: 50,
                    }),
                    curve: this._curve ? Curves.elasticIn : Curves.linear,
                    duration: new Duration({ seconds: 1 }),
                    onEnd: this._selected ? this._changeButton.bind(this) : null,
                  }),
                ],
              }),
            }),
          }),
          new ListTile({
            title: new Text('循环播放'),
            trailing: new CupertinoSwitch({
              value: this._selected,
              onChanged: this._changeSwitch.bind(this),
            }),
          }),
          new ListTile({
            title: new Text('开启动画'),
            trailing: new CupertinoSwitch({
              value: this._curve,
              onChanged: this._changeCurve.bind(this),
            }),
          }),

          new RaisedButton({
            child: new Text('播放'),
            onPressed: this._changeButton.bind(this),
          }),
        ],
      }),
    });

    return widgets;
  }
}

export { ExampleWidget };
