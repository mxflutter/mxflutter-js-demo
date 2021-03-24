/* eslint-disable */
import {MXJSBaseWidget, MXJSFlutterApp, MXJSStatelessWidget, MXJSStatefulWidget, MXJSWidgetState, MXJSLog } from '@mxflutter/mxflutter';
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
  DecoratedBoxTransition,
  Radius,
  BoxDecoration,
  AnimationController,
  DecorationTween,
  FlutterLogo,
  BorderRadius,
} from '@mxflutter/mxflutter-widgets/material';
import { Duration } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';

import { SectionTitle } from '../../component/section_title';

class PageExampleDecoratedBoxTransition extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleDecoratedBoxTransition');
  }

  createState() {
    return new PageExampleDecoratedBoxTransitionState();
  }
}

class PageExampleDecoratedBoxTransitionState extends MXJSWidgetState {
  public controller: any;
  public rectAnimation: any;
  constructor() {
    super();
    this.controller = new AnimationController();
    this.controller.duration = new Duration({ seconds: 2 });


    let dTween = new DecorationTween({
      begin: new BoxDecoration({
        color: Colors.white,
        borderRadius: BorderRadius.all(Radius.circular(0))
      }),
      end: new BoxDecoration({
        color: Colors.blue,
        borderRadius: BorderRadius.all(Radius.circular(20))
      })
    });

    this.rectAnimation = dTween.animate(this.controller)

  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleDecoratedBoxTransition'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.controller.forward();
        }.bind(this),
      }),
      body: new DecoratedBoxTransition({
        child: new FlutterLogo({ size: 300 }),
        decoration: this.rectAnimation,
      })
    });
    return widget;
  }
}

export {
  PageExampleDecoratedBoxTransition,
};
