import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleAbsorbPointer;
}
declare class PageExampleAbsorbPointer extends MXJSWidgetState {
    private _absorbing;
    private _flatButtonText;
    private _rasiedButtonText;
    private _outlineButtonText;
    constructor();
    build(context: any): Scaffold;
}
export { ExampleWidget };
