import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Container } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleTransform;
}
declare class PageExampleTransform extends MXJSWidgetState {
    constructor();
    _dividerContainer(value?: number): Container;
    _defaultContainer(text: any): Container;
    build(context: any): Scaffold;
}
export { ExampleWidget };
