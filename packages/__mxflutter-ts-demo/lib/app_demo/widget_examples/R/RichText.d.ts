import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleRichText;
}
declare class PageExampleRichText extends MXJSWidgetState {
    private _defaultTextStyle;
    constructor();
    build(context: any): Scaffold;
}
export { ExampleWidget };
