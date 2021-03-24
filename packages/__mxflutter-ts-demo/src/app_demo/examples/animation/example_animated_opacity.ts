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
  AnimatedOpacity,
  FlutterLogo,
  Curves,
} from '@mxflutter/mxflutter-widgets/material';
import { Duration } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';

import { SectionTitle } from '../../component/section_title';

class PageExampleAnimatedOpacity extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedOpacity');
  }

  createState() {
    return new PageExampleAnimatedOpacityState();
  }
}

class PageExampleAnimatedOpacityState extends MXJSWidgetState {
  public opacityLevel: any;
  constructor() {
    super();
    this.opacityLevel = 1.0;
  }

  changeOpacity() {
    this.setState(function () {
      this.opacityLevel = this.opacityLevel == 0 ? 1.0 : 0.0;
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedOpacity'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.changeOpacity();
        }.bind(this),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleAnimatedOpacity"),
          new AnimatedOpacity({
            opacity: this.opacityLevel,
            duration: new Duration({ seconds: 1 }),
            child: new Padding({
              padding: EdgeInsets.all(10),
              child: new FlutterLogo({ size: 100 }),
            }),
          })
        ],
      })
    });
    return widget;
  }
}

export {
  PageExampleAnimatedOpacity,
};
