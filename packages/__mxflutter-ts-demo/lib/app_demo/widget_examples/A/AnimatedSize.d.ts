import { MXTickerMixinWidget, MXTickerMixinWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXTickerMixinWidget {
    constructor();
    createState(): PageExampleAnimatedSizeState;
}
declare class PageExampleAnimatedSizeState extends MXTickerMixinWidgetState {
    private _left;
    private _top;
    private _curve;
    constructor();
    _changeCurve(): void;
    _changeButton(): void;
    build(): Scaffold;
}
export { ExampleWidget };
