/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  Container,
  AppBar,
  Text,
  Icon,
  FloatingActionButton,
  Colors,
  TextStyle,
  Alignment,
  AnimatedDefaultTextStyle,
  Column,
  FontWeight,
  Expanded,
  Icons,
} from '@mxflutter/mxflutter-widgets/material';
import { Duration } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';

// 动画-字体动画
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageAnimatedDefaultTextStyleState();
  }
}

class PageAnimatedDefaultTextStyleState extends MXJSWidgetState {
  private textSize: number;
  private color: any;
  constructor() {
    super();
    this.textSize = 10;
    this.color = Colors.orange;
  }

  build() {
    let widgets = new Scaffold({
      appBar: new AppBar({
        title: new Text('AnimatedDefaultTextStyle'),
      }),
      body: new Column({
        children: [
          new Expanded({
            child: new Container({
              alignment: Alignment.center,
              child: new AnimatedDefaultTextStyle({
                child: new Text('AnimatedDefaultTextStyle'),
                style: new TextStyle({
                  color: this.color,
                  fontSize: this.textSize,
                  fontWeight: FontWeight.bold,
                }),
                duration: new Duration({
                  seconds: 1,
                }),
              }),
            }),
          }),
        ],
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.setState(
            function () {
              this.textSize = this.textSize == 10 ? 30 : 10;
              this.color = this.color == Colors.orange ? Colors.black : Colors.orange;
            }.bind(this),
          );
        }.bind(this),
      }),
    });
    return widgets;
  }
}

export { ExampleWidget };
