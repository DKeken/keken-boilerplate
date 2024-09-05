"use client";

import { useDisplayType } from "~/hooks/use-display-type";
import MobileLayout from "./mobile-layout";

export function LayoutSelector({ children }: React.PropsWithChildren) {
	const activeDisplay = useDisplayType();

	if (activeDisplay === "mobile" || activeDisplay === "tablet") {
		return <MobileLayout>{children}</MobileLayout>;
	}

	if (activeDisplay === "laptop" || activeDisplay === "desktop") {
		return (
			<div className="font-semibold h-full w-full flex justify-center items-center">
				No desktop allowed :(
			</div>
		);
	}
}
