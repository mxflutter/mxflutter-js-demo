//message_page.js 正式开始，😝
import { MXJSStatefulWidget, MXJSWidgetState, } from '@mxflutter/mxflutter';
import { MaterialApp, Scaffold, AppBar, } from '@mxflutter/mxflutter-widgets/material';
import { Text, Center, } from '@mxflutter/mxflutter-widgets/widgets';
import { Key } from '@mxflutter/mxflutter-widgets/foundation';
class MessagePage extends MXJSStatefulWidget {
    constructor() {
        super("MessagePage", {
            key: new Key("MessagePage")
        });
    }
    createState() {
        return new MessagePageState(this);
    }
}
class MessagePageState extends MXJSWidgetState {
    build(context) {
        let widget = new MaterialApp({
            home: new Scaffold({
                appBar: new AppBar({
                    title: new Center({
                        child: new Text('消息')
                    })
                }),
                body: new Center({
                    child: new Text("努力开发中~")
                })
            })
            // theme: GlobalConfig.themeData
        });
        return widget;
    }
}
export { MessagePage };
