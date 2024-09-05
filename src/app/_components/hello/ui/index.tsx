"use client";

import { useUnit } from "effector-react";
import { $helloData } from "../model";

export function Hello() {
	const helloData = useUnit($helloData);

	return <div className="w-full max-w-xs">{helloData?.greeting}</div>;
}
