import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class PageExampleAnimatedOpacity extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleAnimatedOpacityState;
}
declare class PageExampleAnimatedOpacityState extends MXJSWidgetState {
    opacityLevel: any;
    constructor();
    changeOpacity(): void;
    build(context: any): Scaffold;
}
export { PageExampleAnimatedOpacity, };
