import { Input } from "../reusable/Input";
import { Page } from "../reusable/Page";

export function Login() {
  return (
    <Page>
      <div>login</div>

      <form action="/submit-login" method="post">
        <Input label="Username" id="username" name="username" />
        <Input label="password" id="password" name="password" type="password" />
        <button>Login</button>
      </form>
    </Page>
  );
}
