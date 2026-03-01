import type { Component } from "solid-js";

import {
  TextInput,
  TextInputLabel,
  TextInputControl,
  TextInputInput,
  TextInputArea,
  TextInputDescription,
  TextInputError,
} from "@manafishrov/ui/text-input";
import { H1, Lead } from "@manafishrov/ui/typography";
import { createFileRoute } from "@tanstack/solid-router";
import { createSignal } from "solid-js";

import * as m from "@/paraglide/messages";

const TextInputDocPage: Component = () => {
  const [email, setEmail] = createSignal("");

  const isEmailInvalid = () => {
    const val = email();
    if (val.length === 0) return false;
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  return (
    <div class="space-y-8">
      <div class="space-y-2">
        <H1>Text Input</H1>
        <Lead>{m.docs_component_text_input_description()}</Lead>
      </div>

      <div class="gap-8 flex flex-col">
        <TextInput class="max-w-xs" invalid={isEmailInvalid()}>
          <TextInputLabel>Email</TextInputLabel>
          <TextInputControl>
            <TextInputInput
              type="email"
              placeholder="Enter your email"
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
            />
          </TextInputControl>
          <TextInputError>Please enter a valid email address.</TextInputError>
          <TextInputDescription>
            We'll never share your email with anyone.
          </TextInputDescription>
        </TextInput>
        <TextInput class="max-w-xs">
          <TextInputLabel>Message</TextInputLabel>
          <TextInputControl>
            <TextInputArea placeholder="Type your message..." />
          </TextInputControl>
          <TextInputError />
          <TextInputDescription>
            Your message will be sent securely.
          </TextInputDescription>
        </TextInput>
      </div>
    </div>
  );
};
export const Route = createFileRoute("/components/text-input")({
  component: TextInputDocPage,
});
