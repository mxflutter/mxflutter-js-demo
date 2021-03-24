import { MXJSStatefulWidget, State } from '@mxflutter/mxflutter';
import { Container, Expanded } from '@mxflutter/mxflutter-widgets/material';
declare class TodoItem extends MXJSStatefulWidget {
    item: any;
    callback: any;
    deleteCallback: any;
    editCallback: any;
    constructor({ item, callback, deleteCallback, editCallback }: {
        item: any;
        callback: any;
        deleteCallback: any;
        editCallback: any;
    });
    createState(): TodoItemState;
}
declare class TodoItemState extends State {
    editTextValue: any;
    isEdit: any;
    widget: TodoItem;
    constructor();
    build(context: any): Container;
    buildNameWidget(textColor: any): Expanded;
}
export { TodoItem };
