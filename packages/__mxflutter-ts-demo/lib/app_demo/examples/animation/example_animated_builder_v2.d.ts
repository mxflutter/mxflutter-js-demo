import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class PageExampleAnimatedBuilderV2 extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleAnimatedBuilderV2State;
}
declare class PageExampleAnimatedBuilderV2State extends MXJSWidgetState {
    count: any;
    _controller: any;
    constructor();
    beginAnimation(): void;
    build(context: any): Scaffold;
}
export { PageExampleAnimatedBuilderV2, };
