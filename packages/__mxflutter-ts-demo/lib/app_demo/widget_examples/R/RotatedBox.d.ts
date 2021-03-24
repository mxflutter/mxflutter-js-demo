import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleRotatedBox;
}
declare class PageExampleRotatedBox extends MXJSWidgetState {
    constructor();
    _content(): any[];
    build(context: any): Scaffold;
}
export { ExampleWidget };
