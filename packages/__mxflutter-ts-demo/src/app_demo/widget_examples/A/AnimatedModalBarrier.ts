/* eslint-disable */
import {
  Flutter,
  MXJSStatefulWidget,
  MXJSWidgetState,
  MXTickerMixinWidget,
  MXTickerMixinWidgetState,
} from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  AnimationController,
  Animation,
  ColorTween,
  Colors,
  AnimationStatus,
  Center,
  AnimatedModalBarrier,
  Container,
  Column,
  Expanded,
  ListTile,
  IconButton,
  Icon,
  Icons,
  Duration,
} from '@mxflutter/mxflutter-widgets/material';

// 注意，动画如果用到了AnimationController，则对应widgtet需要继承MXTickerMixinWidget和MXTickerMixinWidgetState
class ExampleWidget extends MXTickerMixinWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAnimatedModalBarrier();
  }
}

class PageExampleAnimatedModalBarrier extends MXTickerMixinWidgetState {
  private _controller: any;
  private _tween: any;
  private _animation: any;
  private _animationEnd: boolean;

  constructor() {
    super();
    this._animationEnd = false;
    this._controller = new AnimationController({
      duration: new Duration({ milliseconds: 750 }),
      vsync: this,
    });
    this._tween = new ColorTween({
      begin: Colors.blue,
      end: Colors.green,
    });
    this._animation = new Animation({
      controller: this._controller,
      tween: this._tween,
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('AnimatedModalBarrier'),
      }),
      body: new Column({
        children: [
          new ListTile({
            title: new Text('播放动画'),
            trailing: new IconButton({
              icon: new Icon(this._animationEnd ? Icons.refresh : Icons.play_arrow),
              onPressed: function () {
                this.setState(
                  function () {
                    this._animationEnd ? this._controller.reverse() : this._controller.forward();
                    this._animationEnd = !this._animationEnd;
                  }.bind(this),
                );
              }.bind(this),
            }),
          }),
          new Expanded({
            child: new Center({
              child: new Container({
                height: 100.0,
                width: 100.0,
                child: new AnimatedModalBarrier({
                  color: this._animation,
                }),
              }),
            }),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
