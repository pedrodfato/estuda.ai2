import SingupForm from "../components/singupform";

export default function FieldInput() {
  return (
    <section className="flex flex-col items-center justify-center h-screen dark">
    <div className="w-full max-w-md rounded-lg shadow-md p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Login!</h1>
      <SingupForm />
      <p className="mt-4 text-gray-600">Não tem uma conta? <a className="hover:text-blue-500 hover:underline"  href="#">Cadastre-se</a></p>
    </div>
    </section>
  )
}
