/* eslint-disable */

//message_page.js 正式开始，😝

import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { MaterialApp, Scaffold, AppBar, Text, Center, Key } from '@mxflutter/mxflutter-widgets/material';

import { GlobalConfig } from '../global_config';

class MessagePage extends MXJSStatefulWidget {
  constructor() {
    super('MessagePage', { key: new Key('MessagePage') });
  }

  createState() {
    return new MessagePageState();
  }
}

class MessagePageState extends MXJSWidgetState {
  constructor() {
    super();
  }
  build(context) {
    let widget = new MaterialApp({
      home: new Scaffold({
        appBar: new AppBar({
          title: new Center({
            child: new Text('消息'),
          }),
        }),
        body: new Center({
          child: new Text('努力开发中~'),
        }),
      }),
      // theme: GlobalConfig.themeData
    });
    return widget;
  }
}

export { MessagePage };
