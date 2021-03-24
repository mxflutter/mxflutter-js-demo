import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { MaterialApp } from '@mxflutter/mxflutter-widgets/material';
declare class JSZhiHuPage extends MXJSStatefulWidget {
    constructor();
    createState(): JSZhiHuPageState;
}
declare class JSZhiHuPageState extends MXJSWidgetState {
    constructor();
    build(context: any): MaterialApp;
}
export { JSZhiHuPage };
