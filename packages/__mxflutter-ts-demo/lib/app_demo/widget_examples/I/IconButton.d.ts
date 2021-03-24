import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleIconButton;
}
declare class PageExampleIconButton extends MXJSWidgetState {
    constructor();
    build(context: any): Scaffold;
}
export { ExampleWidget };
