import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Color, Padding } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleRefreshIndicator;
}
declare class PageExampleRefreshIndicator extends MXJSWidgetState {
    private _newsList;
    constructor();
    _randomColor(deep: any): Color;
    _randomNews(index: any): Padding;
    _getNews(): any[];
    build(context: any): Scaffold;
}
export { ExampleWidget };
