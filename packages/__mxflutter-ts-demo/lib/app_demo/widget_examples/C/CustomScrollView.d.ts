import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleCustomScrollView;
}
declare class PageExampleCustomScrollView extends MXJSWidgetState {
    constructor();
    build(): Scaffold;
}
export { ExampleWidget };
