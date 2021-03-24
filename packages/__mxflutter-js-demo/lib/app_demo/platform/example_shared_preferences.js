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
import { SectionTitle } from '../component/section_title';
//let packages__sp = require("packages/shared_preferences/shared_preferences.js");
function testPreference() {
    return __awaiter(this, void 0, void 0, function* () {
        //let packages__sp = require("packages/shared_preferences/shared_preferences.js");
        try {
            let _prefs = (yield packages__sp.SharedPreferences.getInstance());
            _prefs.setString("mxflutter", "MXFlutter SharedPreferences: Count : " + this.count++);
            let v = _prefs.getString("soap");
            MXJSLog.log("_prefs.getString('soap'):" + v);
            _prefs.setStringList("soaplist", ["soap", "mxflutter uuuuu"]);
            let vList = _prefs.getStringList("soaplist");
            MXJSLog.log("_prefs.getStringList('soaplist'):" + vList);
        }
        catch (e$) {
            let e = dart.getThrown(e$);
            MXJSLog.log("testPreference error:" + e);
            return e;
        }
    });
}
class PageExampleSharedPreferences extends MXJSStatefulWidget {
    constructor() {
        super("PageExampleSharedPreferences");
    }
    createState() {
        return new PageExampleSharedPreferencesState(this);
    }
}
class PageExampleSharedPreferencesState extends MXJSWidgetState {
    constructor() {
        super("PageExampleSharedPreferencesState");
        this.response = "点击小人Run上面的代码";
        this.count = 0;
        this.prefs = null;
        this.setup();
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            this.prefs = (yield packages__sp.SharedPreferences.getInstance());
        });
    }
    dioCodeText() {
        return "prefs.setString(‘mxflutter’, str)";
    }
    dioCodeText2() {
        return "this.prefs.getString('mxflutter')";
    }
    build(context) {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text("MessageChannel Example"),
            }),
            body: new ListView({
                children: [
                    new SectionTitle("Code 调用prefs.setString"),
                    new ListTile({
                        trailing: new Icon(Icons["directions_run"]),
                        title: new Text(this.dioCodeText(), {
                            style: new TextStyle({
                                color: Colors.gray,
                            })
                        }),
                        onTap: function () {
                            return __awaiter(this, void 0, void 0, function* () {
                                this.setState(function () {
                                    let str = "MXFlutter SharedPreferences: Count : " + this.count++;
                                    let v = this.prefs.setString("mxflutter", str);
                                    this.response = " prefs.setString('mxflutter'," + str + ")";
                                }.bind(this));
                            });
                        }.bind(this)
                    }),
                    new SectionTitle("Code 调用 prefs.getString"),
                    new ListTile({
                        trailing: new Icon(Icons["directions_run"]),
                        title: new Text(this.dioCodeText2(), {
                            style: new TextStyle({
                                color: Colors.gray,
                            })
                        }),
                        onTap: function () {
                            return __awaiter(this, void 0, void 0, function* () {
                                this.setState(function () {
                                    let v = this.prefs.getString("mxflutter");
                                    this.response = v;
                                }.bind(this));
                            });
                        }.bind(this)
                    }),
                    new SectionTitle("prefs Result"),
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
export { PageExampleSharedPreferences };
