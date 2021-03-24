import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, TableRow } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleTable;
}
declare class PageExampleTable extends MXJSWidgetState {
    constructor();
    _randomName(): string;
    _randomPerson(index: any): TableRow;
    _createTable(): any[];
    build(context: any): Scaffold;
}
export { ExampleWidget };
