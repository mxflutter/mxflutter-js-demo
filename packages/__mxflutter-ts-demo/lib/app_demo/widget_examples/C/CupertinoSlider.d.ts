import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleCupertinoSlider;
}
declare class PageExampleCupertinoSlider extends MXJSWidgetState {
    private currentValue;
    private fontSize;
    private coloredValue;
    private fontSizeMap;
    constructor();
    build(context: any): Scaffold;
}
export { ExampleWidget };
