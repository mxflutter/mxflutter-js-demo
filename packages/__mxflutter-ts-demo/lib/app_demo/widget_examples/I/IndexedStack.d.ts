import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Center, IconButton } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleIndexedStack;
}
declare class PageExampleIndexedStack extends MXJSWidgetState {
    private _index;
    constructor();
    genIndexedStack(containerColor: any, iconName: any, index: any): Center;
    genIndexedIcon(iconName: any, index: any): IconButton;
    build(): Scaffold;
}
export { ExampleWidget };
