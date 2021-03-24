import { MXJSStatelessWidget, } from '@mxflutter/mxflutter';
import { Scaffold, AppBar, ListTile, MaterialPageRoute, Scrollbar, } from '@mxflutter/mxflutter-widgets/material';
import { Text, ListView, Navigator, } from '@mxflutter/mxflutter-widgets/widgets';
import { Key } from '@mxflutter/mxflutter-widgets/foundation';
import { SectionTitle } from '../component/section_title';
import { PageExampleMessageChannel } from './example_message_channel';
import { PageExampleDio } from './example_dio';
class PlatformExamplesPage extends MXJSStatelessWidget {
    constructor() {
        super("PlatformExamplesPage");
    }
    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text('Platform Examples'),
            }),
            body: new Scrollbar({
                child: new ListView({
                    children: [
                        new SectionTitle("MessageChannel"),
                        new ListTile({
                            title: new Text("MessageChannel"),
                            subtitle: new Text("iOS/Android"),
                            onTap: function () {
                                Navigator.push(context, new MaterialPageRoute({
                                    builder: function (context) {
                                        return new PageExampleMessageChannel();
                                    }
                                }));
                            }
                        }),
                        new SectionTitle("网络组件", {
                            key: new Key("1")
                        }),
                        new ListTile({
                            title: new Text("Dio Examples"),
                            subtitle: new Text("iOS/Android"),
                            onTap: function () {
                                Navigator.push(context, new MaterialPageRoute({
                                    builder: function (context) {
                                        return new PageExampleDio;
                                    }
                                }));
                            }
                        }),
                        // new SectionTitle("存储"),
                        // new ListTile({
                        //   title: new Text("shared_preferences"),
                        //   subtitle: new Text("iOS/Android"),
                        //   onTap: function () {
                        //     Navigator.push(context, new MaterialPageRoute({
                        //       builder: function (context) {
                        //         return new PageExampleSharedPreferences;
                        //       }
                        //     }))
                        //   }
                        // }),
                    ],
                })
            })
        });
        return widget;
    }
}
export { PlatformExamplesPage };
