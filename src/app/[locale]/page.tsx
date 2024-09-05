import { allSettled, fork, serialize } from "effector";

import { HydrateClient } from "~/trpc/server";
import { EffectorNext } from "@effector/next";
import { pageStarted } from "~/app/model";
import { Hello } from "../_components/hello";
import { getI18n, getScopedI18n } from "locales/server";

export default async function Home() {
	const t = await getI18n();
	const scopedT = await getScopedI18n("hello");

	const scope = fork();
	await allSettled(pageStarted, {
		scope,
		params: { text: t("welcome", { name: "John" }) },
	});
	const values = serialize(scope);

	return (
		<HydrateClient>
			<EffectorNext values={values}>
				<main className="w-full h-full">
					<p>{t("hello")}</p>
					<p>{t("hello.world")}</p>
					<p>{scopedT("world")}</p>
					<p>{t("welcome", { name: "John" })}</p>
					<p>{t("welcome", { name: <strong>John</strong> })}</p>
					<Hello />
				</main>
			</EffectorNext>
		</HydrateClient>
	);
}
