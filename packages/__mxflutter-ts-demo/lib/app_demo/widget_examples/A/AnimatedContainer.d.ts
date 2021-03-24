import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleAnimatedContainerState;
}
declare class PageExampleAnimatedContainerState extends MXJSWidgetState {
    private selected;
    constructor();
    build(context: any): Scaffold;
}
export { ExampleWidget };
