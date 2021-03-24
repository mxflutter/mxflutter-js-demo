import { MXJSStatelessWidget } from '@mxflutter/mxflutter';
import { Scaffold, Container } from '@mxflutter/mxflutter-widgets/material';
declare class PageExampleColumn extends MXJSStatelessWidget {
    constructor();
    genSevenContainers(): Container[];
    genThreeContainers(): Container[];
    build(context: any): Scaffold;
}
export { PageExampleColumn, };
