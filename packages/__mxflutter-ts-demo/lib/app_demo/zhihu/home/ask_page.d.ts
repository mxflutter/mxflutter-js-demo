import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { MaterialApp } from '@mxflutter/mxflutter-widgets/material';
declare class AskPage extends MXJSStatefulWidget {
    constructor();
    createState(): AskPageState;
}
declare class AskPageState extends MXJSWidgetState {
    constructor();
    build(context: any): MaterialApp;
}
export { AskPage };
