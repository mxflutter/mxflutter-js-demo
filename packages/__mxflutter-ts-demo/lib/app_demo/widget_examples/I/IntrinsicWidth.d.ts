import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { DefaultTabController, Column } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleIntrinsicWidth;
}
declare class PageExampleIntrinsicWidth extends MXJSWidgetState {
    constructor();
    _withWidthHeight(_stepHeight: any, _stepWidth: any): Column;
    build(context: any): DefaultTabController;
}
export { ExampleWidget };
