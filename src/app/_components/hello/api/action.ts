"use server";

import { api } from "~/trpc/server";

export const myAction = async (params: { text: string }) => {
	console.log("fetchHelloFx called with", params);

	const request = await api.post.hello({ text: params.text });

	return request;
};
