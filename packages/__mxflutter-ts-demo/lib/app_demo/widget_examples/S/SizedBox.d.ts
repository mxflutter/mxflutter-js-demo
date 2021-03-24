import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleSizedBox;
}
declare class PageExampleSizedBox extends MXJSWidgetState {
    constructor();
    build(): Scaffold;
}
export { ExampleWidget };
