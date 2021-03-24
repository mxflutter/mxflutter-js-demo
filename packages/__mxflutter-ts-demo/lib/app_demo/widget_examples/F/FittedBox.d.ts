import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Image } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleFittedBox;
}
declare class PageExampleFittedBox extends MXJSWidgetState {
    constructor();
    _picture(): Image;
    build(context: any): Scaffold;
}
export { ExampleWidget };
