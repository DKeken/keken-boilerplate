import { sample, createStore } from "effector";
import { pageStarted } from "~/app/model";
import { fetchHelloFx } from "../api";

sample({
	clock: pageStarted,
	target: fetchHelloFx,
});

export const $helloData = createStore<{ greeting: string } | null>(null);

sample({
	clock: fetchHelloFx.doneData,
	target: $helloData,
});
