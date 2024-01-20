import { Input } from "../reusable/Input";
import { Page } from "../reusable/Page";

export function Signup() {
  return (
    <Page>
      <div>signup</div>

      <form action="/submit-signup" method="post">
        <Input label="Email" id="email" name="email" />
        <Input label="Display name" id="display-name" name="displayName" />
        <Input label="password" id="password" name="password" type="password" />
        <button>Sign up</button>
      </form>
    </Page>
  );
}
