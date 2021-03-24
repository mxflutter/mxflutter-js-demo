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
} from '@mxflutter/mxflutter-widgets/material';

import { SectionTitle } from '../../component/section_title';

class PageExampleAnimatedWidgetBaseState extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedWidgetBaseState');
  }

  createState() {
    return new PageExampleAnimatedWidgetBaseStateState();
  }
}

class PageExampleAnimatedWidgetBaseStateState extends MXJSWidgetState {

  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedWidgetBaseState'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleAnimatedWidgetBaseState"),
          new SectionTitle("todo...泛型类"),
        ],
      })
    });
    return widget;
  }
}

export {
  PageExampleAnimatedWidgetBaseState,
};
