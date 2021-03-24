/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState, MXTickerMixinWidget, MXTickerMixinWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  Container,
  ListTile,
  AppBar,
  Text,
  Colors,
  RaisedButton,
  Column,
  AnimatedSize,
  Alignment,
  Curves,
  Expanded,
  Duration,
  SafeArea,
} from '@mxflutter/mxflutter-widgets/material';

import { CupertinoSwitch } from '@mxflutter/mxflutter-widgets/cupertino';
import { SectionTitle } from '../../component/section_title';

class ExampleWidget extends MXTickerMixinWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAnimatedSizeState();
  }
}

/// 子组件大小发生变化时进行动画渐变，可指定时长、对齐方式、曲线、vsync等属性
class PageExampleAnimatedSizeState extends MXTickerMixinWidgetState {
  private _left: number;
  private _top: number;
  private _curve: boolean;
  constructor() {
    super();
    this._left = 100;
    this._top = 100;
    this._curve = false;
  }

  _changeCurve() {
    this.setState(
      function () {
        this._curve = !this._curve;
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

  build() {
    let widgets = new Scaffold({
      appBar: new AppBar({
        title: new Text('AnimatedSize'),
      }),
      body: new SafeArea({
        child: new Column({
          children: [
            new SectionTitle('AnimatedSize事例'),
            new Expanded({
              child: new Container({
                alignment: Alignment.center,
                child: new AnimatedSize({
                  curve: this._curve ? Curves.bounceOut : Curves.linear,
                  duration: new Duration({ seconds: 1 }),
                  child: new Container({
                    height: this._top,
                    width: this._left,
                    alignment: Alignment.center,
                    color: Colors.blue,
                    child: new Text('AnimatedSize'),
                  }),
                  vsync: this,
                }),
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
      }),
    });

    return widgets;
  }
}

export { ExampleWidget };
