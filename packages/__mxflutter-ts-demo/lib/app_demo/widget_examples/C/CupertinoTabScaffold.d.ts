import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { CupertinoTabScaffold } from '@mxflutter/mxflutter-widgets/cupertino';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleCupertinoTabScaffold;
}
declare class PageExampleCupertinoTabScaffold extends MXJSWidgetState {
    constructor();
    build(context: any): CupertinoTabScaffold;
}
export { ExampleWidget };
