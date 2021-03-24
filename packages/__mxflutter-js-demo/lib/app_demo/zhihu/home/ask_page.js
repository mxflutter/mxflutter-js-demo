//ask_page.js 正式开始，😝
import { MXJSStatefulWidget, MXJSWidgetState, } from '@mxflutter/mxflutter';
import { MaterialApp, Scaffold, Colors, AppBar, FlatButton, TextField, InputDecoration, } from '@mxflutter/mxflutter-widgets/material';
import { Container, Text, Icon, IconData, Row, Navigator, Expanded, Column, SingleChildScrollView, } from '@mxflutter/mxflutter-widgets/widgets';
import { TextStyle, } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
import { EdgeInsets, } from '@mxflutter/mxflutter-widgets/painting';
class AskPage extends MXJSStatefulWidget {
    constructor() {
        super('AskPage');
    }
    createState() {
        return new AskPageState(this);
    }
}
class AskPageState extends MXJSWidgetState {
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
                                    icon: new Icon(new IconData(0xe14c, {
                                        fontFamily: 'MaterialIcons'
                                    })),
                                    label: new Text("")
                                }),
                                new Expanded({
                                    child: new Container({
                                        child: new Text("提问")
                                    }),
                                }),
                                new FlatButton({
                                    onPressed: function () {
                                    },
                                    child: new Text("下一步", {
                                        style: new TextStyle({
                                            color: Colors.black
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                body: new SingleChildScrollView({
                    child: new Column({
                        children: [
                            new Container({
                                child: new TextField({
                                    decoration: new InputDecoration({
                                        hintText: "请输入标题",
                                        hintStyle: new TextStyle({
                                            color: Colors.black,
                                        })
                                    })
                                }),
                                margin: EdgeInsets.all(16.0)
                            })
                        ]
                    })
                })
            })
        });
        return widget;
    }
}
export { AskPage };
