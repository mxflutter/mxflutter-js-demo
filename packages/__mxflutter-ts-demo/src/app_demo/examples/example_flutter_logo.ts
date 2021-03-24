/* eslint-disable */
import {MXJSBaseWidget, MXJSFlutterApp, MXJSStatelessWidget, MXJSStatefulWidget, MXJSWidgetState, MXJSLog } from '@mxflutter/mxflutter';
import {
  MaterialApp,
  Scaffold,
  Container,
  BoxDecoration,
  BorderRadius,
  Radius,
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
  CrossAxisAlignment,
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
  FlutterLogo,
} from '@mxflutter/mxflutter-widgets/material';


class PageExampleFlutterLogo extends MXJSStatelessWidget {
  constructor(){
    super("PageExampleFlutterLogo");
  }

  build(context){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('FlutterLogo',),
      }),
      body: new ListView({
        children:[
          new ListTile({title:new Text("FlutterLogo")}),
          new FlutterLogo(),
          new ListTile({title:new Text("FlutterLogo Size"),}),
          new FlutterLogo({size:60}),
          new ListTile({title:new Text("FlutterLogo Size"),}),
          new FlutterLogo({size:100}),
          //new FlutterLogo({size:100, colors:Colors.orange}),
        ],
      })
    });
    return widget;
  }
}

export {
  PageExampleFlutterLogo,
};
