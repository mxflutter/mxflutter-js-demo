import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleRaisedButton;
}
declare class PageExampleRaisedButton extends MXJSWidgetState {
    private _text;
    constructor();
    build(context: any): Scaffold;
}
export { ExampleWidget };
