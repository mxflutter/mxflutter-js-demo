var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MXJSStatefulWidget, MXJSWidgetState, MXJSLog, } from '@mxflutter/mxflutter';
import { Scaffold, Colors, AppBar, ListTile, Icons, } from '@mxflutter/mxflutter-widgets/material';
import { Text, ListView, Icon, Padding, } from '@mxflutter/mxflutter-widgets/widgets';
import { TextStyle, } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
import { EdgeInsets, } from '@mxflutter/mxflutter-widgets/painting';
import { MethodChannel, } from '@mxflutter/mxflutter-widgets/services';
import { SectionTitle } from '../component/section_title';
class PageExampleMessageChannel extends MXJSStatefulWidget {
    constructor() {
        super("PageExampleMessageChannel");
    }
    createState() {
        return new PageExampleMessageChannelState(this);
    }
}
class PageExampleMessageChannelState extends MXJSWidgetState {
    constructor() {
        super("PageExampleMessageChannelState");
        this.response = "点击小人Run上面的代码";
        this.methodChannel = new MethodChannel("MXFlutter_MethodChannel_Demo");
    }
    dioCodeText() {
        return "let result = await this.methodChannel.invokeMethod('callNativeIconListRefresh', {});";
    }
    dioCodeText2() {
        return "let result = await this.methodChannel.invokeMethod('callNativeIconListLoadMore', {});";
    }
    callMethodChannel(method) {
        return __awaiter(this, void 0, void 0, function* () {
            //MessageChannel 用法示例
            let result = yield this.methodChannel.invokeMethod(method, {});
            MXJSLog.log("callNativeIconListRefresh result: " + result);
            return result;
        });
    }
    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text("MessageChannel Example"),
            }),
            body: new ListView({
                children: [
                    new SectionTitle("Code 调用MessageChannel ListRefresh"),
                    new ListTile({
                        trailing: new Icon(Icons["directions_run"]),
                        title: new Text(this.dioCodeText(), {
                            style: new TextStyle({
                                color: Colors.gray,
                            })
                        }),
                        onTap: function () {
                            return __awaiter(this, void 0, void 0, function* () {
                                let response = yield this.callMethodChannel("callNativeIconListRefresh");
                                this.setState(function () {
                                    this.response = JSON.stringify(response ? response : "messagechannel return empty");
                                }.bind(this));
                            });
                        }.bind(this)
                    }),
                    new SectionTitle("Code 调用MessageChannel ListLoadMore"),
                    new ListTile({
                        trailing: new Icon(Icons["directions_run"]),
                        title: new Text(this.dioCodeText2(), {
                            style: new TextStyle({
                                color: Colors.gray,
                            })
                        }),
                        onTap: function () {
                            return __awaiter(this, void 0, void 0, function* () {
                                let response = yield this.callMethodChannel("callNativeIconListLoadMore");
                                this.setState(function () {
                                    this.response = JSON.stringify(response ? response : "messagechannel return empty");
                                }.bind(this));
                            });
                        }.bind(this)
                    }),
                    new SectionTitle("MessageChannel Result"),
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
export { PageExampleMessageChannel };
