import SignInButton from "./sign-in-button";
import NavButton from "./nav-button";
import SearchBox from "./search-box";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Nav({ isSignedIn }: { isSignedIn: boolean }) {
  return (
    <nav className="py-2 relative ml-auto mr-auto px-9 max-w-[1800px]">
      <ul className="flex items-center gap-3">
        <SearchBox />
        <li className="mr-auto">
          <a href="/" className="tracking-tight text-[1.75rem] font-extrabold">
            healify
          </a>
        </li>
        <li>
          <NavButton color="light">
            {/* <ChatBubbleLeftRightIcon className="w-4 h-4" /> */}
            Help
          </NavButton>
        </li>
        <li>
          {isSignedIn ? (
            <NavButton color="dark">
              <UserCircleIcon className="w-4 h-4" />
              Account
            </NavButton>
          ) : (
            <SignInButton />
          )}
        </li>
      </ul>
    </nav>
  );
}
