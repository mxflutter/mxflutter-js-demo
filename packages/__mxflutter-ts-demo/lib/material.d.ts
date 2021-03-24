import { StatefulWidget, State } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class JSMaterialPage extends StatefulWidget {
    constructor();
    createState(): JSMaterialPageState;
}
declare class JSMaterialPageState extends State {
    build(context: any): Scaffold;
    navigatorPush(jsWidget: any): void;
}
export { JSMaterialPage };
