/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
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

class PageExampleAnimatedListState extends MXJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedListState');
  }

  createState() {
    return new PageExampleAnimatedListStateState();
  }
}

class PageExampleAnimatedListStateState extends MXJSWidgetState {

  constructor(){
    super();
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedListState',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExampleAnimatedListState"),
          new SectionTitle("Todo...."),
        ],
      })
    });
    return widget;
  }
}

export {
  PageExampleAnimatedListState,
};
