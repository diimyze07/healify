import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { signIn } from "@/auth";

import NavButton from "./nav-button";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <NavButton color="dark">
        <ArrowRightCircleIcon className="w-4 h-4" />
        Sign in
      </NavButton>
    </form>
  );
}
