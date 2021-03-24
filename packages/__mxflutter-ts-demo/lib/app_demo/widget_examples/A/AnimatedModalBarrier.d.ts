import { MXTickerMixinWidget, MXTickerMixinWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXTickerMixinWidget {
    constructor();
    createState(): PageExampleAnimatedModalBarrier;
}
declare class PageExampleAnimatedModalBarrier extends MXTickerMixinWidgetState {
    private _controller;
    private _tween;
    private _animation;
    private _animationEnd;
    constructor();
    build(context: any): Scaffold;
}
export { ExampleWidget };
