import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleAnimatedCrossFadeState;
}
declare class PageExampleAnimatedCrossFadeState extends MXJSWidgetState {
    private selected;
    constructor();
    build(context: any): Scaffold;
}
export { ExampleWidget };
