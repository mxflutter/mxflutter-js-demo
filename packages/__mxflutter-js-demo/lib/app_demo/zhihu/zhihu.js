import { MXJSStatefulWidget, MXJSWidgetState, } from '@mxflutter/mxflutter';
import { MaterialApp, } from '@mxflutter/mxflutter-widgets/material';
import { Index } from './index';
class JSZhiHuPage extends MXJSStatefulWidget {
    constructor() {
        super('JSZhiHuPage');
    }
    createState() {
        return new JSZhiHuPageState(this);
    }
}
class JSZhiHuPageState extends MXJSWidgetState {
    build(context) {
        let widget = new MaterialApp({
            title: "知乎-高仿版",
            home: new Index()
        });
        return widget;
    }
}
export { JSZhiHuPage };
