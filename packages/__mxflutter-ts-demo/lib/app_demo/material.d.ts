import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class JSMaterialPage extends MXJSStatefulWidget {
    constructor();
    createState(): JSMaterialPageState;
}
declare class JSMaterialPageState extends MXJSWidgetState {
    build(context: any): Scaffold;
    navigatorPush(jsWidget: any): void;
}
export { JSMaterialPage };
