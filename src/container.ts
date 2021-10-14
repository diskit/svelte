import { container } from "tsyringe";
import { Gateway } from "./gateway/gateway";
import { Presenter } from "./presenter/presenter";
import { ViewState } from "./view/state";
import { Storage } from './driver/storage';

// register singleton
container.register("ViewStateFactory", { useFactory: (_) => new ViewState()});
container.registerSingleton("ViewState", "ViewStateFactory");

// register value
container.register("Storage", {useValue: new Storage()});

container.register("inputPort", { useClass: Gateway } );
container.register("outputPort", { useClass: Presenter });