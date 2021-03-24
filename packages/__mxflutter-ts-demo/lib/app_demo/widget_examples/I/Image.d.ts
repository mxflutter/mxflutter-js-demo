import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Container, ListTile } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleImage;
}
declare class PageExampleImage extends MXJSWidgetState {
    constructor();
    genImageUI(boxFitName: any): (ListTile | Container)[];
    build(): Scaffold;
}
export { ExampleWidget };
