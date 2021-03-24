/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  Container,
  AppBar,
  Text,
  AnimatedOpacity,
  Curves,
  Colors,
  Center,
  Row,
  Column,
  MainAxisAlignment,
  EdgeInsets,
  FlatButton,
  Expanded,
} from '@mxflutter/mxflutter-widgets/material';
import { Duration } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
import { CupertinoSwitch } from '@mxflutter/mxflutter-widgets/cupertino';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAnimatedOpacity();
  }
}
class PageExampleAnimatedOpacity extends MXJSWidgetState {
  private settingTable: any;
  private _selected: boolean;
  private _repeatAnimationRunning: boolean;
  constructor() {
    super();
    this.settingTable = {
      isQuick: true,
      isLinear: true,
      isRepeat: false,
    };
    this._selected = false;
    this._repeatAnimationRunning = false;
  }

  _singleOption(selectedText, unselectedText, varName) {
    return new Container({
      padding: EdgeInsets.all(12.0),
      child: new Row({
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          new Text(this.settingTable[varName] ? selectedText : unselectedText),
          new CupertinoSwitch({
            value: this.settingTable[varName],
            activeColor: Colors.orange,
            onChanged: function (value) {
              this.setState(
                function () {
                  this.settingTable[varName] = value;
                }.bind(this),
              );
            }.bind(this),
          }),
        ],
      }),
    });
  }

  _changeSelected() {
    this.setState(
      function () {
        this._selected = !this._selected;
      }.bind(this),
    );
  }

  _playOrEnd() {
    if (this.settingTable['isRepeat'] == true) {
      this._repeatAnimationRunning = !this._repeatAnimationRunning;
      if (this._repeatAnimationRunning == false) {
        this.settingTable['isRepeat'] = false;
      }
    }
    this.setState(
      function () {
        this._selected = !this._selected;
      }.bind(this),
    );
  }

  build(context) {
    return new Scaffold({
      appBar: new AppBar({ title: new Text('AnimatedOpacity') }),
      body: new Column({
        children: [
          new AnimatedOpacity({
            opacity: this._selected ? 0.2 : 1.0,
            curve: this.settingTable['isLinear'] ? Curves.linear : Curves.easeInOutCirc,
            duration: new Duration({ milliseconds: this.settingTable['isQuick'] ? 300 : 1000 }),
            onEnd: this.settingTable['isRepeat'] ? this._changeSelected.bind(this) : null,
            child: new Container({
              color: Colors.orange,
              height: 300,
              child: new Center({ child: new Text('动画容器') }),
            }),
          }),
          this._singleOption('动画速度：快', '动画速度：慢', 'isQuick'),
          this._singleOption('线性动画：是', '线性动画：否', 'isLinear'),
          this._singleOption('循环播放：是', '循环播放：否', 'isRepeat'),
          new Expanded({ child: new Container() }),
          new Center({
            child: new FlatButton({
              child: new Text(
                this.settingTable['isRepeat'] ? (this._repeatAnimationRunning ? '停止循环' : '循环播放') : '播放一次',
              ),
              onPressed: this._playOrEnd.bind(this),
            }),
          }),
          new Expanded({ child: new Container() }),
        ],
      }),
    });
  }
}

export { ExampleWidget };
