import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleCupertinoSwitch;
}
declare class PageExampleCupertinoSwitch extends MXJSWidgetState {
    private choose;
    constructor();
    _onChanged(index: any): any;
    build(context: any): Scaffold;
}
export { ExampleWidget };
