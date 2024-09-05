import { useState } from "react";
import { useMount } from "@siberiacancode/reactuse";

export function useDisplayType() {
	const [displayType, setDisplayType] = useState<string | null>(null);

	useMount(() => {
		function handleResize() {
			if (window?.innerWidth <= 768) {
				setDisplayType("mobile");
			} else if (window?.innerWidth <= 1024) {
				setDisplayType("tablet");
			} else if (window?.innerWidth <= 1440) {
				setDisplayType("laptop");
			} else {
				setDisplayType("desktop");
			}
		}

		handleResize();

		window?.addEventListener("resize", handleResize);

		return () => {
			window?.removeEventListener("resize", handleResize);
		};
	});

	return displayType;
}
