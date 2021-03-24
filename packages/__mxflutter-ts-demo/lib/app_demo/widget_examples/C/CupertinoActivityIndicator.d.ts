import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Container } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleCupertinoActivityIndicator;
}
declare class PageExampleCupertinoActivityIndicator extends MXJSWidgetState {
    private settingTable;
    constructor();
    _singleOption(selectedText: any, unselectedText: any, varName: any): Container;
    build(context: any): Scaffold;
}
export { ExampleWidget };
