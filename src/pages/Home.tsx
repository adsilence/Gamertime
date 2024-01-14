import { getUser } from "../MockBackend";
import { HStack, VStack } from "../reusable/Layout";
import { Page } from "../reusable/Page";
import { GuestHome } from "./GuestHome";

export function Home() {
  if (!getUser()) return <GuestHome />;

  return (
    <Page>
      <nav class="py-4 px-8 mb-8 border-b border-neutral">
        <HStack cn="mx-auto max-w-screen-md justify-between">
          <h1 class="text-3xl font-bold">gamertime</h1>

          <img
            class="rounded-full size-8 ml-4"
            src="https://avatars.githubusercontent.com/u/20482179?v=4"
          />
        </HStack>
      </nav>

      <VStack cn="max-w-screen-md mx-auto items-stretch">
        <HStack align="start" cn="mb-8">
          <img
            class="rounded-full size-12 mr-4"
            src="https://avatars.githubusercontent.com/u/20482179?v=4"
          />
          <VStack align="end" cn="grow">
            <textarea
              rows="5"
              id="new-post"
              name="newPost"
              placeholder="Share something"
              class="textarea textarea-bordered w-full"
            />
            <button class="btn mt-4">Post</button>
          </VStack>
        </HStack>

        <HStack align="end" cn="mb-8">
          <h2 class="font-bold text-3xl mr-4">Wednesday</h2>

          <h2>January 17, 2023</h2>
        </HStack>

        <HStack align="start" cn="mb-8">
          <img
            class="rounded-full size-12 mr-4"
            src="https://avatars.githubusercontent.com/u/20482179?v=4"
          />
          <VStack align="stretch" cn="grow">
            <div class="bg-neutral p-4 rounded-lg">
              hi this is my first post kind of nervous please don't judge ok
              does the text wrap? hopefully lol ok guess not need to keep typing
              wow I love frontend web development it is literally so much fun
              and so fast its like dominion
            </div>

            <HStack align="start" cn="my-4">
              <img
                class="rounded-full size-8"
                src="https://avatars.githubusercontent.com/u/20482179?v=4"
              />

              <div class="px-4 py-1 rounded-lg">
                literally replying to myself OMEGALUL
              </div>

              <div class="btn btn-sm btn-ghost ml-auto">Reply</div>
            </HStack>

            <div class="btn btn-sm self-start">Comment</div>
          </VStack>
        </HStack>

        <VStack cn="border-b border-primary mb-8">
          <div class="text-primary -mb-3 bg-base-100 px-2">
            You're all caught up!
          </div>
        </VStack>
      </VStack>
    </Page>
  );
}
