import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Row } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleMediaQuery;
}
declare class PageExampleMediaQuery extends MXJSWidgetState {
    constructor();
    _buildQueryData(name: any, value: any): Row;
    build(context: any): Scaffold;
}
export { ExampleWidget };
