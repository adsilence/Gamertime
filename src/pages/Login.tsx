import { Input } from "../reusable/Input";
import { VStack } from "../reusable/Layout";
import { Page } from "../reusable/Page";

export function Login() {
  return (
    <Page>
      <VStack cn="items-center gap-8 mt-8">
        <VStack cn="gap-8">
          <h1 class="text-3xl font-bold">gamertime</h1>

          <form
            class="flex flex-col items-center gap-2"
            action="/submit-login"
            method="post"
          >
            <Input label="Username" id="username" name="username" />

            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
            />

            <button class="btn btn-primary self-end mt-4">Login</button>
          </form>
        </VStack>
      </VStack>
    </Page>
  );
}
