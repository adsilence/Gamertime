import { getUser } from "../MockBackend";
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
    <nav>
      <div id="nav-contents">
        <h1>gamertime</h1>

        <div id="nav-right-side">
          <button id="new-post-button">New post</button>
          <Avatar />
        </div>
      </div>
    </nav>
  );
}

function Avatar() {
  return (
    <img
      class="avatar"
      src="https://avatars.githubusercontent.com/u/20482179?v=4"
    />
  );
}
