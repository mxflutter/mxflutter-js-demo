import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleWrap;
}
declare class PageExampleWrap extends MXJSWidgetState {
    constructor();
    _chipList(): any[];
    build(context: any): Scaffold;
}
export { ExampleWidget };
