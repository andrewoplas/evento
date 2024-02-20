import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => (
  <Link href="/">
    <Image
      width={53}
      height={12}
      src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
      alt="site logo"
    />
  </Link>
);

export default Logo;
