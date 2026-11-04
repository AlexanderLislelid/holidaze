import LoginForm from "@/components/forms/LoginForm";
import BreadCrumb from "@/components/navigation/BreadCrumb";

export default function Login() {
  return (
    <main>
      <BreadCrumb href={"/"} name={"home"} />
      <LoginForm />
    </main>
  );
}
