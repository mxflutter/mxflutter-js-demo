import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Card, Column } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleCard;
}
declare class PageExampleCard extends MXJSWidgetState {
    constructor();
    _cardContent(title: any, description: any, showButtonBar?: boolean): Column;
    _cardTappable(): Card;
    build(context: any): Scaffold;
}
export { ExampleWidget };
