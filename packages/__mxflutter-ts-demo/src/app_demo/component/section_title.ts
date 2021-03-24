/* eslint-disable */
import { MXJSStatelessWidget } from '@mxflutter/mxflutter';
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
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  IconButton,
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
  Padding,
  Theme,
  TextAlign,
} from '@mxflutter/mxflutter-widgets/material';

class SectionTitle extends MXJSStatelessWidget {
  public title: any;
  // constructor(title,{key}={}){
  //   super("SectionTitle",{key:key});
  //   this.title = title;
  // }
  constructor(title) {
    super('SectionTitle');
    this.title = title;
  }

  build(context) {
    return new Container({
      padding: EdgeInsets.all(10.0),
      color: Theme.of(context).primaryColor,
      child: new Row({
        children: [
          new Icon(new IconData(0xe80e, { fontFamily: 'MaterialIcons' }), { size: 20, color: new Color(0xffffffff) }),
          new Padding({ padding: EdgeInsets.fromLTRB(10.0, 0.0, 0.0, 0.0) }),
          new Text(this.title, {
            textAlign: TextAlign.start,
            style: new TextStyle({
              fontSize: 16,
              fontWeight: Theme.of(context).textTheme.subtitle1.fontWeight,
              color: Colors.white,
            }),
          }),
        ],
      }),
    });
  }
}

export { SectionTitle };
