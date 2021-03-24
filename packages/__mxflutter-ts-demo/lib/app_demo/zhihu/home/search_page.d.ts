import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { MaterialApp, Container } from '@mxflutter/mxflutter-widgets/material';
declare class SearchPage extends MXJSStatefulWidget {
    constructor();
    createState(): SearchPageState;
}
declare class SearchPageState extends MXJSWidgetState {
    constructor();
    searchInput(context: any): Container;
    build(context: any): MaterialApp;
}
export { SearchPage };
