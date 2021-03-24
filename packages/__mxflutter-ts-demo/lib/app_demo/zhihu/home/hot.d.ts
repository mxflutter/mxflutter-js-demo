import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { Container, SingleChildScrollView } from '@mxflutter/mxflutter-widgets/material';
declare class Hot extends MXJSStatefulWidget {
    constructor();
    createState(): HotState;
}
declare class HotState extends MXJSWidgetState {
    constructor();
    hotCard(context: any, question: any): Container;
    build(context: any): SingleChildScrollView;
}
export { Hot };
