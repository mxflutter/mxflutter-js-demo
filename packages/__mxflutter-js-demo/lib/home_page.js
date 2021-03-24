//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.
import { MXJSStatelessWidget, MXJSStatefulWidget, MXJSWidgetState, MXJSLog, WidgetsFlutterBinding, } from '@mxflutter/mxflutter';
import { Scaffold, Colors, AppBar, ListTile, Theme, MaterialPageRoute, Container, Text, ListView, Icon, IconData, Row, Padding, Navigator, Color, TextAlign, TextStyle, EdgeInsets, } from '@mxflutter/mxflutter-widgets/material';
// import {
//   Container,
//   Text,
//   ListView,
//   Icon,
//   IconData,
//   Row,
//   Padding,
//   Navigator,
//   Color,
//   TextAlign,
//   TextStyle
// } from '@mxflutter/mxflutter-widgets/widgets';
// import {
//   Color,
//   TextAlign,
//   TextStyle
// } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
// import {
//   EdgeInsets
// } from '@mxflutter/mxflutter-widgets/painting';
import { JSMaterialPage } from './app_demo/material';
import { JSZhiHuPage } from './app_demo/zhihu/zhihu';
import { ListViewDemo } from './app_demo/listview_example';
import { PlatformExamplesPage } from './app_demo/platform/index';
import { JSPestoPage } from './app_demo/pesto';
import { JSContactPage } from './app_demo/contact';
import { JSAnimationPage } from './app_demo/animation';
import { ExampleWidget } from './app_demo/tabbar';
import { ProfileExamplesPage } from './app_demo/profile/index';
import { PageExampleJSApi } from './app_demo/custom_js_api';
import { ExampleSubWidget } from './app_demo/sub_widget';
//业务代码
class MXJSWidgetHomePage extends MXJSStatefulWidget {
    constructor() {
        super('MXJSWidgetHomePage');
        this.data = 'biz data';
        this.count = 0;
    }
    createState() {
        return new MXJSWidgetHomePageState(this);
    }
}
class MXJSWidgetHomePageState extends MXJSWidgetState {
    initState() {
        super.initState();
        // WidgetsBinding.instance.addObserver(this);
        WidgetsFlutterBinding.ensureInitialized().addObserver(this);
    }
    didChangeAppLifecycleState(state) {
        MXJSLog.log('didChangeAppLifecycleState' + state);
    }
    dispose() {
        super.dispose();
        // WidgetsBinding.instance.removeObserver(this);
        WidgetsFlutterBinding.ensureInitialized().removeObserver(this);
    }
    build(context) {
        let demoList = new ListView({
            children: [
                this.sectionTitle(context, 'App Demo'),
                // new ListTile({
                //   leading: new Icon(new IconData(0xe39d, {
                //     fontFamily: 'MaterialIcons'
                //   }), {
                //     color: Theme.of(context).primaryColor,
                //   }),
                //   trailing: new Icon(new IconData(0xe5df, {
                //     fontFamily: 'MaterialIcons',
                //     matchTextDirection: true
                //   })),
                //   title: new Text('Examples'),
                //   subtitle: new Text('Common Examples'),
                //   onTap: function () {
                //     //点击时懒加载页面
                //     let { ExamplesPage } = require('./app_demo/examples/index.js');
                //     Navigator.push(
                //       context,
                //       new MaterialPageRoute({
                //         builder: function (context) {
                //           return new ExamplesPage();
                //         },
                //       }),
                //     );
                //   },
                // }),
                // new ListTile({
                //   leading: new Icon(new IconData(0xe39d, {
                //     fontFamily: 'MaterialIcons'
                //   }), {
                //     color: Theme.of(context).primaryColor,
                //   }),
                //   trailing: new Icon(new IconData(0xe5df, {
                //     fontFamily: 'MaterialIcons',
                //     matchTextDirection: true
                //   })),
                //   title: new Text('Widget Examples'),
                //   subtitle: new Text('All Widget Examples'),
                //   onTap: function () {
                //     //点击时懒加载页面
                //     let { WidgetExamplesPage } = require('./app_demo/widget_examples/index.js');
                //     Navigator.push(
                //       context,
                //       new MaterialPageRoute({
                //         builder: function (context) {
                //           return new WidgetExamplesPage();
                //         },
                //       }),
                //     );
                //   },
                // }),
                new ListTile({
                    leading: new Icon(new IconData(0xe06d, {
                        fontFamily: 'MaterialIcons',
                    }), {
                        color: Theme.of(context).primaryColor,
                    }),
                    trailing: new Icon(new IconData(0xe5df, {
                        fontFamily: 'MaterialIcons',
                        matchTextDirection: true,
                    })),
                    title: new Text('Material'),
                    subtitle: new Text('Material UI Demo'),
                    onTap: function () {
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new JSMaterialPage();
                            },
                        }));
                    },
                }),
                new ListTile({
                    leading: new Icon(new IconData(0xe39d, {
                        fontFamily: 'MaterialIcons',
                    }), {
                        color: Theme.of(context).primaryColor,
                    }),
                    trailing: new Icon(new IconData(0xe5df, {
                        fontFamily: 'MaterialIcons',
                        matchTextDirection: true,
                    })),
                    title: new Text('ZhiHu'),
                    subtitle: new Text('ZhiHu high copy'),
                    onTap: function () {
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new JSZhiHuPage();
                            },
                        }));
                    },
                }),
                new ListTile({
                    leading: new Icon(new IconData(0xe39d, {
                        fontFamily: 'MaterialIcons',
                    }), {
                        color: Theme.of(context).primaryColor,
                    }),
                    trailing: new Icon(new IconData(0xe5df, {
                        fontFamily: 'MaterialIcons',
                        matchTextDirection: true,
                    })),
                    title: new Text('网易新闻 ListViewDemo'),
                    subtitle: new Text('ListView ,Message Channel, Pull to refresh'),
                    onTap: function () {
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new ListViewDemo();
                            },
                        }));
                    },
                }),
                new ListTile({
                    leading: new Icon(new IconData(0xe39d, {
                        fontFamily: 'MaterialIcons',
                    }), {
                        color: Theme.of(context).primaryColor,
                    }),
                    trailing: new Icon(new IconData(0xe5df, {
                        fontFamily: 'MaterialIcons',
                        matchTextDirection: true,
                    })),
                    title: new Text('PlatformAPIExamples'),
                    subtitle: new Text('Network/Dio/MessageChannel'),
                    onTap: function () {
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new PlatformExamplesPage();
                            },
                        }));
                    },
                }),
                new ListTile({
                    leading: new Icon(new IconData(0xe06d, {
                        fontFamily: 'MaterialIcons',
                    }), {
                        color: Theme.of(context).primaryColor,
                    }),
                    trailing: new Icon(new IconData(0xe5df, {
                        fontFamily: 'MaterialIcons',
                        matchTextDirection: true,
                    })),
                    title: new Text('Pesto'),
                    subtitle: new Text('Simple recipe browser'),
                    onTap: function () {
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new JSPestoPage();
                            },
                        }));
                    },
                }),
                new ListTile({
                    leading: new Icon(new IconData(0xe0d0, {
                        fontFamily: 'MaterialIcons',
                    }), {
                        color: Theme.of(context).primaryColor,
                    }),
                    trailing: new Icon(new IconData(0xe5df, {
                        fontFamily: 'MaterialIcons',
                        matchTextDirection: true,
                    })),
                    title: new Text('Contact profile'),
                    subtitle: new Text('Address book entry with a flexible appbar'),
                    onTap: function () {
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new JSContactPage();
                            },
                        }));
                    },
                }),
                new ListTile({
                    leading: new Icon(new IconData(0xe06d, {
                        fontFamily: 'MaterialIcons',
                    }), {
                        color: Theme.of(context).primaryColor,
                    }),
                    trailing: new Icon(new IconData(0xe5df, {
                        fontFamily: 'MaterialIcons',
                        matchTextDirection: true,
                    })),
                    title: new Text('Animation'),
                    subtitle: new Text('Section organizer'),
                    onTap: function () {
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new JSAnimationPage();
                            },
                        }));
                    },
                }),
                new ListTile({
                    leading: new Icon(new IconData(0xe06d, {
                        fontFamily: 'MaterialIcons',
                    }), {
                        color: Theme.of(context).primaryColor,
                    }),
                    trailing: new Icon(new IconData(0xe5df, {
                        fontFamily: 'MaterialIcons',
                        matchTextDirection: true,
                    })),
                    title: new Text('Tabbar'),
                    subtitle: new Text('Tabbar'),
                    onTap: function () {
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new ExampleWidget();
                            },
                        }));
                    },
                }),
                new ListTile({
                    leading: new Icon(new IconData(0xe06d, {
                        fontFamily: 'MaterialIcons',
                    }), {
                        color: Theme.of(context).primaryColor,
                    }),
                    trailing: new Icon(new IconData(0xe5df, {
                        fontFamily: 'MaterialIcons',
                        matchTextDirection: true,
                    })),
                    title: new Text('Sub MXJSStatefulWidget'),
                    subtitle: new Text('嵌套 MXJSStatefulWidget 测试'),
                    onTap: function () {
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new ExampleSubWidget();
                            },
                        }));
                    },
                }),
                this.sectionTitle(context, '性能测试'),
                new ListTile({
                    leading: new Icon(new IconData(0xe06d, {
                        fontFamily: 'MaterialIcons',
                    })),
                    trailing: new Icon(new IconData(0xe5df, {
                        fontFamily: 'MaterialIcons',
                        matchTextDirection: true,
                    })),
                    title: new Text('Profile'),
                    subtitle: new Text('性能测试 performance profiling'),
                    onTap: function () {
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new ProfileExamplesPage();
                            },
                        }));
                    },
                }),
                // this.sectionTitle(context, "mxjsbuilder build app"),
                // new ListTile({
                //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
                //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
                //     title: new Text('FlutterDemo'),
                //     subtitle: new Text('简单样例'),
                //     onTap: function () {
                //         let flutter_demo_ddc = require("./mxjsbuilder_demo/flutter_demo.dart.lib.js");
                //         Navigator.push(context, new MaterialPageRoute({
                //             builder: function (context) {
                //                 return new flutter_demo_ddc.main.MyHomePage.new({ title: "Flutter Demo Home Page" });
                //             }
                //         }))
                //     }
                // }),
                // new ListTile({
                //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
                //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
                //     title: new Text('ContactDemo'),
                //     subtitle: new Text('联系人'),
                //     onTap: function () {
                //         let contact_demo_ddc = require("./mxjsbuilder_demo/contacts_demo.dart.lib.js");
                //         Navigator.push(context, new MaterialPageRoute({
                //             builder: function (context) {
                //                 return new contact_demo_ddc.contacts_demo.ContactsDemo.new;
                //             }
                //         }))
                //     }
                // }),
                // new ListTile({
                //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
                //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
                //     title: new Text('PestoDemo'),
                //     subtitle: new Text('菜谱'),
                //     onTap: function () {
                //         let pesto_demo_ddc = require("./mxjsbuilder_demo/pesto_demo.dart.lib.js");
                //         Navigator.push(context, new MaterialPageRoute({
                //             builder: function (context) {
                //                 return new pesto_demo_ddc.pesto_demo.PestoDemo.new;
                //             }
                //         }))
                //     }
                // }),
                // new ListTile({
                //     leading: new Icon(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
                //     trailing: new Icon(new IconData(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true })),
                //     title: new Text('ZhiHu'),
                //     subtitle: new Text('知乎-高仿版'),
                //     onTap: function () {
                //         const packages__zhihu__index = require('./mxjsbuilder_demo/packages/zhihu/index/index.dart.lib.js');
                //         const index_page = packages__zhihu__index.index__index;
                //         Navigator.push(context, new MaterialPageRoute({
                //             builder: function (context) {
                //                 return new index_page.Index.new;
                //             }
                //         }))
                //     }
                // }),
                this.sectionTitle(context, 'Dart JS Api'),
                new ListTile({
                    leading: new Icon(new IconData(0xe39d, {
                        fontFamily: 'MaterialIcons',
                    })),
                    trailing: new Icon(new IconData(0xe5df, {
                        fontFamily: 'MaterialIcons',
                        matchTextDirection: true,
                    })),
                    title: new Text('Dart JS Api'),
                    subtitle: new Text('JS Call Dart Function'),
                    onTap: function () {
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new PageExampleJSApi();
                            },
                        }));
                    },
                }),
            ],
        });
        let w = new Scaffold({
            appBar: new AppBar({
                title: new Text('MXFlutter Examples'),
            }),
            body: demoList,
        });
        return w;
    }
    sectionTitle(context, title) {
        return new HomeSectionTitle(title);
    }
}
class HomeSectionTitle extends MXJSStatelessWidget {
    constructor(title, { key } = {}) {
        super('HomeSectionTitle', {
            key: key,
        });
        this.title = title;
    }
    build(context) {
        return new Container({
            padding: EdgeInsets.all(10.0),
            color: Theme.of(context).primaryColor,
            child: new Row({
                children: [
                    new Icon(new IconData(0xe80e, {
                        fontFamily: 'MaterialIcons',
                    }), {
                        size: 20,
                        color: new Color(0xffffffff),
                    }),
                    new Padding({
                        padding: EdgeInsets.fromLTRB(10.0, 0.0, 0.0, 0.0),
                    }),
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
export { MXJSWidgetHomePage };
