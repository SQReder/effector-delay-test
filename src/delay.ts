import {createEffect, sample, Unit} from "effector/effector.cjs";

export function delay<P>(clock: Unit<P>, ms: number) {
    const fx = createEffect((params: P) => {
        return new Promise<P>((resolve) => {
            setTimeout(() => resolve(params), ms)
        })
    })

    sample({
        clock,
        target: fx
    })

    return fx.doneData
}
