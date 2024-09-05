import { createEffect } from "effector";
import { myAction } from "./action";

export const fetchHelloFx = createEffect<
	{ text: string },
	{
		greeting: string;
	}
>();

fetchHelloFx.use(myAction);
