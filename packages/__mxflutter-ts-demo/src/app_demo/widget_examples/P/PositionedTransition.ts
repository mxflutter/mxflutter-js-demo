/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  Color,
  Stack,
  Container,
  PositionedTransition,
  AnimationController,
  RelativeRectTween,
  RelativeRect,
  Animation,
  CurvedAnimation,
  Colors,
  IconButton,
  Icon,
  Icons,
  Curves,
  Row,
  SizedBox,
} from '@mxflutter/mxflutter-widgets/material';
import { Duration } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
import { SectionTitle } from '../../component/section_title';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExamplePositionedTransition();
  }
}

class PageExamplePositionedTransition extends MXJSWidgetState {
  private _AnimationEnd: boolean;
  private _controller: any;
  private _tween: any;
  private _normalAnimation: any;
  private _curvedAnimation: any;
  constructor() {
    super();
    this._AnimationEnd = false;
    this._controller = new AnimationController({
      duration: new Duration({ milliseconds: 1500 }),
    });
    this._tween = new RelativeRectTween({
      begin: RelativeRect.fromLTRB(25, 25, 25, 25),
      end: RelativeRect.fromLTRB(70, 70, 70, 70),
    });
    this._normalAnimation = new Animation({
      controller: this._controller,
      tween: this._tween,
    });
    // this._curvedAnimation = new Animation({
    //   controller: new CurvedAnimation({
    //     parent: this._controller,
    //     curve: Curves.elasticInOut,
    //   }),
    //   tween: this._tween,
    // });
  }
  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PositionedTransition'),
      }),
      body: new ListView({
        children: [
          new ListTile({
            title: new Text('PositionedTransition'),
            trailing: new IconButton({
              icon: new Icon(this._AnimationEnd ? Icons.refresh : Icons.play_arrow),
              onPressed: function () {
                this.setState(
                  function () {
                    this._AnimationEnd ? this._controller.reverse() : this._controller.forward();
                    this._AnimationEnd = !this._AnimationEnd;
                  }.bind(this),
                );
              }.bind(this),
            }),
          }),
          new Row({
            children: [
              new SizedBox({ width: 15 }),
              new Container({
                width: 165,
                height: 165,
                color: new Color(0xffbbbbbb),
                child: new Stack({
                  children: [
                    new PositionedTransition({
                      rect: this._normalAnimation,
                      child: new Container({ color: Colors.red }),
                    }),
                  ],
                }),
              }),
              new SizedBox({ width: 15 }),
              new Container({
                width: 165,
                height: 165,
                color: new Color(0xffbbbbbb),
                child: new Stack({
                  children: [
                    new PositionedTransition({
                      // rect: this._curvedAnimation,
                      rect: this._normalAnimation,
                      child: new Container({ color: Colors.green }),
                    }),
                  ],
                }),
              }),
              new SizedBox({ width: 15 }),
            ],
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
