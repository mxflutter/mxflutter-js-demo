/* eslint-disable */

import { StatefulWidget, State, MXTickerMixinWidget, MXTickerMixinWidgetState } from '@mxflutter/mxflutter';
import {
  AnimationController,
  Scaffold,
  AppBar,
  Text,
  FloatingActionButton,
  Icon,
  Icons,
  AnimatedBuilder,
  Center,
  Container,
  Colors,
  TextStyle,
  Duration,
} from '@mxflutter/mxflutter-widgets/material';

// AnimatedBuilder 待支持
// 注意，动画如果用到了AnimationController，则对应widgtet需要继承MXTickerMixinWidget和MXTickerMixinWidgetState
class ExampleWidget extends MXTickerMixinWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAnimatedBuilderV2State();
  }
}

class PageExampleAnimatedBuilderV2State extends MXTickerMixinWidgetState {
  private controller: AnimationController;
  constructor() {
    super();
    this.controller = new AnimationController({
      duration: new Duration({ seconds: 1 }),
      // upperBound: 100,
      // vsync: this,
    });

    this.controller.forward();
  }

  beginAnimation() {
    this.controller.repeat();
  }

  build(context) {
    const widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('AnimatedBuilder'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.beginAnimation();
        }.bind(this),
      }),
      body: new AnimatedBuilder({
        animation: this.controller,
        widget: new Center({
          child: new Container({
            // height: '100+$value*100', //动态计算$value
            // width: '200+$value*200', //动态计算$value
            height: 100,
            width: 200,
            color: Colors.orange,
            child: new Center({
              child: new Text('AnimatedBuilder 待支持', {
              //child: new Text('点击 ( + ) 号，重复播放', {
                style: new TextStyle({
                  color: Colors.white,
                }),
              }),
            }),
          }),
        }),
        // builder 由于异步频繁调用JS，会导致JS线程性能问题，没有实现，async在builder中调用也存在技术问题
        // builder: function(context,child){
        //   console.log("call builder in js....aaaa");
        //   MXJSLog.log("call builder in js....bbbb");
        //   return child;
        // },
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
