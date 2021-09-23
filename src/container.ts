import { container } from "tsyringe";
import { Gateway, Presenter, ViewState, Storage } from "./lib/counter";

// register singleton
container.register("ViewStateFactory", { useFactory: (_) => new ViewState()});
container.registerSingleton("ViewState", "ViewStateFactory");

// register value
container.register("Storage", {useValue: new Storage()});

container.register("inputPort", { useClass: Gateway } );
container.register("outputPort", { useClass: Presenter });