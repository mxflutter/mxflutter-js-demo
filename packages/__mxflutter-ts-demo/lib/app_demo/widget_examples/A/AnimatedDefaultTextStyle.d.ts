import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageAnimatedDefaultTextStyleState;
}
declare class PageAnimatedDefaultTextStyleState extends MXJSWidgetState {
    private textSize;
    private color;
    constructor();
    build(): Scaffold;
}
export { ExampleWidget };
