import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExamplePositionedTransition;
}
declare class PageExamplePositionedTransition extends MXJSWidgetState {
    private _AnimationEnd;
    private _controller;
    private _tween;
    private _normalAnimation;
    private _curvedAnimation;
    constructor();
    build(context: any): Scaffold;
}
export { ExampleWidget };
