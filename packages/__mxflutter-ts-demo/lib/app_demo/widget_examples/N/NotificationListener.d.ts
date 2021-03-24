import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleNotificationListener;
}
declare class PageExampleNotificationListener extends MXJSWidgetState {
    constructor();
    build(context: any): Scaffold;
}
export { ExampleWidget };
