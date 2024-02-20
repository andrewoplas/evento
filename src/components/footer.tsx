import Link from "next/link";

const routes = [
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
  {
    path: "/terms",
    name: "Terms & Conditions",
  },
];

const Footer = () => {
  return (
    <footer className="mt-auto justify-between flex items-center border-t h-16 border-white/10 padding-x text-white/25 ">
      <p className="text-sm">&copy; 2024 ByteGrad. All rights reserved.</p>

      <ul className="flex gap-6 text-sm">
        {routes.map((route) => (
          <li className="hover:text-white transition" key={route.name}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
