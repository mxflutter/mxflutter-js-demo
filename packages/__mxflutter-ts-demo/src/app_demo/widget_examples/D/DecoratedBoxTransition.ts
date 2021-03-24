/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState, MXTickerMixinWidget, MXTickerMixinWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Container,
  Alignment,
  Colors,
  BoxDecoration,
  Radius,
  BorderRadius,
  Expanded,
  Column,
  AnimationController,
  DecoratedBoxTransition,
  DecorationTween,
  BoxShadow,
  RaisedButton,
  Animation,
} from '@mxflutter/mxflutter-widgets/material';

import { Duration } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';

class ExampleWidget extends MXTickerMixinWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleDecoratedBoxTransition();
  }
}

class PageExampleDecoratedBoxTransition extends MXTickerMixinWidgetState {
  private _controller: any;
  private _shadow: any;
  private _tween: any;
  private _animation: any;
  constructor() {
    super();
    this._controller = new AnimationController({
      duration: new Duration({ seconds: 1 }),
      vsync: this,
    });
    this._shadow = true;
    this._tween = new DecorationTween({
      begin: new BoxDecoration({
        color: Colors.grey,
        borderRadius: BorderRadius.all(Radius.circular(0)),
        boxShadow: [
          new BoxShadow({
            color: Colors.black,
            blurRadius: 3,
            spreadRadius: 3,
          }),
        ],
      }),
      end: new BoxDecoration({
        color: Colors.orange,
        borderRadius: BorderRadius.all(Radius.circular(30)),
        boxShadow: [
          new BoxShadow({
            color: Colors.yellow,
            blurRadius: 3,
            spreadRadius: 1,
          }),
        ],
      }),
    });
    this._animation = new Animation({
      controller: this._controller,
      tween: this._tween,
    });
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('DecoratedBoxTransition'),
      }),
      body: new Column({
        children: [
          new Expanded({
            child: new Container({
              alignment: Alignment.center,
              child: new DecoratedBoxTransition({
                decoration: this._animation,
                child: new Container({
                  height: 200,
                  width: 200,
                }),
              }),
            }),
          }),
          new RaisedButton({
            child: new Text('播放'),
            onPressed: function () {
              this._controller.forward();
            }.bind(this),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
