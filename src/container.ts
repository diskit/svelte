import { container } from "tsyringe";
import { Gateway, TaskGateway } from "./gateway/gateway";
import { Presenter, TaskPresenter } from "./presenter/presenter";
import { TaskViewState, ViewState } from "./view/state";
import { Storage, TaskStorage } from './driver/storage';

// register singleton
container.register("ViewStateFactory", { useFactory: (_) => new ViewState()});
container.registerSingleton("ViewState", "ViewStateFactory");

// register value
container.register("Storage", {useValue: new Storage()});
container.register("taskStorage", {useValue: new TaskStorage()});

container.register("inputPort", { useClass: Gateway } );
container.register("outputPort", { useClass: Presenter });

container.register("taskPort", { useClass: TaskGateway });
container.register("taskOutputPort", { useClass: TaskPresenter })

container.register("taskViewState", { useValue: new TaskViewState() });