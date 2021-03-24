import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class PageExampleAnimatedPositioned extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleAnimatedPositionedState;
}
declare class PageExampleAnimatedPositionedState extends MXJSWidgetState {
    top: any;
    constructor();
    changeOpacity(): void;
    build(context: any): Scaffold;
}
export { PageExampleAnimatedPositioned, };
