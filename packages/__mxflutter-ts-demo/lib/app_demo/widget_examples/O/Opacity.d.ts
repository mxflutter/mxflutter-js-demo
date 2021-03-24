import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Container, Opacity } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleOpacity;
}
declare class PageExampleOpacity extends MXJSWidgetState {
    private _colorTable;
    constructor();
    _buildContainer(colorName: any, index: any): Container;
    _buildOpacityContainer(colorName: any, index: any, opacity: any): Opacity;
    build(context: any): Scaffold;
}
export { ExampleWidget };
