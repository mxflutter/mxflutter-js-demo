import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { MaterialApp, Container } from '@mxflutter/mxflutter-widgets/material';
declare class Common {
    static searchInput(context: any): Container;
}
declare class ReplyPage extends MXJSStatefulWidget {
    constructor();
    createState(): ReplyPageState;
}
declare class ReplyPageState extends MXJSWidgetState {
    constructor();
    build(context: any): MaterialApp;
}
export { ReplyPage, Common };
