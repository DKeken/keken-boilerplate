"use client";

export default function MobileLayout({ children }: React.PropsWithChildren) {
	return (
		<div className="flex flex-col h-screen bg-background text-foreground">
			{children}
		</div>
	);
}
