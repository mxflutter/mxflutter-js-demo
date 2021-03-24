import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Baseline, Center, Container } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleBaseLine;
}
declare class PageExampleBaseLine extends MXJSWidgetState {
    constructor();
    _text(text: any, size: any): Center;
    _baselineWithText(text: any, size: any): Baseline;
    _divider(): Container;
    build(context: any): Scaffold;
}
export { ExampleWidget };
