import logo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className="flex w-full justify-center bg-gray-700 pt-[4.5rem] pb-[5rem]">
      <img className="h-[3rem] w-[7.875rem]" src={logo} alt="Logotipo" />
    </header>
  );
}
