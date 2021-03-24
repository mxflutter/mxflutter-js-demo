import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, TextStyle } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleSwitchState;
}
declare class PageExampleSwitchState extends MXJSWidgetState {
    private _selected1;
    private _selected2;
    constructor();
    _changeState1(): void;
    _changeState2(): void;
    _getTextStyle(): TextStyle;
    build(context: any): Scaffold;
}
export { ExampleWidget };
