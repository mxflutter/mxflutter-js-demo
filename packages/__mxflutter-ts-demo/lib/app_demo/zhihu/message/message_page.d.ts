import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { MaterialApp } from '@mxflutter/mxflutter-widgets/material';
declare class MessagePage extends MXJSStatefulWidget {
    constructor();
    createState(): MessagePageState;
}
declare class MessagePageState extends MXJSWidgetState {
    constructor();
    build(context: any): MaterialApp;
}
export { MessagePage };
