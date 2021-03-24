/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Text, AppBar, Center } from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleSlideTransition();
  }
}

class PageExampleSlideTransition extends MXJSWidgetState {
  constructor() {
    super();
  }

  // _normalSlideTransition() {
  //   var _controller = new AnimationController({
  //     duration: new Duration({ seconds: 1 }),
  //   });
  //   var _tween = new Tween({
  //     begin: new Offset(0.0, 0.0),
  //     end: new Offset(1.0, 0.0),
  //   });
  //   var _animation = new Animation({
  //     tween: _tween,
  //     controller: _controller,
  //   });
  //   return new SlideTransition({
  //     position: _animation,
  //     child: new Container({
  //       color: Colors.blue,
  //       height: 100.0,
  //       width: 100.0,
  //     }),
  //   });
  // }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('SlideTransition') }),
      body: new Center({
        child: new Text(
          'Tween()会默认生成Tween的类型,\n' +
            '而动画中需要Tween的指定类型\n' +
            '例如slideTransition中需要Tween<offset>,\n' +
            'scaleTransition中需要Tween<double>,\n' +
            '将生成的Tween直接传入\n' +
            '将会导致Tween并非Tween子类的错误',
        ),
      }),
      // body: new ListView({
      //   children: [
      //     new ListTile({ title: new Text('SlideTransition的基本使用') }),
      //     new Container({
      //       height: 100.0,
      //       child: this._normalSlideTransition(),
      //     }),
      //   ],
      // }),
    });
    return widget;
  }
}

export { ExampleWidget };
