import RegisterForm from "@/components/auth/RegisterForm";

export default async function Page() {
    return (
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Регистрация</h1>
        <RegisterForm />
      </div>
    );
}
