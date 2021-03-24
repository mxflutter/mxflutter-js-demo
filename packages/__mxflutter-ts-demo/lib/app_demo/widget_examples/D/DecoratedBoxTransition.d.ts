import { MXTickerMixinWidget, MXTickerMixinWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXTickerMixinWidget {
    constructor();
    createState(): PageExampleDecoratedBoxTransition;
}
declare class PageExampleDecoratedBoxTransition extends MXTickerMixinWidgetState {
    private _controller;
    private _shadow;
    private _tween;
    private _animation;
    constructor();
    build(): Scaffold;
}
export { ExampleWidget };
