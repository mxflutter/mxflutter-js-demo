import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class PageExampleAnimatedPhysicalModel extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleAnimatedPhysicalModelState;
}
declare class PageExampleAnimatedPhysicalModelState extends MXJSWidgetState {
    elevation: any;
    constructor();
    changeOpacity(): void;
    build(context: any): Scaffold;
}
export { PageExampleAnimatedPhysicalModel, };
