import { MXJSStatelessWidget } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class WidgetExamplesPage extends MXJSStatelessWidget {
    private widgetsArray;
    private indexArray;
    private scrollController;
    constructor();
    calcIndexArray(widgetsArray: any): unknown[];
    build(context: any): Scaffold;
    onIndexTap(index: any): void;
}
export { WidgetExamplesPage };
