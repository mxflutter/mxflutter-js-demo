import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class PageExampleAnimatedContainer extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleAnimatedContainerState;
}
declare class PageExampleAnimatedContainerState extends MXJSWidgetState {
    selected: any;
    constructor();
    build(context: any): Scaffold;
}
export { PageExampleAnimatedContainer, };
