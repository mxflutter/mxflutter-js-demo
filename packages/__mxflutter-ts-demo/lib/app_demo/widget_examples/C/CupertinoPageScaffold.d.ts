import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { ListTile } from '@mxflutter/mxflutter-widgets/material';
import { CupertinoPageScaffold } from '@mxflutter/mxflutter-widgets/cupertino';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleCupertinoPageScaffole;
}
declare class PageExampleCupertinoPageScaffole extends MXJSWidgetState {
    private _backgroundColor;
    constructor();
    _changeColorListTile(text: any, color: any): ListTile;
    build(context: any): CupertinoPageScaffold;
}
export { ExampleWidget };
