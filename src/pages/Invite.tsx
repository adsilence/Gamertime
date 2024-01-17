import { Input } from "../reusable/Input";
import { VStack } from "../reusable/Layout";
import { Page } from "../reusable/Page";

export function Invite() {
  return (
    <Page>
      <VStack cn="items-center pt-8">
        <VStack cn="w-min">
          <h1 class="text-3xl font-bold mb-8">Gamertime</h1>

          <p class="mb-4">Invite a friend to Gamertime.</p>

          <p class="mb-4">
            They'll automatically be your friend when they join.
          </p>

          <form action="/send-invite" method="post" class="flex flex-col">
            <Input label="Email" name="email" />
            <button class="btn btn-primary self-end mt-8">Invite</button>
          </form>
        </VStack>
      </VStack>
    </Page>
  );
}
