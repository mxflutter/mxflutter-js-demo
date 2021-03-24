/* eslint-disable */
import { MXJSStatelessWidget, MXJSStatefulWidget, MXJSWidgetState, MXJSLog } from '@mxflutter/mxflutter';
import {
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  TextDecorationStyle,
  TextOverflow,
  Padding,
  Animation,
  AnimatedBuilder,
  AnimationController,
  Interval,
  CurveTween,
  Curves,
  Tween,
  Image,
  AnimationStatus,
} from '@mxflutter/mxflutter-widgets/material';
import { Duration } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';

import { SectionTitle } from '../../component/section_title';

class PageExampleAnimatedBuilder extends MXJSStatelessWidget {
  public count: any;
  public tween: any;
  public animationController: any;
  public animation: any;
  constructor() {
    super("PageExampleAnimatedBuilder");
    this.count = 0;
    this.tween = new Tween({ begin: 50.0, end: 300.0 });
    this.animationController = new AnimationController({ duration: new Duration({ seconds: 2 }) });
    this.animation = new Animation({ tween: this.tween, controller: this.animationController });
    this.animation.addStatusListener(this.animationLoopFunc.bind(this));
  }

  animationLoopFunc(status) {
    MXJSLog.log('callback from flutter ....  ' + status);
    if (status === AnimationStatus.completed) {
      this.animationController.reverse();
      this.count++;
    } else if (status === AnimationStatus.dismissed) {
      this.animationController.forward();
    }
    if (this.count > 5) {
      this.animation.removeStatusListener(this.animationLoopFunc);
    }
  }

  beginAnimation() {
    this.animationController.forward();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedBuilder'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.beginAnimation();
        }.bind(this)
      }),
      body: new ScaleAnimation(
        Image.network('https://pic2.zhimg.com/50/v2-6416ef6d3181117a0177275286fac8f3_hd.jpg'),
        this.animation
      )
    });
    return widget;
  }
}



class ScaleAnimation extends MXJSStatefulWidget {
  public child: any;
  public animation: any;
  constructor(
    child,
    animation
  ) {
    super('ScaleAnimation');
    this.child = child;
    this.animation = animation;
  }

  createState() {
    return new ScaleAnimationState();
  }
}

class ScaleAnimationState extends MXJSWidgetState {

  build(context) {
    const imageRatio = 1.455;
    const widget = new Center({
      // child: new AnimatedBuilder({
      //   animation: this.widget.animation,
      //   widget: new Container({
      //     width: "$value",
      //     child: this.widget.child
      //   })
      //   // child: this.child,
      // })
    });
    return widget;
  }
}

export {
  PageExampleAnimatedBuilder,
};
