import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="py-2 px-4 flex items-center justify-between">
        <Image src="/assets/logo.svg" alt="Logo" width={140} height={140} />
        <Link href="/dashboard">
          <button className="bg-primary_purple px-6 py-3 border-2 transition-all font-semibold text-white rounded-[10pc] hover:bg-white hover:border-primary_purple hover:text-primary_purple">
            Dashboard
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
