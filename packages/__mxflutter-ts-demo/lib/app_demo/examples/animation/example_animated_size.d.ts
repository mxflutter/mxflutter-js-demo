import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class PageExampleAnimatedSize extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleAnimatedSizeState;
}
declare class PageExampleAnimatedSizeState extends MXJSWidgetState {
    size: any;
    constructor();
    changeOpacity(): void;
    build(context: any): Scaffold;
}
export { PageExampleAnimatedSize, };
