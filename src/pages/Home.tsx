import { getUser } from "../MockBackend";
import { HStack } from "../reusable/Layout";
import { Page } from "../reusable/Page";
import { GuestHome } from "./GuestHome";

export function Home() {
  if (!getUser()) return <GuestHome />;

  return (
    <Page>
      <TopBar />
    </Page>
  );
}

function TopBar() {
  return (
    <nav class="bg-gray-200 py-4 px-8">
      <HStack cn="mx-auto max-w-screen-lg justify-between">
        <h1 class="text-3xl font-bold">gamertime</h1>

        <img
          class="rounded-full size-12 ml-4"
          src="https://avatars.githubusercontent.com/u/20482179?v=4"
        />
      </HStack>
    </nav>
  );
}
