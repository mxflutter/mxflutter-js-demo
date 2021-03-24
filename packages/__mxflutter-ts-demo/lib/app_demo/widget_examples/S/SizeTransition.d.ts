import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleSizeTransition;
}
declare class PageExampleSizeTransition extends MXJSWidgetState {
    constructor();
    build(): Scaffold;
}
export { ExampleWidget };
