import {allSettled, createEvent, Effect, Event, fork, Unit} from "effector";
import {delay} from "./delay";

function debug(...units: (Event<any>)[]) {
    for (const unit of units) {
        unit.watch(x => console.log(unit.sid, unit.compositeName, x))
    }
}

jest.setTimeout(500)

describe('test', () => {
    beforeAll(() => {
        jest.useFakeTimers()
    });

    it('should do', async () => {
        const scope = fork()


        const trigger = createEvent<{foo: string}>();

        const delayed = delay(trigger, 1000)

        debug(trigger, delayed)

        const tickSpy = jest.fn();

        delayed.watch(tickSpy)

        await allSettled(trigger, {scope, params: {foo: "bar"}})

        jest.runAllTimers()

        expect(tickSpy).toHaveBeenCalledWith({foo: "bar"})
    });
});
