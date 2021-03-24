import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleTextField;
}
declare class PageExampleTextField extends MXJSWidgetState {
    private _textFieldValue;
    constructor();
    build(context: any): Scaffold;
}
export { ExampleWidget };
