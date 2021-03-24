import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Positioned, Color, Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleTabbar;
}
declare class PageExampleTabbar extends MXJSWidgetState {
    constructor();
    _randomColor(): Color;
    _positionedBlock({ left, top, right, bottom, height, width, br }: {
        left?: any;
        top?: any;
        right?: any;
        bottom?: any;
        height?: any;
        width?: any;
        br?: boolean;
    }): Positioned;
    build(context: any): Scaffold;
}
export { ExampleWidget };
