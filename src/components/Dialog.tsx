"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import React from "react";

interface DialogProps {
	buttonText: string;
	dialogTitle: string;
	dialogText: string;
}

const TestDialog = ({ buttonText, dialogTitle, dialogText }: DialogProps) => (
	<Dialog.Root>
		<Dialog.Trigger asChild>
			<button>{buttonText}</button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay />
			<Dialog.Content>
				<Dialog.Title>{dialogTitle}</Dialog.Title>
				<Dialog.Description>{dialogText}</Dialog.Description>
				<div>
					<Dialog.Close asChild>
						<button>Close</button>
					</Dialog.Close>
				</div>
				<Dialog.Close asChild>
					<button aria-label="Close">
						<Cross2Icon />
					</button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
);

export default TestDialog;
