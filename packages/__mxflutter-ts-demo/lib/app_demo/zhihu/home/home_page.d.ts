import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { Container, DefaultTabController } from '@mxflutter/mxflutter-widgets/material';
declare class HomePage extends MXJSStatefulWidget {
    constructor();
    createState(): HomePageState;
}
declare class HomePageState extends MXJSWidgetState {
    constructor();
    barSearch(context: any): Container;
    build(context: any): DefaultTabController;
}
export { HomePage };
