import RegisterForm from "@/components/forms/RegisterForm";
import BreadCrumb from "@/components/navigation/BreadCrumb";
import Image from "next/image";

export default function Register() {
  return (
    <main>
      <BreadCrumb href={"/"} name={"home"} />
      <div className="flex flex-col justify-center md:mx-6 md:flex-row">
        <Image
          src="/img/login-register.jpg"
          width={550}
          height={550}
          alt="an idyllic beach"
          sizes="100vw"
          className="h-56 w-full object-cover sm:h-72 md:h-auto md:w-1/2 md:rounded-l-xl"
        />
        <RegisterForm />
      </div>
    </main>
  );
}
