/* eslint-disable */

import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  Container,
  Center,
  AppBar,
  Text,
  Icon,
  Colors,
  FloatingActionButton,
  TextStyle,
  Icons,
  AnimatedCrossFade,
  CrossFadeState,
} from '@mxflutter/mxflutter-widgets/material';
import { Duration } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';

// 待完成
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAnimatedCrossFadeState();
  }
}

class PageExampleAnimatedCrossFadeState extends MXJSWidgetState {
  private selected: boolean;
  constructor() {
    super();
    this.selected = true;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedCrossFade'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.setState(
            function () {
              this.selected = !this.selected;
            }.bind(this),
          );
        }.bind(this),
      }),
      body: new AnimatedCrossFade({
        crossFadeState: this.selected ? CrossFadeState.showFirst : CrossFadeState.showSecond,
        duration: new Duration({ milliseconds: 200 }),
        firstChild: new Container({
          width: 500,
          height: 300,
          color: Colors.orange,
          child: new Center({
            child: new Text('第一页', {
              style: new TextStyle({
                color: Colors.white,
                fontSize: 20,
              }),
            }),
          }),
        }),
        secondChild: new Container({
          width: 500,
          height: 300,
          color: Colors.blue,
          child: new Center({
            child: new Text('第二页', {
              style: new TextStyle({
                color: Colors.white,
                fontSize: 20,
              }),
            }),
          }),
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
