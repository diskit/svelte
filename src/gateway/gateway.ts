import { Count } from "../domain/domain";
import type { InputPort } from "../usecase/port";
import { inject, singleton } from "tsyringe";


@singleton()
export class Gateway implements InputPort {

  constructor(@inject("Storage") readonly storage: Storage) {}

  find(): Count {
    return new Count(this.storage.get());
  }

  store(count: Count) {
    this.storage.save(count.value);
  }
}
