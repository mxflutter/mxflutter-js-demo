/* eslint-disable */

//ask_page.js 正式开始，😝

import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Container,
  Row,
  FlatButton,
  Text,
  Expanded,
  TextStyle,
  Colors,
  TextField,
  Icon,
  IconData,
  EdgeInsets,
  Column,
  SingleChildScrollView,
  InputDecoration,
  Navigator,
  MaterialApp,
} from '@mxflutter/mxflutter-widgets/material';
import { GlobalConfig } from '../global_config';

class AskPage extends MXJSStatefulWidget {
  constructor() {
    super('AskPage');
  }

  createState() {
    return new AskPageState();
  }
}

class AskPageState extends MXJSWidgetState {
  constructor() {
    super();
  }
  build(context) {
    let widget = new MaterialApp({
      // theme: GlobalConfig.themeData,
      home: new Scaffold({
        appBar: new AppBar({
          title: new Container({
            child: new Row({
              children: [
                FlatButton.icon({
                  onPressed: function () {
                    Navigator.pop(context);
                  },
                  icon: new Icon(new IconData(0xe14c, { fontFamily: 'MaterialIcons' })),
                  label: new Text(''),
                }),
                new Expanded({
                  child: new Container({
                    child: new Text('提问'),
                  }),
                }),
                new FlatButton({
                  onPressed: function () {},
                  child: new Text('下一步', {
                    style: new TextStyle({
                      color: Colors.black,
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
        body: new SingleChildScrollView({
          child: new Column({
            children: [
              new Container({
                child: new TextField({
                  decoration: new InputDecoration({
                    hintText: '请输入标题',
                    hintStyle: new TextStyle({
                      color: Colors.black,
                    }),
                  }),
                }),
                margin: EdgeInsets.all(16.0),
              }),
            ],
          }),
        }),
      }),
    });
    return widget;
  }
}

export { AskPage };
