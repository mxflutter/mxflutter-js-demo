//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import {
    MXJSStatefulWidget,
    MXJSWidgetState,
    MXLifecycleDartClass,
    MXMirrorObjMethodCall,
} from '@mxflutter/mxflutter';
import {
    Scaffold,
    Colors,
    AppBar,
    ListTile,
    Icons
} from '@mxflutter/mxflutter-widgets/material';
import {
    Text,
    ListView,
    Icon,
    Padding,
} from '@mxflutter/mxflutter-widgets/widgets';
import {
    TextStyle,
} from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
import {
    EdgeInsets,
} from '@mxflutter/mxflutter-widgets/painting';

class MXMirrorExample extends MXLifecycleDartClass {

    constructor(baseOptions) {

        //创建对应FLutter对象
        var newDartMirrorObjArgs = new MXMirrorObjMethodCall({
            className: "MXMirrorExample",
            args: {
                "key": 123
            }
        });
        super(newDartMirrorObjArgs);

    }

    //封装getMyAppName
    getMyAppName(platform, {
        v
    } = {}) {

        let argument = new MXMirrorObjMethodCall({
            className: "MXMirrorExample",
            funcName: "getMyAppName",
            args: {
                platform: platform,
                v: v,
            }
        });

        return this.invokeMirrorObjMethodAsyc(argument);
    }

    getMyAppNameSync(platform, {
        v
    } = {}) {

        let argument = new MXMirrorObjMethodCall({
            className: "MXMirrorExample",
            funcName: "getMyAppName",
            args: {
                platform: platform,
                v: v,
            }
        });

        return this.invokeMirrorObjMethodSync(argument);
    }

    // release dart侧实例
    release() {
        super.release();
    }

}


//使用MXMirrorExample
let g_jsApi = new MXMirrorExample();

import { SectionTitle } from './component/section_title';

class PageExampleJSApi extends MXJSStatefulWidget {
    constructor() {
        super("PageExampleJSApi");

    }

    createState() {
        return new PageExampleJSApiState(this);
    }
}

class PageExampleJSApiState extends MXJSWidgetState {
    constructor() {
        super("PageExampleJSApiState");
        this.response = "点击小人Run上面的代码";
    }

    codeText() {
        return "let result = await this.jsApi.getMyAppName('iOS', {v:'1.0'})";
    }

    codeTextSync() {
        return "let result = this.jsApi.getMyAppName('iOS', {v:'2.0'})";
    }

    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text("MXMirrorExample Example"),
            }),
            body: new ListView({
                children: [
                    new SectionTitle("Code 异步调用Dart MXMirrorExample.getMyAppName"),
                    new ListTile({
                        trailing: new Icon(Icons["directions_run"]),
                        title: new Text(this.codeText(), {
                            style: new TextStyle({
                                color: Colors.gray,
                            })
                        }),
                        onTap: async function () {

                            //call js api
                            let result = await g_jsApi.getMyAppName("iOS", {
                                v: "1.0"
                            });

                            this.setState(function () {

                                this.response = result;

                            }.bind(this));

                        }.bind(this)
                    }),
                    new SectionTitle("Code 同步调用Dart MXMirrorExample.getMyAppName"),
                    new ListTile({
                        trailing: new Icon(Icons["directions_run"]),
                        title: new Text(this.codeTextSync(), {
                            style: new TextStyle({
                                color: Colors.gray,
                            })
                        }),
                        onTap: async function () {

                            //call js api
                            let result = g_jsApi.getMyAppNameSync("iOS", {
                                v: "2.0"
                            });

                            this.setState(function () {

                                this.response = result;

                            }.bind(this));

                        }.bind(this)
                    }),
                    new SectionTitle("JSApi Result"),

                    new Padding({
                        padding: EdgeInsets.all(10),
                        child: new Text(this.response, {
                            style: new TextStyle({
                                color: Colors.gray,
                            })
                        }),
                    })

                ],
            })
        });
        return widget;
    }
}

export { PageExampleJSApi };