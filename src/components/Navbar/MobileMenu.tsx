import { useContext } from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";
import cn from "@/utils/cn";

type Props = {
  dropdownDirection?: "bottom" | "top";
  isNotFound?: boolean;
};

const dropdownDirectionclassName = {
  bottom: "dropdown-bottom",
  top: "dropdown-top",
};

const MobileMenu = ({ dropdownDirection = "bottom" }: Props) => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className={`dropdown ${dropdownDirectionclassName[dropdownDirection]} dropdown-end`}>
      <label
        htmlFor="mobile-menu-dropdown"
        tabIndex={0}
        className="btn btn-square btn-ghost"
        onClick={() => dispatch({ type: "toggle_mobile_menu" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-8 h-8 stroke-current"
          // style={{ color }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </label>
      <ul
        id="mobile-menu-dropdown"
        tabIndex={0}
        className={cn("dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-52", { hidden: !state.showMobileMenu })}
        // ref={dropdownMenuRef}
      >
        <li>
          <button
            className="hover:text-secondary"
            onClick={() => {
              dispatch({ type: "toggle_catalogue" });
              dispatch({ type: "toggle_mobile_menu" });
            }}
          >
            Каталог
          </button>
        </li>

        {/* <li>
          <a
            className="hover:text-secondary"
            onClick={() => dispatch({ type: "toggle_mobile_menu" })}
            href="https://vk.com/topic-221413404_49184185"
            target="_blank"
            rel="noopener noreferrer"
          >
            Отзывы
          </a>
        </li> */}

        <li>
          <a
            className="hover:text-secondary"
            onClick={() => dispatch({ type: "toggle_mobile_menu" })}
            href="https://oplata.info/info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Мои покупки
          </a>
        </li>
        {/* {loc.url.pathname !== "/" && !isNotFound && (
        <li>
          <button className="hover:text-secondary" onClick$={(ev) => hideMenu(ev, "contacts")}>
            Контакты
          </button>
        </li>
      )} */}
        <li>
          <ThemeSwitcher mobile />
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;

// export const MobileMenu = component$(({ scrollInView, color, showCatalogue, dropdownDirection = "bottom", isNotFound }: Props) => {
//   const loc = useLocation();

//   const dropdownRef = useSignal<HTMLElement>();
//   const dropdownMenuRef = useSignal<HTMLElement>();
//   const showMenu = useSignal(false);

//   useOnDocument(
//     "click",
//     $((event) => {
//       const targetElem = event.target as HTMLElement;

//       if (dropdownRef.value && dropdownMenuRef.value) {
//         if (dropdownRef.value.contains(targetElem)) {
//           showMenu.value = !showMenu.value;
//         } else {
//           if (dropdownMenuRef.value.contains(targetElem)) {
//             return;
//           }
//           showMenu.value = false;
//         }
//       }
//     })
//   );

//   const hideMenu = $((ev: QwikMouseEvent<HTMLButtonElement, MouseEvent>, id?: string) => {
//     const target = ev.target as HTMLButtonElement;
//     target.blur();
//     if (id) {
//       scrollInView(id);
//     }

//     showMenu.value = false;
//   });

//   return (

//   );
// });
