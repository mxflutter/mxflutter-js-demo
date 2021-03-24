import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleTabbar;
}
declare class PageExampleTabbar extends MXJSWidgetState {
    private _currentStep;
    constructor();
    build(context: any): Scaffold;
}
export { ExampleWidget };
