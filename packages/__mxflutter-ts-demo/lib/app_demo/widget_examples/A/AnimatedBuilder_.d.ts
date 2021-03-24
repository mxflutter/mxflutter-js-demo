import { MXTickerMixinWidget, MXTickerMixinWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXTickerMixinWidget {
    constructor();
    createState(): PageExampleAnimatedBuilderV2State;
}
declare class PageExampleAnimatedBuilderV2State extends MXTickerMixinWidgetState {
    private controller;
    constructor();
    beginAnimation(): void;
    build(context: any): Scaffold;
}
export { ExampleWidget };
