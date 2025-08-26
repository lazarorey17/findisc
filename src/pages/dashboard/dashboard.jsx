import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Bienvenido 🚀</h1>
      <p className="text-gray-600 mb-8">
        Elige una opción para continuar
      </p>

      <div className="flex flex-col space-y-4">
        <Link
          to="/login"
          className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
        >
          Iniciar Sesión
        </Link>

        <Link
          to="/register"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Registrarse
        </Link>
      </div>
    </div>
  );
}
