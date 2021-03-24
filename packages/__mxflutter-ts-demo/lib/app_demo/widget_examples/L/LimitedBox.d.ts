import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleFloatingActionButton;
}
declare class PageExampleFloatingActionButton extends MXJSWidgetState {
    constructor();
    _colorfulContainers(): any[];
    build(context: any): Scaffold;
}
export { ExampleWidget };
