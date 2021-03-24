import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleAnimatedPositionedState;
}
declare class PageExampleAnimatedPositionedState extends MXJSWidgetState {
    private _selected;
    private _left;
    private _top;
    private _onShow;
    private _curve;
    constructor();
    _changeSwitch(): void;
    _changeButton(): void;
    _changeCurve(): void;
    build(): Scaffold;
}
export { ExampleWidget };
